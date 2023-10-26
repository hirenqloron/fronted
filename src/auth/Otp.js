import React, { useState ,createRef } from "react";
import "./Otp.css";
const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [active, setActive] = useState(Array(6).fill(false));
  const inputsRef = Array(6).fill(0).map(() => createRef());

  const handleChange = (element, index) => {
    if (element.target.validity.valid) {
      setOtp([
        ...otp.map((data, i) => (i === index ? element.target.value : data)),
      ]);
      setActive([...active.map((data, i) => (i === index ? true : data))]);

      // focus on next input
      if (element.target.nextSibling) {
        element.target.nextSibling.focus();
      }
    }
  };
  const handleKeyDown = (element, index) => {
    if (element.keyCode === 8 && otp[index] === '') {
        // focus on previous input
        if (element.target.previousSibling) {
            element.target.previousSibling.focus();
        }
    }
};
const handleValidate = () => {
    const enteredOtp = otp.join(''); // Combine the OTP digits into a single string
    console.log("Entered OTP:", enteredOtp);
    setOtp(Array(6).fill(""));
    setActive(Array(6).fill(false));

    // Optionally, you can also clear the input fields
    inputsRef.forEach((inputRef) => {
      inputRef.current.value = "";
    });

  };
  return (
    <div className="otpscreen">
      <div className="otpdata">
        <p>Please enter One-Time-Password to verify your account</p>
        <p>A One-Time-Password has been sent to manoj.nampally@qloron.com</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "240px",
          marginLeft: "113px",
          marginTop: "20px",
        }}
      >
        {otp.map((data, index) => {
          return (
            <input
              key={index}
              ref={inputsRef[index]}
              style={{
                width: "30px",
                height: "30px",
                borderBottom: active[index] && data !== '' ? '1px solid black' : '1px solid #D9D9D9', 
                borderLeft: "none",
                borderTop: "none",
                borderRight: "none",
                outline: "none",
                textAlign: "center",
                marginRight: "25px",
                fontSize: "30px",
              }}
              type="text"
              name="otp"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              pattern="[0-9]*"
            />
          );
        })}
      </div>
      <div className="validate">
        <p onClick={handleValidate}>Validate</p>
      </div>
      <div className="resendotp">
        <p>Resend One-Time Password</p>
      </div>
    </div>
  );
};

export default Otp;
