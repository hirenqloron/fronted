import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "./ResetPass.module.css";
import { useFormik, FormikProvider, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import logo from "../image/MicrosoftTeams-image.png";
// import { useMutation } from 'react-query';
import { Loading } from "react-loading-dot";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

// Import your image
import LeftImage from "../../src/image/Change Password Icon.svg";
import Secuiry from "../../src/image/Secuiry shield icon.svg";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // const handleSignInClick = () => {
  //   setShowSignIn(true);
  // };
  const navigate=useNavigate();
  // const userEmail = localStorage.getItem("email_add");
  // useEffect(() => {
  //   console.log(userEmail, "----useremail");
  // }, [userEmail]);

  const validationSchema = Yup.object().shape({
    confirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Both passwords must match"
    ),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
 
  const handlePasswordReset = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://3.109.153.24:8081/api/v1/auth/verify",
        null,
        {
          params: {
            email: values.email, // Use values.email from Formik
            password: values.password,
          },
        }
      );
      if (response.status === 200) {
        console.log("Password changed successfully");
        handleSnackbarOpen("Password changed successfully", "success");
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Delay for 2 seconds (adjust as needed)

      } else {
        console.error(
          "Password change failed with status code:",
          response.status
        );
        handleSnackbarOpen("Password change failed", "error");

      }

      console.log(response.data, "-------api response");
      // handleSnackbarOpen("Password changed successfully", "success");

      setLoading(false);
    } catch (error) {
      console.error("Error resetting password:", error);
      handleSnackbarOpen("Error resetting password", "error");
      setLoading(false);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }

    // setSubmitting(false);
  };
  const [snackbarData, setSnackbarData] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: handlePasswordReset,
  });


  const handleCancelClick = () => {
    // Reset the form to its initial state
    formik.resetForm();
  };

  const handleSnackbarOpen = (message, severity) => {
    setSnackbarData({
      open: true,
      message,
      severity,
    });
  };
  const handleSnackbarClose = () => {
    setSnackbarData({
      ...snackbarData,
      open: false,
    });
  };

  return (
    <FormikProvider value={formik}>
      {loading ? ( // Conditional rendering of loading spinner
        <div className="loading-spinner">
          <Loading background="rgb(115, 103, 240)" />
        </div>
      ) : (
        // (
        //   <div className={styled.splitContainer1}>
        //     <div className={styled.innerSplitLoginContainer}>
        //       <div className={styled.leftSide1}>
        //         <div className="image-container">
        //           <img
        //             src={LeftImage}
        //             alt="Left Image"
        //             className="image"
        //           />
        //         </div>
        //       </div>
        //       <div className={styled.rightSide1}>
        //         <div className={styled.logo1}>
        //           <img src={logo} alt="" />
        //         </div>
        //         <div className="right-container">
        //           <div className="login-form1">
        //             <div className={styled.imgSecure}>
        //               <img src={Secuiry} alt="Secuiry" />
        //             </div>
        //             <h1 className={styled.loginForm1MainH1Header}>Reset Your Password</h1>
        //             <Formik
        //               initialValues={{password: "", confirm: "" }}
        //               validationSchema={validationSchema}
        //               onSubmit={handleSubmit}
        //             >
        //               {({ isSubmitting }) => (
        //                 <Form>
        //                   <div className={styled.inputGroup1}>
        //                     <Field
        //                       type="password"
        //                       id="password"
        //                       name="password"
        //                       placeholder="New Password"
        //                       className={styled.inputGroupForPasAndUser}
        //                     />
        //                     <ErrorMessage
        //                       name="password"
        //                       component="div"
        //                       className={styled.errorMessage}
        //                     />
        //                   </div>
        //                   <div className={styled.inputGroup1}>
        //                     <Field
        //                       type="password"
        //                       id="confirm"
        //                       name="confirm"
        //                       placeholder="Confirm New Password"
        //                       className={styled.inputGroupForPasAndUser}
        //                     />
        //                     <ErrorMessage
        //                       name="confirm"
        //                       component="div"
        //                       className={styled.errorMessage}
        //                     />
        //                   </div>
        //                   <div className={styled.btnSeprate}>
        //                     <button
        //                       className={styled.signBtn}
        //                       type="submit"
        //                       disabled={isSubmitting}
        //                     // onClick={handleLogin}
        //                     >
        //                       Update Password
        //                     </button>
        //                     <button
        //                       className={styled.signBtn}
        //                       type="submit"
        //                       disabled={isSubmitting}
        //                     // onClick={handleLogin}
        //                     >
        //                       Cancel
        //                     </button>
        //                   </div>
        //                 </Form>
        //               )}
        //             </Formik>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>)
        <div className={styled.splitContainer1}>
          <div className={styled.innerSplitLoginContainer}>
            <div className={styled.leftSide1}>
              <div className="image-container">
                <img src={LeftImage} alt="Left Image" className="image" />
              </div>
            </div>
            <div className={styled.rightSide1}>
              <div className={styled.logo1}>
                <img src={logo} alt="" />
              </div>
              <div className="right-container">
                <div className="login-form1">
                  <div className={styled.imgSecure}>
                    <img src={Secuiry} alt="Secuiry" />
                  </div>
                  <h1 className={styled.loginForm1MainH1Header}>
                    GENERATE NEW PASSWORD
                  </h1>
                     {/* {({ isSubmitting }) => ( */}
                      <Form>
                      <div className={styled.inputGroup1}>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email Here"
                            className={styled.inputGroupForPasAndUser}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className={styled.errorMessage}
                          />
                        </div>

                        <div className={styled.inputGroup1}>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="New Password"
                            className={styled.inputGroupForPasAndUser}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className={styled.errorMessage}
                          />
                        </div>
                        <div className={styled.inputGroup1}>
                          <Field
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm New Password"
                            className={styled.inputGroupForPasAndUser}
                          />
                          <ErrorMessage
                            name="confirm"
                            component="div"
                            className={styled.errorMessage}
                          />
                        </div>
                        <div className={styled.btnSeprate}>
                          <button
                            className={styled.signBtn}
                            type="submit"
                            disabled={formik.isSubmitting}
                            // onClick={handleLogin}
                          >
                            Update Password
                          </button>
                          <button
                            className={styled.signBtn}
                            type="button"
                            onClick={handleCancelClick}

                            // disabled={isSubmitting}
                            // onClick={handleLogin}
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    {/* )} */}
                  {/* </Formik> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Snackbar
        open={snackbarData.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarData.severity}
        >
          {snackbarData.message}
        </Alert>
      </Snackbar>
      </FormikProvider>

  );
};

export default ResetPass;
