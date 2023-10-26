import * as React from 'react';
import { useEffect,useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import "./Salarybreakup.css";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function Salarybreakup({ open,setOpen}) {
  // const [open, setOpen] = React.useState(false);

   const handleClose = () => {
     setOpen(false);
   };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
const [data,setData]=useState([])
  useEffect(()=>{
const row = [
  {
    EARNINGS: "Basic",
    MONTHLY: "INR 12,000.00",
    ANNUALLY: "INR 1,44,000",
  },
  {
    EARNINGS: "HRA",
    MONTHLY: "INR 6,000.00",
    ANNUALLY: "INR 72,000",
  },
  {
    EARNINGS: "Conveyance Allowances",
    MONTHLY: "INR 2,400.00",
    ANNUALLY: "INR 28,000",
  },
  {
    EARNINGS: "Special Allowances",
    MONTHLY: "INR 1,400.00",
    ANNUALLY: "INR 17,280",
  },
  {
    EARNINGS: "Food Allowances",
    MONTHLY: "INR 600.00",
    ANNUALLY: "INR 7,200",
  },
  {
    EARNINGS: "Oncall Shift Allowances",
    MONTHLY: "INR 600.00",
    ANNUALLY: "INR 7,200",
  },
  {
    EARNINGS: "Skill Development Allowances",
    MONTHLY: "INR 2,400.00",
    ANNUALLY: "INR 28,800",
  },
  {
    EARNINGS: "Communication Allowances",
    MONTHLY: "INR 750.00",
    ANNUALLY: "INR 9,000",
  },
  {
    EARNINGS: "Books & Magzine Allowances",
    MONTHLY: "INR 2,400.00",
    ANNUALLY: "INR 28,800",
  },
  {
    EARNINGS: "Other Allowances Variables",
    MONTHLY: "INR 810.00",
    ANNUALLY: "INR 9,720",
  },
  {
    EARNINGS: "Stat Bonus",
    MONTHLY: "INR 600.00",
    ANNUALLY: "INR 7,200",
  },
  {
    EARNINGS: "Total earnings",
    MONTHLY: " INR 30,000.00",
    ANNUALLY: "INR 3,60,000.00",
  },
 
]
    setData(row);
  },[])
  
  return (
    <div>
      {/* <p variant="outlined" onClick={handleClickOpen}>
        Salary breakup
      </p> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{ background: "#7367F0" }} sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Salary Breakup for INR 60,000{" "}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="salarybreakup">
          <div className="salarybreakup1">
            <p className="paygroup">Pay group: Default pay group</p>
            <p className="currentsalary">
              Current Salary Structure: Qloron Technology Salary
              Structure(Custom salary structure){" "}
            </p>
          </div>
          <div className="salarybreakup2">
            <p className="versionhistory">Version History</p>
            <p className="previoussalary">
              View previous versions of salary structures
            </p>
          </div>
        </div>
        <div className="sidebysidetable">
          <div>
            <table className="salarybreakuptable">
              <tr className="headerdata">
                <th className="salarybpdata">
                  <div>SECTION</div>
                </th>
                <th className="salarybpdata">
                  <div>DEDUCTIONNAME</div>
                </th>
                <th className="salarybpdata">
                  <div>DECLARATION</div>
                </th>
              </tr>
              {data.map((item) => (
                <tr className="salarybrerowdata" key={item.id}>
                  <td className="salarybreakupdata">
                    <div className="earningsdata">{item.EARNINGS}</div>
                  </td>
                  <td className="salarybreakupdata">
                    <div className="monthlydata">{item.MONTHLY}</div>
                  </td>
                  <td className="salarybreakupdata">
                    <div className="annuallydata">{item.ANNUALLY}</div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="salarysidetable">
            <p>Aug 21, 2023</p>
            <p>Original salary structure</p>
            <p>CURRENT VERSION</p>
          </div>
        </div>
        <div className="salarybptable2">
          <table>
            <tr className="table2head">
              <th>DEDUCTIONS</th>
              <th>MONTHLY</th>
              <th>ANNUALLY</th>
            </tr>
            <tr>
              <td>PF Employee</td>
              <td>INR 1,440.00</td>
              <td>INR 17,280.00</td>
            </tr>
            <tr>
              <td>PF Employer</td>
              <td>INR 1,440.00</td>
              <td>INR 17,280.00</td>
            </tr>
            <tr>
              <td>Total Deductions</td>
              <td>INR 2,880.00</td>
              <td>INR 34,560.00</td>
            </tr>
          </table>
        </div>
        <div className="salarybplasttable">
          <p>DEDUCTIONS</p>
          <p>INR 27,120.00</p>
          <p>INR 3,25,440.00</p>
        </div>
      </Dialog>
    </div>
  );
}
