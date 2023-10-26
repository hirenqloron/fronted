import React from 'react'
import styles from './CompareComStat.module.css'
import locaton from '../../../../../image/PAYROLLlocation.svg'
import copyPaste from '../../../../../image/pasteCopy.svg'
import uit_calender from '../../../../../image/uit_calender.svg'
import build from '../../../../../image/wpf_building.svg'
import greenSice from '../../../../../image/greeeeen.svg'
import male from '../../../../../image/icons8_male.svg'
import computer from '../../../../../image/Laptop at workplace showing growth chart.svg'
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { styled, alpha } from '@mui/material/styles';
import { Grid, StepLabel, TextField } from '@mui/material';
import Switch from '@mui/material/Switch';

const stylesed = {
  width: "100%",
  height: "35px",
  border: "0.7px solid #7367f0",
  borderRadius: "5px",
  // color: type == "password" ? "#97949C" : "",
  // fontSize: type == "password" ? "20px" : "14px",
};
const labelStyle = {
  fontSize: "14.35px",
  color: "black",
};
const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  color: 'white',
  padding: '5px 10px',
  borderRadius: '50%',
}));

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
const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#7367F0',
    //   '&:hover': {
    //     backgroundColor: '#E1D8D8',
    //   },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#7367F0',
  },
}));

const CompareComStat = () => {
  return (
    <div className={styles.mainCompareComStat}>
      <div className={styles.innerCompareComStat}>
        <div className={styles.mainCompareComStatText}>
          <h1>Compensation Summary</h1>
          <div>
            <ThemeProvider theme={theme}>
              <FormControl>
                <div style={{ margin: "1px 0 0 0" }}>
                  <Select
                    style={stylesed}
                    type="text"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={requestData.role}
                    // onChange={(e) => {
                    //     setRequestData((prevData) => ({
                    //         ...prevData,
                    //         role: e.target.value,
                    //     }))
                    // }}
                    sx={{
                      fontSize: "14.35px",
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
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                    }}
                  >
                    {/* <MenuItem disabled value="l">
                                                Select
                                            </MenuItem> */}
                    <MenuItem value={1}>Financial Year 2023 - 2024</MenuItem>
                    <MenuItem value={2}>Financial Year 2024 - 2025</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </ThemeProvider>
          </div>
        </div>
        <div className={styles.mainCards}>
          <div className={styles.cards}>
            <div className={styles.units}>
              <div className={styles.bgUnitsColor}><img src={locaton} alt='location' /></div> &nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.para}>
                <h2>Business Units</h2>
                <p>Use this to compare compensation cost between Business Units. Maximum three BU’s are allowed for comparuison.</p>
              </div>
            </div>
            <div className={styles.units}>
              <div className={styles.bgUnitsColor}><img src={locaton} alt='location' /></div> &nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.para}>
                <h2>Business Units</h2>
                <p>Use this to compare compensation cost between Business Units. Maximum three BU’s are allowed for comparuison.</p>
              </div>
            </div>
            <div className={styles.units}>
              <div className={styles.bgUnitsColor}><img src={locaton} alt='location' /></div> &nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.para}>
                <h2>Business Units</h2>
                <p>Use this to compare compensation cost between Business Units. Maximum three BU’s are allowed for comparuison.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainCompareComStatSec}>
          <div className={styles.leftmainCompareComStatSec}>
            <div className={styles.CompareComStat}>
              <div className={styles.copy}><img src={copyPaste} alt='copy' /></div>
              <div className={styles.computer}><img src={computer} alt='pc' /></div>
            </div>
            <div className={styles.headCoUNT}>
              <h1>Headcount</h1>
              <div className={styles.gender}>
                <h1><img src={male} /> Male</h1>
                <h1><img src={male} /> Female</h1>
                <h1><img src={male} /> Non-binary</h1>
                <h1><img src={male} /> Transgender</h1>
                <h1><img src={male} /> Prefer not to respond</h1>
              </div>
            </div>
            <div className={styles.calenarSide}>
              <h1><img src={uit_calender} alt='calendar' /> &nbsp; &nbsp; FY 2023 - 2024</h1>
              <p>Planned Compensation Cost</p>
              <div className={styles.fixedtxt}>
                <h1><img src={greenSice} />Fixed</h1>
                <h1><img src={greenSice} />Bonus</h1>
              </div>
              <div className={styles.fixedtxt}>
                <h1><img src={greenSice} />Contrubution</h1>
                <h1><img src={greenSice} />Other</h1>
              </div>
              <div className={styles.Monthly}>
                <h1>View Monthly Avg <PinkSwitch {...label} defaultChecked /></h1>
              </div>
              <div className={styles.Planned}>
                <h2>Planned Cost (YTD)</h2>
                <h1>Vs.</h1>
                <h2>Actual Cost (YTD)</h2>
              </div>
              <div className={styles.department}>
                <h2> Department</h2>
              </div>
            </div>
          </div>
          <div className={styles.rightmainCompareComStatSec}>
            <div className={styles.rightmainCompareComStatSecimg}>
              <img src={build} alt='build' />
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                 Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareComStat