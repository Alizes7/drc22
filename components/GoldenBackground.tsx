"use client";

interface GoldenBackgroundProps {
  variant?: "default" | "warm" | "cool" | "intense";
  showOrbs?: boolean;
  showLines?: boolean;
  showGrid?: boolean;
}

export default function GoldenBackground({
  variant = "default",
  showOrbs = true,
  showLines = true,
  showGrid = false,
}: GoldenBackgroundProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "warm":
        return {
          background:
            "linear-gradient(180deg, #0B0A08 0%, #0D0C09 30%, #0B0A08 70%, #08080A 100%)",
        };
      case "cool":
        return {
          background: "linear-gradient(180deg, #08080A 0%, #0B0B0D 40%, #08080A 100%)",
        };
      case "intense":
        return {
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,165,115,0.10) 0%, transparent 50%), linear-gradient(180deg, #0B0A09 0%, #08080A 50%, #0B0A09 100%)",
        };
      default:
        return {
          background: "linear-gradient(180deg, #08080A 0%, #0B0B0D 50%, #08080A 100%)",
        };
    }
  };

  return (
    <>
      <div className="absolute inset-0 pointer-events-none" style={getVariantStyles()} aria-hidden="true" />

      {/* faint laid-paper grain across every section for a tactile, printed feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {showOrbs && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-[8%] right-[8%] w-[520px] h-[520px] rounded-full opacity-[0.10]"
            style={{ background: "radial-gradient(circle, rgba(201,165,115,0.5) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[8%] left-[4%] w-[420px] h-[420px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, rgba(201,165,115,0.45) 0%, transparent 70%)" }}
          />
        </div>
      )}

      {showLines && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-[100px] -left-[100px] w-[400px] h-px origin-left rotate-[35deg]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.14), transparent)" }}
          />
          <div
            className="absolute -bottom-[100px] -right-[100px] w-[400px] h-px origin-right rotate-[35deg]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.11), transparent)" }}
          />
        </div>
      )}

      {showGrid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,165,115,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,115,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-brass/[0.08]" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-brass/[0.08]" />
      </div>
    </>
  );
}
