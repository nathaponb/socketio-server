import Identicon, { IdenticonOptions } from "identicon.js";

/**
 *
 * @param hash string : a random or hash string to generate an Image
 * @param rgbaCol Array<number> : Foreground RGBA color of the Image icon
 */
export default function (
  hash: string | undefined,
  rgbaCol: IdenticonOptions["foreground"]
): string | null {
  if (hash === undefined || rgbaCol === undefined) {
    console.log("null hash");
    return null;
  }
  let options: IdenticonOptions = {
    foreground: rgbaCol, // rgba black
    background: [255, 255, 255, 255], // rgba white
    margin: 0.2, // 20% margin
    size: 420, // 420px square
    format: "png", // use SVG instead of PNG
  };
  let data = new Identicon(hash, options).toString();
  return data;
}
