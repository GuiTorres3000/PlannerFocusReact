import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/LayoutMain";
import TasksPage from "./components/templates/TasksPage";
import HomePage from "./components/templates/HomePage";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<HomePage />} />
          <Route path="/components" element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
