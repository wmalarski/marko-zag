import { createNormalizer } from "@zag-js/types";
import { isString } from "@zag-js/utils";

export type PropTypes = Marko.NativeTags & {
  element: Marko.Input<any>;
  style: Marko.Input<any>["style"];
};

const eventMap: Record<string, string> = {
  onFocus: "onFocusin",
  onBlur: "onFocusout",
  onDoubleClick: "onDblclick",
  onChange: "onInput",
  defaultChecked: "checked",
  defaultValue: "value",
  htmlFor: "for",
  className: "class",
};

function toMarkoProp(prop: string) {
  return prop in eventMap ? eventMap[prop] : prop;
}

type Dict = Record<string, any>;

export const normalizeProps = createNormalizer<PropTypes>((props: Dict) => {
  const normalized: Dict = {};

  for (const key in props) {
    const value = props[key];

    if (key === "children") {
      if (isString(value)) {
        normalized["textContent"] = value;
      }
      continue;
    }

    normalized[toMarkoProp(key)] = value;
  }

  console.log({
    normalized,
    props,
  });

  return normalized;
});
