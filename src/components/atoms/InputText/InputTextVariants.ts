import { cva } from "class-variance-authority";

export const inputTextVariants = cva(`border-b border-solid border-gray-200 focus:border-secondary-base
    bg-transparent outline-none`, {
    variants: {
          size: {
                "md": "pb- px-2",
          },
          disabled: {
                true: "pointer-events-none opacity-50",
          }
    },
    defaultVariants: {
          size: "md",
          disabled: false,
    }
});