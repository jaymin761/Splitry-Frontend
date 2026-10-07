import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/_og/render";

export const alt = "Splitry FAQ — answers about splitting bills and settling up";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Frequently asked questions",
    subtitle: "Receipt scanning, debt simplification, settlements, and privacy.",
  });
}
