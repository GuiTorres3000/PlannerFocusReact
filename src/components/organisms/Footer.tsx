import { NavLink } from "react-router";
import Container from "../atoms/Container/Container";
import Text from "../atoms/Text/Text";

export default function Footer() {
      return (
            <Container as="footer" className="my-5 md:my-10">
                  <nav className="flex items-center justify-center gap-4">
                        <NavLink to="/">
                              <Text variant="body-sm-bold" className="text-secondary-base/80">Tarefas</Text>
                        </NavLink>
                        <NavLink to="/components">
                              <Text variant="body-sm-bold" className="text-secondary-base/80">Components</Text>
                        </NavLink>
                  </nav>
            </Container>
      )
}
