import React, { useContext, useEffect, useState } from "react";
import { Sidelinks } from "../../data/dummy";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { FaRegDotCircle } from "react-icons/fa";
import { BiLogoDigitalocean } from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import logo from "../../image/MicrosoftTeams-image.png";
import onlyLogo from "../../image/onlyLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/sidebarOpenSlice";
import { Divider } from "@mui/material";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(""); // Local state to track active tab

  useEffect(() => {
    // Check the current URL path and set the active tab accordingly
    const currentPath = window.location.pathname;
    setActiveTab(currentPath);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebarOpen.isOpen);
  const handleMouseEnter = () => {
    if (isOpen == false) {
      // dispatch(toggleSidebar());
    }
  };
  const handleMouseLeave = () => {
    if (isOpen == false) {
      // dispatch(toggleSidebar());
    }
  };

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleClick = (link) => {
    setActiveTab(link.link);
    navigate(`${link.link}`);
  };
  console.log("active tab >> ", activeTab);
  const Roles = localStorage.getItem("Role");

  const filteredLinks = Sidelinks.map((item) => {
    return {
      ...item,
      links: item.links.filter((link) => {
        if (link.permission) {
          return link.permission.some(
            (permission) => permission.role === Roles
          );
        } else {
          return true;
        }
      }),
    };
  });

  filteredLinks.forEach((item) => {
    item.links.forEach((link) => {
      console.log(link.title, link.permission);
    });
  });

  return (
    <div className="main-sidebar-container">
      <div onHover={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={isOpen ? "side-header" : "side-header SClosed"}>
          <img onClick={handleToggle} src={isOpen ? logo : onlyLogo} alt="" />
        </div>
        <div
          className={
            isOpen ? "sidebar-links-container" : "sidebar-links-containerClosed"
          }
        >
          {filteredLinks.map((item) => (
            <div key={item.title}>
              <p className={isOpen ? "" : "PClosed"}>
                {isOpen ? (
                  <span className="main-side-title">{item.title} </span>
                ) : (
                  <Divider />
                )}
              </p>

              <ul className="ui-for-links">
                {item.links.map((link) => (
                  <li
                    key={link.id}
                    className={
                      activeTab === link.link
                        ? isOpen
                          ? "li-for-linksActive"
                          : "li-for-linksClosedActive"
                        : isOpen
                        ? "li-for-links"
                        : "li-for-linksClosed"
                    }
                    onClick={() => {
                      handleClick(link);
                    }}
                  >
                    <span
                      className={
                        isOpen
                          ? "li-for-links-icons"
                          : "li-for-links-iconsClosed"
                      }
                    >
                      {link.icon}
                    </span>
                    {isOpen && (
                      <span className="li-for-links-title">{link.title}</span>
                    )}
                    {/* {link.sublinks &&
                      isOpen && ( // Render sublinks if they exist and the sidebar is open
                        <ul>
                          {link.sublinks.map((sublink) => (
                            <li key={sublink.id}>
                              <Link to={sublink.link}>{sublink.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )} */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
// write a code to open the siderbar on
