import React, { useState, useEffect } from "react";
import "./AdminHeader.css";
import { GoSearch } from "react-icons/go";
import { BsMoonStars } from "react-icons/bs";
import { RiNotification4Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import Dp from "../../../image/Ash-Read.png";
import UserProfilePopup from "../../../components/header/Userprofile";
import Notification from "../../../components/header/Notification";
import AppComponent from "../../../components/header/AppComponenet";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Card, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isNtification, setNotification] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const toggleProfilePopup = () => {
    setNotification(false);
    setProfilePopupOpen(!isProfilePopupOpen);
  };

  const NotificationPop = () => {
    setProfilePopupOpen(false);
    setNotification(!isNtification);
  };

  const fetchEmployeeData = async () => {
    try {
      const url = `http://3.109.153.24:8080/api/v1/auth/users`;
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const searchEmployeeData = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length >= 3) {
      setShowDropdown(true);
      const filtered = data?.filter((item) => {
        const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
        return fullName.includes(newSearchTerm.toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setShowDropdown(false);
      setFilteredData([]);
    }
  };

  const profilePageRedirect = (e) => {
    console.log(e);
    navigate("/profile");
  };

  return (
    <div className={`header-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="for-header-div">
        <div className="left-header">
          <button className="btn btn-search">
            <GoSearch
              style={{
                fontSize: "28px",
                color: "rgba(47, 43, 61, 0.78)",
                background: "none",
              }}
            />
          </button>
          <div className="search-container">
            <input
              onChange={searchEmployeeData}
              type="text"
              className="input-search"
              placeholder="Search"
            />
            <div className="dropdown-container">
              {filteredData?.length > 0 && showDropdown ? (
                <Card className="dropdown">
                  {filteredData?.map((employee, index) => (
                    <div
                      onClick={(e) => profilePageRedirect(e)}
                      key={index}
                      className="employee-name"
                    >
                      {employee.firstName} {employee.lastName}
                    </div>
                  ))}
                </Card>
              ) : (
                searchTerm?.length >= 3 && (
                  <Card className="no-data-available">
                    No Employee Found for {searchTerm}
                  </Card>
                )
              )}
            </div>
          </div>
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
          {isProfilePopupOpen && (
            <UserProfilePopup toggleProfilePopup={toggleProfilePopup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
