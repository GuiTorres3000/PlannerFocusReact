import { cva } from "class-variance-authority";

export const buttonVariants = cva(`flex items-center justify-center cursor-pointer
      transition rounded-lg group gap-2`, {
      variants: {
            variant: {
                  none: "",
                  primary: "bg-gray-200 hover:bg-secondary-light",
                  icon_primary: "bg-primary-base/50 text-white hover:bg-primary-base aspect-square p-0 rounded-xl " +
                        "[&_svg]:text-white hover:[&_svg]:text-white/90 [&_svg]:fill-current [&_svg]:stroke-current",
                  icon_secondary: "bg-secondary-base/50 text-white hover:bg-secondary-base aspect-square p-0 rounded-xl " +
                        "[&_svg]:text-white hover:[&_svg]:text-white/90 [&_svg]:fill-current [&_svg]:stroke-current",
            },
            size: {
                  icon: "py-1.5 px-1.5",
                  md: "h-11 py-4 px-4",
            },
            disabled: {
                  true: "opacity-50 pointer-events-none"
            },
      },
      defaultVariants: {
            variant: "primary",
            size: "md",
            disabled: false,
      },
});