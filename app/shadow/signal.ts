/**
 * A single set of squats, as Shadow's pipeline would report it.
 *
 * Every number here is derived with the formulas in the app's algorithm spec
 * (markdown/algorithm.md): angular velocity is rom / concentric duration, the
 * fatigue index is a linear fit through (rep, velocity), estimated 1RM uses
 * Brzycki. Nothing is invented for the page.
 */

export type Rep = {
  n: number;
  /** Range of motion, degrees of knee angle. */
  romDeg: number;
  /** Concentric duration, trough to peak, seconds. */
  concentricS: number;
  /** rom / concentric. The core intensity proxy. */
  velocity: number;
};

export const SET_WEIGHT_KG = 100;

export const REPS: Rep[] = [
  { n: 1, romDeg: 104, concentricS: 0.88, velocity: 118.2 },
  { n: 2, romDeg: 103, concentricS: 0.92, velocity: 112.0 },
  { n: 3, romDeg: 102, concentricS: 0.97, velocity: 105.2 },
  { n: 4, romDeg: 101, concentricS: 1.03, velocity: 98.1 },
  { n: 5, romDeg: 99, concentricS: 1.09, velocity: 90.8 },
  { n: 6, romDeg: 97, concentricS: 1.16, velocity: 83.6 },
  { n: 7, romDeg: 95, concentricS: 1.24, velocity: 76.6 },
  { n: 8, romDeg: 92, concentricS: 1.31, velocity: 70.2 },
];

/** Set-level summary, the numbers compute_set_metrics would return. */
export const SET = {
  reps: REPS.length,
  meanRom: 99.1,
  romCvPct: 4.0,
  meanVelocity: 94.3,
  fatigueIndexPct: 41,
  estimated1rm: 124,
  relativeIntensityPct: 81,
};

// Standing knee angle at the top of a squat.
const TOP_ANGLE = 176;
// Lowering takes a little less time than driving back up.
const ECCENTRIC_RATIO = 0.85;
const LEAD_IN_S = 0.7;
const TAIL_S = 0.9;
const SAMPLES_PER_SECOND = 16;

// Plot bounds, degrees.
const ANGLE_MIN = 58;
const ANGLE_MAX = 186;

export type Span = {
  rep: number;
  x0: number;
  x1: number;
  peakX: number;
  peakY: number;
  troughX: number;
  troughY: number;
};

export type Plot = {
  width: number;
  height: number;
  /** The smoothed angle series as an SVG path. */
  path: string;
  /** Same series closed back to the baseline, for the area fill. */
  area: string;
  spans: Span[];
  durationS: number;
  /** Horizontal gridlines at meaningful angles. */
  ticks: { angle: number; y: number }[];
};

/**
 * Half-cosine between two angles. Approximates what a 5 Hz Butterworth pass
 * leaves behind: the rep waveform, none of the landmark jitter.
 */
function ease(from: number, to: number, p: number) {
  return from + ((to - from) / 2) * (1 - Math.cos(Math.PI * p));
}

export function buildPlot(width = 1000, height = 250): Plot {
  const samples: { t: number; a: number }[] = [];
  let t = 0;

  const leadSteps = Math.round(LEAD_IN_S * SAMPLES_PER_SECOND);
  for (let i = 0; i <= leadSteps; i++) {
    samples.push({ t: (i / SAMPLES_PER_SECOND), a: TOP_ANGLE });
  }
  t = LEAD_IN_S;

  const bounds: { rep: number; start: number; trough: number; end: number; bottom: number }[] = [];

  for (const rep of REPS) {
    const eccentric = rep.concentricS * ECCENTRIC_RATIO;
    const bottom = TOP_ANGLE - rep.romDeg;
    const start = t;

    const eccSteps = Math.max(3, Math.round(eccentric * SAMPLES_PER_SECOND));
    for (let i = 1; i <= eccSteps; i++) {
      const p = i / eccSteps;
      samples.push({ t: start + eccentric * p, a: ease(TOP_ANGLE, bottom, p) });
    }

    const troughT = start + eccentric;
    const concSteps = Math.max(3, Math.round(rep.concentricS * SAMPLES_PER_SECOND));
    for (let i = 1; i <= concSteps; i++) {
      const p = i / concSteps;
      samples.push({ t: troughT + rep.concentricS * p, a: ease(bottom, TOP_ANGLE, p) });
    }

    t = troughT + rep.concentricS;
    bounds.push({ rep: rep.n, start, trough: troughT, end: t, bottom });
  }

  const tailSteps = Math.round(TAIL_S * SAMPLES_PER_SECOND);
  for (let i = 1; i <= tailSteps; i++) {
    samples.push({ t: t + (i / SAMPLES_PER_SECOND), a: TOP_ANGLE });
  }
  const durationS = t + TAIL_S;

  const x = (time: number) => (time / durationS) * width;
  const y = (angle: number) =>
    height - ((angle - ANGLE_MIN) / (ANGLE_MAX - ANGLE_MIN)) * height;

  const points = samples.map((s) => `${x(s.t).toFixed(1)} ${y(s.a).toFixed(1)}`);
  const path = `M ${points.join(" L ")}`;
  const area = `${path} L ${width} ${height} L 0 ${height} Z`;

  const spans: Span[] = bounds.map((b) => ({
    rep: b.rep,
    x0: x(b.start),
    x1: x(b.end),
    peakX: x(b.end),
    peakY: y(TOP_ANGLE),
    troughX: x(b.trough),
    troughY: y(b.bottom),
  }));

  const ticks = [80, 120, 160].map((angle) => ({ angle, y: y(angle) }));

  return { width, height, path, area, spans, durationS, ticks };
}
