import { createNormalizer } from "@zag-js/types";
import { isString } from "@zag-js/utils";

// export type PropTypes = Marko.NativeTags & {
//   element: Marko.Input<any>;
//   style: Marko.Input<any>["style"];
// };

export type PropTypes = Marko.Input<any>;

const eventMap: Record<string, string> = {
  className: "class",
  defaultChecked: "checked",
  defaultValue: "value",
  htmlFor: "for",
  onBlur: "onFocusout",
  // onChange: "onInput",
  onCompositionEnd: "onCompositionend",
  onCompositionStart: "onCompositionstart",
  onContextMenu: "onContextmenu",
  onDoubleClick: "onDblclick",
  onDragStart: "onDragstart",
  onFocus: "onFocusin",
  onKeyDown: "onKeydown",
  onKeyUp: "onKeyup",
  onPointerCancel: "onPointercancel",
  onPointerDown: "onPointerdown",
  onPointerEnter: "onPointerenter",
  onPointerLeave: "onPointerleave",
  onPointerMove: "onPointermove",
  onPointerUp: "onPointerup",
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

  return normalized;
});
