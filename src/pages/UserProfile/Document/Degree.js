import React, { useState } from "react";
import "../primaryDetails/editprimary.css";

const Degree = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
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
          Add Signature
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
              <label>Add Signature</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Name"
              />

              <label>Designation</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Designation"
              />
            </div>
          </div>
        </form>
        <div className="signature-document">
          <div className="document-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0C7.76142 0 10 2.41198 10 5.3873L10 11.7723C10 13.866 8.42471 15.5633 6.48148 15.5633C4.53826 15.5633 2.96296 13.866 2.96296 11.7723L2.96296 5.27329C2.96296 4.06112 3.87498 3.07846 5 3.07846C6.12502 3.07846 7.03704 4.06112 7.03704 5.27329L7.03704 11.5442C7.03704 11.8748 6.78831 12.1428 6.48148 12.1428C6.17466 12.1428 5.92593 11.8748 5.92593 11.5442L5.92593 5.27329C5.92593 4.7223 5.51137 4.27564 5 4.27564C4.48863 4.27564 4.07407 4.7223 4.07407 5.27329L4.07407 11.7723C4.07407 13.2048 5.15191 14.3661 6.48148 14.3661C7.81106 14.3661 8.88889 13.2048 8.88889 11.7723L8.88889 5.3873C8.88889 3.07316 7.14777 1.19718 5 1.19718C2.85223 1.19718 1.11111 3.07316 1.11111 5.3873L1.11111 11.5442C1.11111 11.8748 0.86238 12.1428 0.555556 12.1428C0.248732 12.1428 0 11.8748 0 11.5442L0 5.3873C0 2.41198 2.23858 0 5 0Z"
                fill="#7367F0"
              />
            </svg>
          </div>
          <div className="attech-signature">Attach Signature</div>
          <div className="cross-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.49967 7.61475C8.79308 7.61475 9.03092 7.85259 9.03092 8.146V11.6877C9.03092 11.9811 8.79308 12.2189 8.49967 12.2189C8.20627 12.2189 7.96842 11.9811 7.96842 11.6877V8.146C7.96842 7.85259 8.20627 7.61475 8.49967 7.61475Z"
                fill="#97949C"
              />
              <path
                d="M8.49967 6.37516C8.89088 6.37516 9.20801 6.05803 9.20801 5.66683C9.20801 5.27563 8.89088 4.9585 8.49967 4.9585C8.10847 4.9585 7.79134 5.27563 7.79134 5.66683C7.79134 6.05803 8.10847 6.37516 8.49967 6.37516Z"
                fill="#97949C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.30176 8.50016C2.30176 5.07715 5.07666 2.30225 8.49967 2.30225C11.9227 2.30225 14.6976 5.07715 14.6976 8.50016C14.6976 11.9232 11.9227 14.6981 8.49967 14.6981C5.07666 14.6981 2.30176 11.9232 2.30176 8.50016ZM8.49967 3.36475C5.66346 3.36475 3.36426 5.66395 3.36426 8.50016C3.36426 11.3364 5.66346 13.6356 8.49967 13.6356C11.3359 13.6356 13.6351 11.3364 13.6351 8.50016C13.6351 5.66395 11.3359 3.36475 8.49967 3.36475Z"
                fill="#97949C"
              />
            </svg>
          </div>
        </div>
        <div className="bt-cont">
          <button className="btn-color1">Cancel</button>
          <button className="btn-color">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Degree;
