import { FLOW } from "../../constants/solution";
import { C, mono } from "../../tokens";

const FlowDiagram = () => {
  return (
    <div
      className="flow-diagram-wrapper"
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 4,
        padding: "36px 28px",
        marginTop: 64,
      }}
    >
      <p
        style={{
          ...mono,
          fontSize: "0.62rem",
          color: C.green,
          letterSpacing: "0.12em",
          marginBottom: 32,
          opacity: 0.7,
        }}
      >
        DATA FLOW
      </p>

      {/* Desktop: horizontal row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          overflowX: "auto",
          paddingBottom: 8,
        }}
      >
        {FLOW.map((step, i) => (
          <div
            key={step.id}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < FLOW.length - 1 ? "1 1 auto" : "0 0 auto",
            }}
          >
            {/* Node */}
            <div
              style={{
                flexShrink: 0,
                padding: "14px 18px",
                border: `1px solid rgba(57,255,106,0.25)`,
                borderRadius: 3,
                textAlign: "center",
                minWidth: 110,
              }}
            >
              <div
                style={{
                  ...mono,
                  fontSize: "0.72rem",
                  color: C.text,
                  letterSpacing: "0.02em",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {step.label}
              </div>
              <div
                style={{
                  ...mono,
                  fontSize: "0.56rem",
                  color: C.muted,
                  marginTop: 6,
                  lineHeight: 1.4,
                }}
              >
                {step.sub}
              </div>
            </div>

            {/* Arrow connector */}
            {i < FLOW.length - 1 && (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  minWidth: 32,
                  padding: "0 4px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: `linear-gradient(90deg, rgba(57,255,106,0.35) 0%, rgba(57,255,106,0.6) 100%)`,
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "4px solid transparent",
                    borderBottom: "4px solid transparent",
                    borderLeft: `6px solid rgba(57,255,106,0.6)`,
                    flexShrink: 0,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .flow-diagram-wrapper { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default FlowDiagram;
