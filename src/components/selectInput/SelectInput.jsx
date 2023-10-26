import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import React from "react";
import classes from "./selectInput.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Public Sans",
          color: "#6d6976",
          "&:hover": {
            backgroundColor: "#E8E7FD",
            color: "#7367F0", // Change this to your desired color
          },
        },
      },
    },
  },
});
const SelectInput = ({
  value,
  name,
  type,
  placeholder,
  color,
  label,
  width,
  height,
  onChange,
  labelSize,
  labelColor,
  isRequired,
  formError,
}) => {
  const styles = {
    width: width ? width : "200px",
    height: height ? height : "30px",
    border: `0.7px solid ${color ? color : "#C9C9C9"}`,
    borderRadius: "5px",
    color: type == "password" ? "#97949C" : "",
    fontSize: type == "password" ? "20px" : "14px",
  };
  const labelStyle = {
    fontSize: labelSize ? labelSize : "16px",
    color: labelColor ? labelColor : "#6d6976",
  };
  const importantStyle = {
    color: "red",
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <div className={classes.input}>
          <label style={labelStyle} htmlFor={name}>
            {label}{" "}
            {isRequired === true && <span style={importantStyle}>*</span>}
          </label>

          <Select
            style={styles}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name={name}
            value={value}
            onChange={onChange}
            // label={placeholder}
            sx={{
              "& .MuiSelect-select": {
                padding: "10px",
                color: "#6D6976",
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              }, // Remove the blue outline on focus
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              }, // Make the dropdown transparent on hover
            }}
          >
            <MenuItem default disabled value="">
              {placeholder}
            </MenuItem>
            <MenuItem value="10">ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
            <MenuItem value="30">Thirty</MenuItem>
          </Select>
          {formError && <div className={classes.error}>{formError}</div>}
        </div>
      </FormControl>
    </ThemeProvider>
  );
};

export default SelectInput;
