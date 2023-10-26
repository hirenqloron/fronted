import styles from "./Starred.module.css";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"; // Import both empty and filled star icons
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup";
import { HiOutlineTrash, HiOutlineExclamationCircle } from "react-icons/hi";
import Checkbox from "@mui/material/Checkbox";
import emailimg from "../../../../image/emailimg.svg";
const Starred = () => {
  const [deletedEmails, setDeletedEmails] = useState([]); // State to store deleted emails
  const [data, setData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null); // State to store the selected email for displaying the popup

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    const row = [
      {
        id: 1,
        name: "Tommy Sicilia",
        data: "How to Succeed with Your Shopify Store",
        time: "01:16 PM",
      },
      {
        id: 2,
        name: "Tommy Sicilia",
        data: "How to Succeed with Your Shopify Store",
        time: "01:16 PM",
      },
    ];
    setData(row);
  }, []);
  const [hoveredEmail, setHoveredEmail] = useState(null);

  const handleMouseEnter = (email) => {
    setHoveredEmail(email);
  };

  const handleMouseLeave = () => {
    setHoveredEmail(null);
  };
  const dotColors = ["dot-orange", "dot-red", "dot-purple", "dot-green"];

  const getRandomDotColor = () => {
    const randomIndex = Math.floor(Math.random() * dotColors.length);
    return dotColors[randomIndex];
  };
  const handleDelete = (id) => {
    const emailToDelete = data.find((email) => email.id === id);

    if (emailToDelete) {
      // Remove the email from the list
      const updatedEmails = data.filter((email) => email.id !== id);
      setData(updatedEmails);

      // Add the deleted email to the trash
      setDeletedEmails([...deletedEmails, emailToDelete]);
    }
  };

  const handleSelectAll = () => {
    // Toggle the select all state
    setSelectAll(!selectAll);
  };
  const handleStarClick = (id) => {
    setData((prevData) =>
      prevData.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };
  return (
    <div>
      <table className={styles.emailtable}>
        {data.map((item) => (
          <tbody key={item.id}>
            <tr
              className={`${styles.tablerowdata} ${
                item === hoveredEmail ? styles.hovered : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              key={item.id}
              onClick={handleOpen} // Handle row click
            >
              <td className={styles.Checkboxmail}>
                <Checkbox
                  style={{ color: "#B0BAC9" }}
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </td>
              <td className={styles.starimage}>
              
                  <AiFillStar
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      color: " #F4C430",
                    }}
                    onClick={() => handleStarClick(item.id)}
                />
              </td>
              <td>
                <img src={emailimg} />
              </td>
              <td>{item.name}</td>
              <td>{item.data}</td>
              <td>
                <li className={getRandomDotColor()}></li>
              </td>{" "}
              <td>
                {" "}
                {item === hoveredEmail ? (
                  <div className={styles.emailicons}>
                    <p>
                      <HiOutlineTrash
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(item.id)}
                      />
                    </p>
                    <p>
                      <HiOutlineExclamationCircle
                        style={{ cursor: "pointer" }}
                      />
                    </p>
                    <p>
                      <HiOutlineEnvelope style={{ cursor: "pointer" }} />
                    </p>
                  </div>
                ) : (
                  <p>{item.time}</p>
                )}{" "}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Popup open={open} setOpen={setOpen} />
    </div>
  );
};
export default Starred;
