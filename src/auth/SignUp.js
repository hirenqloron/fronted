import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/authActions";
import "./Signup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import LeftImage from "../../src/image/keka.png";
import Captcha from "../../src/image/Capcha.png";
import logo from "../image/MicrosoftTeams-image.png";
import arrpw from "../image/arrow.svg";
import Login from "./LogIn";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyDomain, setCompanyDomain] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const handleSubmit = (values, { setSubmitting }) => {
     // Log the form data
     console.log("Form Data:", values);

     // Dispatch signup action here (you may need to adjust this part according to your Redux setup)
     dispatch(signup(values));

     // Reset the form and setSubmitting to false
     setSubmitting(false);
        navigate("/");
   };

  // const Home = () => {
  //   navigate("/Welcome");
  // };
  const validationSchema = Yup.object().shape({
    companyDomain: Yup.string()
      .required("Company Domain Name is required")
      .matches(/^[a-zA-Z0-9.-]+$/, "Invalid Company Domain Name"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    captcha: Yup.string().required("Captcha is required"),
  });

  return (
   <>
   {!showSignIn ? (
     <div className="split-container2">
     <div className="inner-slipt-signupContainer">
     <div className="left-side2">
       <div className="image-container2">
         <img style={{width: "100%"}}
           src={LeftImage}
           alt="Left Image"
           className="image2"
           // style={{ width: "650px", height: "500px" }}
         />
       </div>
     </div>
     <div className="right-side2">
       <div className="logo5">
         <img src={logo} alt="Logo" />
       </div>
       <div className="login-form2">
         <h2>Login To SortBoxs</h2>
         <Formik
           initialValues={{
             companyDomain: "",
             username: "",
             password: "",
             captcha: "",
           }}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
         >
           {({ isSubmitting }) => (
             <Form>
               <div className="input-group2">
                 <Field
                   className="input-field-domain2"
                   type="text"
                   name="companyDomain"
                   placeholder="Company Domain Name"
                 />
                 <span className="company-domain-text2">.sortboxs.com</span>
                 <br />
               </div>
               <ErrorMessage
                 name="companyDomain"
                 component="div"
                 className="error-message"
               />
               <div className="input-group2">
                 <Field
                   className="input-field2"
                   type="text"
                   name="username"
                   placeholder="Username"
                 />
               </div>
               <ErrorMessage
                 name="username"
                 component="div"
                 className="error-message"
               />
               <div className="input-group2">
                 <Field
                   className="input-field2"
                   type="password"
                   name="password"
                   placeholder="Password"
                 />
               </div>
               <ErrorMessage
                 name="password"
                 component="div"
                 className="error-message"
               />
               {/* <div className="captcha-input2">
                 <span>
                   <img
                     src={Captcha}
                     alt="Left Image"
                     className="image-captcha-image2"
                   />
                 </span>
                 <Field
                   className="input-field-captcha2"
                   type="text"
                   name="captcha"
                   placeholder="Captcha"
                 />
               </div>
                  <ErrorMessage
                   name="captcha"
                   component="div"
                   className="error-message"
                 /> */}
               <button className="sign2" type="submit" disabled={isSubmitting}>
                 Sign in
               </button>
               <div className="others2">
                 <img src={arrpw} alt="" width={15} />{" "}
                 <p onClick={handleSignInClick}>Other login options</p>
               </div>
             </Form>
           )}
         </Formik>
       </div>
     </div>
     </div>
   </div>
   )
   : <Login />
  }
   </>
  );
};

export default SignUp;
