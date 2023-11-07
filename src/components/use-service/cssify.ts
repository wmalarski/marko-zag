import { isNumber, isString } from "@zag-js/utils";
import hyphenate from "hyphenate-style-name";

const format = (v: string) => (v.startsWith("--") ? v : hyphenate(v));

type StyleObject = Record<string, any>;

// https://github.com/robinweser/css-in-js-utils
export const cssify = (style: StyleObject): StyleObject => {
  let css: Record<string, string | number> = {};
  for (const property in style) {
    const value = style[property];
    if (!isString(value) && !isNumber(value)) continue;
    css[format(property)] = value;
  }

  return css;
};
