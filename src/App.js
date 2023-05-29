import { useEffect, useState } from "react";
import SideBar from "./components/global/Sidebar";
import Topbar from "./components/global/Topbar";
import DashboardPage from "./pages/dashboard";

import { useMediaQuery } from "@mui/material";

import { Routes, Route } from "react-router-dom";

function App() {
  const [sidebarIsToggled, setSidebarIsToggled] = useState(false);
  const [sidebarIsBroken, setSidebarIsBroken] = useState(false);
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(true);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleSidebarCollapse = () => {
    setSidebarIsCollapsed(!sidebarIsCollapsed);
  };

  const toggleSidebar = () => {
    setSidebarIsToggled(!sidebarIsToggled);
  };

  useEffect(() => {
    if (sidebarIsToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [sidebarIsToggled]);

  return (
    <div className="app">
      <SideBar
        sidebarIsToggled={sidebarIsToggled}
        sidebarIsCollapsed={sidebarIsCollapsed && !isMobile}
        setSidebarIsToggled={setSidebarIsToggled}
        setSidebarIsBroken={setSidebarIsBroken}
      />
      <main>
        <Topbar
          sidebarIsBroken={sidebarIsBroken}
          toggleSidebarCollapse={toggleSidebarCollapse}
          toggleSidebar={toggleSidebar}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
