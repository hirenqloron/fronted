import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";
import CreatePost from "../../image/CreatePost.svg";
import Announcement from "../../image/Announcement.svg";
import Birthday from "../../image/Birthday.svg";
import WorkAnniversary from "../../image/WorkAnniversary.svg";
import NewJoinee from "../../image/NewJoinee.svg";
import GoodJob from "../../image/GoodJob.svg";
import pic2 from "../../image/pic2.png";
import BirthdayCake from "../../image/BirthdayCake.svg";
import RemoteWork from "../../image/RemoteWork.svg";
import NewEmployee from "../../image/NewEmployee.svg";
import EditIcon from "../../image/EditIcon.svg";
import Delete from "../../image/Delete.svg";
import Emoji from "../../image/Emoji.svg";
import Gallery from "../../image/Gallery.svg";
import Badge from "../../image/Badge.svg";
import PlusIcon from "../../image/PlusIcon.svg";
import Attach from "../../image/Attach.svg";
import Cross from "../../image/Cross.svg";
import TopPerformer from "../../image/TopPerformer.svg";
import LeadershipImpact from "../../image/LeadershipImpact.svg";
import CustomHero from "../../image/CustomHero.svg";
import Beyond from "../../image/Beyond.svg";
import HighFive from "../../image/HighFive.svg";
import Legacy from "../../image/Legacy.svg";
import TeamPlayer from "../../image/TeamPlayer.svg";
import Rookie from "../../image/Rookie.svg";
import Keka from "../../image/Keka.svg";
import Everyday from "../../image/Everyday.svg";
import Cancel from "../../image/Cancel.svg";
import GaneshImg from "../../image/GaneshImg.svg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { EmojiPicker } from "emoji-picker-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Dashboard = () => {
  const holidaysList = ["Ganesh Chaturthi", "Holi", "Diwali", "Ramzan"];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [birthdayDropdownOpen, setBirthdayDropdownOpen] = useState(false);
  const [announcementDropdownOpen, setAnnouncementDropdownOpen] =
    useState(true);
  const [anniversaryDropdownOpen, setAnniversaryDropdownOpen] = useState(false);
  const [joineeDropdownOpen, setJoineeDropdownOpen] = useState(false);
  const [showPost, setShowPost] = useState(true);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showPoll, setShowPoll] = useState(false);
  const [showPraise, setShowPraise] = useState(false);
  const [options, setOptions] = useState(["", "", ""]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [activeBtn, setActiveBtn] = useState("Welcome");
  const [openBorderBottom, setOpenBorderBottom] = useState("Announcement");
  const [openBorderBottomPost, setOpenBorderBottomPost] = useState("Post");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isBadgeModalOpen, setBadgeModalOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const handleBorderBottom = (option) => {
    setOpenBorderBottom(option);
  };
  const handleBorderBottomPost = (option) => {
    setOpenBorderBottomPost(option);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setAnnouncementDropdownOpen(false);
    setBirthdayDropdownOpen(false);
    setAnniversaryDropdownOpen(false);
    setJoineeDropdownOpen(false);
  };
  const openAnnouncementDropdown = () => {
    setAnnouncementDropdownOpen(true);
    setBirthdayDropdownOpen(false);
    setAnniversaryDropdownOpen(false);
    setJoineeDropdownOpen(false);
  };

  const openBirthdayDropdown = () => {
    setBirthdayDropdownOpen(true);
    setAnnouncementDropdownOpen(false);
    setAnniversaryDropdownOpen(false);
    setJoineeDropdownOpen(false);
  };
  const openAnniversaryDropdown = () => {
    setAnniversaryDropdownOpen(true);
    setBirthdayDropdownOpen(false);
    setAnnouncementDropdownOpen(false);
    setJoineeDropdownOpen(false);
  };
  const openJoineeDropdown = () => {
    setJoineeDropdownOpen(true);
    setAnniversaryDropdownOpen(false);
    setBirthdayDropdownOpen(false);
    setAnnouncementDropdownOpen(false);
  };
  const openAnnouncement = () => {
    setShowPost(false);
    setShowAnnouncement(true);
    setShowPoll(false);
    setShowPraise(false);
  };
  const openPost = () => {
    setShowPost(true);
    setShowAnnouncement(false);
    setShowPoll(false);
    setShowPraise(false);
  };
  const openPoll = () => {
    setShowPost(false);
    setShowAnnouncement(false);
    setShowPoll(true);
    setShowPraise(false);
  };
  const openPraise = () => {
    setShowPost(false);
    setShowAnnouncement(false);
    setShowPoll(false);
    setShowPraise(true);
  };
  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject) => {
    setInputValue(inputValue + emojiObject.native);
    // setShowEmojiPicker(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleGalleryIconClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImages([...selectedImages, event.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleCloseClick = () => {
    setSelectedImages(null);
    setIsHovered(false);
  };
  const pickerStyle = {
    height: "200px",
  };
  const navigate = useNavigate();

  const welcomePage = () => {
    navigate("/");
  };
  const handleButtonClick = (buttonName) => {
    if (activeBtn === buttonName) {
      setActiveBtn(null);
    } else {
      setActiveBtn(buttonName);
    }
  };

  const handlePictureClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleBadgeClick = () => {
    setBadgeModalOpen(!isBadgeModalOpen);
  };
  const handleBadgeImageClick = (badgeImage) => {
    setSelectedBadge(badgeImage);
    setBadgeModalOpen(false);
  };
  const closeBadgeModal = () => {
    setBadgeModalOpen(false);
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + selectedFiles.length > 5) {
      setError("You can only upload up to 5 files.");
      return;
    }

    setSelectedFiles([...selectedFiles, ...files]);
    setError("");
  };

  const handleIconClick = () => {
    document.getElementById("file-input").click();
  };
  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };
  return (
    <div className="dashboard">
      <div className="section-1">
        <div className="home-page" style={{ alignItems: "center" }}>
          <p onClick={welcomePage}>Welcome</p>

          {/* <p >Welcome</p> */}
          <div
            onClick={(e) => {
              handleButtonClick("Dashboard");
            }}
            className={activeBtn === "Dashboard" ? "active-button3" : ""}
          >
            <p className="highlight-dashboard ">Dashboard</p>
          </div>
          {/* <span className="highlight-dashboard"> Dashboard</span> */}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h5 className="access">Quick Access</h5>
          <div className="inbox">
            <p className="inbox-title">Inbox</p>
            <div style={{ display: "flex" }}>
              <div>
                <p className="good-job">GOOD JOB!</p>
                <p className="job-line2">You have no Pending Works</p>
              </div>
              <img src={GoodJob} alt="img" className="goodjob-img" />
            </div>
          </div>
          <div className="holidays">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className="holiday-title">Holidays</p>
              <a className="view-all-holidays">View All</a>
            </div>
            <div>
              <Carousel>
                {holidaysList.map((holiday, index) => (
                  <div key={index} className="holiday-slide">
                    <div style={{ marginRight: "30px" }}>
                      <h1 className="holiday-name">{holiday}</h1>
                      <p className="holiday-date">
                        <span>Tue, 19 September, 2023</span>
                      </p>
                    </div>
                    <div>
                      <img
                        src={GaneshImg}
                        alt="ganesh-img"
                        className="holiday-img"
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="leave-status">
            <p className="today-leave">On Leave Today</p>
            <div>
              <img style={{ padding: "7px 0px 0px 38px" }} src={pic2} />
            </div>
            <span className="leave-member">James Fer..</span>
          </div>
          <div className="work-status">
            <p className="work-line1">Working Remotely</p>
            <div>
              <p className="work-line2">EVERYONE IS AT OFFICE!</p>
              <p className="work-line3">No one is working remotely today.</p>
            </div>
          </div>
          <div className="current-time">
            <div className="" style={{ display: "flex" }}>
              <div className="" style={{ display: "flex" }}>
                <span className="today-time">Time Today - Aug 24,2023 Thu</span>
              </div>
              <div className="today-time-view">
                <a>View All</a>
              </div>
            </div>
            <div>
              <span className="time-label">CURRENT TIME</span>
            </div>
          </div>
          <div className="leave-sec">
            <p className="leave-balance">Leave Balance</p>
            <div className="" style={{ display: "flex" }}>
              <div>
                <div style={{ padding: "11px 52px 4px 37px" }}>
                  <div className="sick-leave-icon">
                    <span className="leave-days">0.35</span>
                  </div>
                </div>

                <p className="sick-leave-title">SICK/CAUSAL...</p>
              </div>
              <div>
                <div style={{ padding: "11px 59px 4px 0px" }}>
                  <div className="paid-leave-icon">
                    <span className="leave-days">0.35</span>
                  </div>
                </div>
                <p className="paid-leave-title">PAID LEAVE</p>
              </div>
              <div style={{ "padding-top": "21px" }}>
                <p className="apply-leave">Apply Leave</p>
                <p className="view-balance">View all Balance Leaves</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <div className="org">
            <button className="org-title">
              <span>Organization</span>
            </button>
            <button className="dev-title">
              <span>Software Development</span>
            </button>
          </div>
          <div className="feed">
            <ul className="nav">
              <div style={{ display: "flex", alignItems: "center" }}>
                <li
                  className={`announcement ${
                    openBorderBottomPost === "Post"
                      ? "active-border-bottom"
                      : ""
                  }`}
                  onClick={() => handleBorderBottomPost("Post")}
                >
                  <a style={{ textAlign: "center" }} onClick={openPost}>
                    <span className="nav-post">Post</span>
                  </a>
                </li>
                <li
                  className={`announcement ${
                    openBorderBottomPost === "Nav-Announcement"
                      ? "active-border-bottom"
                      : ""
                  }`}
                  onClick={() => handleBorderBottomPost("Nav-Announcement")}
                >
                  <a style={{ textAlign: "center" }} onClick={openAnnouncement}>
                    <span className="nav-announce">Announcement</span>
                  </a>
                </li>
                <li
                  className={`announcement ${
                    openBorderBottomPost === "Poll"
                      ? "active-border-bottom"
                      : ""
                  }`}
                  onClick={() => handleBorderBottomPost("Poll")}
                >
                  <a style={{ textAlign: "center" }} onClick={openPoll}>
                    <span className="nav-poll">Poll</span>
                  </a>
                </li>
                <li
                  className={`announcement ${
                    openBorderBottomPost === "Praise"
                      ? "active-border-bottom"
                      : ""
                  }`}
                  onClick={() => handleBorderBottomPost("Praise")}
                >
                  <a style={{ textAlign: "center" }} onClick={openPraise}>
                    <span className="nav-praise">Praise</span>
                  </a>
                </li>
              </div>
            </ul>
            <div className="nav-line" style={{"margin-top": "-1px"}}></div>
            {showPost && (
              // <div style={{ height: "205px" }}>
              <div>
                <div>
                  <div>
                    <input
                      type="text"
                      placeholder="Write your post here"
                      class="form-control post-feed"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      maxWidth: "500px",
                    }}
                  >
                    {selectedImages.map((image, index) => (
                      <div
                        key={index}
                        style={{ alignItems: "center", display: "flex" }}
                      >
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <img
                            src={image}
                            alt={`Selected ${index + 1}`}
                            className="selected-image"
                          />
                          {index === selectedImages.length - 1 && (
                            <div
                              className="add-image"
                              onClick={handleAddPhotoClick}
                            >
                              <img
                                src={PlusIcon}
                                alt="plus-img"
                                className="plus-icon"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="mention-employee">
                      <a>@</a>
                    </div>
                    <div
                      className="gallery-div"
                      onClick={handleGalleryIconClick}
                    >
                      <img src={Gallery} alt="img" className="gallery-icon" />
                    </div>
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageInputChange}
                    />
                    <div className="emoji-div" onClick={toggleEmojiPicker}>
                      <img src={Emoji} alt="img" className="emoji-icon" />
                    </div>
                  </div>
                  {showEmojiPicker && (
                    <div
                      style={{
                        ...pickerStyle,
                        height: "300px",
                        width: "300px",
                      }}
                    >
                      <Picker
                        style={pickerStyle}
                        data={data}
                        onEmojiSelect={handleEmojiClick}
                      />
                    </div>
                  )}
                </div>
                {/* <div className="nav-line" style={{ marginTop: "2px" }}></div>
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="posting">Posting to</p>

                    <div className="dropdown-announce">
                      <select className="announce-option" name="cars" id="cars">
                        <option value="volvo">Organization</option>
                        <option value="saab">Software Development</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button className="cancel-announce">Cancel</button>
                    <button className="post-announce">Post</button>
                  </div>
                </div> */}
              </div>
            )}
            {showAnnouncement && (
              <div>
                <div>
                  <div style={{ border: "none", "border-radius": "0px" }}>
                    <input
                      type="text"
                      placeholder="Title of the Announcement"
                      class="form-control announce-title"
                    />
                  </div>
                  <div className="nav-line"></div>

                  <div style={{ border: "none", "border-radius": "0px" }}>
                    <input
                      type="text"
                      placeholder="Details of the Announcement"
                      class="form-control announce-details"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      "justify-content": "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "23px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="notify-employees"
                        name="vehicle1"
                        value="Bike"
                        class=" notify-employees"
                      />
                      <label for="notify-employees" className="notify-label">
                        Notify Employees
                      </label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="checkbox"
                        id="require-acknowledgment"
                        name="vehicle1"
                        value="Bike"
                        class="require-acknowledgment"
                      />
                      <label
                        for="require-acknowledgment"
                        className="require-label"
                      >
                        Require Acknowledgment
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "26px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="checkbox"
                          id="hide-after"
                          name="vehicle1"
                          value="Bike"
                          class="hide-after"
                        />
                        <label for="hide-after" className="hide-after-label">
                          Hide After
                        </label>
                      </div>
                      <div className="announcement-date">
                        <input
                          type="text"
                          placeholder="Select Date"
                          class="form-control select-date"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-line" style={{ marginTop: "2px" }}></div>
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="posting">Posting to</p>

                    <div className="dropdown-announce">
                      <select className="announce-option" name="cars" id="cars">
                        <option value="volvo">Organization</option>
                        <option value="saab">Software Development</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button className="cancel-announce">Cancel</button>
                    <button className="post-announce">Post</button>
                  </div>
                </div>
              </div>
            )}
            {showPoll && (
              <div className="poll-div">
                <div>
                  <div
                    style={{
                      border: "none",
                      "border-radius": "0px",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Title of the Announcement"
                      class="form-control announce-title"
                    />
                  </div>
                  <div
                    className="nav-line"
                    style={{ marginBottom: "18px" }}
                  ></div>

                  <div>
                    {options.map((option, index) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Add Option Here"
                          class="form-control poll-option"
                          value={option}
                          onChange={(e) =>
                            handleOptionChange(index, e.target.value)
                          }
                        />
                        <img
                          src={Delete}
                          alt="img"
                          className="delete-option"
                          onClick={() => handleRemoveOption(index)}
                        />
                      </div>
                    ))}
                    <div className="add-option">
                      <a onClick={() => setOptions([...options, ""])}>
                        +Add Option
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p className="poll-expire">Poll Expires On</p>
                      <input
                        type="text"
                        placeholder="Select Date"
                        class="form-control select-date"
                        style={{ width: "87px", marginLeft: "6px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "28px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="notify-employees"
                        name="vehicle1"
                        value="Bike"
                        class=" notify-employees"
                      />
                      <label for="notify-employees" className="notify-label">
                        Notify Employees
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "21px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="notify-employees"
                        name="vehicle1"
                        value="Bike"
                        class=" notify-employees"
                      />
                      <label for="notify-employees" className="notify-label">
                        Anonymous Poll
                      </label>
                    </div>
                  </div>
                </div>
                <div className="nav-line" style={{ marginTop: "2px" }}></div>
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="posting">Posting to</p>

                    <div className="dropdown-announce">
                      <select className="announce-option" name="cars" id="cars">
                        <option value="volvo">Organization</option>
                        <option value="saab">Software Development</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button className="cancel-announce">Cancel</button>
                    <button className="post-announce">Post</button>
                  </div>
                </div>
              </div>
            )}
            {showPraise && (
              <div>
                <div>
                  <div style={{ border: "none", "border-radius": "0px" }}>
                    <input
                      type="text"
                      placeholder="Search Employee"
                      class="form-control search-employee"
                    />
                  </div>
                  <div className="nav-line"></div>
                  <div
                    style={{
                      marginTop: "10px",
                      border: "none",
                      "border-radius": "0px",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="What did the employee do to deserve the praise"
                      class="form-control praise-employee"
                      style={{
                        height: "auto",
                        minHeight: "60px",
                        border: "none",
                        "border-radius": "0px",
                        width: "440px",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="badge-div">
                      <img
                        src={selectedBadge || Badge}
                        alt="img"
                        className="badge-icon"
                      />
                    </div>
                    <div onClick={handleBadgeClick} className="select-badge">
                      Select Badge
                    </div>
                    {isBadgeModalOpen && (
                      <div className="modal">
                        <div className="modal-header">
                          <p className="choose-badge">Choose Badge</p>
                          <img
                            src={Cross}
                            alt="img"
                            className="cross-icon"
                            onClick={closeBadgeModal}
                          />
                        </div>
                        <div className="modal-content">
                          <ul
                            style={{
                              display: "flex",
                              padding: "16px 10px 10px 10px",
                              "list-style": "none",
                              flexWrap: "wrap",
                              margin: "0px",
                            }}
                          >
                            <li className="badge-list">
                              <a
                                onClick={() =>
                                  handleBadgeImageClick(TopPerformer)
                                }
                              >
                                <img
                                  src={TopPerformer}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Top Performer</p>
                            </li>
                            <li className="badge-list">
                              <a
                                onClick={() =>
                                  handleBadgeImageClick(LeadershipImpact)
                                }
                              >
                                <img
                                  src={LeadershipImpact}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Leadership</p>
                            </li>
                            <li className="badge-list">
                              <a
                                onClick={() =>
                                  handleBadgeImageClick(CustomHero)
                                }
                              >
                                <img
                                  src={CustomHero}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Custom Hero</p>
                            </li>
                            <li className="badge-list">
                              <a onClick={() => handleBadgeImageClick(Beyond)}>
                                <img
                                  src={Beyond}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Above & Beyond</p>
                            </li>
                            <li className="badge-list">
                              <a
                                onClick={() => handleBadgeImageClick(HighFive)}
                              >
                                <img
                                  src={HighFive}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">High Five</p>
                            </li>
                            <li className="badge-list">
                              <a onClick={() => handleBadgeImageClick(Legacy)}>
                                <img
                                  src={Legacy}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Leaving a Legacy</p>
                            </li>
                            <li className="badge-list">
                              <a
                                onClick={() =>
                                  handleBadgeImageClick(TeamPlayer)
                                }
                              >
                                <img
                                  src={TeamPlayer}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Team Player</p>
                            </li>
                            <li className="badge-list">
                              <a onClick={() => handleBadgeImageClick(Rookie)}>
                                <img
                                  src={Rookie}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Rockstart Rookie</p>
                            </li>
                            <li className="badge-list">
                              <a onClick={() => handleBadgeImageClick(Keka)}>
                                <img
                                  src={Keka}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">Being Keka</p>
                            </li>
                            <li className="badge-list">
                              <a
                                onClick={() => handleBadgeImageClick(Everyday)}
                              >
                                <img
                                  src={Everyday}
                                  alt="img"
                                  className="performer-icon"
                                />
                              </a>
                              <p className="badge-name">All Day Everyday</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex" }} onClick={handleIconClick}>
                    <label htmlFor="file-input">
                      <img src={Attach} alt="img" className="attach-icon" />
                    </label>
                    <input
                      id="file-input"
                      style={{ display: "none" }}
                      type="file"
                      name="fileupload"
                      className="input-file"
                      title="No file chosen"
                      accept=".png,.jpg,.jpeg,.doc,.docx,.pdf,.xlsx,.xls"
                      multiple
                      onChange={handleFileChange}
                    ></input>
                    <span className="add-attach">Add Attachment</span>
                  </div>
                  {error && <p className="error">{error}</p>}
                  {selectedFiles.length > 0 && (
                    <div>
                      <ul
                        style={{
                          listStyleType: "none",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        {selectedFiles.map((file, index) => (
                          <li className="selected-files" key={index}>
                            {file.name}
                            {/* <button onClick={() => handleDeleteFile(index)}>X</button> */}
                            <img
                              onClick={() => handleDeleteFile(index)}
                              src={Cancel}
                              alt="img"
                              className="cancel-icon"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="max-files">Max number of files allowed is 5</p>
                </div>

                <div className="nav-line" style={{ marginTop: "2px" }}></div>
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="posting">Posting to</p>

                    <div className="dropdown-announce">
                      <select className="announce-option" name="cars" id="cars">
                        <option value="volvo">Organization</option>
                        <option value="saab">Software Development</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button className="cancel-announce">Cancel</button>
                    <button className="post-announce">Post</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="events">
            <div>
              <ul
                style={{
                  display: "flex",
                  listStyleType: "none",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                <div>
                  <div
                    className=""
                    style={{ display: "flex", paddingLeft:'15px'}}
                  >
                    <li
                      className={`announcement1 ${
                        openBorderBottom === "Announcement"
                          ? "active-border-bottom"
                          : ""
                      }`}
                      onClick={() => handleBorderBottom("Announcement")}
                    >
                      <a
                        style={{ display: "flex" }}
                        onClick={openAnnouncementDropdown}
                      >
                        <img
                          src={Announcement}
                          alt="img"
                          className="announcement-icon"
                        />
                        <span className="event-announce">Announcement</span>
                      </a>
                    </li>
                    <li
                      className={`announcement1 ${
                        openBorderBottom === "Birthdays"
                          ? "active-border-bottom"
                          : ""
                      }`}
                      onClick={() => handleBorderBottom("Birthdays")}
                    >
                      <a
                        style={{ display: "flex" }}
                        onClick={openBirthdayDropdown}
                      >
                        <img
                          src={Birthday}
                          alt="img"
                          className="birthday-icon"
                        />
                        <div style={{ display: "flex" }}>
                          <span className="event-birthday">Birthdays</span>
                        </div>
                      </a>
                    </li>
                    <li
                      className={`announcement1 ${
                        openBorderBottom === "WorkAnniversary"
                          ? "active-border-bottom"
                          : ""
                      }`}
                      onClick={() => handleBorderBottom("WorkAnniversary")}
                    >
                      <a
                        style={{ display: "flex" }}
                        onClick={openAnniversaryDropdown}
                      >
                        <img
                          src={WorkAnniversary}
                          alt="img"
                          className="anniversary-icon"
                        />
                        <span className="event-anniversary">
                          0 Work Anniversaries
                        </span>
                      </a>
                    </li>
                    <li
                      className={`announcement1 ${
                        openBorderBottom === "NewJoinee"
                          ? "active-border-bottom"
                          : ""
                      }`}
                      onClick={() => handleBorderBottom("NewJoinee")}
                    >
                      <a
                        style={{ display: "flex" }}
                        onClick={openJoineeDropdown}
                      >
                        <img
                          src={NewJoinee}
                          alt="img"
                          className="joinee-icon"
                        />
                        <span className="event-joinee">New Joinee</span>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
              {announcementDropdownOpen && (
                <div className="dropdown-content">
                  <div className="nav-line"></div>

                  <div className="announcement-dropdown-content">
                    <p className="announcement-content">Happy weekend...</p>
                  </div>
                </div>
              )}
              {birthdayDropdownOpen && (
                <div className="birthday-dropdown-content">
                  <div className="nav-line"></div>
                  <div>
                    <p className="today-birthday">Birthdays today</p>
                    <div style={{ display: "flex" }}>
                      <img src={BirthdayCake} alt="img" className="cake-img" />
                      <p className="no-birthday">
                        No one is having birthday today.
                      </p>
                    </div>
                    <p className="next-days">Next 30 Days</p>
                    <div style={{position:'relative'}}>
                      <div>
                        <img
                          style={{
                            marginLeft: "34px",
                            width: "30px",
                            height: "30px",
                            cursor:'pointer'
                          }}
                          src={pic2}
                          // onClick={handlePictureClick}
                        />
                      </div>
                      <p className="birthday-user">Peter Parker</p>
                      <p className="birthday-date">22 September</p>
                      {isModalOpen && (
                        <div className="profile-modal">
                          <div className="profile-header"></div>
                          <div className="profile-content">
                            {/* Close button */}
                            <span className="close" onClick={closeModal}>
                              &times;
                            </span>

                            {/* Modal content */}
                            <h2>Peter Parker</h2>
                            <p>Content of your modal goes here.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {anniversaryDropdownOpen && (
                <div className="anniversary-dropdown-content">
                  <div className="nav-line"></div>
                  <div>
                    <p className="today-anniversary">
                      Work Anniversaries Today
                    </p>
                    <div style={{ display: "flex" }}>
                      <img src={RemoteWork} alt="img" className="work-img" />
                      <p className="no-anniversary">
                        No one is having work anniversary today.
                      </p>
                    </div>
                    <p className="next-days">Next 30 Days</p>
                    <div>
                      <div>
                        <img
                          style={{
                            marginLeft: "34px",
                            width: "30px",
                            height: "30px",
                          }}
                          src={pic2}
                        />
                      </div>
                      <p className="anniversary-user">Peter Parker</p>
                      <p className="work-duration">1 Year</p>
                    </div>
                  </div>
                </div>
              )}
              {joineeDropdownOpen && (
                <div className="joinee-dropdown-content">
                  <div className="nav-line"></div>
                  <div>
                    <p className="today-joinee">New Joinees Today</p>
                    <div style={{ display: "flex" }}>
                      <img
                        src={NewEmployee}
                        alt="img"
                        className="employee-img"
                      />
                      <p className="no-joinee">No new joinees today.</p>
                    </div>
                    <p className="last-days">Last 7 Days</p>
                    <div>
                      <div>
                        <img
                          style={{
                            marginLeft: "34px",
                            width: "30px",
                            height: "30px",
                          }}
                          src={pic2}
                        />
                      </div>
                      <p className="joinee-user">Peter Parker</p>
                      <p className="joining-date">21 August</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="posts">
            <div>
              <img src={CreatePost} alt="img" className="post-img" />
            </div>
            <button className="post-btn">+ Create First File</button>
          </div>
          <div className="created-announcement">
            <div className="">
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    style={{
                      padding: "15px 8px 19px 22px",
                      width: "30px",
                      height: "30px",
                    }}
                    src={pic2}
                  />
                </div>
                <div style={{ "margin-top": "17px" }}>
                  <span>
                    <span className="announce-name">
                      Snehal Baraskar{" "}
                      <span className="announce-created">
                        created an announcement
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "block" }} className="created-date">
                    3 days ago
                  </span>
                </div>
                <div style={{ "text-align": "right" }}>
                  <a>
                    <span>
                      <img src={EditIcon} alt="img" className="edit-img" />
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="announce-message">Happy Weekend...</h4>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
