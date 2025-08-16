
import Card from "../atoms/Card/Card";
import Container from "../atoms/Container/Container";
import InputCheckbox from "../atoms/InputCheckbox/InputCheckbox";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
import { FaTrash, FaPencilAlt, FaUndo, FaCheck } from "react-icons/fa";
import { useState } from "react";
import InputText from "../atoms/InputText/InputText";

export default function TaskItem() {

      const [isEditing, setIsEditing] = useState(false);

      function handleEditTask(){
            setIsEditing(!isEditing)
      }

      return (
            <Card size="md" className="flex items-center gap-3">
                  {isEditing ?
                        <>
                              <InputText className="flex-1"/>
                              <Container as="div" className="flex gap-1">
                                    <Button variant="icon_secondary" size="icon" onClick={handleEditTask}><FaUndo /></Button>
                                    <Button variant="icon_primary" size="icon"><FaCheck /></Button>
                              </Container>
                        </>
                        :
                        <>
                              <InputCheckbox />
                              <Text className="flex-1">Fazer Compras da Semana</Text>
                              <Container as="div" className="flex gap-1">
                                    <Button variant="icon_secondary" size="icon"><FaTrash /></Button>
                                    <Button variant="icon_primary" size="icon" onClick={handleEditTask}><FaPencilAlt /></Button>
                              </Container>
                        </>
                  }
            </Card>
      )
}
