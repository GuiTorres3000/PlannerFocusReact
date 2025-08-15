import { cva } from "class-variance-authority";

export const skeletonVariants = cva(`
      animate-pulse bg-gray-200 pointer-events-none `,
      {
            variants: {
                  rounded: {
                        sm: "rounded-sm",
                        lg: "rounded-lg",
                        full: "rounded-full"
                  }
            },
            defaultVariants: {
                  rounded: "lg"
            }
});