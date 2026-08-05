/**
 * The parametric ghost, drawn the way the app draws it.
 *
 * Per the shadow-system spec: size is driven by strength, opacity by
 * consistency, colour by intensity. Intensity lerps from avatarLowIntensity
 * to primary, which is the same ramp intensityColor(score) uses in Flutter.
 */

const LOW_INTENSITY = [26, 58, 107]; // #1A3A6B
const PRIMARY = [58, 123, 213]; // #3A7BD5
const UNFORMED = "#6B7688"; // the shadow, desaturated slate
const EYE = "#0A0D12";

function intensityColor(score: number) {
  const t = Math.min(1, Math.max(0, score / 100));
  const [r, g, b] = LOW_INTENSITY.map((low, i) =>
    Math.round(low + (PRIMARY[i] - low) * t),
  );
  return `rgb(${r} ${g} ${b})`;
}

type GhostProps = {
  /** 0 to 100. Drives the body colour. Ignored when unformed. */
  intensity?: number;
  /** 0 to 100. Drives opacity. */
  consistency?: number;
  /** Rendered width in px. Stands in for strength. */
  size: number;
  /** Draw as the past self: slate, no colour, no glow. */
  unformed?: boolean;
  title?: string;
  className?: string;
};

export default function Ghost({
  intensity = 100,
  consistency = 100,
  size,
  unformed = false,
  title,
  className,
}: GhostProps) {
  const color = unformed ? UNFORMED : intensityColor(intensity);
  const opacity = 0.45 + (Math.min(100, Math.max(0, consistency)) / 100) * 0.55;

  return (
    <svg
      viewBox="0 0 180 192"
      width={size}
      height={(size * 192) / 180}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      style={{ opacity, display: "block", overflow: "visible" }}
    >
      <path
        d="M89.8723 0C40.034 0 0 40.034 0 89.8723V179.745C0 179.745 14.2979 167.489 28.5957 179.745C42.8936 192 42.8936 179.745 57.1915 179.745C71.4894 179.745 71.4894 192 89.8723 192C108.255 192 108.255 179.745 122.553 179.745C136.851 179.745 136.851 192 151.149 179.745C165.447 167.489 179.745 179.745 179.745 179.745V89.8723C179.745 40.034 139.711 0 89.8723 0Z"
        fill={color}
      />
      <circle cx="61.28" cy="89.87" r="16.34" fill={EYE} />
      <circle cx="118.47" cy="89.87" r="16.34" fill={EYE} />
      <circle cx="67.4" cy="83.74" r="4.9" fill={color} opacity={0.6} />
      <circle cx="124.6" cy="83.74" r="4.9" fill={color} opacity={0.6} />
    </svg>
  );
}

/** The wordmark lockup ghost, small and flat. */
export function GhostMark({ size = 22 }: { size?: number }) {
  return <Ghost size={size} intensity={100} consistency={100} />;
}
