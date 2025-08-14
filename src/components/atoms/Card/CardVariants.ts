import { cva } from "class-variance-authority";

export const cardVariants = cva(`
      rounded border border-solid border-gray-200
      bg-white`,
      {
            variants: {
                  size: {
                        none: "",
                        md: "p-5",
                  }
            },
            defaultVariants: {
                  size: "none"
            },
});