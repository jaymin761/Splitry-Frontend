import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/_og/render";

export const alt = "About Splitry — our mission and story";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Reinventing how friends split expenses",
    subtitle: "Why we built Splitry and the values behind it.",
  });
}
