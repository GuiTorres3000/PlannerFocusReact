import type { VariantProps } from "class-variance-authority";
import { createElement } from "react";
import { continerVariants } from "./ContainerVariants";


interface ContainerProps extends VariantProps<typeof continerVariants>,
      React.ComponentProps<"div"> {
      as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
      as = "div",
      children,
      className,
      ...props
}: ContainerProps) {
      return createElement(
            as,
            {
                  className: continerVariants({size: "md", className}),
                  ...props,
            },
            children,
      )
}
