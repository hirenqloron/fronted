// EditPrimary.js

import React, { useState } from "react";
import "./address.css";
import Checkbox from '@mui/material/Checkbox';

const Address = ({ onClose }) => {
  const [formData, setFormData] = useState({
    ADDRESSLINE: "",
    middleName: "",
    ADDRESSLINE2: "",
    STATE: "",
    CITY: "",
    PINCODE: "",
    COUNTRY: "",
    displayName: "",
  
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
         <div className="primary-tag">
        <h1>Addresses <span onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 59 59" fill="none">
  <path d="M20.8064 38.1911L38.1895 20.8081" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
  <path d="M20.8064 20.8089L38.1895 38.1919" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
</svg></span> </h1>
      </div>
      <div className="edit-tag">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column left-column">
              <div>CURRENT ADDRESS</div>
              <label>ADDRESS LINE 1:</label>
              <input
                type="text"
                name="ADDRESSLINE"
                value={formData.ADDRESSLINE}
                onChange={handleChange}
                placeholder="Enter Address"
              />

              <label>ADDRESS LINE 2:</label>
              <input
                type="text"
                name="ADDRESSLINE2"
                value={formData.ADDRESSLINE2}
                onChange={handleChange}
                placeholder="Enter Address"
              />
              <label>CITY:</label>
              <input
                type="CITY"
                name="CITY"
                value={formData.CITY}
                onChange={handleChange}
                placeholder="Enter City"
              />

              <label>STATE:</label>
              <input
                type="STATE"
                name="STATE"
                value={formData.STATE}
                onChange={handleChange}
                placeholder="Enter State"
              />

              <label>COUNTRY:</label>
              <input
                type="COUNTRY"
                name="COUNTRY"
                value={formData.COUNTRY}
                onChange={handleChange}
                placeholder="Select Country"
              />

              <label>PINCODE:</label>
              <input
                type="PINCODE"
                name="PINCODE"
                value={formData.PINCODE}
                onChange={handleChange}
                placeholder="Enter Pincode"
              />
            </div>

            <div className="form-column right-column">
              <div>PRESENT ADDRESS</div>
            <label>ADDRESS LINE 1:</label>
              <input
                type="text"
                name="ADDRESSLINE"
                value={formData.ADDRESSLINE}
                onChange={handleChange}
                placeholder="Enter Address"
              />

              <label>ADDRESS LINE 2:</label>
              <input
                type="text"
                name="ADDRESSLINE2"
                value={formData.ADDRESSLINE2}
                onChange={handleChange}
                placeholder="Enter Address"
              />
              <label>CITY:</label>
              <input
                type="CITY"
                name="CITY"
                value={formData.CITY}
                onChange={handleChange}
                placeholder="Enter City"
              />

              <label>STATE:</label>
              <input
                type="STATE"
                name="STATE"
                value={formData.STATE}
                onChange={handleChange}
                placeholder="Enter State"
              />

              <label>COUNTRY:</label>
              <input
                type="COUNTRY"
                name="COUNTRY"
                value={formData.COUNTRY}
                onChange={handleChange}
                placeholder="Select Country"
              />

              <label>PINCODE:</label>
              <input
                type="PINCODE"
                name="PINCODE"
                value={formData.PINCODE}
                onChange={handleChange}
                placeholder="Enter Pincode"
              />
                 <div className="address1"> <span> <Checkbox {...label} /></span>Same as Current Address</div>
            </div>
         
          </div>
          <div className="btn-container3">
            <button className="btn-color1">Cancel</button>
            <button className="btn-color">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
