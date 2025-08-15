import { FaTasks } from "react-icons/fa";
import Container from "../atoms/Container/Container";

export default function Header() {
      return (
            <Container as="header" className="mt-3 md:mt-20 bg-primary-light">
                  <FaTasks />
            </Container>
      )
}
