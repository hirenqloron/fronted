import React from 'react';
import styles from "./Popup.module.css";
import leftarrow from  "../../../image/leftarrow.svg";
import deleteimg from "../../../image/deleteimg.svg";
import envelopeopen from "../../../image/envelopeopen.svg";
import  folderopen from "../../../image/folderopen.svg";
import star from "../../../image/Star.svg";
import emailimg from "../../../image/emailimg.svg";
import threedots from "../../../image/threedots.svg";
import uiltag from "../../../image/uiltag.svg";
import txticon from "../../../image/txticon.svg";
import pdficon from "../../../image/pdficon.svg";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import emailpin from "../../../image/emailpin.svg";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const Popup = ({ open, setOpen }) => {
    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <div>
      <Dialog
      className={styles.dialogbox}
    fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
       
          <div className={styles.mailpopup}>
            <img onClick={handleClose} className={styles.leftarrow} src={leftarrow} />
            <p>How to Succeed with Your Shopify Store</p>
          </div>
    
        <div className={styles.iconsflex}>
          <p>
            <img src={deleteimg} />
          </p>
          <p>
            <img src={folderopen} />
          </p>
          <p>
            <img src={envelopeopen} />
          </p>
          <p>
            <img src={uiltag} />
          </p>
          <p>
            <img src={star} />
          </p>
          <p>
            <img src={threedots} />
          </p>
        </div>
        <div className={styles.subbox}>
          <div className={styles.iconsflex1}>
            <p>
              <img src={emailimg} />
            </p>
            <p>
              <span>Tommy Sicilia</span><br/>
              <span>tommysilica@sortboxs.com</span>
            </p>
            <p>Mon Dec 10 2018 01:16 PM</p>
            <p>
              <img src={emailpin} />
            </p>
            <p>
              <img src={threedots} />
            </p>
          </div>
          <div className={styles.mailcontent}>
            <ul>
              <li>Hi John,</li>
              <li>
                {" "}
                How to Choose the Perfect Shopify Theme and Build Your Online
                Store Fast! (keywords: how to create a shopify store, how to{" "}
              </li>
              <li>
                start selling on shopify) Shopify Tutorials That Will Save You 5
                Hours of Time and $150 A Month!{" "}
              </li>
              <li>
                Can I Start My Own ECommerce Business Without Knowing How To
                Code?
              </li>
              <li> The One Thing All Shopify Entrepreneurs Have in Common </li>
              <li>Regrads,</li>
              <li> Tommy Sicilia</li>
            </ul>
          </div>
          <div className={styles.attachments}>
            <p>2 Attachments</p>
            <p>
              <img src={txticon} />
              <span>logo.txt</span>
            </p>
            <p>
              <img src={pdficon} />
              <span>logo.pdf</span>
            </p>
          </div>
          <div className={styles.lastdata}>
            <p>
              Click here to <a href="">Reply </a> or <a href="">Forward</a>
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Popup