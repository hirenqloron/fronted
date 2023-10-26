import React, { useState } from "react";
import "./user.css";
import Divider from "@mui/material/Divider";
// import { useNavigate } from "react-router-dom";
import EditPrimary from "./primaryDetails/EditPrimary";
import Contact from "../UserProfile/contectDetail/Contact"
import Dialog from "@mui/material/Dialog"
import Address from "./Address/Adress";
import RelationShip from "./RelationShip/RelationShip";
import Educatioin from "./Education/Education";
import Profesnal from "../UserProfile/profectional/Profesnal"
import Drawer from '@mui/material/Drawer';

const User = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);



  const openModal = () => {
    setIsModalVisible(true);
    
  };

  
  const openModal1 = () => {
    setIsModalVisible1(true);
  }

  const openModal2 = () => {
    setIsModalVisible2(true);
  }
  const openModal3 = () => {
    setIsModalVisible3(true);
  }

  const openModal4 = () => {
    setIsModalVisible4(true);
  }

  const openModal5 = () => {
    setIsModalVisible5(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const closeModal2 = () => {
    setIsModalVisible2(false);
  };

  const closeModal1 = () => {
    setIsModalVisible1(false);
  };

  const closeModal3 = () => {
    setIsModalVisible3(false);
  };

  const closeModal4 = () => {
    setIsModalVisible4(false);
  };

  const closeModal5 = () => {
    setIsModalVisible5(false);
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
      <div className={`header1 ${isHighlighted ? 'highlight' : 'gray'}`}>
      primary Details{' '}
      <button className="edit-btn" onClick={openModal}>
        Edit
      </button>
    </div>
        <Divider />

        <div className="content-div">
          <div className="Name-sec">
            FIRST NAME <span>MIDDLE NAME</span>
          </div>
          <div className="Name-sec2">
            James <span>-</span>
          </div>

          <div className="Name-sec">
            LAST NAME <span>DISPLAY NAME</span>
          </div>
          <div className="Name-sect">
            Ferguison<span>James Ferguison</span>
          </div>
          <div className="Name-sec">
            GENDER <span >DATE OF BIRTH</span>
          </div>
          <div className="Name-sec2">
            Male <span className="date-off">28-09-1999</span>
          </div>
          <div className="Name-sec">
            MARTIAL STATUS <span >BLOOD GROUP</span>
          </div>
          <div className="Name-sec2">
            Single <span className="o-positive">O+ Positive</span>
          </div>
          <div className="Name-sec1">
            PHYSICALLY HANDICAPPED
            <div className="No">No</div>
          </div>
        </div>
        <Drawer
        anchor="right"
        open={isModalVisible}
        onClose={closeModal}
        ModalProps={{
          style: {
            position: 'absolute',
            maxWidth: '100%',
            width: '400px', // Adjust the width as needed
          },
        }}
      >
        {/* Content inside the drawer */}
        <EditPrimary onClose={closeModal} />
      </Drawer>
      </div>
      <div className="grid-item">
        <div className="header1">
          Contact Details <button className="edit-btn" onClick={openModal1}>Edit</button>
        </div>
        <Divider />
        <div className="content-div">
          <div className="Name-sect2">
            WORK EMAIL <span>PERSONAL EMAIL</span>
          </div>
          <div className="Name-sect1">
            james.ferguison@sortboxs.com <span>jamesferguison@gmail.com</span>
          </div>

          <div className="Name-sect3">
            MOBILE PHONE <span>DISPLAY NAME</span>
          </div>
          <div className="Name-sec24">
            91107 XXXXX<span>911071 XXXX</span>
          </div>
          <div className="Name-sect3">
            RESIDENCE PHONE <span>DATE OF BIRTH</span>
          </div>
          <div className="Name-sec25">
            911071 XXXXX<span>28-09-1999</span>
          </div>
      
        </div>
        <Drawer
        anchor="right"
        open={isModalVisible1}
        onClose={closeModal1}
        ModalProps={{
          style: {
            position: 'absolute',
            maxWidth: '100%',
            width: '400px', // Adjust the width as needed
          },
        }}
      >
        {/* Content inside the drawer */}
        <Contact onClose={closeModal1} />
      </Drawer>
      </div>
      <div className="grid-item h-200">
        <div className="header1">
          Addresses <button className="edit-btn" onClick={openModal2}>Edit</button>
        </div>
        <Divider />
        <div className="content-div">
          <div className="Name-sec">
            CURRENT ADDRESS <span>PERSONAL PERMANENT ADDRESS</span>
          </div>
          <div className="Name-sec2"></div>
        </div>
        <Drawer
        anchor="right"
        open={isModalVisible2}
        onClose={closeModal2}
        ModalProps={{
          style: {
            position: 'absolute',
            maxWidth: '100%',
            width: '400px', // Adjust the width as needed
          },
        }}
      >
        {/* Content inside the drawer */}
        <Address onClose={closeModal2} />
      </Drawer>
      </div>
      <div className="grid-item h-200">
        <div className="header1">
          Relations<button className="edit-btn" onClick={openModal3}>Edit</button>
        </div>
        <Divider />
        <div className="content-div">
          <div className="Name-sec">FATHER</div>
          <div className="Name-sec3">
            Anjaneyulu Pallapati Mobile: 7416923428 Profession: Government Date
            Of Birth: 14 Mar, 1978 Gender: Male
          </div>
        </div>
        <Drawer
        anchor="right"
        open={isModalVisible3}
        onClose={closeModal3}
        ModalProps={{
          style: {
            position: 'absolute',
            maxWidth: '100%',
            width: '400px',
          },
        }}
      >
        
        <RelationShip onClose={closeModal3} />
      </Drawer>
      </div>
      <div className="grid-item">
        <div className="header1">
          Experience <button className="edit-btn" onClick={openModal4}>Edit</button>
        </div>
        <Divider />
        <div className="content-div">
          <div className="Name-sec4">Design Specialist, Cyient Pvt Ltd</div>
          <div className="Name-sec5">Mar 2022 - Mar 2023 | Hyderabad</div>
        </div>
        <Drawer
        anchor="right"
        open={isModalVisible4}
        onClose={closeModal4}
        ModalProps={{
          style: {
            position: 'absolute',
            maxWidth: '100%',
            width: '400px',
          },
        }}
      >
        
        <Educatioin onClose={closeModal4} />
      </Drawer>
      </div>
      <div className="grid-item">
        <div className="header1">
          Educatioin <button className="edit-btn">Edit</button>
        </div>
        <Divider />
        <div className="content-div">
          <div className="Name-sec">
            BRANCH / SPECIALIZATION <span>CGPA / PERCENTAGE</span>
          </div>
          <div className="Name-sec2">
            Accounts & Commerce <span className="cgpa">7.2</span>
          </div>

          <div className="Name-sec">
            DEGREE <span>UNIVERSITY / COLLEGE</span>
          </div>
          <div className="Name-sec10">
            B.com computers<span>Acharya Nagarjuna University</span>
          </div>
          <div className="Name-sec">
            YEAR OF COMPLETION <span className="year-of-joining">YEAR OF JOINING</span>
          </div>
          <div className="Name-sec2">
            09 Sept, 2021<span className="year-of-date">05 Jun, 2018</span>
          </div>
        </div>
       
      </div>
      <div className="grid-item">
        <div className="header1">
          Professional Summary <button className="edit-btn" onClick={openModal5}>Edit</button>
        </div>
        <Divider />
        <div className="content-div">
          <div className="Name-sec">PROFESSIONAL SUMMARY</div>
          <div className="Name-sec2">
            Lorem ipsum dolor sit amet consectetur. Sit nulla diam odio
            senectus. Auctor neque aliquet facilisi in odio at lacinia.
          </div>
        </div>
        <Drawer
        anchor="right"
        open={isModalVisible5}
        onClose={closeModal5}
        ModalProps={{
          style: {
            position: 'absolute',
            maxWidth: '100%',
            width: '400px',
          },
        }}
      >
        
        <Profesnal onClose={closeModal5} />
      </Drawer>
      </div>
      <div className="grid-item">
        <div className="header1">
          Contact Details <button className="edit-btn">Edit</button>
        </div>
        <Divider />
        <div className="content-div">
          <div className="Name-sec">Photo & ID</div>
          <button className="Name-sec6">+ Add details</button>
          <div className="Name-sec">Address Proof</div>
          <button className="Name-sec6">+ Add details</button>
          <div className="Name-sec">Payroll</div>
          <button className="Name-sec6">+ Add details</button>
        </div>
      </div>
    </div>
  );
};

export default User;
