import { BrowserRouter, Routes, Route } from "react-router";
import { SignUp } from "./pages/sign-up";
import { SignIn } from "./pages/sign-in";
import { Dashboard } from "./pages/dashboard";
import { Workspace } from "./pages/workspace";
import SidebarLayout from "./components/global/sidebar-layout";
import Editor from "./pages/editor";
import Settings from "./pages/settings";
import History from "./pages/history";
import Community from "./pages/community";
import Favorites from "./pages/favorites";
import YourProjects from "./pages/your-projects";
import Billing from "./pages/billing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<SidebarLayout />}>
          <Route path="/editor" element={<Editor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/your-projects" element={<YourProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
