import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from './Analytics.module.css'
import greenSalary from '../../../../../image/greenSalary.svg'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem, Select, FormControl } from "@mui/material";
import { Divider } from "@mui/material";
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const marks = [
    {
        value: 0,
        label: '0 Yrs',
    },
    {
        value: 100,
        label: '4.69 Yrs',
    },
];
const marks2 = [
    {
        value: 0,
        label: 'INR 0L',
    },
    {
        value: 100,
        label: 'INR 9.6L',
    },
];

const labelStyle = {
    fontSize: "14.35px",
    color: "black",
};

const importantStyle = {
    color: "red",
};

const data = [
    { id: 0, value: 65, color: '#F76737' },
    { id: 1, value: 4, color: '#C0F091' },
    { id: 2, value: 1, color: '#DC96CD' },
    { id: 3, value: 27, color: '#92EFFD' },

];
const dataChrt = [
    { id: 0, value: 98, color: '#1EDFF7' }
]

const VerticalchartSetting = {
    xAxis: [
        {
            label: 'FINANICIAL YEAR',
        },
    ],
    width: 500,
    height: 400,
};
const chartSetting = {
    yAxis: [
        {
            label: 'AMOUNT (INR)',
        },
    ],
    width: 900,
    height: 350,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'rotate(-90deg) translate(0px, -20px)',
        },
    },
};
const dataset = [
    {
        london: 59,
        month: 'Jan 23',
    },
    {
        london: 50,
        month: 'Fev 23',
    },
    {
        london: 47,
        month: 'Mar 23',
    },
    {
        london: 54,
        month: 'Apr 23',
    },
    {
        london: 57,
        month: 'May 23',
    },
    {
        london: 60,
        month: 'Jun 23e',
    },
    {
        london: 59,
        month: 'Jul 23y',
    },
    {
        london: 65,
        month: 'Aug 23',
    },
    {
        london: 51,
        month: 'Sep 23t',
    },
    {
        london: 60,
        month: 'Oct 23',
    },
    {
        london: 67,
        month: 'Nov 23',
    },
    {
        london: 61,
        month: 'Dec 23',
    },
];

const datasetVertical = [
    {
        london: 59,
        seoul: 21,
        month: 'FY 2023 - 2024',
    },
    {
        london: 50,
        seoul: 1,
        month: 'FY 2022 - 2023',
    },
    {
        london: 47,
        seoul: 1,
        month: 'FY 2021 - 2022',
    },
    {
        london: 54,
        seoul: 1,
        month: 'FY 2020 - 2021',
    },
];

const valueFormatter = (value) => `${value}`;
const valueFormatterVertical = (value) => `${value}`;


const Analytics = () => {
    const analyticsData = [
        {
            icon: `${greenSalary}`,
            salarySomthing: 'Last Salary Processed',
            date: 'JUL 2023',
            payment: 'INR 9,97,423'
        }, {
            icon: `${greenSalary}`,
            salarySomthing: 'Upcoming Salary',
            date: 'JUL 2023',
            payment: 'INR 9,97,423'
        }, {
            icon: `${greenSalary}`,
            salarySomthing: 'Upcoming Revisions',
            date: 'JUL 2023',
            payment: '0'
        }, {
            icon: `${greenSalary}`,
            salarySomthing: 'Pending Revisions',
            date: 'JUL 2023',
            payment: '0'
        }
    ]


    const theme = createTheme({
        components: {
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        fontFamily: "Public Sans",
                        color: "#6d6976",
                        "&:hover": {
                            backgroundColor: "#E8E7FD",
                            color: "#7367F0", // Change this to your desired color
                        },
                    },
                },
            },
        },
    });

    const stylesed = {
        width: "100%",
        minWidth: "250px",
        height: "35px",
        borderRadius: "5px",
        backgroundColor: "#7367f0",
        color: '#ffffff'
    };
    const stlesed = {
        width: "100%",
        minWidth: "250px",
        height: "35px",
        borderRadius: "5px",
        // backgroundColor: "#7367f0",
        border: "0.7px solid #7367f0",
        color: '#ffffff'
    };

    // const [series, setSeries] = useState([44, 55, 13, 33]);
    // const [options] = useState({
    //     chart: {
    //         width: 380,
    //         type: 'donut',
    //     },
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     responsive: [
    //         {
    //             breakpoint: 480,
    //             options: {
    //                 chart: {
    //                     width: 200,
    //                 },
    //                 legend: {
    //                     show: false,
    //                 },
    //             },
    //         },
    //     ],
    //     legend: {
    //         position: 'bottom',
    //         offsetY: 0,
    //         height: 230,
    //     },
    //     colors: ['#F76737', '#4E65FF', '#DC96CD', '#C0F091'],
    //     labels: ['Software Development', 'Business Development', 'Human Resources', 'Account Development'],
    // });



    return (
        <div className={styled.mainAnalyticsSec}>
            <div className={styled.mainContainer}>
                {analyticsData.map((data) => (
                    <div className={styled.innerContainer}>
                        <div className={styled.card}>
                            <div className={styled.cardDetails}>
                                <div className={styled.imgDib}><img src={data.icon} alt='iocn' /></div>&nbsp;&nbsp;
                                <p className={styled.paraCardDetails}>{data.salarySomthing}</p>
                            </div>
                            <p className={styled.junpara}>{data.date}</p>
                        </div>
                        <div className={styled.inrIncm}><h1>{data.payment}</h1></div>
                    </div>
                ))}
            </div>

            <div className={styled.mainCompensation}>
                <div className={styled.compensation}>
                    <h1>Compensation Summary</h1>
                    <div>
                        <ThemeProvider theme={theme}>
                            <FormControl>
                                <div style={{ margin: "1px 0 0 0" }}>
                                    {/* {console.log(formData.gstType)} */}
                                    <Select
                                        style={stylesed}
                                        type="text"
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={formData.gstType}
                                        // onChange={(e) => handleInputChangeGstType(e)}
                                        sx={{
                                            fontSize: "14.35px",
                                            "& .MuiSelect-select": {
                                                padding: "10px",
                                                color: "#ffffff !important",
                                                borderColor: "transparent",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "transparent",
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "transparent",
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "transparent",
                                            },
                                        }}
                                    >
                                        <MenuItem disabled value="disabled">
                                            Select Financial Year
                                        </MenuItem>
                                        <MenuItem value="Financial Year 2023 - 2024">Financial Year 2023 - 2024</MenuItem>
                                        <MenuItem value="Financial Year 2024 - 2025">Financial Year 2024 - 2025</MenuItem>
                                    </Select>
                                </div>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                </div>
                <div className={styled.mainCompensationDistribution}>
                    <div className={styled.CompensationDistribution}>
                        <h1>Compensation Distribution by Department</h1>
                        <Divider />
                        <div className={styled.CompensationDistributionDisplay}>
                            <div className={styled.Chart}>
                                {/* <ReactApexChart options={options} series={series} type="donut" className={styled.reactChrt} /> */}
                                <PieChart
                                    series={[
                                        {
                                            data,
                                            // highlightScope: { faded: 'global', highlighted: 'item' },
                                            faded: { innerRadius: 30, additionalRadius: -30 },
                                            innerRadius: 40,
                                        },
                                    ]}
                                    // sx={{
                                    //     [`& .${pieArcClasses.faded}`]: {
                                    //         fill: 'gray',
                                    //     },
                                    // }}
                                    height={200}
                                    width={350}
                                />
                            </div>
                            <div>
                                <div className={styled.tetforCompensationDistributionDisplay}>
                                    <h3>TOTAL COMPENSATION</h3>
                                    <p>INR 1,11,82,548</p>
                                </div>
                                <div className={styled.tetforCompensationDistributionDisplay}>
                                    <h3>HIGHEST COMPENSATION</h3>
                                    <p>Software Development<br />(INR 1,11,82,548)</p>
                                </div>
                                <div className={styled.tetforCompensationDistributionDisplay}>
                                    <h3>LOWEST COMPENSATION</h3>
                                    <p>Account Department<br /> (INR 1,73,190)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styled.CompensationDistribution}>
                        <h1>Compensation Distribution by Department</h1>
                        <Divider />
                        <div className={styled.CompensationDistributionDisplay}>
                            <div>
                                {/* <ReactApexChart options={options} series={series} type="donut" width={580} /> */}
                                <PieChart
                                    series={[
                                        {
                                            data: dataChrt,
                                            // highlightScope: { faded: 'global', highlighted: 'item' },
                                            faded: { innerRadius: 30, additionalRadius: -30 },
                                            innerRadius: 40,
                                        },
                                    ]}
                                    sx={{
                                        [`& .${pieArcClasses.faded}`]: {
                                            fill: 'gray',
                                        },
                                    }}
                                    height={200}
                                    width={350}
                                />
                            </div>
                            <div>
                                <div className={styled.tetforCompensationDistributionDisplay}>
                                    <h3>TOTAL COMPENSATION</h3>
                                    <p>INR 1,11,82,548</p>
                                </div>
                                <div className={styled.tetforCompensationDistributionDisplay}>
                                    <h3>HIGHEST COMPENSATION</h3>
                                    <p>Software Development<br />(INR 1,11,82,548)</p>
                                </div>
                                <div className={styled.tetforCompensationDistributionDisplay}>
                                    <h3>LOWEST COMPENSATION</h3>
                                    <p>Account Department<br /> (INR 1,73,190)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styled.plannedmonths}>
                    <h1>Planned Vs Actual Compensation (Variance) - Past Months</h1>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month', categoryGapRatio: 0.4, barGapRatio: 0.2 }]}
                            series={[
                                { dataKey: 'london', label: 'London', valueFormatter },

                            ]}
                            {...chartSetting}
                        />
                    </div>

                </div>
                <Divider />
                <div className={styled.mainSnapsot}>
                    <h1>Snapshot - Apr 23 to Mar 24</h1>
                    <p>You can view monthly snapshot by clicking and selecting respective month on the graph</p>
                    <div className={styled.innerContainerSnapSot}>
                        <div className={styled.containerSnapSot}>
                            <p>PLANNED COMPENSATION COST</p>
                            <span>INR 1,24,66,783</span>
                        </div>
                        <div className={styled.containerSnapSot}>
                            <p>ACTUAL COMPENSATION COST</p>
                            <span>INR 1,11,66,083</span>
                        </div>
                        <div className={styled.containerSnapSot}>
                            <p>VARIANCE</p>
                            <span>INR 12,84,175</span>
                        </div>
                        <div className={styled.containerSnapSot}>
                            <p className={styled.divequs}>What caused the dive?</p>
                        </div>
                    </div>
                </div>
                <div className={styled.salarEmployeesy}>
                    <h1>Employees by salary range (Last 4 years)</h1>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <BarChart
                            dataset={datasetVertical}
                            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            series={[{ dataKey: 'seoul', label: 'EMPLOYEES (%)', valueFormatterVertical }]}
                            layout="horizontal"
                            {...VerticalchartSetting}
                        />
                    </div>
                </div>
                <div className={styled.salarEmployeesy}>
                    <h1>View average base pay</h1>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className={styled.veieAvergae}>
                            <div className={styled.viweLocation}>
                                <ThemeProvider theme={theme}>
                                    <FormControl>
                                        <div style={{ margin: "1px 0 0 0" }}>
                                            <label style={labelStyle} htmlFor="">
                                                Location
                                                <span style={importantStyle}>*</span>
                                            </label>
                                            <br />
                                            {/* {console.log(formData.tds)} */}
                                            <Select
                                                style={stlesed}
                                                type="text"
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                // value={formData.tds}
                                                // onChange={(e) => handleInputChangeTds(e)}
                                                sx={{
                                                    fontSize: "14.35px",
                                                    "& .MuiSelect-select": {
                                                        padding: "10px",
                                                        color: "#6D6976",
                                                        borderColor: 'var( --color-mediumslateblue-200)',
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                }}
                                            >
                                                <MenuItem disabled value="l">
                                                    All
                                                </MenuItem>
                                                <MenuItem value="tds 2%">2%</MenuItem>
                                                <MenuItem value="tds 10%">10%</MenuItem>
                                            </Select>
                                        </div>
                                    </FormControl>
                                </ThemeProvider>
                                <br />
                                <br />
                                <ThemeProvider theme={theme}>
                                    <FormControl>
                                        <div style={{ margin: "1px 0 0 0" }}>
                                            <label style={labelStyle} htmlFor="">
                                                Department
                                                <span style={importantStyle}>*</span>
                                            </label>
                                            <br />
                                            {/* {console.log(formData.tds)} */}
                                            <Select
                                                style={stlesed}
                                                type="text"
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                // value={formData.tds}
                                                // onChange={(e) => handleInputChangeTds(e)}
                                                sx={{
                                                    fontSize: "14.35px",
                                                    "& .MuiSelect-select": {
                                                        padding: "10px",
                                                        color: "#6D6976",
                                                        borderColor: 'var( --color-mediumslateblue-200)',
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                }}
                                            >
                                                <MenuItem disabled value="l">
                                                    All
                                                </MenuItem>
                                                <MenuItem value="tds 2%">2%</MenuItem>
                                                <MenuItem value="tds 10%">10%</MenuItem>
                                            </Select>
                                        </div>
                                    </FormControl>
                                </ThemeProvider>
                                <br />
                                <br />
                                <ThemeProvider theme={theme}>
                                    <FormControl>
                                        <div style={{ margin: "1px 0 0 0" }}>
                                            <label style={labelStyle} htmlFor="">
                                                Job Title
                                                <span style={importantStyle}>*</span>
                                            </label>
                                            <br />
                                            {/* {console.log(formData.tds)} */}
                                            <Select
                                                style={stlesed}
                                                type="text"
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                // value={formData.tds}
                                                // onChange={(e) => handleInputChangeTds(e)}
                                                sx={{
                                                    fontSize: "14.35px",
                                                    "& .MuiSelect-select": {
                                                        padding: "10px",
                                                        color: "#6D6976",
                                                        borderColor: 'var( --color-mediumslateblue-200)',
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent",
                                                    },
                                                }}
                                            >
                                                <MenuItem disabled value="l">
                                                    All
                                                </MenuItem>
                                                <MenuItem value="tds 2%">2%</MenuItem>
                                                <MenuItem value="tds 10%">10%</MenuItem>
                                            </Select>
                                        </div>
                                    </FormControl>
                                </ThemeProvider>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px 0 20px 10px' }}>
                                    <button className={styled.lftBtns}>Reset</button>
                                    <button className={styled.RftBtns}>Run</button>
                                </div>
                            </div>
                        </div>
                        <div className={styled.salaryviee}>
                            <div className={styled.salaryANUSleft}>
                                <h2>Experience & Salary Range</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className={styled.slryh11}>
                                        <h1>EXPERIENCE</h1>
                                        <Box sx={{ width: 190, margin: '0 0 0 15px' }}>
                                            <Slider
                                                track="inverted"
                                                aria-labelledby="track-inverted-slider"
                                                defaultValue={30}
                                                marks={marks}
                                                sx={{
                                                    // Change the color of the slider track to red
                                                    '& .MuiSlider-track': {
                                                        backgroundColor: '#7367F0',
                                                    },
                                                    '& .MuiSlider-rail': {
                                                        backgroundColor: '#7367F0',
                                                    },
                                                    '& .MuiSlider-thumb': {
                                                        backgroundColor: '#7367F0',
                                                    },
                                                }}
                                            />
                                        </Box>
                                        <div className={styled.salaryANUSleftExph11}>
                                            <h1>AVG. YRS. OF EXPERIENCE</h1>
                                            <p className={styled.ysd}>1.04 Yrs</p>
                                        </div>
                                    </div>
                                    <div className={styled.slryh11}>
                                        <h1>ANNUAL SALARY RANGE</h1>
                                        <Box sx={{ width: 190, margin: '0 0 0 15px' }}>
                                            <Slider
                                                track="inverted"
                                                aria-labelledby="track-inverted-slider"
                                                defaultValue={30}
                                                marks={marks2}
                                                sx={{
                                                    // Change the color of the slider track to red
                                                    '& .MuiSlider-track': {
                                                        backgroundColor: '#2BD35A',
                                                    },
                                                    '& .MuiSlider-rail': {
                                                        backgroundColor: '#2BD35A',
                                                    },
                                                    '& .MuiSlider-thumb': {
                                                        backgroundColor: '#2BD35A',
                                                    },
                                                }}
                                            />
                                        </Box>
                                        <div className={styled.salaryANUSleftExph11}>
                                            <h1 className={styled.salaryANUSleftExp}>AVG. YRS. OF EXPERIENCE</h1>
                                            <p className={styled.ysd}>INR 2.8L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styled.salaryANUSrrightttt}>
                                <h2>Average Pay Distrubution</h2>
                                <div>
                                    <PieChart
                                        series={[
                                            {
                                                data: dataChrt,
                                                // highlightScope: { faded: 'global', highlighted: 'item' },
                                                faded: { innerRadius: 30, additionalRadius: -30 },
                                                innerRadius: 40,
                                            },
                                        ]}
                                        sx={{
                                            [`& .${pieArcClasses.faded}`]: {
                                                fill: 'gray',
                                            },
                                        }}
                                        height={200}
                                        width={350}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics