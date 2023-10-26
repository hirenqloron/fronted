// EditPrimary.js

import React, { useState } from "react";

import Grid from "@mui/material/Grid";

const Educatioin = ({ onClose }) => {
  const [formData, setFormData] = useState({
    CompanyName: "",
    middleName: "",
    JobTitle: "",
    Description: "",

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
        <h1>Add a new document - Previous Experience <span onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 59 59" fill="none">
  <path d="M20.8064 38.1911L38.1895 20.8081" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
  <path d="M20.8064 20.8089L38.1895 38.1919" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
</svg></span></h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="left-card1"> <h1>No Attachments</h1></div>
        </Grid>
        <Grid item xs={8}>
          <div className="edit-tag">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-column left-column">
                  <label>CompanyName:</label>
                  <input
                    type="text"
                    name="CompanyName"
                    value={formData.CompanyName}
                    onChange={handleChange}
                  />

                  <label>Date of Joining:</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                  <label>Location:</label>
                  <input
                    type="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />

                  <label>Description</label>
                  <textarea
                    type="text"
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                    style={{ width: "auto", height: "80px" }}
                  />

                  <div className="attechment">
                  <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="12"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.42323 1.61572C12.0981 1.61572 14.2666 3.78418 14.2666 6.4591L14.2666 12.1994C14.2666 14.0817 12.7407 15.6077 10.8583 15.6077C8.97595 15.6077 7.45 14.0817 7.45 12.1994L7.45 6.35659C7.45 5.26681 8.33344 4.38337 9.42323 4.38337C10.513 4.38337 11.3965 5.26681 11.3965 6.35659L11.3965 11.9944C11.3965 12.2916 11.1555 12.5325 10.8583 12.5325C10.5611 12.5325 10.3201 12.2916 10.3201 11.9944L10.3201 6.35659C10.3201 5.86124 9.91858 5.45967 9.42323 5.45967C8.92787 5.45967 8.52631 5.86124 8.52631 6.35659L8.52631 12.1994C8.52631 13.4873 9.57038 14.5314 10.8583 14.5314C12.1462 14.5314 13.1903 13.4873 13.1903 12.1994L13.1903 6.4591C13.1903 4.3786 11.5037 2.69203 9.42323 2.69203C7.34273 2.69203 5.65616 4.3786 5.65616 6.4591L5.65616 11.9944C5.65616 12.2916 5.41522 12.5325 5.11801 12.5325C4.82079 12.5325 4.57985 12.2916 4.57985 11.9944L4.57985 6.4591C4.57985 3.78418 6.74831 1.61572 9.42323 1.61572Z"
                          fill="#6D6976"
                        />
                      </svg>
                    </span>
                    <>Add Attachment</>
                   
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.63153 6.25215H8.84002V5.04367H7.63153M8.23578 12.8988C5.57107 12.8988 3.40184 10.7296 3.40184 8.06488C3.40184 5.40017 5.57107 3.23094 8.23578 3.23094C10.9005 3.23094 13.0697 5.40017 13.0697 8.06488C13.0697 10.7296 10.9005 12.8988 8.23578 12.8988ZM8.23578 2.02246C7.44227 2.02246 6.65654 2.17875 5.92344 2.48241C5.19034 2.78607 4.52423 3.23115 3.96314 3.79224C2.82997 4.92542 2.19336 6.46233 2.19336 8.06488C2.19336 9.66743 2.82997 11.2043 3.96314 12.3375C4.52423 12.8986 5.19034 13.3437 5.92344 13.6473C6.65654 13.951 7.44227 14.1073 8.23578 14.1073C9.83832 14.1073 11.3752 13.4707 12.5084 12.3375C13.6416 11.2043 14.2782 9.66743 14.2782 8.06488C14.2782 7.27138 14.1219 6.48564 13.8182 5.75254C13.5146 5.01944 13.0695 4.35333 12.5084 3.79224C11.9473 3.23115 11.2812 2.78607 10.5481 2.48241C9.81501 2.17875 9.02928 2.02246 8.23578 2.02246ZM7.63153 11.0861H8.84002V7.46064H7.63153V11.0861Z"
                          fill="#6D6976"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="max-width">Max file size allowed is 20MB</div>
                </div>

                <div className="form-column right-column">
                  <label>Job Title:</label>
                  <input
                    type="text"
                    name="JobTitle"
                    value={formData.JobTitle}
                    onChange={handleChange}
                  />

                  <label>Date of Relieving:</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="btn-container1">
                
                <button className="btn-color2">Save Document</button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Educatioin;
