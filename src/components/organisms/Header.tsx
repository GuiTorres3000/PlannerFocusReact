import { FaTasks } from "react-icons/fa";
import Container from "../atoms/Container/Container";
import Text from "../atoms/Text/Text";

export default function Header() {
      return (
            <Container as="header" className="flex items-center mt-3 md:mt-20 bg-primary-light">
                  <Container as="div" className="flex items-center gap-6">
                        <FaTasks />
                        <Text as="h2" >Todo List</Text>
                  </Container>
            </Container>
      )
}
