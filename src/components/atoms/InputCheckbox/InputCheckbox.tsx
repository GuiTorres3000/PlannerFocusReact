import { type VariantProps } from 'class-variance-authority';
import { FaCheck } from "react-icons/fa";
import { inputCheckboxWrapperVariants } from './inputCheckboxWrapperVariants';
import { inputCheckboxVariants } from './inputCheckboxVariants';
import { inputCheckboxIconVariants } from './inputCheckboxIconVariants';
import Skeleton from '../Skeleton/Skeleton';

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
Omit<React.ComponentProps<"input">, "size" | "disabled"> {loading?: boolean}

export default function InputCheckbox({variant, size, disabled, className, loading, ...props}: InputCheckboxProps) {
      if(loading){
            return <Skeleton rounded="sm" className={inputCheckboxVariants({variant: "none", size, disabled, class: "h-5 w-6.5"})} />
      }
      return (
            <label className={inputCheckboxWrapperVariants({className})}>
                  <input type="checkbox" className={inputCheckboxVariants({variant, size, disabled})} {...props} />
                   <FaCheck className={inputCheckboxIconVariants({size})}/>
            </label>
      )
}
