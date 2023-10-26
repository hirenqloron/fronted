import React , {useState} from "react";
import "./Mysalary.css";
import downloadicon from "../../../image/downloadicon.svg";
import {useNavigate} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem, Select, FormControl } from "@mui/material";

const customStyles = {
  option: (provided) => ({
    ...provided,
    padding: '10px', // Adjust the padding value as needed
  }),
};
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

const stylesed = {
  width: "317px",
  height: "46px",
  border: "0.7px solid #7367f0",
  borderRadius: "5px",
  // color: type == "password" ? "#97949C" : "",
  // fontSize: type == "password" ? "20px" : "14px",
};

  

const Mysalary = () => {
  const [selectedYear, setSelectedYear] = useState("Select Year"); // Initial value
  const [selectedMonth, setSelectedMonth] = useState("Select Month"); // Initial value

  const navigate=useNavigate();
  const handleSalary=()=>{
    navigate("/mypay/mysalary")
  }
  const handletax=()=>{
    navigate("/mypay/incometax")
  }
  const handleSummary = () => {
    navigate("/myfinance/summary");
  };
  const handlePay = () => {
    navigate("/mypay/mysalary");
  };
  const handleManagetax = () => {
    navigate("/managetax");
  };
    const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
}
  return (
    <div>
      <div className="summary-bar">
        <p onClick={handleSummary}>SUMMARY</p>
        <p style={{background:"#7367F0",color:"white"}} onClick={handlePay}>MY PAY</p>
        <p onClick={handleManagetax}>MANAGE TAX</p>
      </div>
      <div className="paybar">
        <p onClick={handleSalary}>MY SALARY</p>
        <p className="subheading">PAY SLIPS</p>
        <p onClick={handletax}>INCOME TAX</p>
      </div>
      <div className="payslipdata">
        <div className="payslip">
          <div className="slippay">
            <p>Pay Slips</p>
            <p>
              <img className="downarrow" src={downloadicon} />
            </p>
          </div>
          <div>
            <p className="slipinfo">
              Here you can manage all sortboxs generated payslips for applicable
              years
            </p>
          </div>
          <div className="selectoption">
          <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                     
                    {/* {console.log(formData.gst)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={selectedYear}
                      onChange={handleYearChange}

                      // value={formData.gst}
                      // onChange={(e) => handleInputChangeGst(e)}
                      sx={{
                        fontSize: "14.35px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          color: "#7367F0",
                          borderColor: "transparent",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      }}
                      inputProps={{
                        style: {
                          color: "#7367F0", // Change this color to your desired color
                        },
                      }}
                    
                    >
                      <MenuItem  disabled value="Select Year">
                        Select Year
                      </MenuItem>
                      <MenuItem value="2023">2023</MenuItem>
                      <MenuItem value="2022">2022</MenuItem>
                      <MenuItem value="2021">2021</MenuItem>

                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
          </div>
          <div className="selectoption">
          <ThemeProvider theme={theme}>
                <FormControl>
                  <div style={{ margin: "1px 0 0 0" }}>
                     
                    {/* {console.log(formData.gst)} */}
                    <Select
                      style={stylesed}
                      type="text"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={selectedMonth}
                      onChange={handleMonthChange}

                      // value={formData.gst}
                      // onChange={(e) => handleInputChangeGst(e)}
                      sx={{
                        fontSize: "14.35px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          color: "#7367F0",
                          borderColor: "transparent",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      }}
                    >
                      <MenuItem disabled value="Select Month">
                        Select Month
                      </MenuItem>
                      <MenuItem value="jan">January</MenuItem>
                      <MenuItem value="feb">February</MenuItem>
                      <MenuItem value="mar">March</MenuItem>

                    </Select>
                  </div>
                </FormControl>
              </ThemeProvider>
          </div>

        </div>

        <div>
          <div className="payslipbox-1">
            <div className="payslipheading">
              <p>June 2023 Pay Slip</p>
              {/* <div className="payslipemptybox"></div> */}
            </div>
            <div className="payslipemptybox"></div>
            {/* <div className="downloadpay"><p>DOWNLOAD PAYSLIP</p></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mysalary;
