import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";
import Text from "./Text";

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
      VariantProps<typeof buttonVariants> { }

export default function Button({ variant, size, disabled, className, children, ...props }: ButtonProps) {
      <button className={buttonVariants({variant, size, disabled, className})} {...props}>
            <Text variant="body-md-bold">
                  {children}
            </Text>
      </button>
}