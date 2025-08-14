import { cva } from "class-variance-authority";

export const inputCheckboxIconVariants = cva(`
      absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer 
      hidden peer-checked:block fill-white      
      `, {
      variants: {
            size: {
                  md: "w-3 h-3"
            },
      },
      defaultVariants: {
            size: "md",
      }
});
