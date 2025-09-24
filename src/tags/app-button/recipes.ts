import type { VariantProps } from "class-variance-authority";
import { twCva } from "../../utils/twCva";

export const buttonClass = twCva("button", {
  defaultVariants: { variant: "solid", size: "md" },
  variants: {
    variant: {
      solid: "button--variant_solid",
      outline: "button--variant_outline",
      ghost: "button--variant_ghost",
      link: "button--variant_link",
      subtle: "button--variant_subtle",
    },
    size: {
      xs: "button--size_xs",
      sm: "button--size_sm",
      md: "button--size_md",
      lg: "button--size_lg",
      xl: "button--size_xl",
      "2xl": "button--size_2xl",
    },
  },
});

export type ButtonClassProps = VariantProps<typeof buttonClass>;
