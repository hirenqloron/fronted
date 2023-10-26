import React, { useState } from "react";
import "./editprimary.css";


const EditPrimary = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    displayName: "",
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    bloodGroup: "",
    isPhysicallyHandicapped: false,
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
        <h1>
          Primary Details
          <span onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 59 59"
              fill="none"
            >
              <path
                d="M20.8064 38.1911L38.1895 20.8081"
                stroke="white"
                stroke-width="3.6875"
                stroke-linecap="round"
              />
              <path
                d="M20.8064 20.8089L38.1895 38.1919"
                stroke="white"
                stroke-width="3.6875"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h1>
      </div>
      <div className="edit-tag">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <label>
                First Name{" "}
               
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="James"
              />

              <label>
                Last Name{" "}
               
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="James"
              />

              <label>
                Gender
               
              </label>
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

              <label>
                Marital Status
              
              </label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="">
                  Select{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.4844 13.8282C25.936 14.2797 25.936 15.0118 25.4844 15.4633L19.3178 21.63C18.8662 22.0816 18.1341 22.0816 17.6826 21.63L11.5159 15.4633C11.0644 15.0118 11.0644 14.2797 11.5159 13.8282C11.9674 13.3766 12.6995 13.3766 13.1511 13.8282L18.5002 19.1772L23.8492 13.8282C24.3008 13.3766 25.0329 13.3766 25.4844 13.8282Z"
                        fill="#606060"
                      />
                    </svg>
                  </span>
                </option>
                <option value="single">Single</option>
                <option value="unmarried">Unmarried</option>
              </select>

              <label>
                Physically Handicapped
               
              </label>
              <select
                name="isPhysicallyHandicapped"
                value={formData.isPhysicallyHandicapped}
                onChange={handleChange}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
            <div className="form-column">
              <label>
                Middle Name{" "}
                
              </label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Kumar"
              />
              <label>
                Display Name{" "}
               
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="James Ferguison"
              />

              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />

              <label>
                Blood Group
               
              </label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="">O+ (O Positive)</option>
                <option value="single">O- (O Positive)</option>
                <option value="unmarried">O+ (O Positive)</option>
              </select>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-color1">Cancel</button>
            <button className="btn-color">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPrimary;
