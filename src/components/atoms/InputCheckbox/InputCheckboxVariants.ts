import { cva } from "class-variance-authority";

export const inputCheckboxVariants = cva(`
      appearance-none peer flex items-center justify-between
      border-2 border-solid transition overflow-hidden cursor-pointer 
      border-primary-base hover:border-primary-dark hover:bg-primary-dark/20
      checked:border-primary-base checked:bg-primary-base
      group-hover:checked:border-primary-dark group-hover:checked:bg-primary-dark
      `, {
      variants: {
            size: {
                  md: "w-5 h-5 rounded-sm",
            },
            disabled: {
                  true: "pointer-events-none",
            }
      },
      defaultVariants: {
            size: "md",
            disabled: false,
      }
});