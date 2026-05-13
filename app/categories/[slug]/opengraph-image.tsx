import { ImageResponse } from "next/og";
import { getCategoryBySlug, getCalculatorsByCategory } from "@/data/calculators";
import { categoryOgColors } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return new ImageResponse(
      <div style={{ background: "#0f172a", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontSize: 48 }}>CalcAdvisor</span>
      </div>,
      { width: 1200, height: 630 }
    );
  }

  const colors = categoryOgColors[category.slug] ?? categoryOgColors["financial"];
  const toolCount = getCalculatorsByCategory(category.slug).length;

  return new ImageResponse(
    <div
      style={{
        background: colors.bg,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top: Site name */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            background: colors.accent,
            width: 44,
            height: 44,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>C</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 22, fontWeight: 500 }}>
          CalcAdvisor
        </span>
      </div>

      {/* Middle: Category name */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            borderRadius: 50,
            padding: "6px 18px",
            display: "inline-flex",
            width: "fit-content",
          }}
        >
          <span style={{ color: colors.accent, fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Category
          </span>
        </div>
        <div style={{ color: "#ffffff", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          {category.name}
        </div>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 26, maxWidth: 820, lineHeight: 1.4 }}>
          {category.description}
        </div>
      </div>

      {/* Bottom: Stats + URL */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ background: colors.accent, borderRadius: 50, padding: "8px 20px" }}>
          <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
            {toolCount} free calculators
          </span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>calcadvisor.com</span>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
