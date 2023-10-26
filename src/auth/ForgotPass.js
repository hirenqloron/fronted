import React, { useState } from 'react'
import styled from './ForgotPass.module.css'
import logo from "../image/MicrosoftTeams-image.png";
import { CiMail } from 'react-icons/ci';
import arrpw from "../image/arrow.svg";
import locar from "../image/lock.svg";
import openEmail from "../image/openEmail.svg";
import openLOck from "../image/openLoack.svg";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Input } from '@mui/base/Input';
import Login from './LogIn';
import { useNavigate } from 'react-router-dom';



const ShowHideInput = React.forwardRef(function CustomInput(props, ref) {
    const { slots, ...other } = props;
    return (
        <Input
            slots={{
                //   root: StyledInputRoot,
                //   input: StyledInputElement,
                //   ...slots,
            }}
            {...other}
            ref={ref}
        />
    );
});

const ForgotPass = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const [showLogIn, setShowLogIn] = useState(true);
    const [changeToForGoToMail, setChangeToForGoToMail] = useState(true);
    const navigate = useNavigate()

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleLogInBack = () => {
        setShowLogIn(false);
        if(showLogIn){
            navigate('/login');
        }
    }

    const handleForgotBack = () => {
        setChangeToForGoToMail(!changeToForGoToMail);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            {showLogIn ? (
                changeToForGoToMail ? (
                    <div className={styled.mainContainerForGot}>
                        <div className={styled.SortBximg}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={styled.mainCardContainer}>
                            <div className={styled.innerCardContainer}>
                                <div className={styled.innerCard}>
                                    <h1 className={styled.innerCardh1}>Forgot Your Password</h1>
                                    <div className={styled.locarImgs}>
                                        <img src={locar} alt='locar' />
                                    </div>
                                    <p className={styled.paraForGot}>We’ll Send You an Email to Reset Your Password</p>
                                    <div className={styled.emailInputContainer}>
                                        <CiMail className={styled.emailIcon} />
                                        <input type="email" className={styled.emailInput} placeholder="Enter your email" />
                                    </div>
                                    <button
                                        className={styled.signBtn}
                                        type="submit"
                                        onClick={handleForgotBack}
                                    >
                                        SUBMIT
                                    </button>
                                    <div className="others2" style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <img src={arrpw} alt="" width={15} />{" "}
                                        <p onClick={handleLogInBack}>BACK TO LOGIN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styled.mainContainerForGot}>
                        <div className={styled.SortBximg}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={styled.mainCardContainer}>
                            <div className={styled.innerCardContainer}>
                                <div className={styled.innerCard}>
                                    <h1 className={styled.innerCardh1}>Check Your Mail</h1>
                                    <div className={styled.locarImgs}>
                                        <img src={openEmail} alt='openEmail' />
                                    </div>
                                    <p className={styled.paraForGot}>We’ve sent an email to the address <br />
                                        <span className={styled.emailLink}> **********am@qloron.com</span>
                                    </p>
                                    <p className={styled.paraForGotSec}>Please check your email and follow the instructions</p>
                                    {/* <div>
                                        <button
                                            className={styled.signBtn}
                                            type="submit"
                                        >
                                            OPEN MAIL
                                        </button>
                                    </div> */}
                                    <div className="others2" style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <img src={arrpw} alt="" width={15} />{" "}
                                        <p onClick={handleLogInBack}>BACK TO LOGIN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <Login />
            )}
        </>
    )
}

export default ForgotPass



{/* <div className={styled.mainCardContainer}>
                    <div className={styled.innerCardContainer}>
                        <div className={styled.innerCard}>
                            <h1 className={styled.innerCardh1}>Reset Password</h1>
                            <div className={styled.locarImgs}>
                                <img src={openLOck} alt='openLOck' />
                            </div>
                            <p className={styled.paraForGot}>We’ll Send You an Email to Reset Your Password</p>
                            <div className={styled.emailInputContainer} style={{ position: 'relative', }}>
                                <ShowHideInput
                                    style={{ borderRadius: '3px' }}
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment style={{ position: 'absolute', top: '50%', right: '0%' }}>
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                            <div className={styled.emailInputContainer} style={{ position: 'relative', }}>
                                <ShowHideInput
                                    style={{ borderRadius: '3px' }}
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment style={{ position: 'absolute', top: '50%', right: '0%' }}>
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                            <button
                                className={styled.signBtn}
                                type="submit"
                            >
                                RESET PASSWORD
                            </button>
                            <div className="others2" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <img src={arrpw} alt="" width={15} />{" "}
                                <p>BACK TO LOGIN</p>
                            </div>
                        </div>
                    </div>
                </div> */}
