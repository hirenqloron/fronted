import React from "react";
import "./notification.css"; // Import your CSS file
import image from "../../image/img.jpg";

const Notification = ({ imageSrc, text }) => {
  return (
    <div className="container1">
      <div className="popup-content1">
        <ul className="popup-menu1">
          <li>
            Notifications <span className="noti">6 New</span>
          </li>
          <li className="text">
            {" "}
            <img
              src={image}
              alt="Notification"
              className="notification-image"
            />
            Congrate ! <span className="date">Today</span>
            <br />
            
          </li>

          <li className="text">
           
            <img
              src={image}
              alt="Notification"
              className="notification-image"
            />
            Welcome <span className="date">yesterday</span>
          </li>
          <li className="text">
            {" "}
            <img
              src={image}
              alt="Notification"
              className="notification-image"
            />
            New user <span className="date">11 aug</span>
          </li>
          <li className="text">
            {" "}
            <img
              src={image}
              alt="Notification"
              className="notification-image"
            />
            Congrate <span className="date">15 july</span>
          </li>
          <li className="text">
            {" "}
            <img
              src={image}
              alt="Notification"
              className="notification-image"
            />
            Congrate <span className="date">Today</span>
          </li>
        </ul>
        <button>Read All Notification</button>
      </div>
    </div>
  );
};

export default Notification;
