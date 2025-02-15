import { BrowserRouter, Routes, Route } from "react-router";
import { SignUp } from "./pages/sign-up";
import { SignIn } from "./pages/sign-in";
import { Dashboard } from "./pages/dashboard";
import { Workspace } from "./pages/workspace";
import SidebarLayout from "./components/global/sidebar-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workspace" element={<Workspace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
