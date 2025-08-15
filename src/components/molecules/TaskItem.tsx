
import Card from "../atoms/Card/Card";
import Container from "../atoms/Container/Container";
import InputCheckbox from "../atoms/InputCheckbox/InputCheckbox";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

export default function TaskItem() {
      return (
            <Card size="md" className="flex items-center gap-3">
                        <InputCheckbox />
                        <Text className="flex-1">Fazer Compras da Semana</Text>
                  <Container as="div" className="flex gap-1">
                        <Button variant="icon_secondary" size="icon"><FaTrash /></Button>
                        <Button variant="icon_primary" size="icon"><FaPencilAlt /></Button>
                  </Container>
            </Card>
      )
}
