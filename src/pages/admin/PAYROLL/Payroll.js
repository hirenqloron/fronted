import React from 'react'
import styled from './payroll.module.css'
import PatrollAnalytics from './PAYROLL ANALYTICS/PatrollAnalytics'

const Payroll = () => {
  return (
    <>
    <div className={styled.organizationApp}>
      <div className="section-1 me-section">
        <div className="home-page me-page">
          {/* <p className={`${styled.selecionalOoption} ${selectedOption === 'Leave' ? 'active-option' : ''}`} onClick={() => handleChangeOption('Leave')}>Leave</p>
          <p className={`${styled.selecionalOoption} ${selectedOption === 'Attendance' ? 'active-option' : ''}`} onClick={() => handleChangeOption('Attendance')}>Attendance</p> */}
          <p className={`${styled.selecionalOoption}`}>PAYROLL ANALYTICS</p>
          <p className={`${styled.selecionalOoption}`}>RUN PAYROLL</p>
          <p className={`${styled.selecionalOoption}`}>PAYROLL ADMIN</p>
          <p className={`${styled.selecionalOoption}`}>LOANS</p>
          <p className={`${styled.selecionalOoption}`}>PERKS</p>
          <p className={`${styled.selecionalOoption}`}>REPORTS</p>
          <p className={`${styled.selecionalOoption}`}>SETTINGS</p>
        </div>
      </div>
      <div>
        <PatrollAnalytics />
      </div>
    </div >
  </>
  )
}

export default Payroll