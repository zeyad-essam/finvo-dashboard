import React from "react";

import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import styles from "./Topbar.module.css";

const Topbar = ({ toggleSidebar, toggleSidebarCollapse, sidebarIsBroken }) => {
  const searchFormSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.top_bar}>
      {sidebarIsBroken ? (
        <div className={styles.toggle_button}>
          <IconButton
            color="#000"
            onClick={toggleSidebar}
            style={{ padding: "5px" }}
          >
            <MenuIcon style={{ color: "#000", fontSize: 28 }} />
          </IconButton>
        </div>
      ) : (
        <div className={styles.toggle_button}>
          <IconButton
            color="#000"
            onClick={toggleSidebarCollapse}
            style={{ padding: "5px" }}
          >
            <MenuIcon style={{ color: "#000", fontSize: 28 }} />
          </IconButton>
        </div>
      )}
      <div className={styles.search_input}>
        <form onSubmit={searchFormSubmitHandler}>
          <input type="text" placeholder="Search" />
          <IconButton type="submit" size="small">
            <SearchOutlinedIcon />
          </IconButton>
        </form>
      </div>
      <div className={styles.top_bar_actions}>
        <div className={styles.top_bar_action}>
          <i>
            <FileDownloadOutlinedIcon />
          </i>
          <span>Download</span>
        </div>
        <div className={styles.top_bar_action}>
          <i>
            <ReplyOutlinedIcon />
          </i>
          <span>Share</span>
        </div>
        <div className={styles.top_bar_action}>
          <i>
            <ChatBubbleOutlineOutlinedIcon />
          </i>
          <span>Comments</span>
        </div>
        <div className={styles.avatar}>
          <img src="/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
