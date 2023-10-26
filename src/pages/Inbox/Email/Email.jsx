import styles from "./Email.module.css";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { RiSpamLine } from "react-icons/ri";
import { TfiTrash } from "react-icons/tfi";
import { useState, useEffect } from "react";
import circlegreen from "../../../image/circlegreen.svg";
import circlered from "../../../image/circlered.svg";
import circlepurple from "../../../image/circlepurple.svg";
import circleorange from "../../../image/circleorange.svg";
import { LuBookMarked } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
const Email = () => {
  const [activeLink, setActiveLink] = useState("inbox"); // Initialize with the default active link

  const handleSidebarLinkClick = (link) => {
    setActiveLink(link);
  };
  const navigate = useNavigate();
  return (
    <div className={styles.emailbox}>
      <div className={styles.mailflex}>
        <div className={styles.sidebaremail}>
          <div className={styles.composediv}>
            <p className={styles.compose}>Compose</p>
          </div>

          <ul className={styles.firstlistdata}>
            <li
              className={
                activeLink === "inbox"
                  ? `${styles.sidebarLink} ${styles.activeLink}`
                  : styles.sidebarLink
              }
              onClick={() => handleSidebarLinkClick("inbox")}
            >
              <HiOutlineEnvelope
                style={{ fontSize: "21px", marginLeft: "30px" }}
              />
              <span
                className={styles.spantag}
                onClick={() => navigate("/email/inbox")}
              >
                Inbox{" "}
              </span>
            </li>
            <li
              className={
                activeLink === "sent"
                  ? `${styles.sidebarLink} ${styles.activeLink}`
                  : styles.sidebarLink
              }
              onClick={() => handleSidebarLinkClick("sent")}
            >
              <AiOutlineSend style={{ fontSize: "21px", marginLeft: "30px" }} />
              <span
                className={styles.spantag}
                onClick={() => navigate("/inbox/sent")}
              >
                Sent
              </span>
            </li>
            <li
              className={
                activeLink === "draft"
                  ? `${styles.sidebarLink} ${styles.activeLink}`
                  : styles.sidebarLink
              }
              onClick={() => handleSidebarLinkClick("draft")}
            >
              <LuBookMarked style={{ fontSize: "21px", marginLeft: "30px" }} />
              <span
                className={styles.spantag}
                onClick={() => navigate("/inbox/draft")}
              >
                Draft{" "}
              </span>
            </li>
            <li
              className={
                activeLink === "starred"
                  ? `${styles.sidebarLink} ${styles.activeLink}`
                  : styles.sidebarLink
              }
              onClick={() => handleSidebarLinkClick("starred")}
            >
              <AiOutlineStar style={{ fontSize: "21px", marginLeft: "30px" }} />
              <span
                className={styles.spantag}
                onClick={() => navigate("/inbox/starred")}
              >
                Starred{" "}
              </span>
            </li>
            <li
              className={
                activeLink === "spam"
                  ? `${styles.sidebarLink} ${styles.activeLink}`
                  : styles.sidebarLink
              }
              onClick={() => handleSidebarLinkClick("spam")}
            >
              <RiSpamLine style={{ fontSize: "21px", marginLeft: "30px" }} />
              <span
                className={styles.spantag}
                onClick={() => navigate("/inbox/spam")}
              >
                Spam
              </span>
            </li>
            <li
              className={
                activeLink === "trash"
                  ? `${styles.sidebarLink} ${styles.activeLink}`
                  : styles.sidebarLink
              }
              onClick={() => handleSidebarLinkClick("trash")}
            >
              <TfiTrash style={{ fontSize: "21px", marginLeft: "30px" }} />
              <span
                className={styles.spantag}
                onClick={() => navigate("/inbox/trash")}
              >
                Trash{" "}
              </span>
            </li>
          </ul>
          <p className={styles.labels}>LABELS</p>
          <ul className={styles.secondlistdata}>
            <li>
              <img className={styles.circleimg} src={circlegreen} />
              <p>Personal</p>
            </li>
            <li>
              <img className={styles.circleimg} src={circlepurple} />
              <p>Company</p>
            </li>
            <li>
              {" "}
              <img className={styles.circleimg} src={circleorange} />
              <p> Important</p>
            </li>
            <li>
              {" "}
              <img className={styles.circleimg} src={circlered} />
              <p>Private</p>
            </li>
          </ul>
        </div>
      </div>
      {/* {activeLink === 'inbox' && <Inbox />} */}

      {/* <Trash deletedEmails={deletedEmails} />  */}
    </div>
  );
};
export default Email;
