import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";

// Usa todas as props padrões de <button>, exceto "size" e "disabled"
interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
      VariantProps<typeof buttonVariants> { loading?: boolean } // Adiciona os variants definidos no botão

export default function Button({ variant, size, disabled, className, children, loading, ...props }: ButtonProps) {
      if (loading) {
            return (
                  <Skeleton className={buttonVariants({ variant:"none", size, className }) + " w-24 h-4 inline-flex cursor-default pointer-events-none"} />
            );
      }
      return (
            <button className={buttonVariants({ variant, size, disabled, className })} {...props}>
                  <Text variant="body-md-bold">
                        {children}
                  </Text>
            </button>
      );
}