import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../../../components/Logo/Logo";
import CloseArrow from "../../../../assets/svgsComps/CloseArrow";
import DashboardIcon from "../../../../assets/svgsComps/dashboard/Dashboard";
import CourseIcon from "../../../../assets/svgsComps/dashboard/Course";
import ChatIcon from "../../../../assets/svgsComps/dashboard/Chat";
import DollarIcon from "../../../../assets/svgsComps/dashboard/Dollar";
import SettingIcon from "../../../../assets/svgsComps/dashboard/Setting";
import ProfileImg from "../../../../assets/mentorsImgs/profile.png";

export default function Sidebar() {
  const location = useLocation();
  const [isSideOpened, setIsSideOpened] = useState(true);

  function isSideOpenedHandler() {
    setIsSideOpened(!isSideOpened);
  }

  return (
    <aside
      className={`sidebar ${isSideOpened ? "" : "closed"}`}
      style={
        location.pathname.includes("login") ||
        location.pathname.includes("signup")
          ? {
              display: "none",
            }
          : {}
      }
    >
      <header className="d-flex justify-content-between  align-items-center">
        <Logo />
        <i onClick={isSideOpenedHandler} className="open-close-arrow">
          <CloseArrow />
        </i>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/dashboard"} end>
              <i>
                <DashboardIcon />
              </i>
              <span>dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/courses"}>
              <i>
                <CourseIcon />
              </i>
              <span>courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/communication"}>
              <i>
                <ChatIcon />
              </i>
              <span>communication</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/revenue"}>
              <i>
                <DollarIcon />
              </i>
              <span>revenue</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/settings"}>
              <i>
                <SettingIcon />
              </i>
              <span>settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link
        to={"profile"}
        className="footer d-flex align-items-center  flex-wrap gap-2"
      >
        <img src={ProfileImg} alt="profile-img"></img>
        <span className=" text-nowrap navbar-text p-0">Hello, world!</span>
      </Link>
    </aside>
  );
}
