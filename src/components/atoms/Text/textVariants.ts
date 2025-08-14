import { cva } from "class-variance-authority";

// Define estilos reutilizáveis para textos
// Pacote class-variance-authority serve para gerar strings de classes CSS dinamicamente
export const textVariants = cva("font-sans text-gray-400", {
      variants: {
            variant: {
                  "body-sm-bold": "text-sm leading-5 font-semibold",
                  "body-md": "text-base leading-6 font-normal",
                  "body-md-bold": "text-base leading-6 font-semibold",
            }
      },
      defaultVariants: {
            variant: "body-md"
      }
});