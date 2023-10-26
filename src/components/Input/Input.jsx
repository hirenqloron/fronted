import React, { useState } from "react";
import classes from "./Input.module.css";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
const Input = ({
  name,
  type,
  placeholder,
  color,
  label,
  width,
  height,
  value,
  onChange,
  onFocus,
  handleSearch,
  direction,
  gap,
  labelSize,
  labelColor,
  isRequired,
  formError,
  disabled,
  p1,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : (type==="search" ? "text" : type)  || "text";
  const styles3 = {
    width: width ? width : "200px",
    flexDirection: direction ? direction : "column",
    gap:direction==="row" ? gap: "",
    alignItems:direction==="row"? "center" :"",
  };
  const styles = {
    // width: width ? width : "200px",
    height: height ? height : "30px",
    border: `0.7px solid ${color ? color : "#C9C9C9"}`,

    borderRadius: "5px",
    color: type == "password" ? "#97949C" : "",
    fontSize: type == "password" ? "20px" : "14px",
   
  };
  const styles2 = {
    // left: "-7.5%",
    left: "-10.5%",
  };
  const labelStyle= {
    fontSize: labelSize ? labelSize : "16px",
    color:labelColor ? labelColor : "#6d6976 !important",
  }
  const importantStyle ={
    color:"red"
  }

  return (
    <div style={styles3} className={classes.input}>
      <label style={labelStyle} htmlFor={name}>{label} {isRequired === true && <span style={importantStyle}>*</span>} </label>
      <div>
        {" "}
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={p1 ? classes.p1 : classes.p2}
          style={styles}
          type={inputType}
          onFocus={onFocus}
          disabled={disabled}
        />
        
        {type === "search" && (
          <button style={styles2} type="button" 
          // onClick={handleSearch}
          >
            <HiOutlineSearch />
          </button>
        )}
        {type === "password" && (
          <button style={styles2} type="button" onClick={toggleShowPassword}>
            {showPassword ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
          </button>
        )}
      </div>
      {formError && <div className={classes.error}>{formError}</div>}
    </div>
  );
};

export default Input;
