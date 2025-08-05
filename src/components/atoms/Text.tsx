import type { createElement, ReactNode, JSX, IntrinsicELements } from "react";

interface TextProps{
      as?: keyof JSX.IntrinsicELements;
      className?: string,
      children?: ReactNode
}

export default function Text({as = "span", className, children, ...props}: TextProps){
      return createElement(
            as,
            {
                  className,
                  ...props
            },
            children
            
      )
}