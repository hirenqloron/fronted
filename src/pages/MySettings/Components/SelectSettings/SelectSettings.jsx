import React from 'react'
import styles from "./SelectSettings.module.css"
import {TbUsers,TbBell} from 'react-icons/tb'
import {BiLockAlt} from 'react-icons/bi'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {BsLink45Deg} from 'react-icons/bs'


const SelectSettings = ({handleRedirection,componentName}) => {
  return (
    <div className={styles.select}>
     <div className={componentName == "account" ? styles.selectedDiv : styles.UnselectedDiv} onClick={()=>handleRedirection("account")} ><TbUsers/> <h1>Account</h1></div>
     <div className={componentName == "security" ? styles.selectedDiv : styles.UnselectedDiv} onClick={()=>handleRedirection("security")}> <BiLockAlt/><h1>Security</h1></div>
      <div className={componentName == "billing" ? styles.selectedDiv : styles.UnselectedDiv} onClick={()=>handleRedirection("billing")}><HiOutlineDocumentText/><h1>Billing</h1></div>
     <div className={componentName == "notifications" ? styles.selectedDiv : styles.UnselectedDiv} onClick={()=>handleRedirection("notifications")}><TbBell/><h1>Notifications</h1></div>
      <div className={componentName == "connections" ? styles.selectedDiv : styles.UnselectedDiv} onClick={()=>handleRedirection("connections")}><BsLink45Deg/><h1>Connections</h1></div>
    </div>
  )
}

export default SelectSettings
