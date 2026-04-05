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
      
          <img
          src="https://res.cloudinary.com/dciywsh4y/image/upload/v1775356122/Group_3_7_h9dbj5.png"
        />
      
    ),
    size
  );
}