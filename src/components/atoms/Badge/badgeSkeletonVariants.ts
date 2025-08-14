import { cva } from "class-variance-authority";

export const badgeSkeletonVariants = cva("", {
      variants: {
            size: {
                  sm: "w-6 h-6"
            },
      },
      defaultVariants: {
            size: "sm",
      }
})