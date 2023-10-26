// EditPrimary.js

import React, { useState } from "react";

import "./profesion.css"

const Profesnal = ({ onClose }) => {
  const [formData, setFormData] = useState({
   
    Description: "",

   
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
        <h1>Professional Summary <span onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 59 59" fill="none">
  <path d="M20.8064 38.1911L38.1895 20.8081" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
  <path d="M20.8064 20.8089L38.1895 38.1919" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
</svg></span></h1>
      </div>
     
        
          <div className="edit-tag">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-column left-column">
                
                  <label>Professional Summary</label>
                  <textarea
                    type="text"
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                    style={{ width: "auto", height: "80px" }}
                  />

                  
                </div>

              
              </div>
              <div className="btn-container-11">
                <button className="btn-color1-7">Cancel</button>
                <button className="btn-color-8">Update</button>
              </div>
            </form>
          </div>
        
    </div>
  );
};

export default Profesnal;
