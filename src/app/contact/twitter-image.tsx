import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/_og/render";

export const alt = "Contact Splitry support";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "We'd love to hear from you",
    subtitle: "Questions, feedback, or support — the Splitry team is here to help.",
  });
}
