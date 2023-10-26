import React, { useState, useEffect } from "react";
import "./header.css";
import { GoSearch } from "react-icons/go";
import { BsMoonStars } from "react-icons/bs";
import { RiNotification4Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import Dp from "../../image/Ash-Read.png";
import UserProfilePopup from "./Userprofile";
import Notification from "./Notification";
import AppComponent from "./AppComponenet";
import seetingIcon from '../../svgIcons/settingIcon.svg'

const Header = () => {
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isNtification, setNotification] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleProfilePopup = () => {
    setNotification(false);
    setProfilePopupOpen(!isProfilePopupOpen);
  };

  const NotificationPop = () => {
    setProfilePopupOpen(false)
    setNotification(!isNtification);
  };

  return (
    <div className={`header-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="for-header-div">
      <div className="logoText">
            <h3>QLORON PVT LTD</h3> <img className="iconSetting" src={seetingIcon} alt="setting Icon"/>
          </div>
        <div className="searchBar-header">
        
          <button className="btn btn-search">
            <GoSearch
              style={{
                fontSize: "28px",
                color: "rgba(47, 43, 61, 0.78)",
                background: "none",
              }}
            />
          </button>
          <input type="text" className="input-search" placeholder="Search " />
        </div>
        <div className="right-header">
          <div className="icons">
            <span className="icons-right-header">
              <RxDashboard
                style={{
                  fontSize: "24px",
                  color: "rgba(47, 43, 61, 0.78)",
                  lineHeight: "2px",
                }}
              />
            </span>
            <span className="icons-right-header">
              <BsMoonStars
                style={{ fontSize: "24px", color: "rgba(47, 43, 61, 0.78)" }}
                onClick={toggleDarkMode}
              />
            </span>
            <span className="icons-right-header">
              <RiNotification4Line
                style={{ fontSize: "24px", color: "rgba(47, 43, 61, 0.78)" }}
                onClick={NotificationPop}
              />
              <span className="notification-circle">
                {" "}
                {isNtification && <Notification />}
              </span>
            </span>
          </div>
          <div className="img-dp-section">
            <img
              src={Dp}
              alt="img"
              className="img-dp"
              onClick={toggleProfilePopup}
            />
          </div>
          {isProfilePopupOpen && <UserProfilePopup toggleProfilePopup={toggleProfilePopup} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
