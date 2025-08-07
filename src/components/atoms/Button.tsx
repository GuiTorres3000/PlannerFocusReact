import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";
import Text from "./Text";

// Usa todas as props padrões de <button>, exceto "size" e "disabled"
interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
      VariantProps<typeof buttonVariants> { } // Adiciona os variants definidos no botão

export default function Button({ variant, size, disabled, className, children, ...props }: ButtonProps) {
      <button className={buttonVariants({ variant, size, disabled, className })} {...props}>
            <Text variant="body-md-bold">
                  {children}
            </Text>
      </button>
}