import React, { useState } from "react";
import "./assets.css";
import { Card } from "@mui/material";

export const Assets = () => {
  const [selectedButton, setSelectedButton] = useState("Assigned assets");
  const [activeButton, setActiveButton] = useState("Assigned assets");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case "Assigned assets":
        return (
          <div>
            <div className="Assets1">Assets Requests</div>
            <div className="ass-req">
              You can raise asset requests supported by your organization
            </div>
            <div className="rest-comtainer">
            <Card>
              <div className="assets2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 78 78"
                    fill="none"
                  >
                    <path
                      d="M16.7769 31.0917C16.5169 32.6907 17.6024 34.2225 19.0822 35.1715C20.6292 36.1617 22.8349 36.7033 25.4305 36.3198C26.5908 36.1624 27.7041 35.7589 28.6958 35.1364C29.6875 34.5139 30.5348 33.6867 31.1809 32.7102C32.2729 31.057 32.7214 29.0442 32.2209 27.5513C32.1628 27.3789 32.0622 27.2239 31.9283 27.1006C31.7945 26.9773 31.6318 26.8897 31.4552 26.8459C31.2786 26.802 31.0938 26.8034 30.9179 26.8498C30.7419 26.8962 30.5805 26.9862 30.4485 27.1115C26.5572 30.8035 22.1632 31.7113 18.222 30.2488C18.0719 30.1933 17.9113 30.1718 17.7518 30.1858C17.5923 30.1998 17.438 30.249 17.2998 30.3298C17.1616 30.4106 17.043 30.521 16.9526 30.6531C16.8622 30.7853 16.8022 30.9336 16.7769 31.0917ZM60.2749 31.0917C60.5327 32.6907 59.4472 34.2225 57.9674 35.1715C56.4204 36.1617 54.2169 36.7033 51.619 36.3198C50.4591 36.1621 49.3463 35.7585 48.355 35.136C47.3637 34.5135 46.5167 33.6864 45.8709 32.7102C44.7789 31.057 44.3282 29.0442 44.8309 27.5513C44.889 27.3789 44.9896 27.2239 45.1234 27.1006C45.2572 26.9773 45.4199 26.8897 45.5965 26.8459C45.7731 26.802 45.9579 26.8034 46.1339 26.8498C46.3098 26.8962 46.4712 26.9862 46.6032 27.1115C50.4945 30.8035 54.8885 31.7113 58.8275 30.2488C58.9778 30.193 59.1386 30.1711 59.2984 30.185C59.4581 30.1988 59.6128 30.2479 59.7512 30.3287C59.8897 30.4095 60.0085 30.5201 60.099 30.6524C60.1896 30.7847 60.2496 30.9333 60.2749 31.0917ZM59.0594 54.1667C55.3327 46.449 47.7494 41.1667 39.0004 41.1667C30.2514 41.1667 22.668 46.449 18.9414 54.1667C17.9252 56.2683 19.626 58.5 21.9617 58.5H56.039C58.3747 58.5 60.0755 56.2683 59.0594 54.1667Z"
                      fill="black"
                      fill-opacity="0.3"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39 78C60.5388 78 78 60.5388 78 39C78 17.4612 60.5388 0 39 0C17.4612 0 0 17.4612 0 39C0 60.5388 17.4612 78 39 78ZM39 73.6667C58.1468 73.6667 73.6667 58.1468 73.6667 39C73.6667 19.8532 58.1468 4.33333 39 4.33333C19.8532 4.33333 4.33333 19.8532 4.33333 39C4.33333 58.1468 19.8532 73.6667 39 73.6667Z"
                      fill="black"
                      fill-opacity="0.3"
                    />
                  </svg>
                </div>
                <div className="look-like">
                  Looks like this feature is disabled.
                </div>
                <div className="get-touch">Get in touch with HR</div>
              </div>
            </Card>
            </div>
          </div>
        );
      case "Asset requests":
        return (
          <div>
            <div className="Assets1">Assets Requests</div>
            <div className="ass-req">
              You can raise asset requests supported by your organization
            </div>
            <div className="rest-comtainer">
            <Card>
              <div className="assets2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 78 78"
                    fill="none"
                  >
                    <path
                      d="M16.7769 31.0917C16.5169 32.6907 17.6024 34.2225 19.0822 35.1715C20.6292 36.1617 22.8349 36.7033 25.4305 36.3198C26.5908 36.1624 27.7041 35.7589 28.6958 35.1364C29.6875 34.5139 30.5348 33.6867 31.1809 32.7102C32.2729 31.057 32.7214 29.0442 32.2209 27.5513C32.1628 27.3789 32.0622 27.2239 31.9283 27.1006C31.7945 26.9773 31.6318 26.8897 31.4552 26.8459C31.2786 26.802 31.0938 26.8034 30.9179 26.8498C30.7419 26.8962 30.5805 26.9862 30.4485 27.1115C26.5572 30.8035 22.1632 31.7113 18.222 30.2488C18.0719 30.1933 17.9113 30.1718 17.7518 30.1858C17.5923 30.1998 17.438 30.249 17.2998 30.3298C17.1616 30.4106 17.043 30.521 16.9526 30.6531C16.8622 30.7853 16.8022 30.9336 16.7769 31.0917ZM60.2749 31.0917C60.5327 32.6907 59.4472 34.2225 57.9674 35.1715C56.4204 36.1617 54.2169 36.7033 51.619 36.3198C50.4591 36.1621 49.3463 35.7585 48.355 35.136C47.3637 34.5135 46.5167 33.6864 45.8709 32.7102C44.7789 31.057 44.3282 29.0442 44.8309 27.5513C44.889 27.3789 44.9896 27.2239 45.1234 27.1006C45.2572 26.9773 45.4199 26.8897 45.5965 26.8459C45.7731 26.802 45.9579 26.8034 46.1339 26.8498C46.3098 26.8962 46.4712 26.9862 46.6032 27.1115C50.4945 30.8035 54.8885 31.7113 58.8275 30.2488C58.9778 30.193 59.1386 30.1711 59.2984 30.185C59.4581 30.1988 59.6128 30.2479 59.7512 30.3287C59.8897 30.4095 60.0085 30.5201 60.099 30.6524C60.1896 30.7847 60.2496 30.9333 60.2749 31.0917ZM59.0594 54.1667C55.3327 46.449 47.7494 41.1667 39.0004 41.1667C30.2514 41.1667 22.668 46.449 18.9414 54.1667C17.9252 56.2683 19.626 58.5 21.9617 58.5H56.039C58.3747 58.5 60.0755 56.2683 59.0594 54.1667Z"
                      fill="black"
                      fill-opacity="0.3"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39 78C60.5388 78 78 60.5388 78 39C78 17.4612 60.5388 0 39 0C17.4612 0 0 17.4612 0 39C0 60.5388 17.4612 78 39 78ZM39 73.6667C58.1468 73.6667 73.6667 58.1468 73.6667 39C73.6667 19.8532 58.1468 4.33333 39 4.33333C19.8532 4.33333 4.33333 19.8532 4.33333 39C4.33333 58.1468 19.8532 73.6667 39 73.6667Z"
                      fill="black"
                      fill-opacity="0.3"
                    />
                  </svg>
                </div>
                <div className="look-like">
                  Looks like this feature is disabled.
                </div>
                <div className="get-touch">Get in touch with HR</div>
              </div>
            </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div>
      <Card>
        <div className="assets-container">
          <div className="asse-t">
            <div
              onClick={() => handleButtonClick("Assigned assets")}
              className={
                activeButton === "Assigned assets" ? "active-button3" : "active-btn9"
              }
            >
              Assigned assets
            </div>
            
              <div
                onClick={() => handleButtonClick("Asset requests")}
                className={
                  activeButton === "Asset requests" ? "active-button3" : "active-btn9"
                }
              >
                Asset requests
              
            </div>
          </div>
        </div>
      </Card>

      <div>{renderContent()}</div>
    </div>
  );
};
