import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import styles from "./Account.module.css";
import { Card, Divider, FormControlLabel, FormGroup } from "@mui/material";
import profile from "../../../../image/img.jpg";
import { Checkbox } from '@mui/material';

const Account = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    LastName: "",
    email: "",
    organization: "",
    phoneNumber: "",
    address: "",
    state: "",
    zipCode: "",
    country: "",
    language: "",
    timeZone: "",
    currency: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <Card className={styles.card1}>
        {" "}
        <h1>Profile Details</h1>
        <div className={styles.d1}>
          <img src={profile} alt="image" />
          <div className={styles.di}>
            {" "}
            <div className={styles.di1}>
              <button className={styles.btn}>Upload New Photo</button>
              <button className={styles.btn2}>Reset</button>
            </div>
            <div className={styles.di2}>
              <h4>Allowed PNG or JPEG. Max size of 800K.</h4>
            </div>
          </div>
        </div>
        <Divider />
        <form action="">
          <Input
            name="firstName"
            placeholder="Enter the First Name"
            label="First Name"
            width="90%"
            value={inputValue.firstName}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="LastName"
            placeholder="Enter the Last Name"
            label="Last Name"
            width="90%"
            value={inputValue.LastName}
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <Input
            name="email"
            placeholder="Enter the Email"
            label="Email"
            width="90%"
            value={inputValue.email}
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <Input
            name="organization"
            placeholder="Enter the Organization"
            label="Organization"
            width="90%"
            value={inputValue.organization}
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <Input
            name="phoneNumber"
            placeholder="Enter the phone Number"
            label="Phone Number"
            width="90%"
            type="number"
            value={inputValue.phoneNumber}
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <Input
            name="address"
            placeholder="Enter the address"
            label="Address"
            width="90%"
            value={inputValue.address}
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <Input
            name="state"
            placeholder="Select state"
            label="State"
            width="90%"
            type="select"
            value={inputValue.state}
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <Input
            name="zipCode"
            placeholder="Enter the Zip Code"
            label="Zip Code"
            width="90%"
            value={inputValue.zipCode}
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <Input
            name="country"
            placeholder="Select Country"
            label="Country"
            type="select"
            width="90%"
            value={inputValue.country}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="language"
            placeholder="Select Language"
            label="Language"
            type="select"
            width="90%"
            value={inputValue.language}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="timeZone"
            placeholder="Select Timezone"
            label="Timezone"
            type="select"
            width="90%"
            value={inputValue.timeZone}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="currency"
            placeholder="Select Currency"
            label="Currency"
            type="Select"
            width="90%"
            value={inputValue.currency}
            onChange={(e) => handleInputChange(e)}
          />
          <div className={styles.btnDiv}>
            <button className={styles.btn1}>Save Changes</button>
            <button className={styles.btn2}>Reset</button>
          </div>
        </form>{" "}
      </Card>
    <Card className={styles.card2}>
      <h1>Deleted Account</h1>
      <FormGroup>
  <FormControlLabel sx={{color:"#C9C9C9" ,fontFamily:"Public Sans",fontSize:"14px"}} control={<Checkbox size="small" color="secondary"  sx={{
    color:"#7367f0" ,
    '&.Mui-checked': {
      color: "#7367f0",
    },
  }}  />} label="I confirm my account deactivation" />

<button className={styles.btn3}>Deactivate Account</button>
</FormGroup>

    </Card>
    </div>
  );
};

export default Account;
