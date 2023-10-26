import React, { useState } from "react";
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
import Input from "../../../../components/Input/Input";
import SelectInput from "../../../../components/selectInput/SelectInput";
import styles from "./account.module.css";
import axios from "axios";
const AddAccount = () => {
  const initialFormData = {
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    bankName: "",
    bankType: "",
    ifscNumber: "",
    pan: "",
    lutNumber: "",
    gstNumber: "",
    cin: "",
    state: "",
    city: "",
    zipCode: "",
    addressLine1: "",
    addressLine2: "",
    createdBy:""
  };
const createduser=localStorage.getItem("Name");
console.log(createduser);
  const [formData, setFormData] = useState(initialFormData);
  const initialErrors = {};

  for (const key in initialFormData) {
    initialErrors[key] = "";
  }

  const [errors, setErrors] = useState(initialErrors);
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  const validateField = (name, value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `${capitalizeWords(name)} is required`;
    }
    return errorMessage;
  };

  const handleInputChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const staticUserId = localStorage.getItem("Id"); 

  const handleSubmit = async () => {
    const newErrors = { ...initialErrors };

    for (const field in formData) {
      const errorMessage = validateField(field, formData[field]);
      if (errorMessage) {
        newErrors[field] = errorMessage;
      }
    }
    setErrors(newErrors);
    const dataToSend = {
      ...formData,
      userId: staticUserId,
      createdBy:createduser
    };

    try {
      const response = await axios.post(
        "http://3.109.153.24:8081/api/v1/auth/addAccount",
        dataToSend
      );

      if (response.status === 200) {
        console.log("Account added successfully");
        setFormData(initialFormData);
      } else {
        console.error("Failed to add account");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <form>
        <div className={styles.main}>
          <Card className={styles.card1}>
            <div className={styles.bottom}>
              <div className={styles.developerDiv}>
                <div className={styles.headerTitleDiv}>
                  {" "}
                  <h1 className={styles.headerTitle}>Add Account</h1>
                </div>
                <div className={styles.container}>
                  {/*Fieldsss  */}
                  <div className={styles.form}>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="Beneficiary"
                        labelSize="14.35px"
                        name="beneficiaryName"
                        value={formData.beneficiaryName}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                        formError={errors?.beneficiaryName}
                        isRequired={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        label="Beneficiary Account Number"
                        type="text"
                        labelSize="14.35px"
                        name="beneficiaryAccountNumber"
                        value={formData.beneficiaryAccountNumber}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                        formError={errors?.beneficiaryAccountNumber}
                        isRequired={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="Bank Name & Address"
                        labelSize="14.35px"
                        name="bankName"
                        formError={errors?.bankName}
                        value={formData.bankName}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="Bank Type"
                        name="bankType"
                        formError={errors?.bankType}
                        value={formData.bankType}
                        onChange={(e) => handleInputChange(e)}
                        labelSize="14.35px"
                        isRequired={true}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="IFSC Number"
                        name="ifscNumber"
                        formError={errors?.ifscNumber}
                        value={formData.ifscNumber}
                        onChange={(e) => handleInputChange(e)}
                        labelSize="14.35px"
                        isRequired={true}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="PAN"
                        labelSize="14.35px"
                        name="pan"
                        formError={errors?.pan}
                        value={formData.pan}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="LUT Number"
                        labelSize="14.35px"
                        name="lutNumber"
                        formError={errors?.lutNumber}
                        value={formData.lutNumber}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="GST Number"
                        labelSize="14.35px"
                        name="gstNumber"
                        formError={errors?.gstNumber}
                        value={formData.gstNumber}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="CIN"
                        labelSize="14.35px"
                        name="cin"
                        formError={errors?.cin}
                        value={formData.cin}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />
                    </div>
                    <div className={styles.divForm}>
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="State"
                        labelSize="14.35px"
                        name="state"
                        formError={errors?.state}
                        value={formData.state}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="City"
                        labelSize="14.35px"
                        name="city"
                        formError={errors?.city}
                        value={formData.city}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
                        p1={true}
                      />

                      <Input
                        width="100%"
                        height="18px"
                        type="text"
                        label="Zip Code"
                        labelSize="14.35px"
                        name="zipCode"
                        formError={errors?.zipCode}
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange(e)}
                        isRequired={true}
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
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                      <Input
                        width="100%"
                        height="58px"
                        type="textbox"
                        label="Address Line 2"
                        labelSize="14.35px"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={(e) => handleInputChange(e)}
                        p1={true}
                      />
                    </div>
                  </div>

                  <div className={styles.btnDiv}>
                    {" "}
                    <button type="button" className={styles.discardButton}>
                      Cancel
                    </button>
                    <button
                      type="button"
                      className={styles.addButton}
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </Card>
        </div>
      </form>
    </>
  );
};

export default AddAccount;
