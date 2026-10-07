import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/_og/render";

export const alt = "Splitry Terms of Service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Terms of Service",
    subtitle: "The rules for using Splitry's apps and web services.",
  });
}
