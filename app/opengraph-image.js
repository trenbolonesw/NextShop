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
      
          <imgg
          src="https://res.cloudinary.com/dciywsh4y/image/upload/v1775356683/heroimg_ulq3ih.png"
        />
      
    ),
    size
  );
}