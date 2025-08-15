import { Outlet } from "react-router";
import Container from "../components/atoms/Container/Container";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export default function LayoutMain() {
      return (
            <>
                  <Header />
                  <Container as="main" className="mt-4 md:mt-8">
                        <Outlet/>
                  </Container>
                  <Footer/>
            </>
      )
}
