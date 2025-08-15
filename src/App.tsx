import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/layoutMain";
import PageComponents from "./pages/pageComponents";
import HomePage from "./pages/HomePage";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<HomePage />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
