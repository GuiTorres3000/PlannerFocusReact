import { cva } from "class-variance-authority";

export const continerVariants = cva(`mx-auto`, {
      variants: {
            size: {
                  md: "max-w-[31.5rem] px-2"
            }
      },
      defaultVariants: {
            size: "md",
      },
});