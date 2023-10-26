import React from 'react';
import styleEC from './EmployeeCompetitiveness.module.css';
import Input from '../../../../../components/Input/Input';
import { Button } from '@mui/material';
import womenWorkSvg from '../../../../../svgIcons/Recruiter woman having online interview.svg';

const stylesBtn={
    marginTop: "auto",
    marginBottom: "auto",
    height: "36px",
    marginLeft: "1rem",
    padding: "8.14px 18px 8.14px 18px",
    borderRadius: "3.26px",
    color: "#fff",
    backgroundColor: "#7367F0",
}

function EmployeeCompetitiveness() {
    return (
        <div>
            <h3 >Employee Competitiveness</h3>
            <div className={styleEC.divForm}>
                <Input
                    width="240px"
                    height="18px"
                    // color="#7367F0"
                    type="text"
                    name="search"
                    placeholder="Search Employee"
                    p1={true}
                />

                <Button style={stylesBtn}>Reset</Button>
            </div>
            <div className={styleEC.divSectionMain}>
                <img src={womenWorkSvg} alt='logo' />
                <p className={styleEC.contextStyle}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                    <br />velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                    <br />torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
        </div>
    )
}

export default EmployeeCompetitiveness