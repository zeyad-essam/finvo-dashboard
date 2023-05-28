import { useState } from "react";
import SideBar from "./components/global/Sidebar";
import Topbar from "./components/global/Topbar";
import DashboardPage from "./pages/dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  const [sidebarIsToggled, setSidebarIsToggled] = useState(false);
  const [sidebarIsBroken, setSidebarIsBroken] = useState(false);

  const toggleSidebar = () => {
    setSidebarIsToggled(!sidebarIsToggled);
  };

  console.log(window.location.pathname);

  return (
    <div className="app">
      <SideBar
        sidebarIsToggled={sidebarIsToggled}
        setSidebarIsToggled={setSidebarIsToggled}
        setSidebarIsBroken={setSidebarIsBroken}
      />
      <main>
        <Topbar
          sidebarIsBroken={sidebarIsBroken}
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
