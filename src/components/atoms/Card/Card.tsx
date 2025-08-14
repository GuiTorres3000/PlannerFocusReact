import { type VariantProps } from "class-variance-authority"
import { createElement } from "react";
import { cardVariants } from "./cardVariants";


interface CardProps extends VariantProps<typeof cardVariants>,
      React.ComponentProps<"div"> {
      as?: keyof React.JSX.IntrinsicElements;
}


export default function Card({ as = "div", size, children, className, ...props }: CardProps) {
      return createElement(
            as,
            {
                  className: cardVariants({ size, className }),
                  ...props
            },
            children,
      )
}
