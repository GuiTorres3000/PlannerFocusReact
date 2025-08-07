// Importa a função cva que ajuda a criar estilos com variantes
import { cva } from "class-variance-authority";

// Define estilos reutilizáveis para textos
export const textVariants = cva("font-sans text-gray-400", {
  // Aqui definimos os "modos" (ou tipos) que o texto pode ter
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