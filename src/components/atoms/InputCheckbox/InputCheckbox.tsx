import { type VariantProps } from 'class-variance-authority';
import { FaCheck } from "react-icons/fa";
import { inputCheckboxWrapperVariants } from './inputCheckboxWrapperVariants';
import { inputCheckboxVariants } from './inputCheckboxVariants';
import { inputCheckboxIconVariants } from './inputCheckboxIconVariants';

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
Omit<React.ComponentProps<"input">, "size" | "disabled">{}

export default function InputCheckbox({size, disabled, className, ...props}: InputCheckboxProps) {
      return (
            <label className={inputCheckboxWrapperVariants({className})}>
                  <input type="checkbox" className={inputCheckboxVariants({size, disabled})} {...props} />
                   <FaCheck className={inputCheckboxIconVariants({size})}/>
            </label>
      )
}
