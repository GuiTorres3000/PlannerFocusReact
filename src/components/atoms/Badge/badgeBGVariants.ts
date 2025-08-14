import { cva } from "class-variance-authority";

export const badgeBGVariants = cva("inline-flex items-center justify-center rounded-full", {
      variants: {
            variant: {
                  none: "",
                  primary: "bg-primary-light",
                  secondary: "bg-secondary-light",
            },
            size: {
                  sm: "py-0.5 px-2"
            },
      },
      defaultVariants: {
            variant: "primary",
            size: "sm",

      }

})