import { cva } from "class-variance-authority";

export const badgeTextVariants = cva("", {
      variants: {
            variant: {
                  none: "",
                  primary: "text-primary-dark",
                  secondary: "text-secondary-dark",
            },
            defaultVariants: {
                  variants: "primary",
            }
      }
})