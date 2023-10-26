import React from 'react'
import styled from './OrganizationDashboard.module.css'
import SummaryOrg from './Summary/SummaryOrg'

const OrganizationDashboard = () => {
  return (
    <>
    <div className={styled.mainDashBar}>
        <p className={styled.navbar} >Summary</p>
        <p className={styled.navbar}>Analytics</p>
        <p className={styled.navbar}>Employee Reports</p>
    </div>
    <div>
      <SummaryOrg />
    </div>
    </>
  )
}

export default OrganizationDashboard