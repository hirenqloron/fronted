import React , {useState} from "react";
import "./Summary.css";
import indianflag from "../../../image/indianflag.svg";
import icon from "../../../image/Icon.svg";
import elipse from "../../../image/Ellipse 102.svg";
import { useNavigate } from "react-router-dom";
import pinicon from "../../../image/pinicon.svg";
import eyeiconclose from "../../../image/eyeiconclose.svg";
import {AiOutlineEyeInvisible} from "react-icons/ai";
const Summary=()=>{
      const [isAccountNumberVisible, setIsAccountNumberVisible] =
        useState(false);

    const navigate=useNavigate();
    const handleClick=()=>{
navigate("/mypay/mysalary")
    }
    const handleClick1=()=>{
        navigate("/myfinance/summary")
    }
    const handleManagetax=()=>{
        navigate("/managetax")
    }
     const toggleAccountNumberVisibility = () => {
       setIsAccountNumberVisible((prevState) => !prevState);
     };
    return (
      <div className="maindiv">
        <div className="summary-bar">
          <p onClick={handleClick1} className="summary">
            SUMMARY
          </p>
          <p onClick={handleClick} className="mypay">
            MY PAY
          </p>
          <p  onClick={handleManagetax}>
            MANAGE TAX
          </p>
        </div>
        <div className="paymentbox">
          <div className="payinfo">
            <p className="payheading">Payment Information</p>
          </div>
          <div className="payinfo-2">
            <p className="payinfoheading"> SALARY PAYMENT MODE</p>
            <p className="banktrans">Bank Transfer</p>
            <div className="bankheading">
              <p className="bankinfo">Bank Information</p>
            </div>
          </div>
          <div className="payinfo-3">
            <table>
              <tr>
                <th>BANK</th>
                <th>ACCOUNT NUMBER</th>
                <th>IFSC CODE</th>
                <th>NAME ON THE ACCOUNT</th>
              </tr>
              <tr>
                <td>ICICI Bank Limited</td>
                <td>123456789000</td>
                <td>ICIC0123456</td>
                <td>James Ferguson</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="finance3">
          <div className="identityinfo">
            <p className="identityheading">Identity Information</p>
          </div>
          <div className="indianlogo">
            <img className="indianflag" alt="photo" src={indianflag} />
            <p className="pancard">PAN Card</p>
            <p className="verify">VERIFIED</p>
            <p className="piniconfile">
              <img className="pinimg" src={pinicon} alt="icon" />
              <span>1file(s)</span>
            </p>
          </div>
          <div className="accountno">
            <table>
              <tr>
                <th>PERMANENT ACCOUNT NUMBER</th>
                <th>NAME</th>
                <th>DATE OF BIRTH</th>
                <th>PARENT'S/SPOUSE'S NAME</th>
              </tr>
              <tr>
                <td>
                  <span className="iconcircle">
                    {isAccountNumberVisible ? (
                      <p>8723456789654</p>
                    ) : (
                      <p>
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                        <img className="elipseicon" src={elipse} />
                      </p>
                    )}
                    {/* <img className="elipseicon"src={elipse}/>
            <img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/>
            <img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/><img className="elipseicon"src={elipse}/>

            <img className="eyeicon"alt="icon"src={icon}/> */}
                    <img
                      className="eyeicon"
                      alt="icon"
                      src={isAccountNumberVisible ? icon : eyeiconclose}
                      onClick={toggleAccountNumberVisibility}
                    />
                  </span>
                </td>
                <td>James Ferguson</td>
                <td>28-09-1999</td>
                <td>Peter Ferguison</td>
              </tr>
            </table>
          </div>
          <h2 className="photoid">Photo ID</h2>
          <p className="addressproof">Address Proof</p>
        </div>
        <div className="details">
          <div className="information">
            <p className="infoheading">Statutory Information</p>
          </div>
          <p className="ptdetails">PT Details</p>
          <div className="location">
            <div className="statedetails">
              <p className="state">STATE</p>
              <p className="telangana">Telangana</p>
            </div>
            <div className="reglocation">
              <p className="locationfix">REGISTERED LOCATION</p>
              <p className="hyderabad">Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Summary;