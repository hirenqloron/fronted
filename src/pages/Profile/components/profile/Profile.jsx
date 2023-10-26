import React, { useState } from "react";
import img from "../../../../image/img.jpg";
import { Card } from "@mui/material";
import styles from "./profile.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";

import { IoMdCall } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { AiOutlineIdcard } from "react-icons/ai";
import Divider from "@mui/material/Divider";

const Profile = ({ handleRedirection ,componentName}) => {

  return (
    <div className={styles.profileMain}>
      <img className={styles.profileImg} alt="photo" src={img} />
      <Card className={styles.card}>
        <div className={styles.name}>
          <h2>James Ferguison</h2>
          <GoDotFill color="green" />
        </div>
        <div className={styles.contactInfo}>
          <span>
            <HiOutlineLocationMarker />
            <h5>location</h5>
          </span>
          <span>
            <FiMail />
            <h5>mail@gmail.com</h5>
          </span>
          <span>
            <IoMdCall />
            <h5>99991237</h5>
          </span>
          <span>
            <AiOutlineIdcard />
            <h5>ID Card</h5>
          </span>
        </div>
        <Divider />
        <div className={styles.companyInfo}>
          <span>
            <h5>JOB TITLE</h5>
            <h4>Developer</h4>
          </span>
          <span>
            <h5> DEPARTMENT</h5>
            <h4>Software Development</h4>
          </span>
          <span>
            <h5> BUSINESS UNIT</h5>
            <h4>Sortbox</h4>
          </span>
          <span>
            <h5>REPORTING TO</h5>
            <h4>Manager</h4>
          </span>
          <span>
            <h5>EMP NO</h5>
            <h4>12345</h4>
          </span>
        </div>
        <Divider />
        <div className={styles.redirectionDiv}>
          <span name='about' onClick={() => {
            handleRedirection('about');
            
          }}
            className={componentName === 'about' ? styles.activeButton1  : styles.Button1}>
            <h5>ABOUT</h5>
          </span>
          <span name='user' onClick={() => {
            handleRedirection('user');
           
          }}
            className={componentName === 'user' ? styles.activeButton1 : styles.Button1}>
            <h5> PROFILE</h5>
          </span>
          <span name='job' onClick={() => {handleRedirection('job')
          
        }} className={componentName === 'job' ? styles.activeButton1  : styles.Button1}>
            <h5> JOB</h5>
          </span>
          <span name='doc' onClick={(e) => {handleRedirection('doc')
            
          }
        }  className={componentName === 'doc' ? styles.activeButton1  : styles.Button1}>
            <h5>DOCUMENTS</h5>

          </span>
          <span name='assets' onClick={(e) => {handleRedirection('assets')
          
        }} className={componentName === 'assets' ? styles.activeButton1  : styles.Button1}>
            <h5>ASSETS</h5>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
