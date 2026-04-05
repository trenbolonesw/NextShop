import { ImageResponse } from "next/og";

export const runtime = "edge"; // recommended

export const alt = "NextShop";
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "white",
          fontSize: 64,
          fontWeight: "bold",
        }}
      >
          <img
          src="https://res.cloudinary.com/dciywsh4y/image/upload/v1775353408/Group_3_2_z2picd.png"
          style={{
            
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size
  );
}