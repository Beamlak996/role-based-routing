import { useSidebarToggle } from "../../hooks/use-sidebar-toggle";
import { useStore } from "../../hooks/use-store";
import { cn } from "../../lib/utils";
import { ThemeProvider } from "../providers/theme-provider";
import { Sidebar } from "./sidebar";
import { Outlet, useLocation } from "react-router-dom"; 

export default function DefaultPanelLayout() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const { pathname } = useLocation();

  const login = pathname === "/login";

  if (!sidebar || login) {
    return <Outlet />; 
  }

  return (
    <ThemeProvider>
      <Sidebar />
      <main
        className={cn(
          "min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
