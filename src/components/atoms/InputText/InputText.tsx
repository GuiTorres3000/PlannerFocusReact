import { cx, type VariantProps } from "class-variance-authority";
import { inputTextVariants } from "./inputTextVariants";
import { textVariants } from "../Text/textVariants";

// Define as props que o componente Text pode receber
interface InputTextProps extends VariantProps<typeof inputTextVariants>,
Omit<React.ComponentProps<"input">, "size" | "disabled">{}

export default function InputText({size, disabled, className, ...props}: InputTextProps){
      return <input className={cx(
            inputTextVariants({ size, disabled }),
            textVariants(),
            className
      )} 
      {...props}
      />;
}