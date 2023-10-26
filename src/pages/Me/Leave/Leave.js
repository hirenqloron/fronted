import React, { useState } from "react";
import leaveImg from "../../../image/Customer - img.svg";
import timePending4 from "../../../image/Icon1.svg";
import timePending3 from "../../../image/Icon10.svg";
import timePending from "../../../image/Icon11.svg";
import timePending1 from "../../../image/Icon12.svg";
import available1 from "../../../image/Available1.svg";
import available2 from "../../../image/Frame 77.svg";
import available3 from "../../../image/Frame 79.svg";
import available4 from "../../../image/Frame 84.svg";
import vector from "../../../image/none.svg";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import ReactApexChart from "react-apexcharts";
// import Box from '@mui/material/Box';
import "./leave.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FormLabel, TextareaAutosize } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SelectInput from "../../../components/selectInput/SelectInput";
import * as Yup from "yup";
import { Field, Form, Formik, useFormik } from "formik";
import RequestLeave from "./RequestLeave/RequestLeave";
import Alert from "@mui/material/Alert";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const RedDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#7367F0",
  color: "white", // You can change the text color if needed
  padding: theme.spacing(2),
}));

const BorderButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  border: "1px solid #7367F0",
  color: "#7367F0",
  padding: "8px 14px",
  "&:hover": {
    backgroundColor: "white", // Change the hover color if needed
  },
}));

const BgButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7367F0",
  color: "white",
  cursor: "pointer",
  padding: "8px 14px",
  "&:hover": {
    backgroundColor: "#7367F0", // Change the hover color if needed
  },
}));

const ArrayData = [
  {
    name: "Mo",
    stu: 35,
    fees: "25$",
  },
  {
    name: "Tu",
    stu: 20,
    fees: "25$",
  },
  {
    name: "We",
    stu: 85,
    fees: "25$",
  },
  {
    name: "Th",
    stu: 61,
    fees: "25$",
  },
  {
    name: "Fr",
    stu: 75,
    fees: "25$",
  },
  {
    name: "Sa",
    stu: 13,
    fees: "25$",
  },
  {
    name: "Su",
    stu: 50,
    fees: "25$",
  },
];
const ArrayDataMonth = [
  {
    name: "Jan",
    stu: 35,
    fees: "25$",
  },
  {
    name: "Feb",
    stu: 20,
    fees: "25$",
  },
  {
    name: "Mar",
    stu: 85,
    fees: "25$",
  },
  {
    name: "Apr",
    stu: 61,
    fees: "25$",
  },
  {
    name: "May",
    stu: 75,
    fees: "25$",
  },
  {
    name: "Jun",
    stu: 13,
    fees: "25$",
  },
  {
    name: "Jul",
    stu: 50,
    fees: "25$",
  },
  {
    name: "Aug",
    stu: 85,
    fees: "25$",
  },
  {
    name: "Sept",
    stu: 61,
    fees: "25$",
  },
  {
    name: "Oct",
    stu: 75,
    fees: "25$",
  },
  {
    name: "Nov",
    stu: 13,
    fees: "25$",
  },
  {
    name: "Dec",
    stu: 50,
    fees: "25$",
  },
];

const Leave = () => {
  const [openApplyLeave, setOpenApplyLeave] = useState(false);
  const [successAlert, setSuccessAlert] = useState(null);
  const [errorAlert, setErrorAlert] = useState(null);

  const handleClickOpenApplyLeave = () => {
    setOpenApplyLeave(true);
    // setValue(id);
  };

  const displaySuccessAlert = (message) => {
    setSuccessAlert(message);

    // Automatically clear the success alert after 2 seconds
    setTimeout(() => {
      setSuccessAlert(null);
    }, 2000);
  };

  const displayErrorAlert = (message) => {
    setErrorAlert(message);

    // Automatically clear the error alert after 2 seconds
    setTimeout(() => {
      setErrorAlert(null);
    }, 2000);
  };

  const handleCloseDia = (newValue) => {
    setOpenApplyLeave(false);
  };

  const [chartData, setChartData] = React.useState({
    series: [85],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(163, 160, 160, 1)",
              offsetY: -30,
            },
            value: {
              offsetY: 0,
              fontSize: "35px",
              color: "rgba(93, 90, 104, 1)",
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
          // colorStops: [{
          //     offset: 0,
          //     color: '#7367F0', // Change the color to red
          //     opacity: 1,
          // }],
          colorStops: [
            {
              offset: 0,
              color: "#7367F0", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 50,
              color: "#7367F0", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 64,
              color: "#D1CDFE", // rgba(202,235,239,1)
              opacity: 1,
            },
          ],
        },
      },
      stroke: {
        dashArray: 12,
      },
      labels: ["Available"],
    },
  });
  const [chartDataTwo, setChartDataTwo] = React.useState({
    series: [85],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(163, 160, 160, 1)",
              offsetY: -30,
            },
            value: {
              offsetY: 0,
              fontSize: "35px",
              color: "rgba(93, 90, 104, 1)",
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
          colorStops: [
            {
              offset: 0,
              color: "#FF9B34", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 50,
              color: "#FF9B34", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 64,
              color: "#FDD9B4", // rgba(202,235,239,1)
              opacity: 1,
            },
          ],
        },
      },
      stroke: {
        dashArray: 12,
      },
      labels: ["Available"],
    },
  });
  const [chartDataThree, setChartDataThree] = React.useState({
    series: [85],
    options: {
      chart: {
        height: 30,
        type: "radialBar",
        offsetY: -10,
        toolbar: {
          show: false, // Hide chart toolbar
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(163, 160, 160, 1)",
              offsetY: -30,
            },
            value: {
              offsetY: 0,
              fontSize: "35px",
              color: "rgba(93, 90, 104, 1)",
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 64],
          // colorStops: [{
          //     offset: 0,
          //     color: '#00CFE8',
          //     // color: 'linear-gradient(306deg, rgba(202,235,239,1) 0%, rgba(177,234,241,1) 35%, rgba(0,207,232,1) 64%)',
          //     opacity: 1,
          // }],
          colorStops: [
            {
              offset: 0,
              color: "#00cfe8", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 50,
              color: "#00cfe8", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 64,
              color: "#caebef", // rgba(202,235,239,1)
              opacity: 1,
            },
          ],
          // colorStops: [
          //     {
          //         offset: 0,
          //         color: '#b1eaf1', // rgba(0,207,232,1)
          //         opacity: 1,
          //     },
          //     {
          //         offset: 35,
          //         color: '#00cfe8', // rgba(0,207,232,1)
          //         opacity: 1,
          //     },
          //     {
          //         offset: 64,
          //         color: '#caebef', // rgba(202,235,239,1)
          //         opacity: 1,
          //     },
          // ],
        },
      },
      stroke: {
        dashArray: 12,
      },
      labels: ["Available"],
    },
  });
  const [chartDataFour, setChartDataFour] = React.useState({
    series: [85],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10,
        toolbar: {
          background: "#fff",
          // autoSelected: 'pan',
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(163, 160, 160, 1)",
              offsetY: -30,
            },
            value: {
              offsetY: 0,
              fontSize: "35px",
              color: "rgba(93, 90, 104, 1)",
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      // fill: {
      //     type: 'gradient',
      //     gradient: {
      //         shade: 'light',
      //         type: "horizontal",
      //         gradientToColors: ['red'],
      //         shadeIntensity: 0.1,
      //         inverseColors: true,
      //         // gradientToColors: "white",
      //         opacityFrom: 1,
      //         opacityTo: 1,
      //         stops: [0, 50, 64],
      //         // colorStops: [{
      //         //     offset: 0,
      //         //     color: '#E290FF', // Change the color to red
      //         //     opacity: 1,
      //         // }],
      //     },
      // },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 64],
          colorStops: [
            {
              offset: 0,
              color: "#E290FF", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 50,
              color: "#E290FF", // rgba(0,207,232,1)
              opacity: 1,
            },
            {
              offset: 64,
              color: "#F5D7FF", // rgba(202,235,239,1)
              opacity: 1,
            },
          ],
        },
      },
      stroke: {
        show: true,
        curve: "stepline",
        // curve: ['smooth', 'straight', 'stepline'],
        lineCap: "butt",
        colors: ["red", "green", "blue"],
        width: 10,
        dashArray: 12,
      },
      labels: ["Available"],
    },
  });

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    // "cfb",
    // "dsfse"
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      {successAlert && <Alert severity="success">{successAlert}</Alert>}
      {errorAlert && <Alert severity="error">{errorAlert}</Alert>}
      <div className="main-leave-balance-container">
        <div className="left-text-p">
          <p className="para1-for-left-text-p">
            Your Leave Balance as of 22-Aug-2023
          </p>
          <p className="para2-for-left-text-p">
            <span>Pending Requests (2)</span>
          </p>
        </div>
        <div className="right-text-input-selectors">
          <div>
            <FormControl sx={{ m: 1, width: 180 }}>
              <InputLabel
                id="demo-multiple-name-label"
                style={{
                  marginTop: "-4px",
                  fontSize: "var(--subHeading)",
                  color: "#7367F0",
                }}
              >
                Jan 2023 - Dec 2023
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChanges}
                input={<OutlinedInput label="Jan 2023 - Dec 2023" />}
                MenuProps={MenuProps}
                style={{ height: "42px" }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="leave-div-btn">
            <span>LIST OF HOLIDAYS</span>
          </div>
          <div className="leave-div-btn" style={{ width: "117px" }}>
            <span>OPTIONAL HOLIDAY</span>
          </div>
        </div>
      </div>
      <div className="main-leave-section-container">
        <div className="inner-leave-section-container">
          <div className="nothing-here">
            <div className="img">
              <img src={leaveImg} alt="leave" />
            </div>
            <div className="text">
              <h4>Nothing Here</h4>
              <span>Working hard yeah?? Request time off on the right</span>
            </div>
          </div>
          <div className="apply-here">
            <div className="p-text">
              <p>Request Credit for Compensatory Off</p>
              <p>Leave Policy Explanation</p>
            </div>
            <div className="apply-btn">
              <button className="apply-btn" onClick={handleClickOpenApplyLeave}>
                APPLY LEAVE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-my-leaves-state-container">
        <h1>My Leave Stats</h1>
        <div className="weekly-Consumed-container">
          <div className="Weekly-Pattern">
            <div className="text-Weekly-Pattern">
              <h2>Weekly Pattern</h2>
              <img src={vector} alt="none" />
            </div>
            <div className="Consumed-Leave-Types">
              <div className="inner-Consumed-Leave-Types">
                <ResponsiveContainer width={"100%"} aspect={3}>
                  <BarChart data={ArrayData}>
                    <XAxis dataKey="name" />
                    <Bar dataKey="stu" fill="#E8E7FD" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="Weekly-Pattern">
            <div className="text-Weekly-Pattern">
              <h2>Consumed Leave Types</h2>
              <img src={vector} alt="none" />
            </div>
            <div className="Consumed-Leave-Types">
              <div className="inner-Consumed-Leave-Types">
                <ResponsiveContainer width={"100%"} aspect={3}>
                  <BarChart data={ArrayData}>
                    <XAxis dataKey="name" />
                    <Bar dataKey="stu" fill="#FFF6E6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-bottom">
          <div className="Weekly-Pattern">
            <div className="text-Weekly-Pattern">
              <h2>Weekly Pattern</h2>
              <img src={vector} alt="none" />
            </div>
            <div className="Consumed-Leave-Types">
              <div className="inner-Consumed-Leave-Types">
                <ResponsiveContainer width={"80%"} aspect={3}>
                  <BarChart data={ArrayDataMonth}>
                    <XAxis dataKey="name" />
                    <Bar dataKey="stu" fill="#DFFFBF" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-balance-leave-state-container">
        <h1>Balance Leaves</h1>
        <div>
          <div className="top-cards">
            <div className="paid-leave-card">
              <div className="paid-leave-text-card">
                <div>
                  <h3>Paid Leave</h3>
                  <span>Last 7 days</span>
                </div>
                <div>
                  <img src={timePending1} alt="time" />
                </div>
              </div>
              <div className="available-text-circul-chart-div">
                <div className="text-circul">
                  <div className="text-circul-heading">
                    <h1>12</h1>
                    <span>Total Available</span>
                  </div>
                  <div>
                    <img src={available1} alt="time" />
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <img src={available2} alt="time" />
                  </div>
                  <div>
                    <img src={available3} alt="time" />
                  </div>
                </div>
                <div className="text-circul-chart">
                  <div id="chart">
                    <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="radialBar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="paid-leave-card">
              <div className="paid-leave-text-card">
                <div>
                  <h3>Sick / Casual Leave</h3>
                  <span>Last 7 days</span>
                </div>
                <div>
                  <img src={timePending} alt="time" />
                </div>
              </div>
              <div className="available-text-circul-chart-div">
                <div className="text-circul">
                  <div className="text-circul-heading">
                    <h1>12</h1>
                    <span>Total Available</span>
                  </div>
                  <div>
                    <img src={available1} alt="time" />
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <img src={available2} alt="time" />
                  </div>
                  <div>
                    <img src={available3} alt="time" />
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <img src={available4} alt="time" />
                  </div>
                </div>
                <div className="text-circul-chart">
                  <div id="chart">
                    <ReactApexChart
                      options={chartDataTwo.options}
                      series={chartDataTwo.series}
                      type="radialBar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-cards">
            <div className="paid-leave-card">
              <div className="paid-leave-text-card">
                <div>
                  <h3>Comp Off</h3>
                  <span>Last 7 days</span>
                </div>
                <div>
                  <img src={timePending3} alt="time" />
                </div>
              </div>
              <div className="available-text-circul-chart-div">
                <div className="text-circul">
                  <div className="text-circul-heading">
                    <h1>12</h1>
                    <span>Total Available</span>
                  </div>
                  <div>
                    <img src={available1} alt="time" />
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <img src={available2} alt="time" />
                  </div>
                  <div>
                    <img src={available3} alt="time" />
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <img src={available4} alt="time" />
                  </div>
                </div>
                <div className="text-circul-chart">
                  <div id="chart">
                    <ReactApexChart
                      options={chartDataThree.options}
                      series={chartDataThree.series}
                      type="radialBar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="paid-leave-card">
              <div className="paid-leave-text-card">
                <div>
                  <h3>Unpaid Leave</h3>
                  <span>Last 7 days</span>
                </div>
                <div>
                  <img src={timePending4} alt="time" />
                </div>
              </div>
              <div className="available-text-circul-chart-div">
                <div className="text-circul">
                  <div className="text-circul-heading">
                    <h1>12</h1>
                    <span>Total Available</span>
                  </div>
                  <div>
                    <img src={available1} alt="time" />
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <img src={available2} alt="time" />
                  </div>
                  <div>
                    <img src={available3} alt="time" />
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <img src={available4} alt="time" />
                  </div>
                </div>
                <div className="text-circul-chart">
                  <div id="chart">
                    <ReactApexChart
                      options={chartDataFour.options}
                      series={chartDataFour.series}
                      type="radialBar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container-for-other-leaves">
        <div className="main-container-for-other-leaves-box">
          <div className="inner-container-for-other-leaves">
            Other Leave Types Available : &nbsp; &nbsp;&nbsp;{" "}
            <span>
              {" "}
              Bereavement Leave, Floater Leave, Paternity Leave, Special Leave
            </span>
          </div>
        </div>
      </div>
      <div className="main-balance-leave-History-container">
        <h1>Leave History</h1>
        <div className="main-show-history">
          <div className="inner-show-history">No Leave history to show.</div>
        </div>
      </div>

      <RequestLeave
        keepMounted
        open={openApplyLeave}
        onClose={handleCloseDia}
        displaySuccessAlert={displaySuccessAlert}
        displayErrorAlert={displayErrorAlert}
      />
    </>
  );
};

export default Leave;
