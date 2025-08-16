import { FaTasks } from "react-icons/fa";
import Container from "../atoms/Container/Container";
import Text from "../atoms/Text/Text";

export default function Header() {
      return (
            <Container as="header" className="flex items-center mt-3 md:mt-20 py-2">
                  <Container as="div" className="flex items-center gap-6">
                        <FaTasks className="text-3xl text-secondary-base/80"/>
                        <Text as="h2" variant="header-lg" className="text-secondary-base/80">Todo List</Text>
                  </Container>
            </Container>
      )
}
