import React, { useState } from 'react';
import axios from 'axios';
import {
    Card,
    Checkbox,
    Divider,
    FormControlLabel,
    Stack,
    Switch,
    Typography,
    styled,
  } from "@mui/material";
import Input from "../../../../components/Input/Input"
import SelectInput from "../../../../components/selectInput/SelectInput";
import styles from "./addProject.module.css";
import {  useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
const AddProject = () => { 
  const navigate = useNavigate();
        const [formData,setFormData] = useState({
          organization:"" ,
          projectName: "",
          clientName: "",
          clientEmail:"",
          gtsn: "",
          startDate: "",
          endDate:"",
          sacNumber:"",
          country:"",
          state:"",
          city:"",
          zipCode:"",
          projectLink:"",
          adressLine1:"",
          adressline2:"",
          clientDeclaration:"",
          clientDescriptionForInvoice:"",
          projectDescription:""
        })

        const [formErrors, setFormErrors] = useState({
          billFrom: "",
          billTo: "",
          tds: "",
          gst: "",
          contractStartDate: "",
         
        });
        const [errors, setErrors] = useState({
          organizaionNameError: "",
          projectNameError: "",
          clientNameError:"",
          clientEmailError:"",
          gtsnError: "",
          startDateError: "",
          endDateError: "",
          sacNumberError: "",
          countryNameError:"",
          stateNameError:"",
          cityNameError:"",
          zipCodeError:"",
        });

      const handleInputChange = (e, index) => {
        const { name, value, type, checked } = e.target;
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
      
      };
 
      const [selectedDate, setSelectedStartDate] = useState();
      const [selectedEndDate, setSelectedEndDate] = useState();
      const handleStartDateChange = (date) => {
        console.log("handleDateEnd Change ",date);
        setSelectedStartDate(date); // Store the selected date in state
     formData.startDate = date ;// dayjs(date).format('YYYY/MM/DD')
    };
      const handleSubmit = (e) => {
        e.preventDefault();
        try {
      const payload ={
        "userId": localStorage.getItem("Id"), ...formData
        // "organization": formData.organization,
        // "projectName":formData.projectName,
        // "clientName": formData.clientName,
        // "clientEmail":formData.clientEmail,
        // "gtsn": formData.gtsn,
        // "startDate": dayjs(formData.startDate).format('YYYY/MM/DD')
      }
          const response =  axios.post('http://3.109.153.24:8081/api/v1/auth/addProject', payload);
          if (response) {
            // console.log('Success >> ',response);
            resetForm();
            navigate("/projectManagent");
          } else {
            console.error('API Error');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
const resetForm= () =>{
  setFormData({
    organization:"" ,
    projectName: "",
    clientName: "",
    clientEmail:"",
    gtsn: "",
    startDate: "",
    endDate:"",
    sacNumber:"",
    country:"",
    state:"",
    city:"",
    zipCode:"",
    projectLink:"",
    adressLine1:"",
    adressline2:"",
    clientDeclaration:"",
    clientDescriptionForInvoice:"",
    projectDescription:""
  });
}
  return (
    <>
        <form onSubmit={handleSubmit}>
      <div className={styles.main}>
       
      <Card className={styles.card1}>
          <div className={styles.bottom}>
            <div className={styles.developerDiv}>
              <div className={styles.headerTitleDiv}>
                {" "}
                <h1 className={styles.headerTitle}>Add Project</h1>
              </div>
              <div className={styles.container}>
                
                {/*Fieldsss  */}
                  <div className={styles.form}>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="organization"
                        labelSize="14.35px"
                        name="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                        isRequired={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        label="Project Name"
                        type="text"                       
                        labelSize="14.35px"
                        name="projectName"
                        value={formData.projectName}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                        formError={errors?.projectNameError}
                        isRequired={true}
                      />
                      <Input
                        width="100%"
                        height="18px"                       
                        type="text"
                        label="Client Name"
                        labelSize="14.35px"
                        name="clientName"
                        formError={errors?.clientNameError}
                        value={formData.clientName}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"                      
                        type="email"
                        label="Client Mail"
                        name="clientEmail"
                        formError={errors?.clientEmailError}
                        value= {formData.clientEmail}
                        onChange={(e) => handleInputChange(e)}
                        labelSize="14.35px"
                        isRequired={true}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"                        
                        type="text"
                        label="GSTN"
                        name="gtsn"
                        formError={errors?.gtsnError}
                        value={formData.gtsn}
                        onChange={(e) => handleInputChange(e)}
                        labelSize="14.35px"
                        isRequired={true}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"                       
                        type="date"
                        label="Starting Date"
                        placeholder="Starting Date"
                        labelSize="14.35px"
                        name="startDate"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                      {/* <div   style={{
                                          marginTop:'0.8rem',
                                        }}
                                    >
                                    <LocalizationProvider dateAdapter={AdapterDayjs} 
                                    className="datePickerDob"
                                    >
                                        <DemoContainer components={['DatePicker']} name="startDate"
                                    value={formData.startDate}
                                    onChange={(e) => handleInputChange(e)}
                                          >
                                            <DatePicker 
                                                value={selectedDate}
                                                onChange={handleStartDateChange}
                                                sx={{ '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': { fontSize:'14px', height:'1rem'}}} 
                                                />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    </div>  */}
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"
                        
                        type="date"
                        label="Ending Date"
                        placeholder="Ending Date"
                        labelSize="14.35px"
                        name= "endDate"
                        value={formData.endDate}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                       <Input
                        width="100%"
                        height="18px"
                        
                        type="text"
                        label="SAC Number"
                        labelSize="14.35px"
                        name= "sacNumber"
                        value={formData.sacNumber}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="Country"
                        labelSize="14.35px"
                        name= "country"
                        value={formData.country}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"                       
                        type="text"
                        label="Project Link"
                        labelSize="14.35px"
                        name= "projectLink"
                        value={formData.projectLink}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                       
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="58px"                      
                        type="textbox"
                        label="Address Line 1"
                        labelSize="14.35px"
                        name= "adressLine1"
                        value={formData.adressLine1}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                       <Input
                        width="100%"
                        height="58px"                  
                        type="textbox"
                        label="Address Line 2"
                        labelSize="14.35px"
                        name= "adressline2"
                        value={formData.adressline2}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                     
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="58px"                      
                        type="textbox"
                        label="Client Declaration"
                        labelSize="14.35px"
                        name= "clientDeclaration"
                        value={formData.clientDeclaration}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                       <Input
                        width="100%"
                        height="58px"                  
                        type="textbox"
                        label="Client Description for Invoice"
                        labelSize="14.35px"
                        name= "clientDescription"
                        value={formData.clientDeclaration}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                     
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="58px"                      
                        type="textbox"
                        label="Project Description"
                        labelSize="14.35px"
                        name= "projectDescription"
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                     
                    </div>

                  </div>
                
                <div className={styles.btnDiv}>
                  {" "}
                  <button
                    type="button"
                    className={styles.discardButton}
                    onClick={resetForm}
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className={styles.addButton}
                    
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>           
            <div>
            </div>
          </div>
        </Card>
        
      </div>
    </form> 
    </>
  )
}

export default AddProject
