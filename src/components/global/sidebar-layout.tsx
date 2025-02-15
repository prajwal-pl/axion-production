import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { Outlet, useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
type Props = {};

const SidebarLayout = (props: Props) => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  if (!isSignedIn) {
    navigate("/sign-in");
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SidebarLayout;
