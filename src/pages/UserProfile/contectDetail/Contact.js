import React, { useState } from "react";
import "./contect.css";

const Contect = ({ onClose }) => {
  const [formData, setFormData] = useState({
    WorkEmail: "",
    Personal: "",
    Phone: "",
    Residence: "",
    WorkPhone: "",
    Skype: "",
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
    <div className="container">
      <div className="primary-tag">
        <h1>Contact Details  <span onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 59 59" fill="none">
  <path d="M20.8064 38.1911L38.1895 20.8081" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
  <path d="M20.8064 20.8089L38.1895 38.1919" stroke="white" stroke-width="3.6875" stroke-linecap="round"/>
</svg></span></h1>
      </div>
      <div className="edit-tag">
         
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column left-column">
              <label>Work Email:</label>
              <input
                type="email"
                name="WorkEmail"
                value={formData.WorkEmail}
                onChange={handleChange}
                placeholder="james.ferguison@sortboxs.com"
              />

              <label>Mobile Phone:</label>
              <input
                type="number"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                placeholder="9876541230"
              />
              <label>Residence Phone:</label>
              <input
                type="number"
                name="Residence"
                value={formData.Residence}
                onChange={handleChange}
                placeholder="9876541230"
              />
            </div>

            <div className="form-column right-column">
              <label>Personal Email:</label>
              <input
                type="text"
                name="Personal"
                value={formData.Personal}
                onChange={handleChange}
                placeholder="james.ferguison@gmail.com"
              />

              <label>Work Phone:</label>
              <input
                type="number"
                name="WorkPhone"
                value={formData.WorkPhone}
                onChange={handleChange}
                placeholder="9876541230"
              />

              <label>Skype:</label>
              <input
                type="text"
                name="Skype"
                value={formData.Skype}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="btn-container4">
            <button className="btn-color-1">Cancel</button>
            <button className="btn-color-2">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contect;
