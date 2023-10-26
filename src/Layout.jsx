import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { Loading } from "react-loading-dot";

const Layout = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay to represent loading your content
  //   setTimeout(() => {
  //     const tokensort = localStorage.getItem("tokensort");
  //     if (!tokensort) {
  //       navigate("/login");
  //     } else {
  //       setLoading(false); // Set loading to false when your content is ready
  //     }
  //   }, 2000); // Adjust the timeout as needed
  // }, [navigate]);
  return (
    <div className="App">
      {/* {loading ? (
        <Loading background='rgb(115, 103, 240)' />
      ) : ( */}
        <div className="inner-container">
          <div className="side-bar">
            <SideBar />
          </div>
          <div className="main-section">
            <div className="header-sec">
              <Header />
            </div>
            <Outlet />
            <div className="footer-section">
              <Footer />
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Layout;
