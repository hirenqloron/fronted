import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import styleCss from "./addEmployeDialog.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import sun from "../../../../../image/Sun.svg";
import Switch from "@mui/material/Switch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DialogContent from "@mui/material/DialogContent";
import { Grid, StepLabel, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Input from "../../../../../components/Input/Input.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Public Sans",
          color: "#6d6976",
          "&:hover": {
            backgroundColor: "#E8E7FD",
            color: "#7367F0",
          },
        },
      },
    },
  },
});

const stylesed = {
  width: "100%",
  height: "35px",
  border: "0.7px solid #7367f0",
  borderRadius: "5px",
};
const labelStyle = {
  fontSize: "14.35px",
  color: "black",
};
const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  color: "white",
  padding: "5px 10px",
  borderRadius: "50%",
}));

const BorderButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  border: "1px solid #7367F0",
  color: "#7367F0",
  padding: "8px 14px",
  "&:hover": {
    backgroundColor: "white",
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
const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#7367F0",
    //   '&:hover': {
    //     backgroundColor: '#E1D8D8',
    //   },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#7367F0",
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

const BootstrapInputLast = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  "& .employeeNumber": {
    backgroundColor: "#C9C9C9",
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    minWidth: "158px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const AddEmployeDialog = ({ handleClickOpen, handleClose, open }) => {
  const [age, setAge] = useState(1);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [requestData, setRequestData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    numberSeries: '',
  });

  const handleChangehandle = (event) => {
    setAge(event.target.value);
  };

  const [openn, setOpenn] = useState(false);

  const handleClickOpn = () => {
    setOpenn(true);
  };
  const handleClse = () => {
    setOpenn(false);
  };

  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange = (date) => {
    setSelectedDate(date); // Store the selected date in state
    //  initialValues.toDate = date ;// dayjs(date).format('YYYY/MM/DD')
  };

  const handleInputChangeRequestData = (event) => {
    const { name, value } = event.target;
    setRequestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("setRequestData", requestData);

  const steps = [
    {
      label: "BASIC DETAILS",
      description: (
        <>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="text"
              label="First Name"
              placeholder="First Name"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  firstName: e.target.value,
                }));
              }}
              p1={true}
            />

            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="text"
              label="Middle Name"
              placeholder="Middle Name"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              // onChange={(e) => {
              //     setRequestData((prevData) => ({
              //         ...prevData,
              //         firstName: e.target.value,
              //     }))
              // }}
              p1={true}
            />

            {/* <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Last Name / Family Name
                            </InputLabel>
                            <BootstrapInput placeholder='Last Name' id="bootstrap-input" />
                        </FormControl> */}

            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  lastName: e.target.value,
                }));
              }}
              p1={true}
            />

            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="text"
              label="Display Name"
              placeholder="Display Name"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              // onChange={(e) => {
              //     setRequestData((prevData) => ({
              //         ...prevData,
              //         firstName: e.target.value,
              //     }))
              // }}
              p1={true}
            />
          </Box>
          <br />
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
              // flexGrow: 1,
              // display: 'flex', flexWrap: 'wrap' ,
              // justifyContent:'space-around',
            }}
          >
            {/* <FormControl>
                            <InputLabel shrink htmlFor="bootstrap-input" sx={{ marginLeft: '-1rem' }}>
                                Gender
                            </InputLabel>
                            <Select
                                input={<BootstrapInput />}
                            // onChange={handleChangehandle}

                            >
                                <MenuItem value='Male'>Male</MenuItem>
                                <MenuItem value='Female'>Female</MenuItem>
                                <MenuItem value='Other'>Other</MenuItem>
                            </Select>

                        </FormControl> */}

            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Gender
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={requestData.role}
                    // onChange={(e) => {
                    //   setRequestData((prevData) => ({
                    //     ...prevData,
                    //     role: e.target.value,
                    //   }));
                    // }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>

            {/* <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Date Of Birth
                            </InputLabel>
                            <div style={{
                                marginTop: '0.8rem',
                            }}
                            >
                                <LocalizationProvider dateAdapter={AdapterDayjs}
                                    className="datePickerDob"
                                >
                                    <DemoContainer components={['DatePicker']} name="dob"

                                    >
                                        <DatePicker
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <BootstrapInput {...params} id="bootstrap-input" />}
                                            sx={{ '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': { fontSize: '14px', height: '1rem' } }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        </FormControl> */}
            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="date"
              label="Date Of Birth"
              placeholder=""
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              // onChange={(e) => {
              //     setRequestData((prevData) => ({
              //         ...prevData,
              //         firstName: e.target.value,
              //     }))
              // }}
              p1={true}
            />
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Role
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={requestData.role}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        role: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    {/* <MenuItem value="ROLE_ADMIN">Admin</MenuItem> */}
                    <MenuItem value="ROLE_USER">User</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>

          <br />
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            {/* <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Email
                            </InputLabel>
                            <BootstrapInput placeholder='Enter Email' id="bootstrap-input" />
                        </FormControl> */}
            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="email"
              label="Email"
              placeholder="Email"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.email}
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
              p1={true}
            />
            {/* <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Mobile Number
                            </InputLabel>
                            <BootstrapInput type="number" placeholder='Mobile Phone' id="bootstrap-input" />
                        </FormControl> */}

            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="number"
              label="Mobile Number"
              placeholder="Mobile Number"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  mobileNumber: e.target.value,
                }));
              }}
              p1={true}
            />

            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="password"
              label="Password"
              placeholder="Password"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.password}
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }));
              }}
              p1={true}
            />

            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="password"
              label="Confirm Password"
              placeholder="confirm Password"
              labelSize="14.35px"
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  confirmPassword: e.target.value,
                }));
              }}
              p1={true}
            />
          </Box>
          <br />
          <Box
            component="form"
            noValidate
            sx={{
              // flexGrow: 1,
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Work Type
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={requestData.role}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        workType: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value="Permanent">Permanent</MenuItem>
                    <MenuItem value="CONTINGENT">CONTINGENT WORKER</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                    <MenuItem value="Intern">Intern</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Number Series
                  </label>
                  <br />
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        numberSeries: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value="Default Number Series">
                      Default Number Series
                    </MenuItem>
                    <MenuItem value="Manually">Manually</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>

            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="number"
              label="Employee Number"
              placeholder="Employee Number"
              labelSize="14.35px"
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  employeeNumber: e.target.value,
                }));
              }}
              p1={true}
              disabled={requestData.numberSeries === "Default Number Series"}
            />
          </Box>
        </>
      ),
    },
    {
      label: "JOB DETAILS",
      description: (
        <>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="date"
              label="Joining Date"
              placeholder=""
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              onChange={(e) => {
                setRequestData((prevData) => ({
                  ...prevData,
                  joiningDate: e.target.value,
                }));
              }}
              p1={true}
            />
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Job Title
                  </label>
                  <br />
                  <Select
                    style={stylesed}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.jobTitle}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setRequestData((prevData) => ({
                        ...prevData,
                        jobTitle: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="">
                      Select
                    </MenuItem>
                    <MenuItem value="Software Developer">
                      Software Developer
                    </MenuItem>
                    <MenuItem value="Business Developer">
                      Business Developer
                    </MenuItem>
                    <MenuItem value="Business & Operations Head">
                      Business & Operations Head
                    </MenuItem>
                    <MenuItem value="HR & BDE">HR & BDE</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                    <MenuItem value="Graphic Designer">
                      Graphic Designer
                    </MenuItem>
                    <MenuItem value="Founder & CEO">Founder & CEO</MenuItem>
                    <MenuItem value="Account Department">
                      Account Department
                    </MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <Input
              width="100%"
              height="18px"
              color="#7367F0"
              type="date"
              label="Secondary Job Title"
              placeholder="Secondary Job Title"
              labelSize="14.35px"
              // name={`developers[${index}].developerName`}
              // value={requestData.lastName}
              // onChange={(e) => {
              //     setRequestData((prevData) => ({
              //         ...prevData,
              //         firstName: e.target.value,
              //     }))
              // }}
              p1={true}
            />
          </Box>
          <br />
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Time Type
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.timeType}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        timeType: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Reporting Manager
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.reportingManager}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        reportingManager: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Snehal Baraskar"}>Snehal Baraskar</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
          <br />
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Legal Entity
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.legalEntity}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        legalEntity: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value="Select Legal Entity">Select Legal Entity</MenuItem>
                    <MenuItem value="Sortboxs Pvt Ltd">Sortboxs Pvt Ltd</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Business Unit
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.businessunit}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        businessunit: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value="Select Business Unit">Select Business Unit</MenuItem>
                    <MenuItem value="Sortboxs Pvt Ltd">Sortboxs Pvt Ltd</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Department
                  </label>
                  <br />
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.department}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        department: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value="Select Department">Select Department</MenuItem>
                    <MenuItem value="Software Department">Software Department</MenuItem>
                    <MenuItem value="Business Development">Business Development</MenuItem>
                    <MenuItem value="Human Resources">Human Resources</MenuItem>
                    <MenuItem value="Account Department">Account Department</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
          <br />
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Location
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.location}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        location: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
          <div>
            <h1 style={{ color: "#7367F0", fontSize: "16px" }}>Advanced</h1>
          </div>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Probation Policy
                  </label>
                  <br />
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.probationPolicy}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        probationPolicy: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Probation Policy"}>Probation Policy</MenuItem>
                    <MenuItem value={"Sortboxs Probation Policy"}>Sortboxs Probation Policy</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Notice Period
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.noticePeriod}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        noticePeriod: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Notice Period"}>Notice Period</MenuItem>
                    <MenuItem value={"Sortboxs Notice Period"}>Sortboxs Notice Period</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
        </>
      ),
    },
    {
      label: "WORK DETAILS",
      description: (
        <>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <FormControl>
              <div className="check-div-box">
                <Checkbox
                  defaultChecked
                  style={{ color: "#7367F0" }}
                  onChange={(e) => {
                    setRequestData((prevData) => ({
                      ...prevData,
                      inviteEmployeeToLogin: e.target.checked ? "Yes" : "No",
                    }));
                  }}
                />
                <label className="label-input-text-filter" for="vehicle1">
                  Invite Employee to Login
                </label>
              </div>
            </FormControl>
            <FormControl>
              <div>
                <Checkbox
                  defaultChecked
                  style={{ color: "#7367F0" }}
                  onChange={(e) => {
                    setRequestData((prevData) => ({
                      ...prevData,
                      enableOnboardingFlow: e.target.checked ? "Yes" : "No",
                    }));
                  }}
                />
                <label className="label-input-text-filter" for="vehicle1">
                  Enable Onboarding Flow
                </label>
              </div>
            </FormControl>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  {/* <label style={labelStyle} htmlFor="">
                                        Leave Plan
                                    </label> */}
                  <br />
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={requestData.role}
                    // onChange={(e) => {
                    //   setRequestData((prevData) => ({
                    //     ...prevData,
                    //     role: e.target.value,
                    //   }));
                    // }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={1}>Notice Period</MenuItem>
                    <MenuItem value={2}>Sortboxs Notice Period</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
          <br />
          <div>
            <h1 style={{ color: "#7367F0", fontSize: "16px" }}>
              Time & Attendance Settings
            </h1>
          </div>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Leave Plan
                  </label>
                  <br />
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.leavePlan}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        leavePlan: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Sortboxs leave plan"}>Sortboxs leave plan</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Shift
                  </label>
                  <br />
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.shift}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        shift: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Sortboxs Shift"}>Sortboxs Shift</MenuItem>
                    <MenuItem value={"Morning Shift"}>Morning Shift</MenuItem>
                    <MenuItem value={"Afternoon Shift"}>Afternoon Shift</MenuItem>
                    <MenuItem value={"General Shift"}>General Shift</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Weekly Off
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.weeklyOff}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        weeklyOff: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Weekly Off"}>Weekly Off</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
          <br />
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Attendance Number
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.attendanceNumber}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        attendanceNumber: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Enter Attendance Number"}>Enter Attendance Number</MenuItem>
                    <MenuItem value={"Part Time"}>Part Time</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Holidays List
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.holidaysList}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        holidaysList: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Enter Attendance Number"}>Enter Attendance Number</MenuItem>
                    <MenuItem value={"Part Time"}>Part Time</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
          <br />
          <div>
            <h1 style={{ color: "#7367F0", fontSize: "16px" }}>
              DISABLE ATTENDANCE TRACKING LIST
            </h1>
          </div>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Attendance Capture Scheme
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.attandancecaptureScheme}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        attandancecaptureScheme: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Sortboxs Tracking Policy"}>Sortboxs Tracking Policy</MenuItem>
                    <MenuItem value={"Part Time"}>Part Time</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Attendance Tracking Policy
                  </label>
                  <br />
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.attandancetrakingPolicy}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        attandancetrakingPolicy: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Sortboxs Tracking Policy"}>Sortboxs Tracking Policy</MenuItem>
                    <MenuItem value={"Part Time"}>Part Time</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Overtime Policy
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.overtimePolicy}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        overtimePolicy: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Weekly Off"}>Weekly Off</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
          <br />
          <Box
            sx={{
              background: "#7367F0",
              padding: "15px 25px",
              borderRadius: "3px",
            }}
          >
            <div style={{ display: "flex", color: "white" }}>
              <img src={sun} alt="sun" /> &nbsp; &nbsp;
              <div>
                <h1 style={{ margin: "0", fontSize: "16px" }}>
                  Disabiling attendance tracking will :
                </h1>
              </div>
            </div>
            <br />
            <div
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "10px",
                    background: "white",
                  }}
                ></div>
              </div>{" "}
              &nbsp; &nbsp;
              <div>
                <p style={{ margin: "0", fontSize: "16px" }}>
                  Exclude employee from Absconding list.
                </p>
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "10px",
                    background: "white",
                  }}
                ></div>
              </div>{" "}
              &nbsp; &nbsp;
              <div>
                <p style={{ margin: "0", fontSize: "16px" }}>
                  Exclude employee from all Attendance reports, dashboards and
                  analytics.
                </p>
              </div>
            </div>
          </Box>
          <br />
          <div>
            <h1 style={{ color: "#7367F0", fontSize: "16px" }}>
              Other Settings
            </h1>
          </div>
          <br />
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <label style={labelStyle} htmlFor="">
                    Expense Policy
                    {/* <span style={importantStyle}>*</span> */}
                  </label>
                  <br />
                  {/* {console.log(formData.tds)} */}
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={requestData.expencePolicy}
                    onChange={(e) => {
                      setRequestData((prevData) => ({
                        ...prevData,
                        expencePolicy: e.target.value,
                      }));
                    }}
                    sx={{
                      fontSize: "14.35px",
                      "& .MuiSelect-select": {
                        padding: "10px",
                        color: "#6D6976",
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
                    <MenuItem disabled value="l">
                      Select
                    </MenuItem>
                    <MenuItem value={"Select expense policy"}>Select expense policy</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </Box>
        </>
      ),
    },
    {
      label: "COMPENSATION",
      description: (
        <>
          <div>
            <div className="toggle-text">
              <PinkSwitch {...label} defaultChecked />
              <span
                style={{
                  color: "#7B7373",
                }}
              >
                {" "}
                Enable Payroll for this employee
              </span>
            </div>
            <br />
            <Box
              component="form"
              noValidate
              sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
                gap: 2,
              }}
            >
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Pay Group
                      {/* <span style={importantStyle}>*</span> */}
                    </label>
                    <br />
                    {/* {console.log(formData.tds)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={requestData.paygroup}
                      onChange={(e) => {
                        setRequestData((prevData) => ({
                          ...prevData,
                          paygroup: e.target.value,
                        }));
                      }}
                      sx={{
                        fontSize: "14.35px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          color: "#6D6976",
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
                      <MenuItem disabled value="l">
                        Select
                      </MenuItem>
                      <MenuItem value={"Default Pay Group"}>Default Pay Group</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Annual Salary
                      {/* <span style={importantStyle}>*</span> */}
                    </label>
                    <br />
                    {/* {console.log(formData.tds)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={requestData.annualSalary}
                      onChange={(e) => {
                        setRequestData((prevData) => ({
                          ...prevData,
                          annualSalary: e.target.value,
                        }));
                      }}
                      sx={{
                        fontSize: "14.35px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          color: "#6D6976",
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
                      <MenuItem disabled value="l">
                        Select
                      </MenuItem>
                      <MenuItem value={"300000"}>300000 Per Annum</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
            </Box>
            <br />
            {/* <h1
                                style={{
                                    color: '#7367F0',
                                    fontSize: '16px'
                                }}>
                                +Add Bonus
                            </h1> */}
            <div style={{ background: "#E7EAF8", padding: "10px" }}>
              {/* <Box component="form"
                                noValidate
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { sm: '0r 1fr 1fr 1fr' },
                                    gap: 2
                                }}>
                                <InputLabel shrink htmlFor="bootstrap-input" style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'end',
                                    color: '#7367F0',
                                    fontSize: '20px',
                                    border: '1px solid red'
                                }}>
                                    BONUS
                                </InputLabel>
                                <FormControl variant="standard">
                                    <BootstrapInput placeholder='Enter Bonus Amount' id="bootstrap-input" />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        input={<BootstrapInput />}
                                        value={age}
                                        onChange={handleChangehandle}
                                    >
                                        <MenuItem value={1}>Select or Create Bonus</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard">
                                    <BootstrapInput placeholder='Payout Date' id="bootstrap-input" />
                                </FormControl>
                            </Box> */}
              <br />
              <Box
                component="form"
                noValidate
                sx={{
                  paddingLeft: "213px",
                }}
              >
                <FormControl variant="standard" fullWidth>
                  <BootstrapInputLast placeholder="Note" id="bootstrap-input" />
                </FormControl>
              </Box>
            </div>
            <br />
            <div>
              <h1 style={{ color: "#7367F0", fontSize: "16px" }}>
                Payroll Settings
              </h1>
            </div>
            <Box
              component="form"
              noValidate
              sx={{
                display: "grid",
                gridTemplateColumns: { sm: "2fr 1fr 1fr 1fr" },
                gap: 2,
              }}
            >
              <FormControl>
                <div>
                  <Checkbox
                    // defaultChecked
                    style={{ color: "#7367F0" }}
                  />
                  <label className="label-input-text-filter" for="vehicle1">
                    {" "}
                    Provident Fund (PF) Eligible
                  </label>
                </div>
              </FormControl>
            </Box>
            <br />
            <div>
              <h1 style={{ color: "#7367F0", fontSize: "16px" }}>
                <span
                  style={{
                    background: "#7367F0",
                    padding: "10px 15px",
                    color: "#ffffff",
                    borderRadius: "4px",
                  }}
                >
                  ESI not applicable for the selected Pay Group
                </span>
              </h1>
            </div>
            <br />
            <Box
              component="form"
              noValidate
              sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
                gap: 2,
              }}
            >
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Salary Structure Type
                      {/* <span style={importantStyle}>*</span> */}
                    </label>
                    <br />
                    {/* {console.log(formData.tds)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      // value={requestData.role}
                      // onChange={(e) => {
                      //   setRequestData((prevData) => ({
                      //     ...prevData,
                      //     role: e.target.value,
                      //   }));
                      // }}
                      sx={{
                        fontSize: "14.35px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          color: "#6D6976",
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
                      <MenuItem disabled value="l">
                        Select
                      </MenuItem>
                      <MenuItem value={1}>Range Based</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Custom Salary Structures
                      {/* <span style={importantStyle}>*</span> */}
                    </label>
                    <br />
                    {/* {console.log(formData.tds)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      // value={requestData.role}
                      // onChange={(e) => {
                      //   setRequestData((prevData) => ({
                      //     ...prevData,
                      //     role: e.target.value,
                      //   }));
                      // }}
                      sx={{
                        fontSize: "14.35px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          color: "#6D6976",
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
                      <MenuItem disabled value="l">
                        Select
                      </MenuItem>
                      <MenuItem value={1}>SortboxsSalary structure</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Tax Regime to Consider
                      {/* <span style={importantStyle}>*</span> */}
                    </label>
                    <br />
                    {/* {console.log(formData.tds)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      // value={requestData.role}
                      // onChange={(e) => {
                      //   setRequestData((prevData) => ({
                      //     ...prevData,
                      //     role: e.target.value,
                      //   }));
                      // }}
                      sx={{
                        fontSize: "14.35px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          color: "#6D6976",
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
                      <MenuItem disabled value="l">
                        Select
                      </MenuItem>
                      <MenuItem value={1}>New Regime (Section 115BAC)</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
              <FormControl
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "#7367F0",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                <span
                  onClick={handleClickOpn}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ paddingBottom: "20px" }}
                >
                  View Salary Breakup
                </span>
              </FormControl>
            </Box>
          </div>
        </>
      ),
    },
  ];

  const [selectedStepDescription, setSelectedStepDescription] = useState(
    steps[0].description
  );

  const dataTable = [
    {
      EARNINGS: "Basic",
      MONTHLY: "10,000",
      ANUALLY: "1,00,000",
    },
    {
      EARNINGS: "HRA",
      MONTHLY: "5,000",
      ANUALLY: "60,000",
    },
    {
      EARNINGS: "Conveyance Allowances",
      MONTHLY: "2,000",
      ANUALLY: "24,000",
    },
    {
      EARNINGS: "Special Allowances",
      MONTHLY: "500",
      ANUALLY: "6,000",
    },
    {
      EARNINGS: "Food Allowances",
      MONTHLY: "500",
      ANUALLY: "24,000",
    },
    {
      EARNINGS: "Oncall Shift Allowances",
      MONTHLY: "2,000",
      ANUALLY: "9,000",
    },
    {
      EARNINGS: "Skill Development Allowances",
      MONTHLY: "750",
      ANUALLY: "24,000",
    },
    {
      EARNINGS: "Communication Allowances",
      MONTHLY: "2,000",
      ANUALLY: "27,000",
    },
    {
      EARNINGS: "Books & Magzine Allowances",
      MONTHLY: "2,000",
      ANUALLY: "27,000",
    },
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    setSelectedStepDescription(steps[activeStep + 1].description);
    console.log("Form submitted with data:", requestData);
  };

  const registerSteps = async () => {
    try {
      const response = await axios.post(
        "http://3.109.153.24:8081/api/v1/auth/register",
        requestData
      );

      console.log(response);
      if (response.status === 200) {
        console.log("Form submitted successfully");
        console.log("Form submitted with data:", requestData);
      } else {
        console.error("Error submitting form:");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    registerSteps();
    handleClose();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSelectedStepDescription(steps[activeStep - 1].description);
  };

  // const handleStep = (step) => () => {
  //     setActiveStep(step);
  // };

  useEffect(() => {
    handleComplete();
  }, []);

  const customCheckboxStyle = {
    color: "#7367F0",
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            minWidth: "1100px", // Adjust the width as per your requirements
            maxHeight: "599px",
          },
        }}
      >
        <DialogTitle
          className={styleCss.DialogTitle}
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Add Employee Wizard
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#FFFFFF",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            overflow: "scroll",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.3rem",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stepper
            nonLinear
            activeStep={activeStep}
            sx={{
              boxShadow: "0px 7px 15px 0px #0000001A",
              border: "none",
              padding: "20px 80px",
            }}
          >
            {steps.map((label, index) => (
              <Step
                key={label}
                completed={index < activeStep}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#7367F0",
                    fill: "#7367F0",
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "#fff",
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    fill: "#7367F0",
                    color: "#7367F0",
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "#fff",
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "#fff",
                  },
                  "& .MuiStepLabel-root": {
                    fill: "#7367F0",
                  },
                  "& .MuiStepLabel-root .MuiStepIcon-text": {
                    fill: "#7367F0",
                  },
                }}
              >
                <StepButton
                  onClick={() => {
                    setActiveStep(index);
                    setSelectedStepDescription(steps[index].description); // Update description
                  }}
                >
                  <CustomStepLabel>{label.label}</CustomStepLabel>
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div style={{ padding: "10px 0px" }}>
            {activeStep < steps.length && (
              <>
                <Typography sx={{ mt: 2, mb: 1, py: 1, px: 2 }}>
                  {selectedStepDescription}
                </Typography>
                <div
                  style={{
                    boxShadow: "0px 4px 3px  rgb(0 0 0 / 10%) ",
                    height: "0.1px",
                  }}
                ></div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    flexDirection: "row",
                    pt: 2,
                    marginRight: "1rem",
                  }}
                >
                  {activeStep == 0 ? (
                    ""
                  ) : (
                    <BorderButton
                      // disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Prev
                    </BorderButton>
                  )}
                  {activeStep === steps.length - 1 ? (
                    <BgButton onClick={handleComplete}>Finish</BgButton>
                  ) : (
                    <BgButton
                      onClick={handleNext}
                      // sx={{ mr: 1 }} disabled={activeStep === steps.length - 1}
                    >
                      Next
                    </BgButton>
                  )}
                </Box>
              </>
            )}
          </div>
        </Box>
      </BootstrapDialog>
      <div>
        <BootstrapDialog
          onClose={handleClse}
          aria-labelledby="customized-dialog-title"
          open={openn}
        >
          <DialogTitle
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
            style={{ background: "#7367F0", color: "white" }}
          >
            Salary Breakup
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClse}
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
            <Typography gutterBottom>
              <div>
                <table className="Attendance-table">
                  <tr
                    className="theading"
                    style={{ background: "#7367f04f", textAlign: "left" }}
                  >
                    <th style={{ color: "#7367F0" }}>EARNINGS</th>
                    <th style={{ color: "#7367F0" }}>MONTHLY</th>
                    <th style={{ color: "#7367F0" }}>ANUALLY</th>
                  </tr>
                  {dataTable.map((data, i) => (
                    <tr key={i} className="tData" style={{ textAlign: "left" }}>
                      <td style={{ paddingLeft: "15px", width: "450px" }}>
                        {data.EARNINGS}
                      </td>
                      <td style={{ paddingLeft: "15px", width: "180px" }}>
                        {data.MONTHLY}
                      </td>
                      <td style={{ paddingLeft: "15px", width: "180px" }}>
                        {data.ANUALLY}
                      </td>
                    </tr>
                  ))}
                  <tr
                    className="tData"
                    style={{ background: "#7367f04f", textAlign: "left" }}
                  >
                    <th style={{ color: "#7367F0", padding: "15px" }}>Total</th>
                    <th style={{ color: "#7367F0", padding: "15px" }}>
                      INR 25,000
                    </th>
                    <th style={{ color: "#7367F0", padding: "15px" }}>
                      INR 3,00,000
                    </th>
                  </tr>
                </table>
              </div>
            </Typography>
            <br />
            <Typography gutterBottom>
              <div>
                <table className="Attendance-table">
                  <tr
                    className="theading"
                    style={{ background: "#7367f04f", textAlign: "left" }}
                  >
                    <th style={{ color: "#7367F0" }}>DEDUCTIONS</th>
                    <th style={{ color: "#7367F0" }}></th>
                    <th style={{ color: "#7367F0" }}></th>
                  </tr>

                  <tr className="tData" style={{ textAlign: "left" }}>
                    <td style={{ paddingLeft: "15px", width: "450px" }}>
                      PF Employee
                    </td>
                    <td style={{ paddingLeft: "15px", width: "180px" }}>
                      1,200
                    </td>
                    <td style={{ paddingLeft: "15px", width: "180px" }}>
                      14,400
                    </td>
                  </tr>
                  <tr className="tData" style={{ textAlign: "left" }}>
                    <td style={{ paddingLeft: "15px", width: "450px" }}>
                      PF Employee
                    </td>
                    <td style={{ paddingLeft: "15px", width: "180px" }}>
                      1,200
                    </td>
                    <td style={{ paddingLeft: "15px", width: "180px" }}>
                      14,400
                    </td>
                  </tr>

                  <tr
                    className="tData"
                    style={{ background: "#7367f04f", textAlign: "left" }}
                  >
                    <th style={{ color: "#7367F0", padding: "15px" }}>
                      NET PAY
                    </th>
                    <th style={{ color: "#7367F0", padding: "15px" }}>
                      INR 22,600
                    </th>
                    <th style={{ color: "#7367F0", padding: "15px" }}>
                      INR 2,71,200
                    </th>
                  </tr>
                </table>
              </div>
            </Typography>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default AddEmployeDialog;
