import { type VariantProps } from "class-variance-authority"
import { createElement } from "react";
import { CardVariants } from "./CardVariants";


interface CardProps extends VariantProps<typeof CardVariants>,
      React.ComponentProps<"div">{
            as?: keyof React.JSX.IntrinsicElements;
      }


export default function Card({as = "div", size, children, className, ...props}: CardProps) {
  return createElement(
      as,
      {
            className: CardVariants({size, className}),
            ...props
      },
      children,
  )
}
