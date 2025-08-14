import Badge from "./components/atoms/Badge/Badge";
import Button from "./components/atoms/Button/Button";
import Container from "./components/atoms/Container/Container";
import InputCheckbox from "./components/atoms/InputCheckbox/InputCheckbox";
import InputText from "./components/atoms/InputText/InputText";
import Skeleton from "./components/atoms/Skeleton/Skeleton";
import Text from "./components/atoms/Text/Text";

export default function App() {

  return (
    <Container>
    <div className="grid gap-3">
      <Text>eaeawe</Text>
      <div>
        <Badge variant="primary" size="sm">2 de 5</Badge>
        <Badge variant="secondary">2 de 5</Badge>
        <Button variant="primary">botao legal</Button>
        <InputText />
        <div>
          <InputCheckbox />
        </div>
        <div className="space-y-6">
        <Skeleton className="h-10"/>
        <Skeleton className="h-2"/>
        <Skeleton className="h-6"/>
        </div>
      </div>
    </div>
    </Container>
  )
}
