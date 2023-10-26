import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextareaAutosize,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import SelectInput from "../../../../components/selectInput/SelectInput";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import '../leave.css';
import style from "./requestLeave.module.css";
import axios from "axios";
import dayjs from "dayjs";

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
const initialValues = {
  reportingManager: "",
  leaveType: "",
  fromDate: null,
  toDate: null,
  reasonForLeave: "",
};

const validationSchema = Yup.object().shape({
  reportingManager: Yup.string().required("Reporting Manager is required"),
  leaveType: Yup.string().required("Leave Type is required"),
  fromDate: Yup.date().required("From Date is required"),
  toDate: Yup.date().required("To Date is required"),
  reasonForLeave: Yup.string().required("Reason for Leave is required"),
});
function RequestLeave(props) {
  const { onClose, value: valueProp, id, open,displaySuccessAlert, displayErrorAlert, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  const [successAlert, setSuccessAlert] = useState(null);
  const [errorAlert, setErrorAlert] = useState(null);

  React.useEffect(() => {
    // console.log(valueProp, 'values......on open ', value, 'p', open);
    // console.log(id,'other..... open ');
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };
  const handleCancel = () => {
    onClose();
  };

  const handleDateStartChange = (fromdate) => {
    initialValues.fromDate = fromdate; // dayjs(fromdate).format('YYYY/MM/DD')
  };

  const handleDateEndChange = (date) => {
    initialValues.toDate = date; // dayjs(date).format('YYYY/MM/DD')
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      userId: 33,
      fromDate: dayjs(values.fromDate).format("YYYY-MM-DD"), // values.fromDate ,
      leaveType: values.leaveType,
      reasonForLeave: values.reasonForLeave,
      reportingManager: values.reportingManager,
      toDate: dayjs(values.toDate).format("YYYY-MM-DD"), // values.toDate,
      createdBy: "manoj",
    };
    try {
      const response = await axios.post(
        "http://3.109.153.24:8081/api/v1/auth/leaveRequests",
        payload
      );
      if (response.status === 200) {
        displaySuccessAlert("Leave request sent successfully");
        onClose(true);
      } else {
        displayErrorAlert("An error occurred while sending the leave request");
        onClose(true);
      }
    } catch (error) {
      console.error("API Error:", error);
      displayErrorAlert("An error occurred while sending the leave request");
      onClose(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { maxWidth: 548, maxHeight: 673, padding: 0 },
      }}
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <RedDialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Request Leave
      </RedDialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCancel}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "white",
        }}
      >
        <CloseIcon />
      </IconButton>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <DialogContent>
              <FormLabel
                sx={{
                  color: "#000000",
                  fontFamily: "Public Sans",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Select Date
              </FormLabel>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DatePicker"]}
                      value={values.fromDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="fromDate"
                    >
                      <DatePicker
                        label="From"
                        value={values.fromDate}
                        onChange={handleDateStartChange}
                        sx={{
                          "& .MuiInputBase-root:hover": {
                            border: "none", // Remove the border on hover
                          },
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <ErrorMessage
                    style={{ color: "red", fontFamily: "Public Sans" }}
                    name="fromDate"
                    component="div"
                  />
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DatePicker"]}
                      name="toDate"
                      value={values.toDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <DatePicker
                        label="To"
                        className={style.dateFromTo}
                        value={values.toDate}
                        onChange={handleDateEndChange}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <ErrorMessage
                    style={{ color: "red", fontFamily: "Public Sans" }}
                    name="toDate"
                    component="div"
                  />
                </div>
              </div>
              <FormLabel
                sx={{
                  marginTop: "1rem",
                  color: "#000000",
                  fontFamily: "Public Sans",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Leave Type
              </FormLabel>
              <div>
                <Field
                  as="select"
                  name="leaveType"
                  value={values.leaveType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Select Leave Type"
                  id="leaveType"
                  style={{
                    margin: "0.5rem 0rem",
                    height: "40px",
                    minWidth: "294px",
                    border: "1px solid #C9C9C9",
                    outline: "none",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                >
                  <option selected>Select Leave Type</option>
                  <option value="Bereavement">Bereavement Leave</option>
                  <option value="Special">Special Leave</option>
                  <option value="Paternity">Paternity Leave</option>
                  <option value="Comp">Comp Offs</option>
                  <option value="Sick">Sick/Casual Leave</option>
                  <option value="Floater">Floater Leave</option>
                  <option value="Unpaid">Unpaid Leave</option>
                  <option value="Paid">Paid Leave</option>
                </Field>
                <ErrorMessage
                  style={{ color: "red", fontFamily: "Public Sans" }}
                  name="leaveType"
                  component="div"
                />
              </div>
              <FormLabel
                sx={{
                  color: "#000000",
                  fontFamily: "Public Sans",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Reporting Manager
              </FormLabel>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "47%" }}>
                  <Field
                    as="select"
                    name="reportingManager"
                    color="#7367F0"
                    value={values.reportingManager}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                      height: "40px",
                      minWidth: "294px",
                      margin: "0.5rem 0rem",
                      border: "1px solid #C9C9C9",
                      outline: "none",
                      borderRadius: "4px",
                      padding: "5px",
                    }}
                    placeholder=""
                    id="reportingManager"
                  >
                    <option value="Snehal Baraskar">Snehal Baraskar</option>
                    <option value="Raksha">Raksha</option>
                    <option value="NM">NM</option>
                  </Field>
                  <ErrorMessage
                    style={{ color: "red", fontFamily: "Public Sans" }}
                    name="reportingManager"
                    component="div"
                  />
                </div>
              </div>
              <FormControl>
                <FormLabel
                  sx={{
                    color: "#000000",
                    fontFamily: "Public Sans",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "10px 0",
                  }}
                >
                  Reason For Leave
                </FormLabel>
                <TextareaAutosize
                  name="reasonForLeave"
                  value={values.reasonForLeave}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  minRows={5}
                  style={{
                    width: "100%",
                    minWidth: "430px",
                    border: "1px solid #C9C9C9",
                    outline: "none",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                />
                <ErrorMessage
                  style={{ color: "red", fontFamily: "Public Sans" }}
                  name="reasonForLeave"
                  component="div"
                />
              </FormControl>
            </DialogContent>
            <DialogActions
              sx={{
                boxShadow: " 0px 0px 6px rgb(0 0 0 / 25%);",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <BorderButton autoFocus onClick={handleCancel}>
                Cancel
              </BorderButton>
              <BgButton autoFocus type="submit">
                {isSubmitting ? " Requesting..." : " Request Leave"}
              </BgButton>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export default RequestLeave;
