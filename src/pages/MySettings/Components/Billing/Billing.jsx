import React, { useState } from "react";
import styles from "./billing.module.css";
import { styled } from "@mui/material/styles";
import data from './data'
import {
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
   Typography,
} from "@mui/material";
import CustomizedTables from "../../../../components/Table/Table";
import Stack from '@mui/material/Stack';
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Input from "./../../../../components/Input/Input";
import Switch from '@mui/material/Switch';
import SavedCard from './../../../../components/SavedCard/SavedCard';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 18,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#DFDDE1" : "#DFDDE1",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#7367F0" : "#7367F0",
  },
}));

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto #7367F0",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#7367F0",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#7367F0",
  },
});
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#7367F0' : '#7367F0',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
const Billing = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div>
      <Card className={styles.card}>
        <div className={styles.d1}> 
          <h1 className={styles.heading}>Current Plan</h1>
          <span>
            <h3>Your Current Plan is Basic</h3>{" "}
            <p>A simple start for everyone</p>
          </span>
          <span>
            <h3>Active until Dec 09, 2023</h3>{" "}
            <p>We will send you a notification upon Subscription expiration</p>
          </span>
          <span>
            <span className={styles.spanL}>
              {" "}
              <h3>$199 Per Month</h3> <p>Popular</p>{" "}
            </span>
            <p>Standard plan for small to medium businesses</p>
          </span>
          <div className={styles.btnDiv}>
            <button className={styles.btn1}>Upgrade Plan</button>
            <button className={styles.btn2}>Cancel Subscription</button>
          </div>
        </div>{" "}
        <div className={styles.d2}>
          <div className={styles.d2i}>
            <h4>We need your attention!</h4> <p>Your plan requires update</p>
          </div>
          <div>
            <span className={styles.spanL2}>
              <h6>Days</h6> <h6>24 of 30 Days</h6>
            </span>{" "}
            <BorderLinearProgress variant="determinate" value={50} />
            <p className={styles.remain}>6 days remaining until your plan requires update</p>
          </div>
        </div>
      </Card>

      <Card className={styles.card2}>
        <div className={styles.dOne}>
          <FormControl className={styles.form}>
            <FormLabel
              className={styles.formLabel}
              id="demo-controlled-radio-buttons-group"
            >
              Payment Method
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
              row
              className={styles.radioDiv}
            >
              <FormControlLabel
                value="female"
                control={<BpRadio />}
                label="Credit/Debit/ATM Card"
              />
              <FormControlLabel
                value="male"
                control={<BpRadio />}
                label="COD/Cheque"
              />
            </RadioGroup>
          <div className={styles.creditDiv}>
              <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}

          />
          </div>
          <div className={styles.formDiv}>
            <Input
              type="number"
              width="90%"
              name="number"
              placeholder="0000 0000 0000 0000"
              label="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div className={styles.flex}>
              {" "}
              <Input
                type="text"
                width="100%"
                name="name"
                placeholder="Angela Yu"
                label="Name on Card"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <Input
                type="month"
                width="100%"
                name="expiry"
                placeholder="june,2023"
                label="Expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <Input
                type="number"
                width="70%"
                name="cvc"
                placeholder="123"
                label="CVV"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <Stack  direction="row" spacing={1} alignItems="center">
      
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography className={styles.typo}>Save Card for future billing?</Typography>
      </Stack>
      <div className={styles.btnDiv}>
      <button className={styles.btn1}>Save Changes</button>
            <button className={styles.btn2}>Reset</button>
          </div>
          </FormControl>
       
        </div>
        <div className={styles.dTwo}>

         <SavedCard cardData={data} />
        </div>
      </Card>
    </div>
  );
};

export default Billing;
