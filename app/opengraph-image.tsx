import { ImageResponse } from "next/og";

export const alt = "OBGYNBillingPro — OB/GYN medical billing services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1A2B3C", padding: 72, color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 16, background: "#0E7C7B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, fontWeight: 700 }}>+</div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            OBGYNBilling<span style={{ color: "#5FD1CF" }}>Pro</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>OB/GYN Medical Billing &amp; Revenue Cycle Management</div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#C9E7E6" }}>8+ years of experience · Free billing audit on WhatsApp</div>
        </div>
      </div>
    ),
    size
  );
}
