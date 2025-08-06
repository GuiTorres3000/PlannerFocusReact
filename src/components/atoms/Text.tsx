import { createElement, type ReactNode, type JSX } from "react";
import { type VariantProps } from "class-variance-authority";
import { textVariants } from "./textVariants";

interface TextProps extends VariantProps<typeof textVariants>{
      // Qualquer chave de IntrisicElements (que mapeia todas tags HTML para tipo React)
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      // ReactNode representa qualquer coisa que React possa renderizar
      children?: ReactNode;
}

export default function Text({as = "span", variant, className, children, ...props}: TextProps){
      return createElement(
            as,
            {
                  className: textVariants({variant, className}),
                  ...props
            },
            children
            
      )
}