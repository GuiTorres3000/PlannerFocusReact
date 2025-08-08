import { createElement } from "react";
import { type VariantProps } from "class-variance-authority";
import type { inputTextVariants } from "./InputTextVariants";

// Define as props que o componente Text pode receber
interface InputTextProps extends VariantProps<typeof inputTextVariants>,
Omit<React.ComponentProps<"input">, "size">{}

export default function InputText({}: InputTextProps){
      return createElement(

            
      )
}