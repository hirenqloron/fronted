import React from "react";
import "./userprofile.css";
import {FiUserCheck,FiLogOut} from "react-icons/fi"
import {BsPatchExclamation,BsCreditCard} from 'react-icons/bs'
import{BiHelpCircle,BiDollar} from 'react-icons/bi'
import {SlSettings} from 'react-icons/sl'
import {AiOutlineUser} from 'react-icons/ai'
import Dp from "../../image/Ash-Read.png";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
// import LifeBuoy  from "lucide-react"

const UserProfilePopup = ({toggleProfilePopup}) => {
  const navigate =useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('email_add');

    axios.post('http://3.109.153.24:8081/api/logout', null)
      .then(response => {
        console.log('Logged out successfully');
        navigate('/login');
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });

   };

  const handleClick=(link)=>{
    toggleProfilePopup()
navigate(link)
  }
  return (
      <div className="popup-content">
        <div className="user-profile">
          <img src={Dp} alt="img" className="img-dp" />
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-title">Admin</span>
          </div>
        </div>
        <ul className="popup-menu">
          <li onClick={()=>{handleClick("/profile")}}>
          {/* <svg className="pl5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg> */}
           {/* <FiUserCheck/> */}
           
           <AiOutlineUser/>            <span className="menu-text">My Profile</span>
          </li>
          <li onClick={()=>{handleClick("/settings")}}>
            {/* <SettingsIcon className="pl5"/> */}
            <SlSettings/>
            <span className="menu-text">Settings</span>
          </li>
          <li>
            {/* <CreditCardIcon className="pl5" /> */}
            <BsCreditCard/>
            <span className="menu-text">Billing</span>
          </li>
          <li>
          {/* <svg  className="pl5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-life-buoy"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg> */}
            <BiHelpCircle/>
            <span className="menu-text">Help</span>
          </li>
          <li>
          {/* <svg className="pl5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-alert"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg> */}
          <BsPatchExclamation/>
            <span className="menu-text">FAQ</span>
          </li>
          <li>
            {/* <AttachMoneyIcon  className="pl5"/> */}
            <BiDollar/>
            <span className="menu-text">Pricing</span>
          </li>
          <li onClick={handleLogout}>
            {/* <LogoutIcon className="pl5" /> */}
            <FiLogOut/>
            <span className="menu-text">Sign out</span>
          </li>
        </ul>
      </div>
  );
};

export default UserProfilePopup;
