import "./document.css";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Button from "@mui/material/Button";
import HttpsIcon from "@mui/icons-material/Https";
import icondegree from "../../../image/hat.png";
import lockicon from "../../../image/lockicon.svg";
import Group172 from "../../../image/Group172.svg";
import Infocircle from "../../../image/Infocircle.svg";
import { EyeOff, Lock } from "lucide-react";
import Drawer from "@mui/material/Drawer";
import Degree from "./Degree";

const Document = () => {
  const [selectedButton, setSelectedButton] = useState("Degree & Certificates");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("Degree & Certificates");

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case "Degree & Certificates":
        return (
          <div className="degree-container">
            <div className="degree-iteam">
              <div className="degree-title">
                <img src={icondegree} />
                <div className="degree-1">Degrees & Certificates</div>
              </div>
              <div className="degree-title1">
                This section contains details about all the Degrees &
                Certificates of an employee.
              </div>
              <div className="secure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#6d6976"
                    d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"
                  />
                </svg>
                <div className="secur-title">Secure</div>
              </div>
              <div className="only-selected">
                Only selected people can view this information
              </div>
            </div>
            <div className="degree-iteam1">
              <div className="header-icon">
                <h1>Degrees & Certificates</h1>
                <div className="pen-btn">
                  
                  <button>PENDING VERIFICATION</button>
                </div>
                <div className="circle-cone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M3.25 7.475C3.52083 7.475 3.75115 7.3801 3.94095 7.1903C4.13075 7.0005 4.22543 6.7704 4.225 6.5C4.225 6.22917 4.1301 5.99885 3.9403 5.80905C3.7505 5.61925 3.5204 5.52457 3.25 5.525C2.97917 5.525 2.74885 5.6199 2.55905 5.8097C2.36925 5.9995 2.27457 6.2296 2.275 6.5C2.275 6.77083 2.3699 7.00115 2.5597 7.19095C2.7495 7.38075 2.9796 7.47543 3.25 7.475ZM6.5 7.475C6.77083 7.475 7.00115 7.3801 7.19095 7.1903C7.38075 7.0005 7.47543 6.7704 7.475 6.5C7.475 6.22917 7.3801 5.99885 7.1903 5.80905C7.0005 5.61925 6.7704 5.52457 6.5 5.525C6.22917 5.525 5.99885 5.6199 5.80905 5.8097C5.61925 5.9995 5.52457 6.2296 5.525 6.5C5.525 6.77083 5.6199 7.00115 5.8097 7.19095C5.9995 7.38075 6.2296 7.47543 6.5 7.475ZM9.75 7.475C10.0208 7.475 10.2511 7.3801 10.4409 7.1903C10.6307 7.0005 10.7254 6.7704 10.725 6.5C10.725 6.22917 10.6301 5.99885 10.4403 5.80905C10.2505 5.61925 10.0204 5.52457 9.75 5.525C9.47917 5.525 9.24885 5.6199 9.05905 5.8097C8.86925 5.9995 8.77457 6.2296 8.775 6.5C8.775 6.77083 8.8699 7.00115 9.0597 7.19095C9.2495 7.38075 9.4796 7.47543 9.75 7.475ZM6.5 13C5.60083 13 4.75583 12.8293 3.965 12.4878C3.17417 12.1463 2.48625 11.6833 1.90125 11.0987C1.31625 10.5137 0.853233 9.82583 0.5122 9.035C0.171167 8.24417 0.000433333 7.39917 0 6.5C0 5.60083 0.170733 4.75583 0.5122 3.965C0.853667 3.17417 1.31668 2.48625 1.90125 1.90125C2.48625 1.31625 3.17417 0.853233 3.965 0.5122C4.75583 0.171167 5.60083 0.000433333 6.5 0C7.39917 0 8.24417 0.170733 9.035 0.5122C9.82583 0.853667 10.5137 1.31668 11.0987 1.90125C11.6837 2.48625 12.147 3.17417 12.4884 3.965C12.8299 4.75583 13.0004 5.60083 13 6.5C13 7.39917 12.8293 8.24417 12.4878 9.035C12.1463 9.82583 11.6833 10.5137 11.0987 11.0987C10.5137 11.6837 9.82583 12.147 9.035 12.4884C8.24417 12.8299 7.39917 13.0004 6.5 13ZM6.5 11.7C7.95167 11.7 9.18125 11.1962 10.1887 10.1887C11.1962 9.18125 11.7 7.95167 11.7 6.5C11.7 5.04833 11.1962 3.81875 10.1887 2.81125C9.18125 1.80375 7.95167 1.3 6.5 1.3C5.04833 1.3 3.81875 1.80375 2.81125 2.81125C1.80375 3.81875 1.3 5.04833 1.3 6.5C1.3 7.95167 1.80375 9.18125 2.81125 10.1887C3.81875 11.1962 5.04833 11.7 6.5 11.7Z"
                      fill="#7367F0"
                    />
                  </svg>
                </div>
              </div>
              <Divider />
              <div className="degree-branch">
                <div>DEGREE</div>
                <div>BRANCH / SPECIALIZATION</div>
                <div className="year-of">YEAR OF JOINING</div>
              </div>
              <div className="spalization">
                <div>B.com computers</div>
                <div className="account">Accounts and commerce</div>
                <div className="june-5">05 Jun, 2018</div>
              </div>
              <div className="degree-branch">
                <div>YEAR OF COMPLETION</div>
                <div className="per--cgp">CGPA / PERCENTAGE</div>
                <div className="uniersity">UNIVERSITY / COLLEGE</div>
              </div>
              <div className="spalization">
                <div>09 Sept, 2021</div>
                <div className="account1">7.0</div>
                <div>Acharya Nagarjuna University</div>
              </div>
            </div>
          </div>
        );
      case "Employee Letters":
        return (
          <div className="degree-iteam">
            <div className="degree-title">
              {" "}
              <img src={icondegree} />
              <div className="degree-1">Employee Letters</div>
            </div>
            <div className="degree-title1">
              This section contains all generated employee letters.
            </div>
            <div className="secure">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#6d6976"
                    d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"
                  />
                </svg>
                <div className="secur-title">Secure</div>
            </div>
            <div className="only-selected">
              Only selected people can view this information
            </div>
          </div>
        );
      case "Identify":
        return (
          <div className="identi-container">
            <div className="degree-iteam">
              <div className="degree-title">
                {" "}
                <img src={icondegree} />
                <div className="degree-1">Employee Letters</div>
              </div>

              <div className="degree-title1">
                An identity document is used to verify aspects of a person's
                personal identity in the locations specified below. A work
                permit is any document which verifies if a person is authorized
                to work in the locations specified below.
              </div>
              <div className="secure">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#6d6976"
                    d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"
                  />
                </svg>
                <div className="secur-title">Secure</div>
              </div>
              <div className="only-selected">
                Only selected people can view this information
              </div>
            </div>
            <div className="identify-iteam">
              <div className="identity-icon">
                <div>
                  <img src={Group172} alt="" />
                </div>
                <div className="adhar-title">Aadhar Card</div>
                <div className="cross-icon">
                  <img src={Infocircle} alt="" />
                </div>
                <div className="add-btn">
                  <button>+Add details</button>
                </div>
              </div>
            </div>
            <div className="identify-iteam1">
              <div className="paencard-sec">
                <div>
                  <img src={Group172} alt="" />
                </div>
                <div className="pen-card">PEN CARD</div>
                <div className="onefile-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.65625 0.421875C5.67554 0.421875 7.3125 2.33166 7.3125 4.6875L7.3125 9.74306C7.3125 11.4009 6.16057 12.7448 4.73958 12.7448C3.3186 12.7448 2.16667 11.4009 2.16667 9.74306L2.16667 4.59722C2.16667 3.63744 2.83358 2.85938 3.65625 2.85938C4.47892 2.85938 5.14583 3.63744 5.14583 4.59722L5.14583 9.5625C5.14583 9.82426 4.96395 10.0365 4.73958 10.0365C4.51522 10.0365 4.33333 9.82426 4.33333 9.5625L4.33333 4.59722C4.33333 4.16096 4.03019 3.80729 3.65625 3.80729C3.28231 3.80729 2.97917 4.16096 2.97917 4.59722L2.97917 9.74306C2.97917 10.8773 3.76733 11.7969 4.73958 11.7969C5.71183 11.7969 6.5 10.8773 6.5 9.74306L6.5 4.6875C6.5 2.85518 5.22681 1.36979 3.65625 1.36979C2.08569 1.36979 0.8125 2.85518 0.8125 4.6875L0.8125 9.5625C0.8125 9.82426 0.630615 10.0365 0.40625 10.0365C0.181884 10.0365 -4.76837e-07 9.82426 -4.76837e-07 9.5625L-4.76837e-07 4.6875C-4.76837e-07 2.33166 1.63696 0.421875 3.65625 0.421875Z"
                      fill="#C9C9C9"
                    />
                  </svg>
                  <span>1 file(s)</span>
                </div>
                <div className="pending-verfi">
                  <button>PENDING VERIFICATION</button>
                </div>
                <div className="menu-dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
              </div>
              <div className="pencard-devide">
                
                <Divider />
              </div>
              <div className="parma-acc">
                <div>PERMANENT ACCOUNT...</div>
                <div>NAME</div>
                <div>DATE OF BIRTH</div>
                <div>PARENT’S/SPOUSE NAME</div>
              </div>
              <div className="password-view">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#7367F0" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#7367F0" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#7367F0" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#7367F0" />
                  </svg>
                </div>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#7367F0" />
                  </svg>
                </div>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#7367F0" />
                  </svg>
                </div>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#7367F0" />
                  </svg>
                </div>
                <div className="view-paasord">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.40973 2.07632C9.54398 1.94208 9.54398 1.72443 9.40973 1.59018C9.27549 1.45594 9.05784 1.45594 8.9236 1.59018L1.59027 8.92352C1.45602 9.05776 1.45602 9.27541 1.59027 9.40965C1.72451 9.5439 1.94216 9.5439 2.0764 9.40965L3.38123 8.10483C4.00745 8.39961 4.72871 8.59367 5.5 8.59367C6.73017 8.59367 7.83308 8.10001 8.62611 7.49136C9.02338 7.18646 9.35146 6.8463 9.58325 6.51231C9.80862 6.18755 9.96875 5.83116 9.96875 5.49992C9.96875 5.16868 9.80862 4.81229 9.58325 4.48753C9.35146 4.15354 9.02338 3.81338 8.62611 3.50848C8.50596 3.41627 8.37871 3.3267 8.24497 3.24108L9.40973 2.07632ZM7.74562 3.74043L6.93399 4.55207C7.11395 4.82378 7.21875 5.14961 7.21875 5.49992C7.21875 6.44916 6.44924 7.21867 5.5 7.21867C5.14969 7.21867 4.82386 7.11387 4.55215 6.93391L3.90282 7.58324C4.39119 7.78219 4.93264 7.90617 5.5 7.90617C6.548 7.90617 7.5076 7.48316 8.20753 6.94598C8.55673 6.67796 8.83274 6.38791 9.01843 6.12034C9.21053 5.84354 9.28125 5.62701 9.28125 5.49992C9.28125 5.37282 9.21053 5.1563 9.01843 4.8795C8.83274 4.61192 8.55673 4.32187 8.20753 4.05386C8.06399 3.9437 7.90952 3.83833 7.74562 3.74043ZM5.05539 6.43067C5.19001 6.49509 5.34079 6.53117 5.5 6.53117C6.06954 6.53117 6.53125 6.06946 6.53125 5.49992C6.53125 5.34071 6.49517 5.18993 6.43075 5.05531L5.05539 6.43067Z"
                      fill="#7367F0"
                    />
                    <path
                      d="M5.5 2.40617C5.97316 2.40617 6.42749 2.4792 6.8526 2.60372C6.93439 2.62767 6.95875 2.73004 6.89849 2.7903L6.52057 3.16822C6.49222 3.19657 6.45114 3.20792 6.41207 3.19893C6.11901 3.13151 5.81346 3.09367 5.5 3.09367C4.452 3.09367 3.4924 3.51667 2.79247 4.05386C2.44327 4.32187 2.16726 4.61192 1.98157 4.8795C1.78947 5.1563 1.71875 5.37282 1.71875 5.49992C1.71875 5.62701 1.78947 5.84354 1.98157 6.12034C2.14374 6.35402 2.3748 6.60485 2.66334 6.84316C2.71643 6.88702 2.72149 6.96729 2.6728 7.01599L2.34788 7.34091C2.30649 7.3823 2.24044 7.38593 2.19559 7.34832C1.87797 7.08196 1.61289 6.79493 1.41676 6.51231C1.19138 6.18755 1.03125 5.83116 1.03125 5.49992C1.03125 5.16868 1.19138 4.81229 1.41676 4.48753C1.64854 4.15354 1.97662 3.81338 2.37389 3.50848C3.16692 2.89983 4.26983 2.40617 5.5 2.40617Z"
                      fill="#7367F0"
                    />
                    <path
                      d="M5.5 3.78117C5.5543 3.78117 5.60801 3.78369 5.66102 3.78861C5.75125 3.797 5.78391 3.90488 5.71984 3.96895L5.16422 4.52457C4.86479 4.62763 4.62772 4.8647 4.52465 5.16414L3.96903 5.71976C3.90496 5.78383 3.79708 5.75117 3.78869 5.66094C3.78377 5.60793 3.78125 5.55422 3.78125 5.49992C3.78125 4.55068 4.55076 3.78117 5.5 3.78117Z"
                      fill="#7367F0"
                    />
                  </svg>
                </div>
                <div className="jame-name">James Ferguison</div>
                <div className="james-date">28 Sept, 1999</div>
                <div className="jemes-surname">Peter Ferguison</div>
              </div>
            </div>
            <div className="identify-iteam">
              <div className="identity-icon">
                <div>
                  <img src={Group172} alt="" />
                </div>
                <div className="adhar-title">Voter ID</div>
                <div className="cross-icon1">
                  <img src={Infocircle} alt="" />
                </div>
                <div className="add-btn">
                  <button>+Add details</button>
                </div>
              </div>
            </div>
            <div className="identify-iteam">
              <div className="identity-icon">
                <div>
                  <img src={Group172} alt="" />
                </div>
                <div className="adhar-title1">DRIVILING LICENSE</div>
                <div className="cross-icon2">
                  <img src={Infocircle} alt="" />
                </div>
                <div className="add-btn">
                  <button>+Add details</button>
                </div>
              </div>
            </div>
            <div className="identify-iteam">
              <div className="identity-icon">
                <div>
                  <img src={Group172} alt="" />
                </div>
                <div className="adhar-title">PASSPORT</div>
                <div className="cross-icon3">
                  <img src={Infocircle} alt="" />
                </div>
                <div className="add-btn">
                  <button>+Add details</button>
                </div>
              </div>
            </div>
          </div>
        );

      case "Previous Documents":
        return (
          <div className="degree-container">
            <div className="degree-iteam">
              <div className="degree-title">
                <img src={icondegree} />
                <div className="degree-1">Previous Experience</div>
              </div>
              <div className="degree-title1">
                Previous experience documents are required to know necessary
                details about an employee's previous work experience.
              </div>
              <div className="secure">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#6d6976"
                    d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"
                  />
                </svg>
                <div className="secur-title">Secure</div>
              </div>
              <div className="only-selected">
                Only selected people can view this information
              </div>
            </div>
            <div className="degree-iteam1">
              <div className="header-icon">
                <h1>Previous Experience</h1>
                <div className="pen-btn">
                  
                  <button>PENDING VERIFICATION</button>
                </div>
              </div>
              <Divider />
              <div className="degree-branch">
                <div>PREVIOUS COMPANY</div>
                <div>JOB TITLE</div>
                <div>DATE OF JOINING</div>
                <div>DATE OF RELIEVING</div>
              </div>
              <div className="spalization">
                <div>Cyient Pvt Ltd</div>
                <div className="accountname-1">Design Specialist</div>
                <div className="date-join">17 Mar, 2022</div>
                <div className="march-31">31 Mar, 2023</div>
              </div>
              <div className="degree-branch-5">
                <div>LOCATION</div>
                <div className="per--cgp1">DESCRIPTION</div>
              </div>
              <div className="spalization-2">
                <div>Hyderabad</div>
                <div className="account100">Not Available</div>
              </div>
            </div>
          </div>
        );

      case "Offer Letters":
        return (
          <div className="degree-iteam">
            <div className="degree-title">
              <img src={icondegree} />
              <div className="degree-1">Offer Letters</div>
            </div>
            <div className="degree-title1">
              This section contains employee offer letters.
            </div>
          </div>
        );

      case "Signatures":
        return (
          <>
            <div className="degree-iteam">
              <div className="degree-title">
                <img src={icondegree} />
                <div className="degree-2">Signatures</div>
              </div>
              <div className="degree-title1">
                Signatures can be used to digitally sign documents
              </div>
              <div className="signature-btn">
                <button onClick={openModal}>+Add Signature</button>
              </div>
              <Drawer
                anchor="right"
                open={isModalVisible}
                onClose={closeModal}
                ModalProps={{
                  style: {
                    position: "absolute",
                    maxWidth: "100%",
                    width: "400px",
                  },
                }}
              >
                <Degree onClose={closeModal} />
              </Drawer>
            </div>
            <div className="degree-iteam-sign">
              <div className="sign-doc">
                <div className="div-sign">There are no signatures.</div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };
  return (
    <div>
      <div className="employ-title">
        <h1>Employee Documents</h1>
      </div>
      <div className="document-container">
        <div className="iteam-contener">
          <div className="emp-title">EMPLOYEE DOCUMENT FOLDERS</div>
          <Divider />
          <div className="deg-cer">
            <div
              className={
                activeButton === "Degree & Certificates" ? "active-button" : ""
              }
              onClick={() => handleButtonClick("Degree & Certificates")}
            >
              Degree & Certificates
            </div>
          </div>
          <div className="deg-cer">
            <div
              onClick={() => handleButtonClick("Employee Letters")}
              className={
                activeButton === "Employee Letters" ? "active-button" : ""
              }
            >
              Employee Letters
            </div>
          </div>
          <div className="deg-cer">
            <div
              onClick={() => handleButtonClick("Identify")}
              className={activeButton === "Identify" ? "active-button" : ""}
            >
              Identify
            </div>
          </div>
          <div className="deg-cer">
            <div
              onClick={() => handleButtonClick("Previous Documents")}
              className={
                activeButton === "Previous Documents" ? "active-button" : ""
              }
            >
              Previous Documents
            </div>
          </div>
          <div className="deg-cer">
            <div
              onClick={() => handleButtonClick("Offer Letters")}
              className={
                activeButton === "Offer Letters" ? "active-button" : ""
              }
            >
              Offer Letters
            </div>
          </div>
          <div className="deg-cer">
            <div
              onClick={() => handleButtonClick("Signatures")}
              className={activeButton === "Signatures" ? "active-button" : ""}
            >
              Signatures
            </div>
          </div>
        </div>
        <div className="content-container">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Document;
