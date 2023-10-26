import React, { useState } from 'react'
import './attendanceLog.css'
import location from '../../../image/location.svg'
import checked from '../../../image/checked.svg'
// import error from '../../../image/err.svg'
import error from '../../../image/VectorLog.svg'
import verticle from '../../../image/vertical.svg'
import Tortoise from '../../../image/file-icons_tortoisesvnTortoise.svg'
import currentTic from '../../../image/mdi_tickTick.svg'
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 11,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        //   backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        backgroundColor: '#53BCD2',
    },
}));

const AttendanceLog = () => {
    const [monthTab, setMonthTab] = useState('Last 30 Days')

    const handleMonthTab = (month, year) => {
        setMonthTab(month, year)
    }

    return <>
        <div className='main-Attendance-Log-sec'>
            <div className='days-Attendance-Log'>
                <div className='last-30-days-log'><h1>{monthTab}</h1></div>
                <div>
                    <button style={{border: '1px solid #7b73734f'}} className={`btns-for-last-30-days-log first-child-btn  ${monthTab === 'Last 30 Days' ? 'btns-for-last-30-days-log-active' : ''}`} onClick={() => handleMonthTab('Last 30 Days')}><span>Last 30 Days</span></button>
                    <button style={{border: '1px solid #7b73734f'}} className={`btns-for-last-30-days-log ${monthTab === 'July, 2023' ? 'btns-for-last-30-days-log-active' : ''}`} onClick={() => handleMonthTab('July, 2023')}><span>JUL</span></button>
                    <button style={{border: '1px solid #7b73734f'}} className={`btns-for-last-30-days-log ${monthTab === 'Jun, 2023' ? 'btns-for-last-30-days-log-active' : ''}`} onClick={() => handleMonthTab('Jun, 2023')}><span>JUN</span></button>
                    <button style={{border: '1px solid #7b73734f'}} className={`btns-for-last-30-days-log ${monthTab === 'May, 2023' ? 'btns-for-last-30-days-log-active' : ''}`} onClick={() => handleMonthTab('May, 2023')}><span>MAY</span></button>
                    <button style={{border: '1px solid #7b73734f'}} className={`btns-for-last-30-days-log ${monthTab === 'April, 2023' ? 'btns-for-last-30-days-log-active' : ''}`} onClick={() => handleMonthTab('April, 2023')}><span>APR</span></button>
                    <button style={{border: '1px solid #7b73734f'}} className={`btns-for-last-30-days-log ${monthTab === 'March, 2023' ? 'btns-for-last-30-days-log-active' : ''}`} onClick={() => handleMonthTab('March, 2023')}><span>MAR</span></button>
                    <button style={{border: '1px solid #7b73734f'}} className={`btns-for-last-30-days-log last-child-btn ${monthTab === 'February, 2023' ? 'btns-for-last-30-days-log-active' : ''}`} onClick={() => handleMonthTab('February, 2023')}><span>FEB</span></button>
                </div>
            </div>
        </div>

        <div>
            <table className='Attendance-table'>
                <tr className='theading'>
                    <th>DATE</th>
                    <th>ATTENDANCE VISUAL</th>
                    <th>EFFECTIVE HOURS</th>
                    <th>GROSS HOURS</th>
                    <th>ARRIVAL</th>
                    <th>LOG</th>
                </tr>
                <tr className='tData'>
                    <td>Aug 24, Wed</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                {/* <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div> */}
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#D9D9D9'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>0h 0m +</td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img style={{ width: '25px', }} src={Tortoise} alt="tic" />&nbsp; 0:06:34 late</td>
                    <td><img style={{ width: '15px' }} src={error} alt='err' /></td>
                </tr>
                <tr className='tData'>
                    <td>Aug 23, Tue</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#53BCD2'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>9h 21m +</td>
                    <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '15px' }} src={currentTic} alt='currentTic' /> &nbsp; On Time</td>
                    <td><img src={checked} alt='check' /></td>
                </tr>
                <tr className='tData'>
                    <td>Aug 22, Mon</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#53BCD2'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>9h 21m +</td>
                    <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '15px' }} src={currentTic} alt='currentTic' /> &nbsp; On Time</td>
                    <td><img src={checked} alt='check' /></td>
                </tr>
                <tr className='tData'>
                    <td>Aug 21, Sun</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#53BCD2'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>9h 21m +</td>
                    <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '15px' }} src={currentTic} alt='currentTic' /> &nbsp; On Time</td>
                    <td><img src={checked} alt='check' /></td>
                </tr>
                <tr className='tData'>
                    <td>Aug 20, San</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#53BCD2'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>9h 21m +</td>
                    <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '15px' }} src={currentTic} alt='currentTic' /> &nbsp; On Time</td>
                    <td><img src={checked} alt='check' /></td>
                </tr>
                <tr className='tData'>
                    <td>Aug 19, Fri</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#53BCD2'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>9h 21m +</td>
                    <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '15px' }} src={currentTic} alt='currentTic' /> &nbsp; On Time</td>
                    <td><img src={checked} alt='check' /></td>
                </tr>
                <tr className='tData'>
                    <td>Aug 18, Thu</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#53BCD2'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>9h 21m +</td>
                    <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '15px' }} src={currentTic} alt='currentTic' /> &nbsp; On Time</td>
                    <td><img src={checked} alt='check' /></td>
                </tr>
                <tr className='tData'>
                    <td>Aug 17, Wed</td>
                    <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='verticle-lines'>
                                <img src={verticle} alt='verticle' /> &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <img src={verticle} alt='verticle' />  &nbsp;&nbsp;
                                <div className='process-bar process-bar-verticle'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={60} />
                                    </Box>
                                </div>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={location} alt='locaion' />
                        </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#53BCD2'
                        }}></div> &nbsp; &nbsp;
                        0h 0m +
                    </td>
                    <td>9h 21m +</td>
                    <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '15px' }} src={currentTic} alt='currentTic' /> &nbsp; On Time</td>
                    <td><img src={checked} alt='check' /></td>
                </tr>
            </table>

        </div>



        <div className='load-more-main'>
            <button className='load-more-btn'><span>LOAD MORE</span></button>
        </div>
    </>
}

export default AttendanceLog