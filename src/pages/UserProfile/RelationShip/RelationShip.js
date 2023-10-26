// EditPrimary.js

import React, { useState } from "react";
import "./Relationship.css";
import Grid from "@mui/material/Grid";

const RelationShip = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",

    gender: "",
    dateOfBirth: "",

    Email: "",
    Mobile: "",
  });

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
    <div className="container1">
      <div className="primary-tag">
        <h1>Relation <span onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 59 59" fill="none">
  <path d="M20.8064 38.1911L38.1895 20.8081" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
  <path d="M20.8064 20.8089L38.1895 38.1919" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
</svg></span></h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="left-card">
            <div className="father">Father</div>
            <div className="father2">Peter Ferguison</div>
            <div className="father3">Farmer</div>
          </div>
          <button className="relation-button">+ Add new relation </button>
        </Grid>
        <Grid item xs={8}>
          <div className="edit-tag">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-column left-column">
                  <label>Relation:</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="male">FATHER</option>
                    <option value="female">Mother</option>
                    <option value="other">Others</option>
                    <option value="other">Partner</option>
                  </select>
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />

                  <label>Email:</label>
                  <input
                    type="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />

                  <label>Profession:</label>
                  <input
                    type="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-column right-column">
                  <label>Gender:</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />

                  <label>Mobile:</label>
                  <input
                    type="Number"
                    name="Mobile"
                    value={formData.Mobile}
                    onChange={handleChange}
                  />

                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="btn-container-10">
                <button className="btn-color-5">Cancel</button>
                <button className="btn-color-6">Update</button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RelationShip;
