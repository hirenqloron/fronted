import Card from "../../components/Card/Card";
import { useState } from "react";
import "./welcome.css";
import Grid from "@mui/material/Grid";
import playstro from "../../image/Vector.png";
import apple from "../../image/Apple.png";
import pic1 from "../../image/pic1.png";
import pic2 from "../../image/pic2.png";
import pic13 from "../../image/pic13.png";
import pic14 from "../../image/pic14.png";
import cash from "../../image/cash.svg";
import hand from "../../image/hand_raised.svg";
import vector from "../../image/Vector.svg";
import finance from "../../image/formkit_dollar.svg";
import leave from "../../image/leave.svg";
import Group10 from "../../image/Group 10.svg";
import Group15 from "../../image/Group 15.png";
import madi from "../../image/mdi.svg";
import inbox from "../../image/inbox.svg";
import sortbox from "../../image/Sort_box.svg";
import document from "../../image/document.svg";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";
import Textarea from "../../components/TextEditor/Textarea";
import mail from "../../image/mail.svg";
import { Button } from "@mui/material";

// import dollor from "../../image/dollor.svg";

const Welcome = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [showEditor1, setShowEditor1] = useState(false);
  const [showEditor2, setShowEditor2] = useState(false);
  const [activeButton, setActiveButton] = useState("Welcome");

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

  const toggleEditor1 = () => {
    setShowEditor1(!showEditor1);
  };

  const toggleEditor2 = () => {
    setShowEditor2(!showEditor2);
  };
  const navigate = useNavigate();

  const dashboardPage = () => {
    navigate("/Dashboard");
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="whole-part">
      <div className="section-1">
      <div className="home-page" style={{ alignItems: "center" }}>
         
          <span className="highlight-dashboard"> Welcome</span>
          <p onClick={dashboardPage}>DashBoard</p>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <div className="section-2">
            <div className="profile-section">
              <div className="camra">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="30"
                  viewBox="0 0 34 30"
                  fill="none"
                >
                  <path
                    d="M30 4.1965H25.4804L23.2582 0.940972C23.1391 0.766651 22.9779 0.623706 22.7887 0.524802C22.5996 0.425898 22.3884 0.374088 22.1739 0.373962H11.7391C11.5246 0.374088 11.3134 0.425898 11.1243 0.524802C10.9352 0.623706 10.7739 0.766651 10.6549 0.940972L8.43098 4.1965H3.91304C2.87524 4.1965 1.87994 4.59923 1.1461 5.31609C0.412266 6.03295 0 7.00523 0 8.01903V25.8575C0 26.8713 0.412266 27.8436 1.1461 28.5605C1.87994 29.2773 2.87524 29.6801 3.91304 29.6801H30C31.0378 29.6801 32.0331 29.2773 32.7669 28.5605C33.5008 27.8436 33.913 26.8713 33.913 25.8575V8.01903C33.913 7.00523 33.5008 6.03295 32.7669 5.31609C32.0331 4.59923 31.0378 4.1965 30 4.1965ZM31.3043 25.8575C31.3043 26.1955 31.1669 26.5195 30.9223 26.7585C30.6777 26.9975 30.3459 27.1317 30 27.1317H3.91304C3.56711 27.1317 3.23534 26.9975 2.99073 26.7585C2.74612 26.5195 2.6087 26.1955 2.6087 25.8575V8.01903C2.6087 7.6811 2.74612 7.35701 2.99073 7.11805C3.23534 6.8791 3.56711 6.74485 3.91304 6.74485H9.13043C9.34523 6.74499 9.55674 6.6933 9.74617 6.59439C9.9356 6.49547 10.0971 6.35239 10.2163 6.17784L12.437 2.92232H21.4745L23.6967 6.17784C23.816 6.35239 23.9774 6.49547 24.1669 6.59439C24.3563 6.6933 24.5678 6.74499 24.7826 6.74485H30C30.3459 6.74485 30.6777 6.8791 30.9223 7.11805C31.1669 7.35701 31.3043 7.6811 31.3043 8.01903V25.8575ZM16.9565 9.29321C15.5377 9.29321 14.1507 9.70422 12.9709 10.4743C11.7912 11.2443 10.8717 12.3388 10.3287 13.6193C9.78572 14.8999 9.64365 16.309 9.92045 17.6684C10.1973 19.0278 10.8805 20.2765 11.8838 21.2566C12.8871 22.2367 14.1654 22.9041 15.557 23.1745C16.9486 23.4449 18.391 23.3061 19.7019 22.7757C21.0127 22.2453 22.1331 21.3471 22.9214 20.1946C23.7097 19.0422 24.1304 17.6872 24.1304 16.3012C24.1283 14.4432 23.3718 12.6619 22.0269 11.3481C20.682 10.0343 18.8585 9.29532 16.9565 9.29321ZM16.9565 20.7608C16.0536 20.7608 15.171 20.4993 14.4202 20.0092C13.6695 19.5192 13.0843 18.8227 12.7388 18.0078C12.3933 17.1929 12.3029 16.2962 12.479 15.4312C12.6552 14.5661 13.09 13.7714 13.7284 13.1478C14.3669 12.5241 15.1803 12.0993 16.0659 11.9273C16.9515 11.7552 17.8694 11.8435 18.7036 12.181C19.5377 12.5186 20.2507 13.0902 20.7524 13.8236C21.254 14.5569 21.5217 15.4192 21.5217 16.3012C21.5217 17.484 21.0408 18.6183 20.1846 19.4546C19.3285 20.291 18.1673 20.7608 16.9565 20.7608Z"
                    fill="#C5B6B6"
                  />
                </svg>
              </div>
            </div>

            <div className="dashName">
              <h2>Snehal Basker</h2>
              <br />
              <div className="sort">
                <h3>Welcome to sortbox</h3>
              </div>
              <div>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur. Morbi fusce non
                  facilisis nibh egestas aliquet nisl lacus leo.Sit est fames
                  tempus velit mauris nibh rutrum aliquam est. Maecenas mattis
                  massa vivamus enim ipsum.
                </p>
              </div>
            </div>
          </div>

          <div className="section-3">
            <div>
              <p className="intro-text">Introduce yourself</p>
              <p className="self-2">We would love to know about yourself</p>
            </div>
            <div>
              <div className="about">
                <p className="about-text">About</p>
                <span onClick={toggleEditor}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M11.3482 0.368714C11.5845 0.132621 11.9048 0 12.2388 0C12.5728 0 12.8932 0.132621 13.1294 0.368714L14.9913 2.23055C15.2274 2.46681 15.36 2.78714 15.36 3.12115C15.36 3.45515 15.2274 3.77549 14.9913 4.01175L12.9804 6.02261L12.9718 6.03197L5.17596 13.4728C5.03349 13.6089 4.86114 13.7098 4.67271 13.7673L0.696329 14.9768C0.602838 15.0052 0.503398 15.0076 0.408659 14.9837C0.31392 14.9599 0.227452 14.9107 0.158514 14.8415C0.0892935 14.7725 0.0401288 14.6861 0.0162856 14.5913C-0.0075576 14.4966 -0.00518113 14.3972 0.0231605 14.3037L1.22766 10.3439C1.29084 10.1366 1.40639 9.94912 1.56317 9.79956L9.34169 2.37454L11.3482 0.368714ZM2.30906 10.5807C2.28679 10.6023 2.27022 10.629 2.26082 10.6585L1.35078 13.6492L4.35808 12.7341C4.38505 12.7258 4.4097 12.7112 4.43008 12.6917L11.8263 5.63167L9.70959 3.51569L2.30906 10.5807ZM12.5988 4.87787L14.2281 3.2493C14.2449 3.23258 14.2582 3.21272 14.2672 3.19085C14.2763 3.16898 14.281 3.14554 14.281 3.12187C14.281 3.09819 14.2763 3.07475 14.2672 3.05288C14.2582 3.03101 14.2449 3.01115 14.2281 2.99443L12.3663 1.1326C12.3496 1.11584 12.3297 1.10254 12.3078 1.09346C12.286 1.08439 12.2625 1.07972 12.2388 1.07972C12.2152 1.07972 12.1917 1.08439 12.1699 1.09346C12.148 1.10254 12.1281 1.11584 12.1114 1.1326L10.4828 2.76116L12.5988 4.87787Z"
                      fill="#C9C9C9"
                    />
                  </svg>
                </span>
              </div>
              {showEditor && <Textarea />}
              <div className="about">
                <p className="about-text">What I love about my job?</p>
                <span onClick={toggleEditor1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M11.3482 0.368714C11.5845 0.132621 11.9048 0 12.2388 0C12.5728 0 12.8932 0.132621 13.1294 0.368714L14.9913 2.23055C15.2274 2.46681 15.36 2.78714 15.36 3.12115C15.36 3.45515 15.2274 3.77549 14.9913 4.01175L12.9804 6.02261L12.9718 6.03197L5.17596 13.4728C5.03349 13.6089 4.86114 13.7098 4.67271 13.7673L0.696329 14.9768C0.602838 15.0052 0.503398 15.0076 0.408659 14.9837C0.31392 14.9599 0.227452 14.9107 0.158514 14.8415C0.0892935 14.7725 0.0401288 14.6861 0.0162856 14.5913C-0.0075576 14.4966 -0.00518113 14.3972 0.0231605 14.3037L1.22766 10.3439C1.29084 10.1366 1.40639 9.94912 1.56317 9.79956L9.34169 2.37454L11.3482 0.368714ZM2.30906 10.5807C2.28679 10.6023 2.27022 10.629 2.26082 10.6585L1.35078 13.6492L4.35808 12.7341C4.38505 12.7258 4.4097 12.7112 4.43008 12.6917L11.8263 5.63167L9.70959 3.51569L2.30906 10.5807ZM12.5988 4.87787L14.2281 3.2493C14.2449 3.23258 14.2582 3.21272 14.2672 3.19085C14.2763 3.16898 14.281 3.14554 14.281 3.12187C14.281 3.09819 14.2763 3.07475 14.2672 3.05288C14.2582 3.03101 14.2449 3.01115 14.2281 2.99443L12.3663 1.1326C12.3496 1.11584 12.3297 1.10254 12.3078 1.09346C12.286 1.08439 12.2625 1.07972 12.2388 1.07972C12.2152 1.07972 12.1917 1.08439 12.1699 1.09346C12.148 1.10254 12.1281 1.11584 12.1114 1.1326L10.4828 2.76116L12.5988 4.87787Z"
                      fill="#C9C9C9"
                    />
                  </svg>
                </span>
              </div>
              {showEditor1 && <Textarea />}

              <div className="about">
                <p className="about-text">My interests and hobbies</p>
                <span onClick={toggleEditor2}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M11.3482 0.368714C11.5845 0.132621 11.9048 0 12.2388 0C12.5728 0 12.8932 0.132621 13.1294 0.368714L14.9913 2.23055C15.2274 2.46681 15.36 2.78714 15.36 3.12115C15.36 3.45515 15.2274 3.77549 14.9913 4.01175L12.9804 6.02261L12.9718 6.03197L5.17596 13.4728C5.03349 13.6089 4.86114 13.7098 4.67271 13.7673L0.696329 14.9768C0.602838 15.0052 0.503398 15.0076 0.408659 14.9837C0.31392 14.9599 0.227452 14.9107 0.158514 14.8415C0.0892935 14.7725 0.0401288 14.6861 0.0162856 14.5913C-0.0075576 14.4966 -0.00518113 14.3972 0.0231605 14.3037L1.22766 10.3439C1.29084 10.1366 1.40639 9.94912 1.56317 9.79956L9.34169 2.37454L11.3482 0.368714ZM2.30906 10.5807C2.28679 10.6023 2.27022 10.629 2.26082 10.6585L1.35078 13.6492L4.35808 12.7341C4.38505 12.7258 4.4097 12.7112 4.43008 12.6917L11.8263 5.63167L9.70959 3.51569L2.30906 10.5807ZM12.5988 4.87787L14.2281 3.2493C14.2449 3.23258 14.2582 3.21272 14.2672 3.19085C14.2763 3.16898 14.281 3.14554 14.281 3.12187C14.281 3.09819 14.2763 3.07475 14.2672 3.05288C14.2582 3.03101 14.2449 3.01115 14.2281 2.99443L12.3663 1.1326C12.3496 1.11584 12.3297 1.10254 12.3078 1.09346C12.286 1.08439 12.2625 1.07972 12.2388 1.07972C12.2152 1.07972 12.1917 1.08439 12.1699 1.09346C12.148 1.10254 12.1281 1.11584 12.1114 1.1326L10.4828 2.76116L12.5988 4.87787Z"
                      fill="#C9C9C9"
                    />
                  </svg>
                </span>
              </div>
              {showEditor2 && <Textarea />}
            </div>
          </div>

          <div className="section-4">
            <div className="top-heading">Explor Sortbox</div>
            <div className="top-heading5">
              Explore all things you can do in SortBox
            </div>
            <div className="cart-1">
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Card
                    title="Finance"
                    description="Find Your Salary, payslips and Tax settings all in one place."
                    img={finance}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Card
                    title="Leaves"
                    description="Find Your Salary, payslips and Tax settings all in one place."
                    img={leave}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Card
                    title="Attendance"
                    description="Find Your Salary, payslips and Tax settings all in one place."
                    img={hand}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Card
                    title="Inbox"
                    description="Find Your Salary, payslips and Tax settings all in one place."
                    img={inbox}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Card
                    title="Document"
                    description="Find Your Salary, payslips and Tax settings all in one place."
                    img={document}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Card
                    title="Document"
                    description="Find Your Salary, payslips and Tax settings all in one place."
                    img={madi}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Card
                    title="Document"
                    description="Find Your Salary, payslips and Tax settings all in one place."
                    img={vector}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="info_div">
            <div className="hed1">App-soultely awesome</div>
            <div className="hed2">
              SortBox is Available on the go for all Devices
            </div>
            <div className="img-div">
              <div>
                <img src={sortbox} height={80} width="90%" />
              </div>
              <div className="img-2">
                <img src={playstro} alt="" /> <pan className="gapbetween"></pan>
                <img src={apple} alt="" />
              </div>
            </div>
          </div>
          <div className="profile-sec">
            <div className="circle">
              <div className="percentage">
                <span className="hundred">100%</span>
              </div>
              <div className="profile">
                <div className="pro1">Profile Completion</div>
                <div>Profile Completed Sucessfully</div>
              </div>
            </div>
            <div className="profile-sec3">
              <div className="pro-sec">
                <p>Go to My Profile </p>
                <span className="arrow-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="11"
                    viewBox="0 0 6 11"
                    fill="none"
                  >
                    <path
                      d="M0.130542 0.128025C0.0468526 0.211724 0 0.324082 0 0.441083C0 0.558083 0.0468526 0.670441 0.130542 0.754139L4.80614 5.43968L0.130542 10.1243C0.0468526 10.208 0 10.3204 0 10.4374C0 10.5544 0.0468526 10.6667 0.130542 10.7504C0.17122 10.7912 0.219856 10.8237 0.273579 10.8458C0.327302 10.868 0.385023 10.8794 0.443335 10.8794C0.501647 10.8794 0.559368 10.868 0.613091 10.8458C0.666814 10.8237 0.71545 10.7912 0.756129 10.7504L5.72821 5.7668C5.81553 5.67928 5.86441 5.5619 5.86441 5.43968C5.86441 5.31747 5.81553 5.20009 5.72821 5.11257L0.756129 0.128963C0.71545 0.0881497 0.666814 0.0557109 0.613091 0.0335612C0.559368 0.0114116 0.501647 0 0.443335 0C0.385023 0 0.327302 0.0114116 0.273579 0.0335612C0.219856 0.0557109 0.17122 0.0872122 0.130542 0.128025Z"
                      fill="#7367F0"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="next-sec">
            <p className="next-sect44">We're here to assist you</p>
            <div>
              <div className="next-sec2">
                <span className="img-size">
                  <img src={pic1} />
                </span>
                <div className="heade-section">
                  {" "}
                  <div className="title-tag1"> Snehal Baraskar</div>
                  <div className="heade-section2">
                    Business & Operations Head - Business & Operations Head
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-next4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 8 9"
                fill="none"
              >
                <path
                  d="M1.60889 3.83722C2.24889 5.095 3.28 6.12167 4.53778 6.76611L5.51556 5.78833C5.63556 5.66833 5.81333 5.62833 5.96889 5.68167C6.46667 5.84611 7.00444 5.935 7.55556 5.935C7.8 5.935 8 6.135 8 6.37944V7.93056C8 8.175 7.8 8.375 7.55556 8.375C3.38222 8.375 0 4.99278 0 0.819444C0 0.575 0.2 0.375 0.444444 0.375H2C2.24444 0.375 2.44444 0.575 2.44444 0.819444C2.44444 1.375 2.53333 1.90833 2.69778 2.40611C2.74667 2.56167 2.71111 2.735 2.58667 2.85944L1.60889 3.83722Z"
                  fill="#9F9EA2"
                />
              </svg>
              <span className="next-sect5">9546360601</span>
            </div>

            <div className="sec-next4">
              <img src={mail} alt="" width={17} />
              <p className="next-sect5">manishchoubey7071@gmail.com</p>
            </div>

            <div>
              <div className="next-sect1">
                <Divider light className="devide-border" />
                <div className="next-sec2">
                  <span className="img-size">
                    <img src={pic2} />
                  </span>
                  <div className="heade-section">
                    {" "}
                    <div className="title-tag1"> Tejasri Lasya</div>
                    <div className="heade-section2">HR - HR</div>
                  </div>
                </div>
              </div>
              <div className="sec-next4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 8 9"
                  fill="none"
                >
                  <path
                    d="M1.60889 3.83722C2.24889 5.095 3.28 6.12167 4.53778 6.76611L5.51556 5.78833C5.63556 5.66833 5.81333 5.62833 5.96889 5.68167C6.46667 5.84611 7.00444 5.935 7.55556 5.935C7.8 5.935 8 6.135 8 6.37944V7.93056C8 8.175 7.8 8.375 7.55556 8.375C3.38222 8.375 0 4.99278 0 0.819444C0 0.575 0.2 0.375 0.444444 0.375H2C2.24444 0.375 2.44444 0.575 2.44444 0.819444C2.44444 1.375 2.53333 1.90833 2.69778 2.40611C2.74667 2.56167 2.71111 2.735 2.58667 2.85944L1.60889 3.83722Z"
                    fill="#9F9EA2"
                  />
                </svg>
                <span className="next-sect5">9546360601</span>
              </div>
              <div className="sec-next4">
                <img src={mail} alt="" width={17} />
                <p className="next-sect5">manishchoubey7071@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="section-7">
            <div className="section-8">Share your tought on being a part</div>
            <div className="sec-9">
              <div className="inside-container">
                We’d love to hear your toughts here....
              </div>
            </div>
            <div className="sec-10">
              <div className="shere-on"> Post on SortBox wall</div>
            </div>
          </div>
          <div className="section-11">
            <p className="sect-12">My team</p>
            <p className="repo">Reporting Manager</p>
            <div className="sec-18">
              <div className="next-sec2">
                <span className="img-size">
                  <img src={pic1} />
                </span>
                <div className="heade-section">
                  {" "}
                  <div className="title-tag1"> Snehal Baraskar</div>
                  <div className="heade-section2">
                    Business & Operations Head - Business & Operations Head
                  </div>
                </div>
              </div>
              <Divider light className="devide-border" />
              <div className="peer">Peers</div>
              <div className="peer-img"></div>

              <div className="next-sec2">
                <span className="img-size">
                  <img src={pic13} />
                </span>
                <div className="heade-section">
                  {" "}
                  <div className="title-tag1"> Prem</div>
                  <div className="heade-section2">Software Developer</div>
                </div>
              </div>
              <div className="next-sec2">
                <span className="img-size">
                  <img src={pic14} />
                </span>
                <div className="heade-section">
                  {" "}
                  <div className="title-tag1"> Manish</div>
                  <div className="heade-section2">Software Developer</div>
                </div>
                <div></div>
              </div>
              <div className="tree">Go to Org Tree</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
