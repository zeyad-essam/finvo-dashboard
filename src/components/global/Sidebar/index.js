import React from "react";
import { Link } from "react-router-dom";

import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import styles from "./Sidebar.module.css";

const sideBarColors = {
  sidebar: {
    backgroundColor: "#ffffff",
    color: "#777",
  },
  menu: {
    menuContent: "#fbfcfd",
    icon: "#7a7a7a",
    iconActive: "#436283",
    hover: {
      backgroundColor: "#c5e4ff",
      color: "#44596e",
    },
    disabled: {
      color: "#9fb6cf",
    },
    label: "7a7a7a",
    labelActive: "#436283",
  },
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SideBar = ({
  sidebarIsToggled,
  sidebarIsCollapsed,
  setSidebarIsToggled,
  setSidebarIsBroken,
}) => {
  const menuItemStyles = {
    root: {
      fontSize: "15px",
      fontWeight: 600,
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "8px",
    },
    icon: {
      color: sideBarColors.menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: sideBarColors.menu.disabled.color,
      },
      [`&.${menuClasses.active}`]: {
        color: sideBarColors.menu.iconActive,
      },
    },
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: sideBarColors.menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: "transparent",
        color: sideBarColors.menu.hover.color,
      },
      "&:hover .ps-menu-icon": {
        color: sideBarColors.menu.hover.color,
      },
    },
    label: {
      color: sideBarColors.menu.label,
      [`&.${menuClasses.active}`]: {
        color: sideBarColors.menu.labelActive,
      },
    },
  };

  return (
    <Sidebar
      collapsed={sidebarIsCollapsed}
      toggled={sidebarIsToggled}
      onBackdropClick={() => setSidebarIsToggled(false)}
      onBreakPoint={setSidebarIsBroken}
      breakPoint="991px"
      backgroundColor={hexToRgba(sideBarColors.sidebar.backgroundColor, 1)}
      rootStyles={{
        color: sideBarColors.sidebar.color,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        width: 230,
        minWidth: 230,
      }}
    >
      <div className={styles.sidebar_wrapper}>
        <div className={styles.sibebar_header}>
          <Link to="/">
            <div className={styles.image_wrapper}>
              <img src="/finvo.jpeg" alt="finvo.co" />
            </div>
            {!sidebarIsCollapsed && <span>Finvo</span>}
          </Link>
        </div>
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem
            component={<Link to="/" />}
            icon={<DashboardOutlinedIcon />}
            active={window.location.pathname === "/"}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<MonetizationOnOutlinedIcon />}>Sales</MenuItem>
          <MenuItem icon={<StoreOutlinedIcon />}>Purchases</MenuItem>
          <MenuItem icon={<PaymentsOutlinedIcon />}>Expenses</MenuItem>
          <MenuItem icon={<SettingsSuggestOutlinedIcon />}>Assets</MenuItem>
          <MenuItem icon={<AccountBalanceWalletOutlinedIcon />}>
            Financing
          </MenuItem>
          <MenuItem icon={<ManageAccountsOutlinedIcon />}>Accounts</MenuItem>
          <MenuItem icon={<LocalAtmOutlinedIcon />}>Financials</MenuItem>
          <MenuItem icon={<PersonOutlineOutlinedIcon />}>Admin</MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SideBar;
