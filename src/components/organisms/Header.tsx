import { FaTasks } from "react-icons/fa";
import Container from "../atoms/Container/Container";
import Text from "../atoms/Text/Text";

export default function Header() {
      return (
            <Container as="header" className="flex items-center mt-3 md:mt-20 py-2">
                  <Container as="div" className="flex items-center gap-6">
                        <FaTasks className="text-3xl text-primary-base/85"/>
                        <Text as="h2" variant="header-lg" className="text-primary-base">Todo PlannerFocus</Text>
                  </Container>
            </Container>
      )
}
