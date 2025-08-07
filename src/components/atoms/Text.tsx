import { createElement, type ReactNode, type JSX } from "react";
// Importa tipos da biblioteca de variantes
import { type VariantProps } from "class-variance-authority";
// Importa os estilos de texto
import { textVariants } from "./textVariants";

// Define as props que o componente Text pode receber
interface TextProps extends VariantProps<typeof textVariants>{
      // Qualquer chave de IntrisicElements (que mapeia todas tags HTML para tipo React)
      as?: keyof JSX.IntrinsicElements;
      // Permite passar classes adicionais
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