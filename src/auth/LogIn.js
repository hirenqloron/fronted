import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authActions";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../image/MicrosoftTeams-image.png"
// import { useMutation } from 'react-query';
import { Loading } from 'react-loading-dot'
import axios from 'axios';
import LeftImage from "../../src/image/login.png";
import MicrosoftImage from "../../src/image/microsoft.png";
import GoogleImage from "../../src/image/google.png";
import OR from "../../src/image/OR.png";
import Checkbox from '@mui/material/Checkbox';
import SignUp from "./SignUp";
import ForgotPass from "./ForgotPass";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


// const customCheckboxStyle = {
//   color: '#7367F0',
// };
const Login = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [forgotPassLink, setForgotPassLink] = useState(false);
  // const [currentPage, setCurrentPage] = useState('signin');
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setShowSignIn(true);
    // setCurrentPage('signup');
  };

  const handleForgotPassLinkClick = () => {
    setForgotPassLink(true);
    if (forgotPassLink) {
      navigate("/forgotPassword");
    }
    // setCurrentPage('forgotpassword');
  }

  const dispatch = useDispatch();


  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password, rememberMe } = values;

    try {
      setLoading(true);
      const loginData = {
        email,
        password,
      };
      console.log(loginData, "sxsacd");
      const response = await axios.post('http://3.109.153.24:8081/api/v1/auth/authenticate', loginData);

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem("email_add", response.data.email);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("Name", response.data.name);
      localStorage.setItem("Id", response.data.id);
      localStorage.setItem("Role", response.data.role);


      console.log('Login successful', response.data);
      if (rememberMe) {
        localStorage.setItem('email', email);
      } else {
        localStorage.removeItem('email');
      }
      navigate("/");
      
    } catch (error) {
      console.error('Login failed', error);
      setOpenSnackBar(true);


    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };
  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };
  return (
    <>
      {loading ? ( // Conditional rendering of loading spinner
        <div className="loading-spinner">
          <Loading background='rgb(115, 103, 240)' />

        </div>
      ) : !showSignIn ? (
        <div className="split-container1">
          <div className="inner-split-login-container">
            <div className="left-side1">
              <div className="image-container">
                <img
                  src={LeftImage}
                  alt="Left Image"
                  className="image"
                // style={{ width: "650px", height: "600px" }}
                />
              </div>
            </div>
            <div className="right-side1">
              <div className="logo1">
                <img src={logo} alt="" />
              </div>
              <div className="right-container">
                <div className="login-form1">
                  <h1 className="login-form1-main-h1-header">Welcome to SortBoxs!</h1>
                  <h5 className="login-form1-main-h5-header">Please sign-in to your account and start the adventure</h5>

                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="input-group1">
                          <label className="input-label1" htmlFor="email">
                            Email
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="input-group-for-pas-and-user"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="input-group1">
                          <label className="input-label1" htmlFor="password">
                            Password
                          </label>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="input-group-for-pas-and-user"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="input-group remember-forgot">
                          <div className="remember-me">
                            <label>
                              <div>
                                <Field
                                  type="checkbox"
                                  name="rememberMe"
                                  id="rememberMe"
                                  checked={rememberMe}
                                  onChange={() => setRememberMe(!rememberMe)}
                                />{" "}
                              </div> &nbsp;&nbsp;
                              <p>Remember Me</p>
                            </label>
                          </div>
                          <div className="forgot-password">
                            <div className="forgot-password-button" onClick={handleForgotPassLinkClick}>
                              Forgot Password?
                            </div>
                          </div>
                        </div>
                        <button
                          className="sign-btn"
                          type="submit"
                          disabled={isSubmitting}
                        // onClick={handleLogin}
                        >
                          Sign in
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={OR}
                      alt="Left Image"
                      className="image1 or-Image"
                      style={{ padding: "10px" }}
                    />
                  </div>
                  <div className="login-options">
                    {/* <div className="create-account">
                      Don’t Have an Account? <a href="#">Create an account</a>.
                    </div> */}
                    {/* <div className="icon-button-group">
                      <button className="icon-button microsoft-button">
                        <img
                          src={MicrosoftImage}
                          alt="Microsoft Icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                        />
                        Sign In with Microsoft
                      </button>
                      <button className="icon-button microsoft-button">
                        <img
                          src={GoogleImage}
                          alt="Google Icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                        />
                        Sign In with Google
                      </button>
                    </div> */}
                    <div style={{ paddingTop: "15px" }}>
                      {" "}
                      <button
                        className="sendbox"
                        onClick={handleSignInClick}
                      >
                        Sign In with SortBoxs UserName
                      </button>
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <button className="icon-button microsoft-button">
                        <img
                          src={MicrosoftImage}
                          alt="Microsoft Icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                        />
                        Sign In with Microsoft
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
        : (
          <SignUp />
        )
      }


      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
          <Alert severity="error" onClose={handleCloseSnackBar}sx={{ width: '100%' }}>
            Something went wrong Please try again
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
});

export default Login;
