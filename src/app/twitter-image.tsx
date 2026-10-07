import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/_og/render";

export const alt = "Splitry — split expenses with friends the smart way";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Split expenses the smart way",
    subtitle: "Track, split, and settle shared expenses with friends, roommates, and groups.",
  });
}
