import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  FolderGit2,
  Frame,
  GalleryVerticalEnd,
  History,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Star,
  Users,
  Wallet,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const pathname = window.location.pathname;

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: pathname === "/dashboard",
    },
    {
      title: "Workspace",
      url: "/workspace",
      icon: SquareTerminal,
      isActive: pathname === "/workspace",
      // items: [
      //   {
      //     title: "Teams",
      //     url: "/workspace",
      //   },
      //   {
      //     title: "Favorites",
      //     url: "/workspace/favorites",
      //   },
      //   {
      //     title: "History",
      //     url: "/workspace/history",
      //   },
      // ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: pathname === "/settings",
      // items: [
      //   {
      //     title: "General",
      //     url: "settings/general",
      //   },
      //   {
      //     title: "Team",
      //     url: "settings/team",
      //   },
      //   {
      //     title: "Billing",
      //     url: "settings/billing",
      //   },
      // ],
    },
    {
      title: "History",
      url: "/history",
      icon: History,
    },
    {
      title: "Billing",
      url: "/billing",
      icon: Wallet,
    },
  ],
  projects: [
    {
      name: "Community",
      url: "/projects/community",
      icon: Users,
    },
    {
      name: "Favorites",
      url: "/projects/favorites",
      icon: Star,
    },
    {
      name: "Your Projects",
      url: "/projects/your-projects",
      icon: FolderGit2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
