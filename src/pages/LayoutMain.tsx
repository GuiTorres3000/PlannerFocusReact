import { NavLink, Outlet } from "react-router";
import Container from "../components/atoms/Container/Container";
import Text from "../components/atoms/Text/Text";

export default function LayoutMain() {
      return (
            <>
                  <Container as="header" className="mt-3 md:mt-20 bg-primary-light">
                        Header
                  </Container>
                  <Container as="main" className="mt-4 md:mt-8 bg-primary-light/30">
                        <Outlet/>
                  </Container>
                  <Container as="footer"className="my-5 md:my-10 bg-primary-light">
                        <nav className="flex items-center justify-center gap-4">
                              <NavLink to="/">
                                    <Text variant="body-sm-bold" className="text-gray-300">Tarefas</Text>
                              </NavLink>
                              <NavLink to="/components">
                                    <Text variant="body-sm-bold" className="text-gray-300">Components</Text>
                              </NavLink>
                        </nav>
                  </Container>
            </>
      )
}
