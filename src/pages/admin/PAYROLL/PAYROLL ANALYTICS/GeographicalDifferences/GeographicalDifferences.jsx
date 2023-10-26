import React from 'react'

import styleEC from '../EmployeeCompetitiveness/EmployeeCompetitiveness.module.css';
import mapSvg from '../../../../../svgIcons/map.svg';
import { MenuItem, Select } from '@mui/material';

const stylesed = {
  width: "250px",
  marginTop: "0.25rem",
  height: "35px",
  border: "0.7px solid #7367f0",
  borderRadius: "5px",
  backgroundColor:"#fff",
};

function GeographicalDifferences() {
  return (
    <div>
      <h3 >Geographical Differentials</h3>
      <div className={styleEC.divForm}>
        <Select
          style={stylesed}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
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
          <MenuItem disabled value="l">
            Select Location
          </MenuItem>
          <MenuItem value="Nagpur">
            Nagpur
          </MenuItem>
          <MenuItem value="Amravati">
            Amravati
          </MenuItem>
          <MenuItem value="Hyderabad">
            Hyderabad
          </MenuItem>
          <MenuItem value="Pune">
            Pune
          </MenuItem>
        </Select>

      </div>
      <div className={styleEC.divSectionMain}>
        <img src={mapSvg} alt='logo' />

        <p className={styleEC.contextStyle}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          <br />velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          <br />torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>
    </div>
  )
}

export default GeographicalDifferences