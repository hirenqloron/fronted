import React, { useState } from "react";
import styles from "./Feature.module.css";
import hashimg from "../../../../image/hashsymbol.svg";
import usertime from "../../../../image/usertime.svg";
import dollar1 from "../../../../image/dollar1.svg";
import users from "../../../../image/users.svg";
import desktop from "../../../../image/desktop.svg";
import expenseandtravel from "../../../../image/expenseandtravel.svg";
import documentsout from "../../../../image/documentsout.svg";
import airplane from "../../../../image/airplane.svg";
import onboarding from "../../../../image/onborading.svg";
import CoreHr from "./corehr/CoreHr";
import Onboard from "./onboarding/Onboard";
import CustomRoles from "./customroles/CustomRoles";
import Assets from "./Assets/Assets";
import Documents from "./documents/Documents";
import LeaveManage from "./leavemanage/LeaveManage";
import Payroll from "./payroll/Payroll";
import AttendManag from "./attendancemanage/AttendManag";
import Expenseandtravel from "./expense&travel/Expenseandtravel";
const Feature = () => {
  const [isCoreHrSelected, setIsCoreHrSelected] = useState(true);
  const [isOnboardingSelected, setIsOnboardingSelected] = useState(false);
  const [isCustomSelected, setIsCustomSelected] = useState(false);
  const [isAssetSelected, setIsAssetSelected] = useState(false);
  const [isDocumentsSelected, setIsDocumentsSelected] = useState(false);
  const [isLeaveManageSelected, setIsLeaveManageSelected] = useState(false);
  const [isPayrollSelected, setIsPayrollSelected] = useState(false);
  const [isAttendanceManagSelected, setIsAttendanceManagSelected] = useState(false);
  const [isExpenseSelected, setIsExpenseSelected] = useState(false);

  const handleCoreClick = () => {
    setIsCoreHrSelected(true);
    setIsOnboardingSelected(false);
    setIsAssetSelected(false);
    setIsCustomSelected(false);
    setIsLeaveManageSelected(false);
    setIsDocumentsSelected(false);
    setIsPayrollSelected(false);
    setIsAttendanceManagSelected(false);
    setIsExpenseSelected(false);

  };
  const handleOnboardingClick = () => {
    setIsOnboardingSelected(true);
    setIsCoreHrSelected(false); 
    setIsLeaveManageSelected(false);
    setIsDocumentsSelected(false);
    setIsCustomSelected(false);
    setIsAssetSelected(false);
    setIsPayrollSelected(false);
    setIsAttendanceManagSelected(false);
    setIsExpenseSelected(false);


  };
  const handleCustomRulesClick = () => {
    setIsAssetSelected(false);
    setIsDocumentsSelected(false);
    setIsLeaveManageSelected(false);
    setIsCustomSelected(true)
    setIsOnboardingSelected(false);
    setIsCoreHrSelected(false);
    setIsPayrollSelected(false);
    setIsAttendanceManagSelected(false);
    setIsExpenseSelected(false);

  };
    const handleAssetsClick = () => {
      setIsAssetSelected(true);
    setIsOnboardingSelected(false);
    setIsCoreHrSelected(false); 
    setIsCustomSelected(false);
    setIsDocumentsSelected(false);
    setIsLeaveManageSelected(false);
    setIsPayrollSelected(false);
    setIsAttendanceManagSelected(false);
    setIsExpenseSelected(false);


   };
  const handleDocumentsClick = () => {
    setIsDocumentsSelected(true);
    setIsOnboardingSelected(false);
    setIsCoreHrSelected(false);
    setIsCustomSelected(false);
    setIsAssetSelected(false);
    setIsLeaveManageSelected(false);
    setIsPayrollSelected(false);
    setIsAttendanceManagSelected(false);
    setIsExpenseSelected(false);

   };
  const handleLeaveManageClick = () => {
     setIsLeaveManageSelected(true);
     setIsOnboardingSelected(false);
     setIsCoreHrSelected(false); 
     setIsCustomSelected(false);
     setIsAssetSelected(false);
     setIsDocumentsSelected(false);
     setIsPayrollSelected(false);
     setIsAttendanceManagSelected(false);
     setIsExpenseSelected(false);

  };
  const handlePayrollClick = () => {
    setIsLeaveManageSelected(false);
    setIsOnboardingSelected(false);
    setIsCoreHrSelected(false); 
    setIsCustomSelected(false);
    setIsAssetSelected(false);
    setIsDocumentsSelected(false);
         setIsAttendanceManagSelected(false);
setIsPayrollSelected(true);
setIsExpenseSelected(false);

 };
 const handleAttendanceClick = () => {
  setIsLeaveManageSelected(false);
  setIsOnboardingSelected(false);
  setIsCoreHrSelected(false);
  setIsCustomSelected(false);
  setIsAssetSelected(false);
  setIsDocumentsSelected(false);
setIsPayrollSelected(false);
setIsExpenseSelected(false);
setIsAttendanceManagSelected(true);
};
const handleExpenseClick = () => {
  setIsLeaveManageSelected(false);
  setIsOnboardingSelected(false);
  setIsCoreHrSelected(false); 
  setIsCustomSelected(false);
  setIsAssetSelected(false);
  setIsDocumentsSelected(false);
setIsPayrollSelected(false);
setIsExpenseSelected(true);
setIsAttendanceManagSelected(false);
};



  return (
    <div>
      <div className={styles.featurehead}>
        <p>Features & Functionality</p>
        <p>
          You can see all the features and functionality of Qloron system and
          the progress of their setup here
        </p>
      </div>
      <div className={styles.featurecore}>
        <div className={styles.sidebarbox}>
          <div
            onClick={handleCoreClick}
            className={`${styles.corehr} ${
              isCoreHrSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isCoreHrSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.coreimg} src={hashimg} />
            </p>
            <div>
              <p>Core HR</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handleOnboardingClick}
            // style={coreHrStyle}
            className={`${styles.corehr} ${
              isOnboardingSelected ? styles.selected : ""
            }`}
          >
            <p
              className={`${styles.hashimg} ${
                isOnboardingSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.onboarding} src={onboarding} />
            </p>
            <div>
              <p>Onboarding & Offboarding</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handleCustomRulesClick}
            className={`${styles.corehr} ${
              isCustomSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isCustomSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.users} src={users} />
            </p>
            <div>
              <p>Custom Roles & Permission</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handleAssetsClick}
            className={`${styles.corehr} ${
              isAssetSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isAssetSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.desktop} src={desktop} />
            </p>
            <div>
              <p>Assets</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handleDocumentsClick}
            className={`${styles.corehr} ${
              isDocumentsSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isDocumentsSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.documents} src={documentsout} />
            </p>
            <div>
              <p>Documents</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handleLeaveManageClick}
            className={`${styles.corehr} ${
              isLeaveManageSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isLeaveManageSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.airplane} src={airplane} />
            </p>
            <div>
              <p>Leave Management</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handlePayrollClick}
            className={`${styles.corehr} ${
              isPayrollSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isPayrollSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.dollar} src={dollar1} />
            </p>
            <div>
              <p>Payroll</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handleAttendanceClick}
            className={`${styles.corehr} ${
              isAttendanceManagSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isAttendanceManagSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.usertime} src={usertime} />
            </p>
            <div>
              <p>Attendance Management</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
          <div
            onClick={handleExpenseClick}
            className={`${styles.corehr} ${
              isExpenseSelected ? styles.selected : ""
            }`}
            // style={coreHrStyle}
          >
            <p
              className={`${styles.hashimg} ${
                isExpenseSelected ? styles.selectedImage : ""
              }`}
            >
              <img className={styles.expensetravel} src={expenseandtravel} />
            </p>
            <div>
              <p>Expenses & Travel</p>
              <p>6 of 7 tasks completed</p>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {isCoreHrSelected && <CoreHr />}
          {isOnboardingSelected && <Onboard />}
          {isCustomSelected && <CustomRoles />}
          {isAssetSelected && <Assets />}
          {isDocumentsSelected && <Documents />}
          {isLeaveManageSelected &&<LeaveManage />}
          {isPayrollSelected &&<Payroll />}
          {isAttendanceManagSelected &&<AttendManag />}
          {isExpenseSelected &&<Expenseandtravel />}

         </div>
      </div>
    </div>
  );
};

export default Feature;
