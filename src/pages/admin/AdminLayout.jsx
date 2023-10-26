import React from "react";
import styled from "./adminLayout.module.css";
import {Outlet}from 'react-router-dom';
import AdminSideBar from './components/AdminSideBar';
import AdminHeader from './components/AdminHeader';
import AdminFooter from './components/AdminFooter';

const AdminLayout = () => {
  return (
    <div className={styled.App}>
      <div className={styled.innerContainer}>
        <div className={styled.sideBar}>
          <AdminSideBar />
        </div>
        <div className={styled.mainSection}>
          <div className={styled.headerSec}>
            <AdminHeader />
          </div>
          <Outlet />
          <div className={styled.footerSection}>
            <AdminFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
