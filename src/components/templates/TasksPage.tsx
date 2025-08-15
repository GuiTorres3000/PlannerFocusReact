import Text from "../atoms/Text/Text";
import Badge from "../atoms/Badge/Badge";
import Button from "../atoms/Button/Button";
import Container from "../atoms/Container/Container";
import InputCheckbox from "../atoms/InputCheckbox/InputCheckbox";
import InputText from "../atoms/InputText/InputText";
import Skeleton from "../atoms/Skeleton/Skeleton";
import { FaAward } from "react-icons/fa";

export default function TasksPage() {

      return (
            <Container>
                  <div className="grid gap-3">
                        <Text>eaeawe</Text>
                        <div>
                              <div className="my-20 flex gap-1">
                                    <Badge variant="primary" size="sm">2 de 5</Badge>
                                    <Badge loading></Badge>
                                    <Badge variant="secondary">2 de 5</Badge>

                              </div>
                              <div>
                                    <Button variant="primary">botao legal</Button>
                                    <Button variant="primary" loading>botao legal</Button>
                                    <Button variant="icon" size="icon"><FaAward className="w-6 h-6" /></Button>
                                    <InputText />
                              </div>
                              <div>
                                    <InputCheckbox loading />
                                    <InputCheckbox />
                              </div>
                              <div className="space-y-6">
                                    <Skeleton className="h-10" />
                                    <Skeleton className="h-2" />
                                    <Skeleton className="h-6" />
                              </div>
                        </div>
                  </div>
            </Container>
      )
}