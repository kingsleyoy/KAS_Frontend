// Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaHome, FaChartLine, FaBookOpen } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogOut } from "../redux/Reducers";

const Sidebar = ({ children }) => {
  const [home, setHome] = useState(true);
  const [profile, setProfile] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHome = () => {
    setDashboard(false);
    setProfile(false);
    setHome(true);
  };

  const handleProfile = () => {
    setDashboard(false);
    setProfile(true);
    setHome(false);
  };

  const handleDashboard = () => {
    setDashboard(true);
    setProfile(false);
    setHome(false);
  };
  const navData = [
    {
      key: 10,
      title: "Home",
      link: "/",
      icon: <FaHome />,
      fntitle: home,
      fn: handleHome,
    },
    {
      key: 20,
      title: "Dashboard",
      link: "/dashboard",
      icon: <FaChartLine />,
      fntitle: dashboard,
      fn: handleDashboard,
    },
    {
      key: 30,
      title: "Profile",
      link: "/profile",
      icon: <BsPersonCircle />,
      fntitle: profile,
      fn: handleProfile,
    },
  ];

  const handleLogOut = () => {
    navigate("/");
    dispatch(setLogOut());
  };

  return (
    <div className=" h-screen">
      <div className="h-full">
        <div className="flex h-full ">
          <aside className=" w-1/5 md:w-1/4 bg-projBlue text-textWhite px-4 ">
            <div className=" mb-6 pt-3 flex items-center justify-center md:justify-start ">
              <span className="pr-3 text-textOrange md:text-textWhite text-2xl">
                <FaBookOpen />
              </span>
              <h2 className=" text-2xl font-semibold tracking-wide hidden md:block">
                King<span className=" text-textOrange">sley</span>
              </h2>
            </div>
            <nav className="sidebar-nav ">
              <ul>
                {navData.map((data) => (
                  <Link
                    to={data.link}
                    key={data.key}
                    onClick={data.fn}
                    className=" mb-1"
                  >
                    <li
                      className={`flex items-center justify-center ${
                        data.fntitle && "bg-projGrey text-textOrange"
                      } md:justify-start px-2 py-3 hover:bg-projGrey hover:text-textBlack mb-1 transition-all duration-300`}
                    >
                      <span className=" md:pr-3 text-xl md:text-base">
                        {data.icon}
                      </span>
                      <Link
                        to={data.link}
                        className=" font-semibold hidden md:block"
                      >
                        {data.title}
                      </Link>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
            <div className=" flex items-center justify-center md:justify-start pt-8">
              <span
                className="pr-3 text-xl md:text-xl text-textOrange font-bold"
                onClick={handleLogOut}
              >
                <BiLogOutCircle className=" font-bold" />
              </span>
              <span className=" hidden md:block" onClick={handleLogOut}>
                Log out
              </span>
            </div>
          </aside>
          <main className="w-full overflow-x-hidden ">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
