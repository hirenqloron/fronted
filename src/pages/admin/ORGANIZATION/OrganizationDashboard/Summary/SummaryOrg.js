import React, { useState } from 'react'
import styled from './summaryOrg.module.css'
import me from '../../../../../image/fluent_person-24-regular.svg'
import greenUp from '../../../../../image/greenUP.svg'
import orangeDown from '../../../../../image/orangeDown.svg'
import tick from '../../../../../image/cirtickk.svg'
import tabIcon from '../../../../../image/tabler_mail-cancel.svg'
import dahsCross from '../../../../../image/dahsCross.svg'
import doqq from '../../../../../image/doqq.svg'
import ticLine from '../../../../../image/hrline.svg'
import doller from '../../../../../image/dollerdoller.svg'
import clarityEmployeeGroupSolid0 from '../../../../../image/clarityEmployeeGroupSolid0.svg'
import lout from '../../../../../image/logouttt.svg'
import copy from '../../../../../image/coopyyy.svg'
import run from '../../../../../image/runnn.svg'
import bag from '../../../../../image/baggg.svg'
import ciruser from '../../../../../image/uercirculll.svg'
import dp from '../../../../../image/circle-photo.jpg'
import logup from '../../../../../image/logup.svg'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import {
//   AreaChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Area,
//   linearGradient,
//   stop,
// } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AddEmployeDialog from '../OrgDialogs/AddEmployeDialog'
import AddEmployee from '../AddEmployee/AddEmployee'



const SummaryOrg = () => {
  const [age, setAge] = useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    {
      "name": '22 Aug',
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  return (
    <>
      <div className={styled.MainSummaryOrgSection}>
        <div className={styled.sections}>
          <div className={styled.sameSecdiv}>
            <h1>EMPLOYEES</h1>
            <div className={styled.forSumrData}>
              <div>
                <div className={styled.employ}>
                  <div className={styled.mesummry}><img src={me} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Total Head Count</h3>
                    <div className={styled.countDta}>
                      <h1>32</h1> &nbsp;&nbsp; <p><img src={greenUp} alt='greenUp' /> <span style={{ color: '#2BD35A' }}>4</span> &nbsp;&nbsp;<img src={orangeDown} alt='orange' /> <span style={{ color: '#EB5D5D' }}>0</span></p>
                    </div>
                  </div>
                </div>
                <div className={styled.employ}>
                  <div style={{ backgroundColor: 'rgb(115 103 240 / 37%)' }} className={styled.mesummry}><img src={tick} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Registered</h3>
                    <div className={styled.countDta}>
                      <h1>31</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styled.employ}>
                  <div style={{ backgroundColor: 'rgb(72 233 117 / 41%)' }} className={styled.mesummry}><img src={tabIcon} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Not Invited</h3>
                    <div className={styled.countDta}>
                      <h1>0</h1>
                    </div>
                  </div>
                </div>
                <div className={styled.employ}>
                  <div style={{ backgroundColor: 'rgb(75 226 247 / 36%)' }} className={styled.mesummry}><img src={dahsCross} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Yet to Register</h3>
                    <div className={styled.countDta}>
                      <h1>0</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '57%' }} className={styled.sameSecdiv}>
            <h1>PENDING ACTIONS</h1>
            <div className={styled.forSumrData}>
              <div>
                <div className={styled.employ}>
                  <div style={{ backgroundColor: 'rgb(72 233 117 / 41%)' }} className={styled.mesummry}><img src={doqq} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Documents</h3>
                    <div className={styled.countDta}>
                      <h1>4</h1>
                    </div>
                  </div>
                </div>
                <div className={styled.employ}>
                  <div className={styled.mesummry}><img src={ticLine} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Join Tasks</h3>
                    <div className={styled.countDta}>
                      <h1>0</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styled.employ}>
                  <div className={styled.mesummry}><img src={doller} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Expenses</h3>
                    <div className={styled.countDta}>
                      <h1>3</h1>
                    </div>
                  </div>
                </div>
                <div className={styled.employ}>
                  <div style={{ backgroundColor: 'rgb(115 103 240 / 37%)' }} className={styled.mesummry}><img src={lout} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Exit Tasks</h3>
                    <div className={styled.countDta}>
                      <h1>0</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styled.employ}>
                  <div style={{ backgroundColor: 'rgb(115 103 240 / 37%)' }} className={styled.mesummry}><img src={bag} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Probations</h3>
                    <div className={styled.countDta}>
                      <h1>0</h1>
                    </div>
                  </div>
                </div>
                <div className={styled.employ}>
                  <div style={{ backgroundColor: 'rgb(72 233 117 / 41%)' }} className={styled.mesummry}><img src={ciruser} alt='none' /></div>
                  <div>
                    <h3 className={styled.totalh3}>Profile Changes</h3>
                    <div className={styled.countDta}>
                      <h1>1</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.sections}>
          <div className={styled.sameSecdiv}>
            <h1>QUICK LINKS</h1>
            <div>
              <div className={styled.topQUICKLINKS}>
                <div>
                  <p style={{ cursor: 'pointer' }} onClick={handleClickOpen}>+New Employee</p>
                  <p >+New Poll</p>
                  <p>+New Announcement</p>
                  <p>Sortboxs Hire <img src={logup} alt='logup' /></p>
                </div>
                <div>
                  <p>Employee Custom Fields</p>
                  <p>Org Directory</p>
                  <p>Org Tree</p>
                </div>
              </div>
              <div>
                <h1 className={styled.BULKcolor}>BULK OPERATIONS</h1>
                <div className={styled.topQUICKLINKS}>
                  <div>
                    <p>Add Employees in Bulk</p>
                    <p>Updates Employees in Bulk</p>
                    <p>Bulk Invite Employees</p>
                  </div>
                  <div>
                    <p>Import Employee Job Details</p>
                    <p>Import Employee Custom Fields</p>
                    <p>Bulk Import Employee Documents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '57%' }} className={styled.sameSecdiv}>
            <div className={styled.graphSec}>
              <h1>EMPLOYEE LOGIN SUMMARY</h1>
              <FormControl>
                <InputLabel
                  // className={classes.inputLabel}
                  id="demo-simple-select-label" />
                <Select
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Last 14 Days</MenuItem>
                  <MenuItem value={2}>Last 7 Days</MenuItem>
                  <MenuItem value={3}>Last 2 Days</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              {/* <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart> */}
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  width={800}
                  height={400}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className={styled.sections}>
          <div className={styled.sameSecdiv}>
            <h1>QUICK LINKS</h1>
            <div>
              <div className={styled.topQUICKLINKS}>
                <div>
                  <p>All Employees</p>
                  <p>Registered Employees</p>
                  <p>Incomplete Profiles</p>
                  <p>Sortboxs Hire <img src={logup} /></p>
                </div>
                <div>
                  <p>Employee Job Details</p>
                  <p>Employees in Probation</p>
                  <p>Employees in Notice Period</p>
                </div>
              </div>
              <div>
                <h1 className={styled.BULKcolor}>OTHER LINKS</h1>
                <div className={styled.topQUICKLINKS}>
                  <div>
                    <p>Employee Master Details</p>
                    <p>Employee Documents Report</p>
                    <p>Employees Pending Salary Revisions</p>
                  </div>
                  <div>
                    <p>Attrition Employee Report</p>
                    <p>Emplyee Master Details with Custom Field</p>
                  </div>
                </div>
              </div>
              <div className={styled.MoreAvailableReports}>
                <h1>More Available in Reports Section <span>here</span></h1>
              </div>
            </div>
          </div>
          <div style={{ width: '59.5%' }} className={styled.newHire}>
            <div className={styled.newHireNo}>
              <div className={styled.newHireNoTop}>
                <div className={styled.mesummry}><img src={clarityEmployeeGroupSolid0} alt='none' /></div>
                <h2>New Hires</h2>
                <p>(0)</p>
              </div>
              <div className={styled.newHireNoMeSSAGE}>
                <div className={styled.newHireNoMessageDiv}>
                  <h1>No new hires.</h1>
                </div>
              </div>
            </div>
            <div className={styled.newHireNo}>
              <div className={styled.newHireNoTop}>
                <div style={{ backgroundColor: 'rgb(72 233 117 / 41%)' }} className={styled.mesummry}><img src={run} alt='none' /></div>
                <h2>Exits</h2>
                <p>(0)</p>
              </div>
              <div className={styled.newHireNoMeSSAGE}>
                <div className={styled.newHireNoMessageDiv}>
                  <h1>Hurray! No employee is in Exit process.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styled.sections}>
          <div className={styled.lstBoxs}>
            <div style={{ padding: '0 16px' }} className={styled.newHireNoTop}>
              <div style={{ backgroundColor: 'rgb(72 233 117 / 41%)' }} className={styled.mesummry}><img src={copy} alt='none' /></div>
              <h2>Onboarding</h2>
              <p>(0)</p>
            </div>
            <hr />
            <div style={{ padding: '0 16px' }} className={styled.newHireNoMeSSAGE}>
              <div className={styled.newHireNoMessageDiv}>
                <h1>Everyone completed thier Onboarding.</h1>
              </div>
            </div>
          </div>

          <div className={styled.lstBoxs}>
            <div style={{ padding: '0 16px' }} className={styled.newHireNoTop}>
              <div style={{ backgroundColor: 'rgb(115 103 240 / 37%)' }} className={styled.mesummry}><img src={bag} alt='none' /></div>
              <h2>Probation</h2>
              <p>(10)</p>
            </div>
            <hr />
            <div style={{ padding: '0 16px' }} className={styled.newHireNoMeSSAGE}>
              <div className={styled.forProfile}>
                <img src={dp} alt='dp' />
                <div>
                  <h1>Snehal Baraskar</h1>
                  <p>Hyderabad</p>
                </div>
              </div>
              <div className={styled.forProfile}>
                <img src={dp} alt='dp' />
                <div>
                  <h1>Qloron Technology</h1>
                  <p>Human Resources - Hyderabad</p>
                </div>
              </div>
              <div className={styled.forProfile}>
                <img src={dp} alt='dp' />
                <div>
                  <h1>Manoj Nampally</h1>
                  <p>Software Development - Hyderabad</p>
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: '16px', color: '#7367F0', paddingLeft: '10px', cursor: 'pointer' }}>View all</h2>
              </div>
            </div>
          </div>
          <div className={styled.lstBoxs}>
            <div style={{ padding: '0 16px' }} className={styled.newHireNoTop}>
              <div style={{ backgroundColor: 'rgb(72 233 117 / 41%)' }} className={styled.mesummry}><img src={bag} alt='none' /></div>
              <h2>Birthdays</h2>
              {/* <p>(10)</p> */}
            </div>
            <hr />
            <div style={{ padding: '0 16px' }} className={styled.newHireNoMeSSAGE}>
              <div className={styled.forProfile}>
                <img src={dp} alt='dp' />
                <div>
                  <h1>Parachi Panchal</h1>
                  <p>Business Development - Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styled.lstBoxs}>
            <div style={{ padding: '0 16px' }} className={styled.newHireNoTop}>
              <div style={{ backgroundColor: 'rgb(219 0 255 / 38%)' }} className={styled.mesummry}><img src={bag} alt='none' /></div>
              <h2>Work Anniversaries</h2>
              {/* <p>(10)</p> */}
            </div>
            <hr />
            <div style={{ padding: '0 16px' }} className={styled.newHireNoMeSSAGE}>
              <div className={styled.forProfile}>
                <img src={dp} alt='dp' />
                <div>
                  <h1>Pranay Rangari</h1>
                  <p>Business Development - Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.helpBtn}>
          <button>Help</button>
        </div>

        {/* add popups */}
        <AddEmployeDialog handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} />
        {/* <AddEmployee handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} /> */}
      </div>
    </>
  )
}

export default SummaryOrg