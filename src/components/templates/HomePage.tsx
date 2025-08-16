import Container from "../atoms/Container/Container";
import Text from "../atoms/Text/Text";


export default function HomePage() {
  return (
    <Container as="div" className="flex">
       <Text as="p" className="text-muted-foreground text-center">
        Uma TodoList otimizada <strong>CVA</strong> class-variance-authority{" "} 
        <strong>localStorage</strong>, <strong>hooks customizados</strong> e{" "}
        <strong>React Router</strong> e <strong>imitação de HTTP</strong> com Promisses para estados de carregamento.
      </Text>
    </Container>
  )
}
