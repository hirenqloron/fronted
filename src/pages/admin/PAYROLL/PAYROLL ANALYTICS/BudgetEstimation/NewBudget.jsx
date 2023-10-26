import { Button, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'
import trashSvg from '../../../../../svgIcons/Trash.svg';

const stylesed = {
    width: "150px",
    marginTop: "0.25rem",
    height: "35px",
    border: "0.7px solid #7367f0",
    borderRadius: "5px",
};
const stylesed2 = {
    width: "70px",
    marginTop: "0.25rem",
    border: "0.7px solid #7367f0",
    borderRadius: "5px",
};
const stylesed3 = {
    width: "208px",
    marginTop: "0.25rem",
    border: "0.7px solid #7367f0",
    borderRadius: "5px",
};
const stylesedHeader = {
    color: '#7367F0',
    textWrap: 'nowrap'
};
const footerBtnsDiv = {
    display: 'flex',
    justifyContent: "space-between",
    margin: "0.5rem 0.75rem",
}
const btnAddJob = {
    "&:hover": {
        backgroundColor: "#7367f0",
        color: "#ffffff",
    }
}
const tabletData = {
    marginTop: "30px",
    marginBottom: "1rem",
}
const headerdata = {
    backgroundColor: "#E1EAFA",
    fontFamily: "Public Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    padding: "10px",
}
const newBudgetMainSection = {
    paddingTop: "0.15rem",
    paddingBottom: "0.15rem",
}

const estimateBtn = {
    padding: "10px",
    borderRadius: "3.68px",
    backgroundColor: "#7367f0",
    color: "#ffffff",

}

function NewBudget() {
    const [jobOpenings, setJobOpenings] = useState([
        {
            department: '',
            jobRole: '',
            minExperience: '',
            maxExperience: '',
            noOfOpenings: '',
        },
    ]);

    const handleAddJobOpening = () => {
        setJobOpenings([...jobOpenings, { department: '', jobRole: '', minExperience: '', maxExperience: '', noOfOpenings: '' }]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and data storage here
        console.log(jobOpenings); // You can replace this with your data storage logic
    };

    const handleDeleteJobOpening = (index) => {
        const updatedJobOpenings = [...jobOpenings];
        updatedJobOpenings.splice(index, 1);
        setJobOpenings(updatedJobOpenings);
    };
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedJobOpenings = [...jobOpenings];
        updatedJobOpenings[index] = {
            ...updatedJobOpenings[index],
            [name]: value,
        };
        setJobOpenings(updatedJobOpenings);
        console.log(' <<<e.target>>>  ', updatedJobOpenings);
    }
    return (
        <div style={newBudgetMainSection}>
            <form onSubmit={handleFormSubmit}>
                <Table style={tabletData}>
                    <TableHead style={headerdata}>
                        <TableRow >
                            <TableCell style={stylesedHeader} >DEPARTMENT </TableCell>
                            <TableCell style={stylesedHeader}>JOBROLE</TableCell>
                            <TableCell style={stylesedHeader}>EXPERIENCE (YRS)</TableCell>
                            <TableCell style={stylesedHeader}>NO OF OPENINGS</TableCell>
                            <TableCell style={stylesedHeader}>REMOVE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {jobOpenings.map((opening, index) => (
                            <TableRow key={index}>
                                <TableCell >
                                    <Select
                                        name="department"
                                        style={stylesed}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={opening.department}
                                        onChange={(e) => handleInputChange(e, index)}
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
                                        <MenuItem value="l">
                                            Select Department
                                        </MenuItem>
                                        <MenuItem value="IT">
                                            IT
                                        </MenuItem>
                                        <MenuItem value="Marketing">
                                            Marketing
                                        </MenuItem>
                                        <MenuItem value="HR">
                                            HR
                                        </MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Select
                                        style={stylesed}
                                        name={`jobRole`}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={opening.jobRole}
                                        onChange={(e) => handleInputChange(e, index)}
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
                                        <MenuItem value="l">
                                            Select JobRole
                                        </MenuItem>
                                        <MenuItem value="react">
                                            React
                                        </MenuItem>
                                        <MenuItem value="angular">
                                            Angular
                                        </MenuItem>
                                        <MenuItem value="backend">
                                            Backend
                                        </MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <input
                                        name={`minExperience`}
                                        type="text"
                                        placeholder="Min"
                                        value={opening.minExperience}
                                        onChange={(e) => handleInputChange(e, index)}
                                        style={stylesed2}
                                    />
                                    <span style={{ mx: '0.5rem' }}> - </span>
                                    <input
                                        name={`maxExperience`}
                                        type="text"
                                        placeholder="Max"
                                        value={opening.maxExperience}
                                        onChange={(e) => handleInputChange(e, index)}
                                        style={stylesed2}
                                    />
                                </TableCell>
                                <TableCell>
                                    <input

                                        style={stylesed3}
                                        name={`noOfOpenings`}
                                        type="text"
                                        placeholder="Provide no. of Openings"
                                        value={opening.noOfOpenings}
                                        onChange={(e) => handleInputChange(e, index)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <div>
                                        <Button onClick={() => handleDeleteJobOpening(index)}>
                                            <img src={trashSvg} alt='delete' />
                                        </Button>
                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={footerBtnsDiv} >
                    <Button style={btnAddJob} onClick={handleAddJobOpening} >+Add Job Openings</Button>
                    <Button type="submit"
                        style={estimateBtn}
                    >Estimate Budget</Button>

                </div>
            </form>
        </div>
    )
}

export default NewBudget