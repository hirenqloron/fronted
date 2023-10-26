import React, { useState, useRef ,useCallback} from "react";
import * as Yup from "yup";
import "./attendanceRequest.css";
import Divider from "@mui/material/Divider";
import dots from "../../../image/3dot icon.svg";
import timerCom from "../../../image/timer-comment.svg";
import clock from "../../../image/Clock.svg";
import location from "../../../image/Location11.svg";
import hori3dots from "../../../image/hori3dots.svg";
import Cross from "../../../image/Cross.svg";
import left from "../../../image/Caret leftLeft Arrow (1).svg";
import right from "../../../image/Caret rightRight arrow.svg";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import Popover from "@mui/material/Popover";
import commenticon from "../../../image/Comment.svg";
import girlimg from "../../../image/girlimage.svg";
const itemsPerPage = 5;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AttendanceRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [opencomment, setOpencomment] = useState(false);
  const [comment, setComment] = useState("");
  const [validationError, setValidationError] = useState("");
  const textAreaRef = useRef(null); // Add a ref for the textarea

  const validationSchema = Yup.object().shape({
    comment: Yup.string().required("Comment is required"),
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isBackdropOpen, setBackdropOpen] = useState(false);

  const handleViewRequestClick = () => {
    setDialogOpen(true);
    setBackdropOpen(true); // Open the backdrop when opening the dialog
    handleClosePopover(); // Close the popover when opening the dialog
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setBackdropOpen(false); // Close the backdrop when closing the dialog
  };

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const isPopoverOpen = Boolean(anchorEl);
  const textFunction = () => {
    return (
      <span>
        <img
          style={{ cursor: "pointer" }}
          src={timerCom}
          alt=""
          onClick={handledialog}
        />
        &nbsp;&nbsp;
        <img
          style={{ cursor: "pointer" }}
          src={hori3dots}
          alt=""
          onClick={handlePopoverClick} // Open the popover when clicked
        />
      </span>
    );
  };
  const handledialog = () => {
    setOpencomment(true);
  };
  const handledialogClose = () => {
    setOpencomment(false);
  };
  const lastActionedTime = () => {
    return (
      <>
        <h2>Snehal Baraskar</h2>
        <span>on 24-Aug-2023</span>
      </>
    );
  };
  const dateactionedTime = () => {
    return (
      <div
        className="tData-h2-div"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <h2>Aug 24, 2023</h2>
        <div style={{ padding: "5px 0" }}>
          <img style={{ cursor: "pointer" }} src={clock} alt="time" /> &nbsp;
          &nbsp;
          <img style={{ cursor: "pointer" }} src={location} alt="time" />
        </div>
      </div>
    );
  };

  const dataTable = [
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Pending",
      lastActioned: lastActionedTime(),
      nextApprover: "",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "Snehal Baraskar",
      actions: textFunction(),
    },
    {
      date: dateactionedTime(),
      note: "Working",
      status: "Approved",
      lastActioned: lastActionedTime(),
      nextApprover: "",
      actions: textFunction(),
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data for the current page
  const currentData = dataTable.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, [setCurrentPage]);
  
  const handleEnterKeyValidation = async () => {
    try {
      await validationSchema.validate({ comment });
      handledialogClose();
      setComment("");
      // Validation passed, you can perform the desired action here
      // For example, you can submit the comment or close the popup
    } catch (error) {
      setValidationError(error.errors[0]);
    }
  };
  // console.log(textFunction(), "textFunction")
  return (
    <>
      <div className="main-AttendanceRequest-sec">
        <div className="Work-From-Home-On-Duty-Requests">
          <div className="Work-From-Home">
            <div>
              <h2>Work From Home / On Duty Requests</h2>
            </div>
            <div style={{ display: "flex" }}>
              <h2>25 Jul 2023 - 07 Sep 2023</h2> &nbsp;&nbsp;{" "}
              <img
                style={{ width: "18px", cursor: "pointer" }}
                src={dots}
                alt="3dot"
              />
            </div>
          </div>
          <Divider light className="devide-border-Requests" />
          <div className="No-Work-From-Home">
            <div className="No-Work-From-Home-bg-color">
              <h2>No Work From Home / On Duty Requests Available.</h2>
            </div>
          </div>
        </div>
        <div className="Work-From-Home-On-Duty-Requests">
          <div className="Work-From-Home">
            <div>
              <h2>Regularization Requests</h2>
            </div>
            <div style={{ display: "flex" }}>
              <h2>20 Jul 2023 - 04 Sep 2023</h2> &nbsp;&nbsp;{" "}
              <img
                style={{ width: "18px", cursor: "pointer" }}
                src={dots}
                alt="3dot"
              />
            </div>
          </div>
          <Divider light className="devide-border-Requests" />
          <div className="No-Work-From-Home">
            <div className="No-Work-From-Home-bg-color">
              <h2>No Regularization Requests Available.</h2>
            </div>
          </div>
        </div>

        <div className="Work-From-Home-On-Duty-Requests Work-From-Home-On-Duty-Requests-table-div">
          <div className="Work-From-Home">
            <div>
              <h2>Remote Clock in Requests</h2>
            </div>
            <div style={{ display: "flex" }}>
              <h2>20 Jul 2023 - 04 Sep 2023</h2> &nbsp;&nbsp;{" "}
              <img
                style={{ width: "18px", cursor: "pointer" }}
                src={dots}
                alt="3dot"
              />
            </div>
          </div>
          <div>
            <table className="Attendance-table">
              <tr className="theading">
                <th>DATE</th>
                <th>NOTE</th>
                <th>STATUS</th>
                <th>LAST ACTIONED BY</th>
                <th>NEXT APPROVER</th>
                <th>ACTIONS</th>
              </tr>
              {currentData.map((data, i) => (
                <tr key={i} className="tData">
                  <td>{data.date}</td>
                  <td>{data.note}</td>
                  <td>{data.status}</td>
                  <td className="ACTIONED-BY">{data.lastActioned}</td>
                  <td></td>
                  {/* <td>{data.nextApprover}</td> */}
                  <td>{data.actions}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        {/* Pagination */}
        <div className="pagination">
          <div style={{ display: "flex" }}>
            <button
              className="pagination-btn-pag"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <img src={left} alt="left" />
            </button>{" "}
            &nbsp;&nbsp;
            <div>Page {currentPage}</div> &nbsp;&nbsp;
            <button
              className="pagination-btn-pag"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= dataTable.length}
            >
              <img src={right} alt="right" />
            </button>
          </div>
        </div>

        <div className="Work-From-Home-On-Duty-Requests">
          <div className="Work-From-Home">
            {/* <div><h2>Partial Day Requests</h2></div> */}
            <div>
              <h2>Work From Home / On Duty Requests</h2>
            </div>
          </div>
          <Divider light className="devide-border-Requests" />
          <div className="No-Work-From-Home">
            <div className="No-Work-From-Home-bg-color">
              <h2>No Work From Home / On Duty Requests Available.</h2>
            </div>
          </div>
        </div>
        {/* dialog starts */}
        <div>
          <BootstrapDialog
            onClose={handledialogClose}
            aria-labelledby="customized-dialog-title"
            open={opencomment}
            style={{ borderRadius: "0" }}
          >
            <DialogTitle
              style={{
                background: "#7367F0",
                color: "white",
                fontSize: "var(--mainHeading)",
              }}
              sx={{ m: 0, p: 2 }}
              id="customized-dialog-title"
            >
              Comments
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handledialogClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <p
                style={{
                  margin: "5px 0px 10px 0px",
                  fontSize: "var(--mainHeading)",
                  fontFamily: "Public Sans",
                  color: "#6D6976",
                }}
              >
                Discussion
              </p>
              <textarea
                rows="5"
                cols="60"
                placeholder="Type your comment here and press ENTER to submit"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                  setValidationError("");
                }}
                ref={textAreaRef} // Assign the ref to the textarea
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    e.preventDefault();
                    handleEnterKeyValidation();
                  }
                }}
                style={{
                  fontSize: "var(--subHeading)",
                  fontFamily: "Public Sans",
                  color: "black",
                  outline: "none",
                  border: "1px solid #7367F0",
                  borderRadius: "3px",
                  padding: "5px",
                }}
              ></textarea>
              <div
                style={{ color: "red", fontFamily: "var(--font-public-sans)" }}
              >
                {validationError}
              </div>
              <br />
            </DialogContent>
          </BootstrapDialog>
        </div>
        <div>
          <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <div className="popover">
              <p onClick={handleViewRequestClick}>View Request</p>
            </div>
          </Popover>
        </div>
        {isBackdropOpen && (
  <div className={`backdrop ${isBackdropOpen ? 'open' : ''}`} onClick={handleCloseDialog} />
  )}

        {isDialogOpen && (
          <div className={`dialog-popup ${isDialogOpen ? "open" : ""}`}>
            <div className="dialogheading">
              <p style={{ marginLeft: "20px" }}>
                Remote ClockIn Request Details
              </p>
              <p  className="crossimg"onClick={handleCloseDialog}>
                <img src={Cross} />
              </p>
            </div>
            <div className="dialogbox">
              <div className="dialogsubbox">
                <p style={{ marginLeft: "20px" }}>
                  <img src={girlimg} />
                </p>
                <p style={{ marginLeft: "10px", marginBottom: "24px",  fontFamily: "Public Sans",fontSize:"16px"
}}>
                  Jakob Westervelt
                </p>
              </div>
              <div className="datewithclockin">
              <div className="dateandday">
                <p>AUG </p>
                <p>22</p>
                <p>Tuesday</p>
              </div>
              <div className="clockinreq">
                <p>Remote ClockIn Request</p>
              </div>
              </div>
              <div className="commentbyemp">
<p><img src={girlimg}/></p>
<p>Jakob Westervelt</p>
<p>Aug 22, 2023, 12:00 am</p>
              </div>
              <div className="commentclockin"><p>Today I am started my work early because I have to make some jira tickets</p></div>
              <div className="inputandiconmess">
                <input className="inputcomment" type="text"/>
                <p className="butncomment"><img src={commenticon}/></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AttendanceRequest;
