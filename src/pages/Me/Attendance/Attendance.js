import React, { useState, useEffect } from 'react';
import './Attendance.css'
import * as Yup from 'yup';
import vector from "../../../image/none.svg"
import top from "../../../image/Frame 238Analysis.svg"
import finger from "../../../image/finger.svg"
import me from "../../../image/me.svg"
import group from "../../../image/group.svg"
import file from "../../../image/filee.svg"
import nullimg from "../../../image/noll.svg"
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Switch from '@mui/material/Switch';
import AttendanceLog from '../AttendanceLog/AttendanceLog'
import AttendanceRequest from '../AttendanceRequests/AttendanceRequest'
import ShiftSchedule from '../ShiftSchedule/ShiftSchedule';
// import RemoteCommentDialog from './RemoteCommentDialog'
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import pencil from '../../../image/bx_pencil.svg'
import arrowRight from '../../../image/Arrow right.svg'
import comment from '../../../image/Comment.svg'
import arroRed from '../../../image/Arrowred.svg'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { FormLabel, TextareaAutosize, isMuiElement } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import { useFormik } from 'formik';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BorderButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    border: '1px solid #7367F0',
    color: '#7367F0',
    padding: '8px 14px',
    '&:hover': {
        backgroundColor: 'white', // Change the hover color if needed
    },
}));

const BgButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#7367F0',
    color: 'white',
    cursor: 'pointer',
    padding: '8px 14px',
    '&:hover': {
        backgroundColor: '#7367F0', // Change the hover color if needed
    },
}));



const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#7367F0',
        //   '&:hover': {
        //     backgroundColor: '#E1D8D8',
        //   },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#7367F0',
    },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
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

const longText = `
Allowed formats are .png, .jpg, .jpeg, .doc, 
.docx, .pdf, .xps. The file size should not
exceed 20MB
  `;


const Attendance = () => {
  const [comment, setComment] = useState("");
  const [location, setLocation] = useState("Hyderabad");
  const [validationError, setValidationError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Attendance Log");
  const [showClockIn, setShowClockIn] = useState(true);
  const [open, setOpen] = useState(false);
  const [openPartialDayRequest, setOpenPartialDayRequest] = useState(false);
  const [openCloseAttendance, setOpenCloseAttendance] = useState(false);
  const [openCloseAttendanceOnDuty, setOpenCloseAttendanceOnDuty] =
    useState(false);
  const [openWFH, setWFH] = useState(false);
  const [openPartial, setPartial] = useState(false);
  const [attendanceRegularization, setAttendanceRegularization] =
    useState(false);
  const [openRemote, setOpenRemote] = useState(false);
const [clockInTime, setClockInTime] = useState(null);
const [showClockOut, setShowClockOut] = useState(false); // New state for showing "Remote Clock-out"
const [snackbarMessage, setSnackbarMessage] = useState("");
const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseRemote = () => {
    setOpenRemote(false);
  };
  const handleOpenRemote = () => {
    setOpenRemote(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setComment("");
    setOpen(false);
  };

  const handleClickRequest = () => {
    setWFH(true);
  };
  const handleCloseRequest = () => {
    setWFH(false);
  };

  const handleClickPartial = () => {
    setPartial(true);
  };
  const handleCloseRequestPartial = () => {
    setPartial(false);
  };

  const handleClickAttendanceRegularization = () => {
    setAttendanceRegularization(true);
  };
  const handleCloseAttendanceRegularization = () => {
    setAttendanceRegularization(false);
  };

  const handleClickAttendance = () => {
    setOpenCloseAttendance(true);
  };
  const handleCloseAttendance = () => {
    setOpenCloseAttendance(false);
  };
  const handleClickAttendanceOnDuty = () => {
    setOpenCloseAttendanceOnDuty(true);
  };
  const handleCloseRequestOnDuty = () => {
    setOpenCloseAttendanceOnDuty(false);
  };

   const userId = localStorage.getItem("Id");

  const handleClockOutClick = async () => {
    try {
      const clockOutTime = new Date(); 
       const response = await axios.post("http://3.109.153.24:8081/api/v1/auth/clockout", {
        userId: userId,
        clockOutTime: clockOutTime,
      });
      if (response.status === 200) {
        console.log("Clock out successful");
        console.log(response.data);
        const timeElapsed = clockOutTime - clockInTime;
        const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
        const seconds = Math.floor((timeElapsed / 1000) % 60);
        console.log(`Total time: ${hours}h ${minutes}m ${seconds}s`);
        // Clear the clock-in time
        setClockInTime(null);
        setShowClockIn(true);
        setShowClockOut(false);
        localStorage.removeItem('clockInStatus');
        localStorage.removeItem('clockInTime');
      } else {
        console.error("Clock out failed with status code:", response.status);
      }
    } catch (error) {
      console.error("Clock out error:", error);
    }
  };
    
  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const validationSchema = Yup.object().shape({
    note: Yup.string().required("Note is required"),
    reason: Yup.string().required("Reason is required"),
    selectedDate: Yup.date().required("Date is required"),
    // comment: Yup.string().required("Comment is required*"),
  });
   useEffect(() => {
    console.log(userId, "userid");
  }, [userId]);

  const getUserLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        // Request the user's location
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        // Extract the latitude and longitude from the position object
        const { latitude, longitude } = position.coords;

        return { latitude, longitude };
      } else {
        throw new Error("Geolocation is not supported by your browser.");
      }
    } catch (error) {
      throw error;
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );

      // Extract location information from the response
      const placeName = response.data.display_name;
      return placeName;
    } catch (error) {
      throw error;
    }
  };
  const [userPlaceName, setUserPlaceName] = useState(""); // Added state for the place name
  const [formattedTimeSinceClockIn, setFormattedTimeSinceClockIn] = useState(
    "0h:0m:0s"
  );
  useEffect(() => {
    const storedClockInStatus = localStorage.getItem('clockInStatus');
    const storedClockInTime = localStorage.getItem('clockInTime');
  
    if (storedClockInStatus === 'in' && storedClockInTime) {
      setClockInTime(new Date(parseInt(storedClockInTime, 10)));
      setShowClockIn(false);
      setShowClockOut(true);
    }
  }, []);
  useEffect(() => {
    if (clockInTime) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const timeElapsed = now - clockInTime;
        const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
        const seconds = Math.floor((timeElapsed / 1000) % 60);

        setFormattedTimeSinceClockIn(
          `${hours}h:${minutes}m:${seconds}s`
        );
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }
  }, [clockInTime]);      
  const handleClockInClickBtn = async () => {
    try {
      setFormSubmitted(true);

      // Validate the comment field
      if (!comment) {
        throw new Error("Comment is required");
      }

      // Get the user's location
      const userLocation = await getUserLocation();

      // Get the user's place name using reverse geocoding
      const userPlace = await reverseGeocode(
        userLocation.latitude,
        userLocation.longitude
      );
      setUserPlaceName(userPlace); // Set the place name state
      const clockInData = {
        userId,
        comment,
        location: userPlace, 
      };
      setClockInTime(new Date());

      const response = await axios.post(
        "http://3.109.153.24:8081/api/v1/auth/clockin",
        clockInData
      );

       if (response.status === 200) {
        handleSnackbarOpen("clock-in successfull", "success");
        // setToastMessage('Clock in successful');      
         console.log("Clock in successful");
        console.log(response.data);
                setComment("");
              handleClose();
              localStorage.setItem('clockInStatus', 'in'); // 'in' means clocked in
              localStorage.setItem('clockInTime', new Date().getTime()); // Store the timestamp
              setShowClockIn(false);
              setShowClockOut(true);        
      } else {
   
         console.error("Clock in failed with status code:", response.status);
      }
    } catch (error) {
      // If validation fails, there's a location error, or there's an Axios error, handle the error
      console.error("Validation or Location or Axios Error:", error);
      if (error.message.includes("400")) {
        handleSnackbarOpen("Clock-in failed:You can only clock in once a day", "error");
      } else {
        console.error("Unexpected error while clocking in:", error);
        handleSnackbarOpen("Something went wrong while clocking in", "error");
      }
  
      // You can display the error message to the user as needed
      setValidationError(error.message);
    }
  };
  const [snackbarData, setSnackbarData] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const handleSnackbarOpen = (message, severity) => {
    setSnackbarData({
      open: true,
      message,
      severity,
    });
  };
  const handleSnackbarClose = () => {
    setSnackbarData({
      ...snackbarData,
      open: false,
    });
  };

  const formik = useFormik({
    initialValues: {
      note: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        // Your request handling logic goes here
        console.log("Submitting request with note:", values.note);
        handleCloseAttendanceRegularization();
      }
    },
  });
  const formikReason = useFormik({
    initialValues: {
      reason: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        // Your submission logic goes here
        console.log("Submitting reason:", values.reason);
        handleCloseRequest();
      }
    },
  });
  const formikPartial = useFormik({
    initialValues: {
      reason: "",
      // selectedDate: null,
    },
    validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        // Your submission logic goes here
        console.log("Submitting reason:", values.reason);
        handleCloseRequest();
      }
    },
  });

  const formattedTime = currentTime.toLocaleTimeString();
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  function FacebookCircularProgress(props) {
    return (
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
          }}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </Box>
    );
  }

  const [value, setValue] = useState("Add");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="main-attendace-container">
        <div className="attendance-starts-main">
          <div className="inner-Attendance">
            <h1>Attendance Stats</h1>
            <div className="inner-div-Attendance">
              <div className="card-attendance">
                <div className="text-Weekly">
                  <h2>Last Week</h2>
                  <img
                    style={{
                      width: "13px",
                    }}
                    src={vector}
                    alt="none"
                  />
                </div>
              </div>
              <div
                className="team-week"
                style={{
                  borderBottom: "1px solid lightgray",
                  // paddingBottom: '7px'
                }}
              >
                <div className="me">
                  <div className="me-box">
                    <img src={me} alt="me" />
                  </div>
                  <h3>Me</h3>
                </div>
                <div className="AVG">
                  <span>AVG HRS / DAY</span>
                  <h2>0h 0m</h2>
                </div>
                <div className="on-time">
                  <span>ON TIME ARRIVAL</span>
                  <h2>0%</h2>
                </div>
              </div>
              <div className="team-week">
                <div className="me">
                  <div className="me-box me-box1">
                    <img src={group} alt="group" />
                  </div>
                  <h3>Me</h3>
                </div>
                <div className="AVG">
                  <span>AVG HRS / DAY</span>
                  <h2>0h 0m</h2>
                </div>
                <div className="on-time">
                  <span>ON TIME ARRIVAL</span>
                  <h2>0%</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="main-timing-box">
            <h1>Timings</h1>
            <div
              className="main-week-timing"
            >
              <div className="week-circels">
                <div className="week-boxs">
                  <div className="week-box">M</div>
                  <div className="week-box">T</div>
                  <div className="week-box">W</div>
                  <div className="week-box">T</div>
                  <div className="week-box">F</div>
                  <div className="week-box week-box1">S</div>
                  <div className="week-box week-box1">S</div>
                </div>
                <div>
                  <img src={top} alt="top" /> &nbsp; &nbsp;
                  <img src={finger} alt="finger" />
                </div>
              </div>
              <div className="prosses-box">
                <h5>Today (10:00 AM - 7:00 PM)</h5>
                <div className="process-bar">
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                  </Box>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "var(--subPara1)",
                    color: "#B8B7BD",
                    margin: "12px 0 0 0",
                  }}
                >
                  <div>Duration: 9h 0m</div>
                  <div>Break: 60 Min</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-action-box">
            <h1 onClick={handleClickAttendanceRegularization}>Actions</h1>
            {showClockIn ? (
              <div
                className="inner-action-box"
                style={{ paddingTop: "20px", paddingBottom: "14px" }}
              >
                <div
                  className="top-btns-action-box"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <div className="timing-clock">
                    <div className="border-timer">
                      {formattedTime}
                      {/* <span>PM</span> */}
                    </div>
                    <h5>{formattedDate}</h5>
                  </div>
                  <div className="action-btns-clockIn">
                    <p onClick={handleClickOpen}>Web Clock-in</p>
                    <p onClick={handleOpenRemote}>Remote in</p>
                    <p onClick={handleClickRequest}>Work From Home</p>
                    <p onClick={handleClickAttendance}>On Duty</p>
                    <p onClick={handleClickPartial}>Partial Day</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="inner-action-box"
                style={{ paddingTop: "20px", paddingBottom: "10px" }}
              >
                <div className="top-btns-action-box">
                  <div className="timing-clock">
                    <div className="border-timer">
                      {formattedTime}
                      {/* <span>PM</span> */}
                    </div>
                    <h5>{formattedDate}</h5>
                  </div>
                  <div className="remote-clock">
                    <button
                      className="timing-clock-btn"
                      onClick={handleClockOutClick}
                    >
                      Remote Clock-out
                    </button>
                    <h5 className="time">
                    <span style={{fontSize:"13px",color:"black",fontWeight:"bold"}}>{formattedTimeSinceClockIn}</span><span style={{marginLeft:"5px"}}>Since Last Login</span>
                    </h5>
                  </div>
                </div>
                <div className="action-btns">
                  <p>Remote in</p>
                  <p>Work From Home</p>
                  <p>On Duty</p>
                  <p>Partial Day</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="logs-req">
          <h2>Logs & Requests</h2>
          <div className="toggle-text">
            <span
              style={{
                color: "#7B7373",
              }}
            >
              24 Hour Format
            </span>
            <PinkSwitch {...label} defaultChecked />
          </div>
        </div>
        <div>
          <div className="section-1 me-section attendeance-menu">
            <div className="home-page me-page attendeance-page">
              <p
                className={`para-menu ${
                  selectedOption === "Attendance Log" ? "active" : ""
                }`}
                onClick={() => handleMenuClick("Attendance Log")}
              >
                Attendance Log
              </p>
              <p
                className={`para-menu ${
                  selectedOption === "Shift Schedule" ? "active" : ""
                }`}
                onClick={() => handleMenuClick("Shift Schedule")}
              >
                Shift Schedule
              </p>
              <p
                className={`para-menu ${
                  selectedOption === "Attendance Requests" ? "active" : ""
                }`}
                onClick={() => handleMenuClick("Attendance Requests")}
              >
                Attendance Requests
              </p>
            </div>
          </div>
          <div>
            {selectedOption === "Attendance Log" && <AttendanceLog />}
            {selectedOption === "Shift Schedule" && <ShiftSchedule />}
            {selectedOption === "Attendance Requests" && <AttendanceRequest />}
          </div>
        </div>
      </div>
 
      {/* dialogs start */}
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          style={{ borderRadius: "0" }}
        >
          <DialogTitle
            style={{
              background: "#7367F0",
              color: "white",
              fontSize: "var(--mainHeading)",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Web Clock “In” Request
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <p
              style={{
                margin: "5px 0px 10px 0px",
                fontSize: "var(--mainHeading)",
                fontFamily: "Public Sans",
                color: "#6D6976",
              }}
            >
              Adding comment is made mandatory by your HR Manager
            </p>
            <textarea
              rows="5"
              cols="70"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                // Clear the validation error when the user starts typing again
                setValidationError("");
              }}
              style={{
                fontSize: "13px",
                fontFamily: "Public Sans",
                color: "black",
                outline: "none",
                border: "1px solid #7367F0",
                borderRadius: "3px",
              }}
            ></textarea>
            {formSubmitted && !comment && (
              <div
                style={{
                  color: "red",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                Comment is required*
              </div>
            )}
            <br />
            <br />
          </DialogContent>
          <DialogActions style={{ margin: "0 7px 15px 0px" }}>
            <Button
              style={{
                border: "1px solid #7367F0",
                color: "#7367F0",
                padding: "4px 14px",
                marginRight: "10px",
              }}
              autoFocus
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{
                background: "#7367F0",
                color: "#ffffff",
                padding: "5px 14px",
              }}
              autoFocus
              onClick={handleClockInClickBtn}
            >
              Confirm
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleCloseRequestPartial}
          aria-labelledby="customized-dialog-title"
          open={openPartial}
          style={{ borderRadius: "0" }}
        >
          <DialogTitle
            style={{
              background: "#7367F0",
              color: "white",
              fontSize: "16px",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Partial Day Request
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseRequestPartial}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <h3
              style={{
                margin: "2px 0px",
                fontFamily: "var(--font-public-sans)",
                fontSize: "14px",
              }}
            >
              Select Date
            </h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Select Date"
                  value={formikPartial.values.selectedDate}
                  onChange={(date) =>
                    formikPartial.setFieldValue("selectedDate", date)
                  }
                  onBlur={() =>
                    formikPartial.setFieldTouched("selectedDate", true)
                  }
                />
              </DemoContainer>
            </LocalizationProvider>
            {formikPartial.touched.selectedDate &&
              formikPartial.errors.selectedDate && (
                <div
                  style={{
                    color: "red",
                    fontFamily: "var(--font-public-sans)",
                  }}
                >
                  {formikPartial.errors.selectedDate}
                </div>
              )}
            <br />
            <div style={{ display: "flex", justifyContent: "start" }}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Late Arrival"
                    control={<Radio size="small" />}
                    label="Late Arrival"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Leaving Early"
                    control={<Radio size="small" />}
                    label="Leaving Early"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontFamily: "var(--font-public-sans)",
                fontSize: "14px",
                color: "#6D6976",
                fontWeight: "400",
              }}
            >
              <h3 style={{ fontWeight: "400" }}>Will come late by &nbsp;</h3>
              <div style={{ marginTop: "13px" }}>
                <input style={{ width: "70px", height: "10px" }} />
              </div>
              <h3 style={{ fontWeight: "400" }}> &nbsp; minutes</h3>
            </div>
            <FormControl>
              <FormLabel
                sx={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Reason
              </FormLabel>
              <TextareaAutosize
                minRows={5}
                style={{
                  width: "100%",
                  minWidth: "530px",
                  border: "1px solid #C9C9C9",
                  outline: "none",
                  borderRadius: "4px",
                  padding: "5px",
                }}
                id="reason"
                name="reason"
                onChange={formikPartial.handleChange}
                onBlur={formikPartial.handleBlur}
                value={formikPartial.values.reason}
              />
              {formikPartial.touched.reason && formikPartial.errors.reason && (
                <div
                  style={{
                    color: "red",
                    fontFamily: "var(--font-public-sans)",
                  }}
                >
                  {formikPartial.errors.reason}
                </div>
              )}
            </FormControl>
            <br />
            <br />
            <br />
            <FormControl>
              <FormLabel
                sx={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Notify
              </FormLabel>
              <input
                placeholder="Search Employee"
                minRows={4}
                style={{
                  width: "100%",
                  minWidth: "530px",
                  border: "none",
                  borderBottom: "1px solid #C9C9C9",
                  outline: "none",
                  borderRadius: "4px",
                  padding: "5px",
                  fontFamily: "var(--font-public-sans)",
                }}
              />
            </FormControl>
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "14px",
              }}
            >
              These employees will be notified through mail when your partial
              day request is approved.
            </p>
          </DialogContent>
          <DialogActions style={{ margin: "0 7px 15px 0px" }}>
            <Button
              style={{
                border: "1px solid #7367F0",
                color: "#7367F0",
                padding: "4px 14px",
                marginRight: "10px",
              }}
              autoFocus
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{
                background: "#7367F0",
                color: "#ffffff",
                padding: "5px 14px",
              }}
              autoFocus
              onClick={formikPartial.handleSubmit}
            >
              Confirm
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleCloseAttendance}
          aria-labelledby="customized-dialog-title"
          open={openCloseAttendance}
          style={{ borderRadius: "0" }}
        >
          <DialogTitle
            style={{
              background: "#7367F0",
              color: "white",
              fontSize: "16px",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Qloron Technology Shift(Aug 30)
            <p style={{ margin: "1px 0" }}>10:00 AM - 7:00 PM</p>
          </DialogTitle>
          <DialogContent
            style={{
              fontFamily: "Public Sans",
            }}
          >
            <div style={{ margin: "15px 0" }}>
              <div
                style={{
                  display: "flex",
                  justifyItems: "flex-start",
                }}
              >
                <img style={{ cursor: "pointer" }} src={pencil} alt="pencil" />
                &nbsp; &nbsp;
                <p style={{ margin: "8px", color: "#7367F0" }}>Regularize</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyItems: "flex-start",
                }}
              >
                <img style={{ cursor: "pointer" }} src={pencil} alt="pencil" />
                &nbsp;&nbsp;{" "}
                <p style={{ margin: "8px", color: "#7367F0" }}>
                  Apply Partial Day
                </p>
              </div>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "var(--mainHeading)",
                  margin: "0",
                  color: "#6D6976",
                }}
              >
                Remote Clock In
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#6D6976",
                  }}
                >
                  <img
                    src={arrowRight}
                    alt="arorright"
                    style={{
                      width: "45px",
                      cursor: "pointer",
                      marginLeft: "-11px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        border: "1px solid white",
                        fontSize: "15px",
                        color: "#6D6976",
                      }}
                    >
                      9:04:43 AM
                    </p>
                    &nbsp;
                    <img
                      style={{
                        marginBottom: "2px",
                        width: "18px",
                        cursor: "pointer",
                      }}
                      src={comment}
                      alt="comment"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid white",
                    marginLeft: "20px",
                  }}
                >
                  <img
                    src={arroRed}
                    alt="arorright"
                    style={{
                      width: "45px",
                      cursor: "pointer",
                    }}
                  />{" "}
                  <p style={{ fontSize: "15px", color: "#6D6976" }}>
                    7:20:07 PM
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleCloseRequest}
          aria-labelledby="customized-dialog-title"
          open={openWFH}
          style={{ borderRadius: "0" }}
        >
          <DialogTitle
            style={{
              background: "#7367F0",
              color: "white",
              fontSize: "16px",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Work From Home Request
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseRequest}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <FormControl>
              <FormLabel
                sx={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Reason
              </FormLabel>
              <TextareaAutosize
                minRows={5}
                style={{
                  width: "100%",
                  minWidth: "530px",
                  border: "1px solid #C9C9C9",
                  outline: "none",
                  borderRadius: "4px",
                  padding: "5px",
                }}
                id="reason"
                name="reason"
                onChange={formikReason.handleChange}
                onBlur={formikReason.handleBlur}
                value={formikReason.values.reason}
              />
              {formikReason.touched.reason && formikReason.errors.reason && (
                <div
                  style={{
                    color: "red",
                    fontFamily: "var(--font-public-sans)",
                  }}
                >
                  {formikReason.errors.reason}
                </div>
              )}
            </FormControl>
            <div style={{ display: "flex", margin: "15px 0" }}>
              <img
                src={file}
                alt="file"
                style={{ cursor: "pointer", width: "12px" }}
              />
              <p
                style={{
                  color: "#7367F0",
                  cursor: "pointer",
                  fontSize: "16px",
                  margin: "0px 8px",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                Add Attachment
              </p>
              <Tooltip
                arrow
                title={longText}
                style={{
                  fontFamily: "var(--font-public-sans)",
                  lineHeight: "50px",
                }}
              >
                <img
                  src={nullimg}
                  alt="nullimg"
                  style={{ cursor: "pointer", width: "14px" }}
                />
              </Tooltip>
            </div>
            <br />
            <br />
            <FormControl>
              <FormLabel
                sx={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Notify
              </FormLabel>
              <input
                placeholder="Search Employee"
                minRows={4}
                style={{
                  width: "100%",
                  minWidth: "530px",
                  border: "none",
                  borderBottom: "1px solid #C9C9C9",
                  outline: "none",
                  borderRadius: "4px",
                  padding: "5px",
                  fontFamily: "var(--font-public-sans)",
                }}
              />
            </FormControl>
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "14px",
              }}
            >
              These employees will be notified through mail when your partial
              day request is approved.
            </p>
          </DialogContent>
          <br />
          <br />
          <DialogActions>
            <BorderButton autoFocus onClick={handleCloseRequest}>
              Cancel
            </BorderButton>
            <BgButton onClick={formikReason.handleSubmit} autoFocus>
              Request
            </BgButton>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleCloseAttendanceRegularization}
          aria-labelledby="customized-dialog-title"
          open={attendanceRegularization}
          style={{ borderRadius: "0" }}
        >
          <DialogTitle
            style={{
              background: "#7367F0",
              color: "white",
              fontSize: "16px",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Request Attendance Regularization - 22 Sept, 2023
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseAttendanceRegularization}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="add"
                  control={<Radio />}
                  label={
                    <span style={{ fontSize: "16px" }}>
                      Add/update time entries to adjust attendance logs.
                    </span>
                  }
                />
                <FormControlLabel
                  value="update"
                  control={<Radio />}
                  label={
                    <span style={{ fontSize: "16px" }}>
                      Raise regularization request to exempt this day from
                      tracking policy penalization.
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />

            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "13px",
                fontWeight: "400",
                color: "#C9C9C9",
              }}
            >
              Click and select time stamp box that you would like to adjust and
              make changes to the time
            </p>

            <div style={{ fontFamily: "var(--font-public-sans)" }}>
              <h2 style={{ fontSize: "var(--mainHeading)", margin: "0" }}>
                Attendance Adjustment
              </h2>
              <button
                style={{
                  border: "1px solid #7367F0",
                  color: "#7367F0",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  margin: "10px 0",
                  fontSize: "var(--subHeading)",
                }}
              >
                + Add Log
              </button>
            </div>
            <br />
            <div
              style={{ fontFamily: "var(--font-public-sans)", width: "55%" }}
            >
              <h2 style={{ fontSize: "var(--mainHeading)", margin: "0" }}>
                Remote Clock In
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#6D6976",
                  }}
                >
                  <img
                    src={arrowRight}
                    alt="arorright"
                    style={{
                      width: "45px",
                      cursor: "pointer",
                      marginLeft: "-11px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        cursor: "pointer",
                        fontSize: "var(--mainHeading)",
                        color: "white",
                        padding: "10px 14px",
                        background: "#2BD35A",
                        borderRadius: "3PX",
                      }}
                    >
                      9:58 am
                    </p>
                    &nbsp;
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid white",
                    marginLeft: "20px",
                  }}
                >
                  <img
                    src={arroRed}
                    alt="arorright"
                    style={{
                      width: "45px",
                      cursor: "pointer",
                    }}
                  />{" "}
                  <p
                    style={{
                      cursor: "pointer",
                      fontSize: "var(--mainHeading)",
                      color: "white",
                      padding: "10px 14px",
                      background: "#FC7C8C",
                      borderRadius: "3PX",
                    }}
                  >
                    MISSING
                  </p>
                </div>
              </div>
            </div>

            <FormControl>
              <FormLabel
                sx={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Note
              </FormLabel>
              <TextareaAutosize
                minRows={5}
                style={{
                  width: "100%",
                  minWidth: "530px",
                  border: "1px solid #C9C9C9",
                  outline: "none",
                  borderRadius: "4px",
                  padding: "5px",
                }}
                id="note"
                name="note"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.note}
              />
              {formik.touched.note && formik.errors.note && (
                <div
                  style={{
                    color: "red",
                    fontFamily: "var(--font-public-sans)",
                  }}
                >
                  {formik.errors.note}
                </div>
              )}
            </FormControl>
            <br />
            <br />
          </DialogContent>
          <br />
          <br />
          <DialogActions>
            <BorderButton
              autoFocus
              onClick={handleCloseAttendanceRegularization}
            >
              Cancel
            </BorderButton>
            <BgButton onClick={formik.handleSubmit} autoFocus>
              Request
            </BgButton>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleCloseRemote}
          aria-labelledby="customized-dialog-title"
          open={openRemote}
          style={{ borderRadius: "0" }}
        >
          <DialogTitle
            style={{
              background: "#7367F0",
              color: "white",
              fontSize: "var(--mainHeading)",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Remote Clock “In” Request
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseRemote}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <p
              style={{
                margin: "5px 0px 10px 0px",
                fontSize: "var(--mainHeading)",
                fontFamily: "Public Sans",
                color: "#6D6976",
              }}
            >
              Adding comment is made mandatory by your HR Manager
            </p>
            <textarea
              rows="5"
              cols="70"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                // Clear the validation error when the user starts typing again
                setValidationError("");
              }}
              style={{
                fontSize: "13px",
                fontFamily: "Public Sans",
                color: "black",
                outline: "none",
                border: "1px solid #7367F0",
                borderRadius: "3px",
              }}
            ></textarea>
            {/* Display the validation error message */}
            <div
              style={{ color: "red", fontFamily: "var(--font-public-sans)" }}
            >
              {validationError}
            </div>
            <br />
          </DialogContent>
          <DialogActions style={{ margin: "0 7px 15px 0px" }}>
            <Button
              style={{
                border: "1px solid #7367F0",
                color: "#7367F0",
                padding: "4px 14px",
                marginRight: "10px",
              }}
              autoFocus
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{
                background: "#7367F0",
                color: "#ffffff",
                padding: "5px 14px",
              }}
              autoFocus
            >
              {/* onClick={handleClockInClickBtn}> */}
              Confirm
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <Snackbar
        open={snackbarData.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarData.severity}
        >
          {snackbarData.message}
        </Alert>
      </Snackbar>

    </>
  );
}

export default React.memo(Attendance);