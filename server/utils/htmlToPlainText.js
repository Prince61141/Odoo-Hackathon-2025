import { htmlToText } from "html-to-text";

export function htmlToPlainText(html) {
  return htmlToText(html, { wordwrap: false });
}
