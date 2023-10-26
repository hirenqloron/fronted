import React, { useState, useEffect } from "react";
import {
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Stack,
  Switch,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./CreateInvoice.module.css";
// import sortboxImg from "../../../../image/QloronLogo.svg";
import Input from "../../../../components/Input/Input";
import SelectInput from "../../../../components/selectInput/SelectInput";
import { BsCursor } from "react-icons/bs";
import * as Yup from "yup";
import axios from "axios";
import { MenuItem, Select, FormControl } from "@mui/material";
import QloronLogo from "../../../../svgIcons/qloronLogo.svg";
import CalenderIcon from "../../../../svgIcons/Group.svg";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useNavigate } from "react-router-dom";

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

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#7367F0" : "#7367F0",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const stylesed = {
  width: "100%",
  marginTop: "0.25rem",
  height: "35px",
  border: "0.7px solid #7367f0",
  borderRadius: "5px",
  // color: type == "password" ? "#97949C" : "",
  // fontSize: type == "password" ? "20px" : "14px",
};
const labelStyle = {
  fontSize: "14.35px",
  color: "black",
};
const importantStyle = {
  color: "red",
};

const validationSchema = Yup.object().shape({
  billFrom: Yup.string().required("Bill From is required"),
  billTo: Yup.string().required("Bill To is required"),
  tds: Yup.number().required("TDS is required"),
  gst: Yup.number().required("GST is required"),
  contractStartDate: Yup.date().required("Contract Start Date is required"),
});

const ObjectSchema = Yup.object().shape({
  price: Yup.number().required(),
  leaves: Yup.number().required(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
});

const user_Id = localStorage.getItem("id") || 3;
console.log(user_Id, "sadsacscsc");
const CreateInvoice = () => {
  const [formData, setFormData] = useState({
    billFrom: "l",
    billTo: "",
    dueDate: "",
    invoiceDate: "",
    tds: 0,
    gst: 0,
    gstType: "l", // added one more field
    contractStartDate: "",
    contractEndDate: "",
    salesPerson: "",
    // paymentMethod: "l",
    // project: "",
    developers: [
      {
        developerName: "",
        leaves: 0,
        startDate: "",
        endDate: "",
        bonus: 0,
        price: "",
        otherDeductions: "",
        saturdayWorking: false,
      },
    ],
  });

  const [formErrors, setFormErrors] = useState({
    billFrom: "",
    billTo: "",
    tds: "",
    gst: "",
    gstType: "",
    contractStartDate: "",
  });

  const [errors, setErrors] = useState([
    {
      developerNameError: "",
      hourlyRateError: "",
      leavesError: "",
      startDateError: "",
      endDateError: "",
      bonus: "",
    },
  ]);
  const [options, setOptions] = useState([]);

  const handleValidation = () => {
    return new Promise((resolve, reject) => {
      const validationPromises = formData.developers.map((obj, index) => {
        return ObjectSchema.validate(obj)
          .then(() => {
            // Object is valid, reset errors for this object
            setErrors((prevErrors) => [
              ...prevErrors.slice(0, index),
              {
                developerNameError: "",
                hourlyRateError: "",
                leavesError: "",
                startDateError: "",
                endDateError: "",
                bonus: "",
              },
              ...prevErrors.slice(index + 1),
            ]);
            return true;
          })
          .catch((error) => {
            // Object is invalid, set errors for this object
            setErrors((prevErrors) => [
              ...prevErrors.slice(0, index),
              {
                developerNameError:
                  error.path === "developerName" ? error.message : "",
                hourlyRateError: error.path === "price" ? error.message : "",
                leavesError: error.path === "leaves" ? error.message : "",
                startDateError: error.path === "startDate" ? error.message : "",
                endDateError: error.path === "endDate" ? error.message : "",
                bonus: error.path === "bonus" ? error.message : "",
              },
              ...prevErrors.slice(index + 1),
            ]);
            return false; // Return false for failed validation
          });
      });

      Promise.all(validationPromises)
        .then((results) => {
          // Check if all validations passed
          if (results.every((result) => result === true)) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          // Handle errors that occurred during validation
          console.error("Validation error:", error.message);
          reject(error);
        });
    });
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      return true; // Form is valid
    } catch (error) {
      const errors = {};
      console.log(error, "ERROROK");
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setFormErrors(errors);
      return false; // Form has errors
    }
  };

  const navigate = useNavigate();

  const [projectList, setProjectList] = useState([]);
  const [accountData, setAccountData] = useState([]);

 const user_Id= localStorage.getItem("Id");

  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const apiUrl = `http://3.109.153.24:8080/api/v1/auth/getProject?userId=${user_Id}`;

        const response = await axios.get(apiUrl);
        setProjectList(response.data);
      } catch (error) {
        console.error('Error fetching project list:', error);
      }
    };

    const fetchAccountData = async () => {
      try {
        const apiUrl = `http://3.109.153.24:8080/api/v1/auth/getAccount?userId=${user_Id}`;

        const response = await axios.get(apiUrl);
        setAccountData(response.data);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };
    // Call both API functions
    fetchProjectList();
    fetchAccountData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    const isDevValid = await handleValidation();
    // const isValid = await validateForm(formData);

    console.log(isDevValid, isValid, "dsffs");

    if (isDevValid) {
      const developerData = formData.developers.map(developer => ({
        developerName: developer.developerName,
        leaves: parseInt(developer.leaves),
        startdate: dayjs(developer.startDate).format('YYYY/MM/DD'),
        endDate: dayjs(developer.endDate).format('YYYY/MM/DD'), // Uncomment this line if you have an endDate field
        bonus: parseFloat(developer.bonus),
        price: parseFloat(developer.price),
        otherDeductions: parseFloat(developer.otherDeductions),
        saturdayWorking: developer.saturdayWorking
      }))

      const payload = {
        // invoiceId: "INV-2023-001",
        createdBy: "Snehal Baraskar",
        userId: localStorage.getItem("Id"),
        
        billFrom: formData.billFrom,
        billTo: formData.billTo,
        invoiceDate: dayjs(formData.invoiceDate).format('YYYY/MM/DD'),
        dueDate: dayjs(formData.dueDate).format('YYYY/MM/DD'),
        project: formData.project,
        tds: parseFloat(formData.tds),
        gst: parseFloat(formData.gst),
        gstType: formData.gstType, // added one more field
        contractStartDate: dayjs(formData.contractStartDate).format('YYYY/MM/DD'),
        contractEndDate: dayjs(formData.contractEndDate).format('YYYY/MM/DD'),
        salesPerson: formData.salesPerson,
        developers: developerData
      }
      
     
      // Form is valid, handle submission here "http://54.87.220.243:8080/api/admin/add-invoice"
      const apiUrl = "http://3.109.153.24:8080/api/admin/add-Invoice";
      try {
        const response = await axios.post(apiUrl, payload);

        console.log(response);
        if (response.status === 200) {
          formReset();
          console.log("Form submitted successfully");
          navigate("/invoice")
        } else {
          console.error("Error submitting form:");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }

    } else {
      // Form has errors, do something with the errors
      console.log(
        "Form has validation errors:",
        formErrors,
        "& ERRORS DEV: ",
        errors
      );
    }
  };
  const formReset = () => {
    const developerData = formData.developers.map(developer => ({
      developerName: "",
      leaves: 0,
      startdate: "",
      endDate: "",
      bonus: 0,
      price: 0,
      otherDeductions: 0,
      saturdayWorking: false
    }))

    const payload = {
      // invoiceId: "INV-2023-001",
      createdBy: "",
      userId: 0,
      billFrom: "",
      billTo: "",
      invoiceDate: "",
      project: "",
      tds: 0,
      gst: 0,
      gstType: "", // added one more field
      contractStartDate: "",
      contractEndDate: "",
      salesPerson: "",
      developers: [
        {
          developerName: "",
          leaves: 0,
          startDate: "",
          endDate: "",
          bonus: 0,
          price: "",
          otherDeductions: "",
          saturdayWorking: false,
        },
      ],
    }
    setFormData(payload)
  }
  const handleInputChange = (e, index) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("developers")) {
      // If the input is inside the developers array, update the specific form
      setFormData((prevData) => {
        const updatedDevelopers = [...prevData.developers];
        updatedDevelopers[index][name.split(".")[1]] =
          type === "checkbox" ? checked : value;
        return { ...prevData, developers: updatedDevelopers };
      });
    } else {
      // Otherwise, update the main form data
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));

      // Update the formErrors for the main form field
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear the error when the input changes
      }));
    }
  };
  const handleInputChangeGstType = (e) => {
    setFormData({
      ...formData,
      gstType: e.target.value,
    });
  };
  const handleInputChangeGst = (e) => {
    setFormData({
      ...formData,
      gst: e.target.value,
    });
  };
  const handleInputChangeTds = (e) => {
    setFormData({
      ...formData,
      tds: e.target.value,
    });
  };

  const addForm = () => {
    setFormData((prevData) => ({
      ...prevData,
      developers: [
        ...prevData.developers,
        {
          developerName: "",
          leaves: "",
          startDate: "",
          endDate: "",
          bonus: "",
          price: "",
          saturdayWorking: false,
        },
      ],
    }));
  };
  const deleteForm = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      developers: prevData.developers.filter((_, i) => i !== index),
    }));
  };

  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange = (fromdate) => {
    console.log("handleDateStartChange ", fromdate);
    setSelectedDate(fromdate); // Store the selected date in state
    formData.invoiceDate = fromdate; // dayjs(fromdate).format('YYYY/MM/DD')
  };
  const [selectedDueDate, setSelectedDueDate] = useState();
  const handleDueDateChange = (date) => {
    console.log(date);
    setSelectedDueDate(date);
    formData.invoiceDate = date;
  };
  const [selectedStartDate, setSelectedStartDate] = useState();
  const handleStartDateChange = (date) => {
    console.log(date);
    setSelectedStartDate(date);
    formData.invoiceDate = date;
  };
  const [selectedEndDate, setSelectedEndDate] = useState();
  const handleEndDateChange = (date) => {
    console.log(date);
    setSelectedEndDate(date);
    formData.invoiceDate = date;
  };
  const [selectedStartContractDate, setSelectedStartContractDate] = useState();
  const handleStartContractDateChange = (date) => {
    console.log(date);
    setSelectedStartContractDate(date);
    formData.invoiceDate = date;
  };
  const [selectedContractEndDate, setSelectedContractEndDate] = useState();
  const handleContractEndDateChange = (date) => {
    console.log(date);
    setSelectedContractEndDate(date);
    formData.invoiceDate = date;
  };
  const handleInputChangeBillForm = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    // Handle input changes and update formData
    setFormData({ ...formData, billFrom: e.target.value });
  };
  const handleInputChangeProject = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    // Handle input changes and update formData
    setFormData({ ...formData, project: e.target.value });
  };
  const handleInputChangebillTo = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    // Handle input changes and update formData
    setFormData({ ...formData, billTo: e.target.value });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.main}>
        <Card className={styles.card1}>

          <div>
            <div className={styles.QLORONPRIVATELIMITED}>
              <img src={QloronLogo} alt="logo" className={styles.logo} />
              <p className={styles.contactInfo}>
                <h1 className={styles.contactComName}>
                  QLORON PRIVATE LIMITED
                </h1>
                <p className={styles.addComName}>
                  Plot No. 92, Gajanan Nagar, Nagpur-440027,
                </p>
                <p className={styles.addComName}>
                  India{" "}
                  <span className={styles.comColorAddNo}>sales@qloron.com</span>{" "}
                  | <span className={styles.comColorAddNo}>+91 7020038436</span>
                </p>
              </p>
            </div>
          </div>
          <Divider />
          <br />
          <div className={styles.top}>
            <div className={styles.right}>

              <label htmlFor="">Invoice Date</label>{" "}
              {/* <input
                name="invoiceDate"
                type="date"
                value={formData.invoiceDate}
                onChange={(e) => handleInputChange(e)}
              /> */}
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}
                  className="datePicker"
                >
                  <DemoContainer components={['DatePicker']}
                    name="invoiceDate"
                    value={formData.invoiceDate}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <DatePicker
                      value={selectedDate}
                      onChange={handleDateChange}

                      sx={{
                        "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl": {
                          width: '202px',
                          height: '35px',
                          overflow: 'hidden',
                          outline: 'none',
                          border: '0.7px solid #7367f0',
                        },
                        "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                          height: 0,
                          border: 'none',
                        },
                      }}


                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <label htmlFor="">Due Date</label>{" "}
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}
                  className="datePicker"
                >
                  <DemoContainer components={['DatePicker']}

                    name="dueDate"
                    value={formData.dueDate}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <DatePicker
                      value={selectedDueDate}
                      onChange={handleDueDateChange}

                      sx={{
                        "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl": {
                          width: '202px',
                          height: '35px',
                          overflow: 'hidden',
                          outline: 'none',
                          border: '0.7px solid #7367f0',
                        },
                        "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                          height: 0,
                          border: 'none',
                        },
                      }}


                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              {/* <input
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleInputChange(e)}
              /> */}
              <label htmlFor="">Sales Person</label>{" "}
              <input
                name="salesPerson"
                type="text"
                value={formData.salesPerson}
                placeholder="Niklesh Mandal"

                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div name="d1" className={styles.d1}>
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Bill From
                      <span style={importantStyle}>*</span>
                    </label>
                    <br />

                    <Select
                      style={stylesed}
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={formData.billFrom}
                      onChange={(e) => handleInputChangeBillForm(e)}
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
                        Select a Bill From
                      </MenuItem>

                      {accountData.map((item) => (
                        <MenuItem key={item.id} value={item.beneficiaryName}>
                          {item.beneficiaryName}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
              {console.log(formData.billFrom)}

              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Bill To
                      <span style={importantStyle}>*</span>
                    </label>
                    <br />

                    <Select
                      style={stylesed}
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={formData.billTo}
                      onChange={(e) => handleInputChangebillTo(e)}
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
                        Select a Bill To
                      </MenuItem>
                      {projectList.map((item) => (
                        <MenuItem key={item.id} value={item.projectName}>
                          {item.projectName}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>

            </div>{" "}
            {formData.developers.map((developer, index) => (
              <div className={styles.developerDiv}>
                <div className={styles.container}>
                  <div key={index} className={styles.form}>
                    <div className={styles.divForm}>
                      <Input
                        width="30%"
                        height="18px"
                        color="#7367F0"
                        type="text"
                        label="Developer"
                        placeholder="Developer"
                        labelSize="14.35px"
                        name={`developers[${index}].developerName`}
                        value={developer.developerName}
                        onChange={(e) => handleInputChange(e, index)}
                        p1={true}
                      />
                      <Input
                        width="30%"
                        height="18px"
                        color="#7367F0"
                        type="text"
                        label="Price"
                        placeholder="Price"
                        labelSize="14.35px"
                        name={`developers[${index}].price`}
                        value={developer.price}
                        onChange={(e) => handleInputChange(e, index)}
                        p1={true}
                        formError={errors[index]?.hourlyRateError}
                        isRequired={true}
                      />
                      <Input
                        width="30%"
                        height="18px"
                        color="#7367F0"
                        type="string"
                        label="Leaves"
                        placeholder="Leaves"
                        labelSize="14.35px"
                        name={`developers[${index}].leaves`}
                        formError={errors[index]?.leavesError}
                        value={developer.leaves}
                        onChange={(e) => handleInputChange(e, index)}
                        isRequired={true}
                        p1={true}
                      />
                    </div>
                    <div className={styles.divForm}>
                      {/* <Input
                        width="30%"
                        height="18px"
                        color="#7367F0"
                        type="date"
                        label="Start Date"
                        placeholder="Start Date"
                        name={`developers[${index}].startDate`}
                        formError={errors[index]?.startDateError}
                        value={developer.startDate}
                        onChange={(e) => handleInputChange(e, index)}
                        labelSize="14.35px"
                        isRequired={true}
                        p1={true}
                      /> */}
                    
                          <div>
                     <label>Start Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}
                          className="datePicker"
                        >
                          <DemoContainer components={['DatePicker']}
                            name={`developers[${index}].startDate`}
                            formError={errors[index]?.startDateError}
                            value={developer.startDate}
                            onChange={(e) => handleInputChange(e, index)}
                          >
                            <DatePicker
                              value={selectedStartDate}
                              onChange={handleStartDateChange}

                              sx={{
                                "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl": {
                                  width: '100%',
                                  marginTop:'-7PX',
                                  height: '41px',
                                  overflow: 'hidden',
                                  outline: 'none',
                                  border: '0.7px solid #7367f0',
                                },
                                "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                                  height: 0,
                                  border: 'none',
                                },
                              }}


                            />
                          </DemoContainer>
                        </LocalizationProvider>
                     </div>
                      {/* <Input
                        width="30%"
                        height="18px"
                        color="#7367F0"
                        type="date"
                        label="End Date"
                        placeholder="End Date"
                        name={`developers[${index}].endDate`}
                        formError={errors[index]?.endDateError}
                        value={developer.endDate}
                        onChange={(e) => handleInputChange(e, index)}
                        labelSize="14.35px"
                        isRequired={true}
                        p1={true}
                      /> */}
                      <div>
                     <label>End Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}
                          className="datePicker"
                        >
                          <DemoContainer components={['DatePicker']}
                            name={`developers[${index}].endDate`}
                            formError={errors[index]?.endDateError}
                            value={developer.endDate}
                            onChange={(e) => handleInputChange(e, index)}
                          >
                            <DatePicker
                              value={selectedEndDate}
                              onChange={handleEndDateChange}

                              sx={{
                                "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl": {
                                  width: '100%',
                                  marginTop:'-7PX',
                                  height: '41px',
                                  overflow: 'hidden',
                                  outline: 'none',
                                  border: '0.7px solid #7367f0',
                                },
                                "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                                  height: 0,
                                  border: 'none',
                                },
                              }}


                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                      <Input
                        width="30%"
                        height="18px"
                        color="#7367F0"
                        type="number"
                        label="Bonus"
                        placeholder="Bonus"
                        labelSize="14.35px"
                        name={`developers[${index}].bonus`}
                        value={developer.bonus}
                        onChange={(e) => handleInputChange(e, index)}
                        p1={true}
                      />
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="28.5%"
                        height="18px"
                        color="#7367F0"
                        type="number"
                        label="Other Deductions"
                        placeholder=""
                        labelSize="14.35px"
                        name={`developers[${index}].otherDeductions`}
                        value={developer.otherDeductions}
                        onChange={(e) => handleInputChange(e, index)}
                        p1={true}
                      />
                      <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <FormControlLabel
                          className={styles.cblabel}
                          control={
                            <Checkbox
                              name={`developers[${index}].saturdayWorking`}
                              checked={developer.saturdayWorking}
                              onChange={(e) => handleInputChange(e, index)}
                              sx={{
                                color: " #7367F0",

                                "&.Mui-checked": {
                                  color: "#7367f0",
                                },
                              }}
                            />
                          }
                          label="Saturday Working"
                        />
                      </div>
                      <div className={styles.dltPos}>
                        {formData.developers.length > 1 && ( // Only render the delete button if there's more than one developer
                          <button
                            type="button"
                            className={styles.deleteButton}
                            onClick={() => deleteForm(index)}
                          >
                            <RiDeleteBin6Line className={styles.dleteIcon} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <br /> */}
            <div className={styles.btnDiv}>
              <button
                type="button"
                className={styles.addButton}
                onClick={addForm}
              >
                Add
              </button>
            </div>
            <div className={styles.Tax}>
              {" "}
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      TDS
                      <span style={importantStyle}>*</span>
                    </label>
                    <br />
                    {/* {console.log(formData.tds)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={formData.tds}
                      onChange={(e) => handleInputChangeTds(e)}
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
                      <MenuItem value="2%">2%</MenuItem>
                      <MenuItem value="10%">10%</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Gst
                      <span style={importantStyle}>*</span>
                    </label>
                    <br />
                    {/* {console.log(formData.gst)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={formData.gst}
                      onChange={(e) => handleInputChangeGst(e)}
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
                      <MenuItem value="18">CGST - 9%, SGST - 9%</MenuItem>
                      <MenuItem value="18">IGST - 18%</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                    <label style={labelStyle} htmlFor="">
                      Gst Type
                      <span style={importantStyle}>*</span>
                    </label>
                    <br />
                    {/* {console.log(formData.gstType)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={formData.gstType}
                      onChange={(e) => handleInputChangeGstType(e)}
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
                      <MenuItem value="Inter State">Inter State</MenuItem>
                      <MenuItem value="Intra State">Intra State</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>

             
                  <div>
                     <label>Contract Start Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}
                  className="datePicker"
                >
                  <DemoContainer components={['DatePicker']}
                    name="contractStartDate"
                    formError={formErrors.contractStartDate}
                    value={formData.contractStartDate}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <DatePicker
                      value={selectedStartContractDate}
                      onChange={handleStartContractDateChange}

                      sx={{
                        "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl": {
                          // width: '200px', 
                           marginTop:'-7PX',
                          height: '41px',
                          overflow: 'hidden',
                          outline: 'none',
                          border: '0.7px solid #7367f0',
                        },
                        "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                          height: 0,
                          border: 'none',
                        },
                      }}


                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              {" "}
             
                  <div>
                     <label> Contract End Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}
                  className="datePicker"
                >
                  <DemoContainer components={['DatePicker']}
                    name="contractEndDate"
                    value={formData.contractEndDate}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <DatePicker
                      value={selectedContractEndDate}
                      onChange={handleContractEndDateChange}

                      sx={{

                        "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl": {
                          // width: '200px',
                          marginTop:'-7px',
                          height: '41px',
                          overflow: 'hidden',
                          outline: 'none',
                          border: '0.7px solid #7367f0',
                        },
                        "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                          height: 0,
                          border: 'none',
                        },
                      }}


                    />
                  </DemoContainer>
                </LocalizationProvider>
            </div>
              {/* <Input
                width="100%"
                height="18px"
                color="#7367F0"
                type="date"
                name="contractEndDate"
                label="Contract End Date"
                placeholder="Leaves"
                p1={true}
                value={formData.contractEndDate}
                onChange={(e) => handleInputChange(e)}
                labelSize="14.35px"
              /> */}
            </div>
            <div className={styles.btnDiv}>
              {" "}
              <button
                type="submit"
                className={styles.addButton}
              // onClick={handleSubmit}
              >
                Generate
              </button>
            </div>
            {/* <Divider sx={{ margin: "24px 0px" }} /> */}
            {/* <div className={styles.taxCalculationDiv}> */}
            {/* <div name="taxLeft">
                <Input
                  width="100%"
                  height="18px"
                  color="#7367F0"
                  label="Sales Person:"
                  value={formData.salesPerson}
                  name="salesPerson"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="john"
                  direction="row"
                  labelSize="14.35px"
                  p1={true}
                  gap="20px"
                  formError={formErrors.salesPerson}
                />

                <div className={styles.thanksDiv}>
                  <span>Thanks for your business</span>
                </div>
              </div> */}
            {/* <div className={styles.taxRight} name="taxRight">
                <span>
                  <h1>Subtotal:</h1> <p> ₹ 2,60,000.00</p>
                </span>
                <span>
                  <h1>Discount:</h1> <p> ₹ 20,000.00</p>
                </span>
                <span>
                  <h1>Tax:</h1> <p>10%</p>
                </span>
                <Divider />
                <span>
                  <h1>Total</h1> <p> ₹ 2,30,000.00</p>
                </span>
              </div> */}
            {/* </div> */}
            {/* <Divider sx={{ margin: "5px 0px" }} /> */}
            <div style={{ padding: "0 30px" }}>
              <h1 className={styles.noteHeading}>
                Note: Thanks for your business ❤
              </h1>
              <div className={styles.noteDiv}>
                <p>
                  {" "}
                  It was a pleasure working with you and your team. We hope you
                  will keep us in mind for future freelance projects. Thank You!
                </p>
              </div>
            </div>
          </div>{" "}
        </Card>{" "}
        <Card className={styles.card2}>
          <Card className={styles.card3}>
            {" "}
            <div className={styles.btnDiv9}>
              <button type="submit" className={styles.btn19}>
                <BsCursor size={17} /> Send Invoice
              </button>
              <button className={styles.btn20}>Preview</button>
              <button className={styles.btn20}>Save</button>
            </div>
          </Card>

          {/* <div className={styles.inputStackDiv}>
            <SelectInput
              //?text
              name="paymentMethod"
              label="Accept payments via "
              width="100%"
              height="37px"
              color="#7367F0"
              value={formData.paymentMethod}
              onChange={(e) => handleInputChange(e)}
              placeholder=""
              labelSize="12px"
              formError={formErrors.paymentMethod}
            />
            <div className={styles.stackDiv}>
              {" "}
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography className={styles.typo1}>Payment Terms</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography className={styles.typo1}>Client Notes</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography className={styles.typo1}>Payment Stub</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
              </Stack>
            </div>
          </div> */}
        </Card>{" "}
      </div>
    </form>
  );
};

export default CreateInvoice;
