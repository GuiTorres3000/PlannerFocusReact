import { cva } from "class-variance-authority";

export const badgeTextVariants = cva("", {
      variants: {
            variant: {
                  primary: "text-primary-dark",
                  secondary: "text-secondary-dark",
            },
            defaultVariants: {
                  variants: "primary",
            }
      }
})