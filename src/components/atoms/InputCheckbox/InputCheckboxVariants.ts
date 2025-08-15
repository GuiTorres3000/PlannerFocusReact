import { cva } from "class-variance-authority";

export const inputCheckboxVariants = cva(`
      appearance-none peer flex items-center justify-between
      transition overflow-hidden cursor-pointer
      `, {
      variants: {
            variant: {
                  none: "",
                  default: `border-2 border-solid
                  border-primary-base hover:border-primary-dark hover:bg-primary-dark/20
                  checked:border-primary-base checked:bg-primary-base
                  group-hover:checked:border-primary-dark group-hover:checked:bg-primary-dark`,
            },
            size: {
                  md: "w-5 h-5 rounded-sm",
            },
            disabled: {
                  true: "pointer-events-none",
            }
      },
      defaultVariants: {
            variant: "default",
            size: "md",
            disabled: false,
      }
});