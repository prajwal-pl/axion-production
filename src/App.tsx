import { BrowserRouter, Routes, Route } from "react-router";
import { SignUp } from "./pages/sign-up";
import { SignIn } from "./pages/sign-in";
import { Dashboard } from "./pages/dashboard";
import { Workspace } from "./pages/workspace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
