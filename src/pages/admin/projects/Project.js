import React, { useEffect, useState } from "react";
import styles from "./project.module.css";
import Table from "@mui/material/Table";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import clienimg from "../../../image/Ellipse 130.png";
import Box from "@mui/material/Box";

import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteProject from "./DeleteProject";

export const Project = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Drafts");
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [projectList, setProjectList] = useState([]);

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
  };

  const saveEditedData = (editedData) => {
    // Update the data array with editedData
    // You can implement the logic to save the edited data here
    // For example, you can use an API call to update the data on the server
  };

  const openDialog = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setSelectedItem(null);
    setIsDialogOpen(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Gender:", gender);
  };



  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');



  const fetchProectList = async () => {
    const userId = localStorage.getItem("Id");
    const apiUrl = `http://3.109.153.24:8080/api/v1/auth/getProject?userId=${userId}`;

  await axios.get(apiUrl)
      .then(response => {
        console.log('resp... :  ', response);
        setProjectList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(() => {

    fetchProectList();
  }, []);

  const deleteItem = (id) => {
    setOpen(true);
    setValue(id);
  };

  const handleCloseDia = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
      fetchProectList();
    }
  };
  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.invoiceColum1}>
        <form onSubmit={handleSubmit}>
          <div className={styles.invoiceFile}>
            <div className={styles.invoiceSelect}>
              <div className={styles.filter}>Filter</div>
              <div className={styles.invoiceDiv}>Project Status </div>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
                className={styles.selectBox}
              >
                <option className={styles.optionName} value="Drafts">
                  Drafts
                </option>
                <option className={styles.optionName} value="Drafts">
                  Drafts
                </option>
                <option className={styles.optionName} value="Other">
                  Other
                </option>
              </select>
            </div>
            <div className={styles.invoiceInput}>
              <div className={styles.invoiceDate}>Project Date </div>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.invoiceColumn2}>
        <div>
          <div className={styles.tableHeader}>
            <select id="" name="" value={gender} onChange={handleGenderChange}>
              <option className={styles.optionName} value="male">
                Action
              </option>
              <option className={styles.optionName} value="female">
                Action
              </option>
              <option className={styles.optionName} value="other">
                Other
              </option>
            </select>
            <div className={styles.searchInvoice}>
              <input type="text" placeholder="Search Projects" />
            </div>
            <div className={styles.creatButton}>
              <button onClick={() => navigate("/projectManagent/addProject")}>
                Add Project
              </button>
            </div>
          </div>
        </div>
        <DeleteProject

          keepMounted
          open={open}
          onClose={handleCloseDia}
          value={value}
        />
        <div>
          <Table className={styles.abletData}>
            <TableHead>
              <TableRow className={styles.headerdata}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className={styles.headerCell}>ORGANIZATION </TableCell>
                <TableCell className={styles.headerCell}>PROJECT NAME</TableCell>
                <TableCell className={styles.headerCell}>CLIENT NAME</TableCell>
                <TableCell className={styles.headerCell}>PROJECT LINK</TableCell>
                <TableCell className={styles.headerCell}>START DATE</TableCell>
                <TableCell className={styles.headerCell}>END DATE</TableCell>
                <TableCell className={styles.headerCell}>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectList.map((item) => (

                <TableRow key={item.id}>
                  <TableCell ><Checkbox /></TableCell>
                  <TableCell >{item.organization}</TableCell>
                  <TableCell> {item.projectName}</TableCell>
                  <TableCell> {item.clientName}</TableCell>
                  <TableCell> {item.projectLink}</TableCell>
                  <TableCell> {item.startDate}</TableCell>
                  <TableCell> {item.endDate}</TableCell>
                  <TableCell>
                    <div className={styles.divBUTON}>

                      <Button onClick={() => deleteItem(item.id)} className={styles.actionIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.63338 2.16766C9.23432 2.16766 8.91082 2.49117 8.91082 2.89022V3.61279H4.81631C4.41725 3.61279 4.09375 3.93629 4.09375 4.33535C4.09375 4.73441 4.41725 5.05791 4.81631 5.05791H18.3041C18.7032 5.05791 19.0267 4.73441 19.0267 4.33535C19.0267 3.93629 18.7032 3.61279 18.3041 3.61279H14.2096V2.89022C14.2096 2.49117 13.8861 2.16766 13.487 2.16766H9.63338Z"
                            fill="#6D6976"
                          />
                          <path
                            d="M9.63338 10.2603C10.0324 10.2603 10.3559 10.5838 10.3559 10.9829L10.3559 17.7268C10.3559 18.1259 10.0324 18.4494 9.63338 18.4494C9.23432 18.4494 8.91082 18.1259 8.91082 17.7268L8.91082 10.9829C8.91082 10.5838 9.23432 10.2603 9.63338 10.2603Z"
                            fill="#6D6976"
                          />
                          <path
                            d="M14.2096 10.9829C14.2096 10.5838 13.8861 10.2603 13.487 10.2603C13.088 10.2603 12.7645 10.5838 12.7645 10.9829V17.7268C12.7645 18.1259 13.088 18.4494 13.487 18.4494C13.8861 18.4494 14.2096 18.1259 14.2096 17.7268V10.9829Z"
                            fill="#6D6976"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.77146 7.6275C5.81212 7.26158 6.12143 6.98474 6.48961 6.98474H16.6308C16.999 6.98474 17.3083 7.26158 17.349 7.6275L17.5418 9.36295C17.8913 12.5088 17.8913 15.6837 17.5418 18.8296L17.5228 19.0004C17.3841 20.2492 16.4163 21.2449 15.172 21.4191C12.7758 21.7545 10.3446 21.7545 7.94845 21.4191C6.70416 21.2449 5.73637 20.2491 5.59762 19.0004L5.57864 18.8296C5.2291 15.6837 5.2291 12.5088 5.57864 9.36295L5.77146 7.6275ZM7.13633 8.42986L7.01492 9.52253C6.67717 12.5623 6.67717 15.6302 7.01492 18.67L7.0339 18.8408C7.09971 19.4331 7.55869 19.9053 8.14881 19.9879C10.412 20.3048 12.7084 20.3048 14.9716 19.9879C15.5617 19.9053 16.0207 19.4331 16.0865 18.8408L16.1055 18.67C16.4433 15.6302 16.4433 12.5623 16.1055 9.52253L15.9841 8.42986H7.13633Z"
                            fill="#6D6976"
                          />
                        </svg>
                      </Button>

                      <Button onClick={() => openDialog(item)} className={styles.actionIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.94846 11.561C7.94846 9.56567 9.56596 7.94817 11.5613 7.94817C13.5566 7.94817 15.1741 9.56567 15.1741 11.561C15.1741 13.5563 13.5566 15.1738 11.5613 15.1738C9.56596 15.1738 7.94846 13.5563 7.94846 11.561ZM11.5613 9.39329C10.3641 9.39329 9.39358 10.3638 9.39358 11.561C9.39358 12.7581 10.3641 13.7287 11.5613 13.7287C12.7584 13.7287 13.7289 12.7581 13.7289 11.561C13.7289 10.3638 12.7584 9.39329 11.5613 9.39329Z"
                            fill="#6D6976"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.16554 10.2568C3.76175 10.8387 3.61309 11.2938 3.61309 11.561C3.61309 11.8281 3.76175 12.2833 4.16554 12.8651C4.55586 13.4275 5.13603 14.0372 5.87006 14.6006C7.3413 15.7297 9.35837 16.6189 11.5613 16.6189C13.7642 16.6189 15.7812 15.7297 17.2525 14.6006C17.9865 14.0372 18.5667 13.4275 18.957 12.8651C19.3608 12.2833 19.5094 11.8281 19.5094 11.561C19.5094 11.2938 19.3608 10.8387 18.957 10.2568C18.5667 9.69441 17.9865 9.08472 17.2525 8.52137C15.7812 7.3922 13.7642 6.50304 11.5613 6.50304C9.35837 6.50304 7.3413 7.3922 5.87006 8.52137C5.13603 9.08472 4.55586 9.69441 4.16554 10.2568ZM4.9902 7.37497C6.65715 6.0956 8.97544 5.05792 11.5613 5.05792C14.1471 5.05792 16.4654 6.0956 18.1323 7.37497C18.9674 8.01588 19.657 8.73089 20.1442 9.43293C20.618 10.1156 20.9546 10.8647 20.9546 11.561C20.9546 12.2572 20.618 13.0064 20.1442 13.689C19.657 14.3911 18.9674 15.1061 18.1323 15.747C16.4654 17.0263 14.1471 18.064 11.5613 18.064C8.97544 18.064 6.65715 17.0263 4.9902 15.747C4.15513 15.1061 3.4655 14.3911 2.9783 13.689C2.50456 13.0064 2.16797 12.2572 2.16797 11.561C2.16797 10.8647 2.50456 10.1156 2.9783 9.43293C3.4655 8.73089 4.15513 8.01588 4.9902 7.37497Z"
                            fill="#6D6976"
                          />
                        </svg>
                      </Button>

                      <Button
                        onClick={() => openEditModal(item)}
                        className={styles.actionIcon}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.8025 5.05795C12.2016 5.05795 12.5251 5.38145 12.5251 5.78051C12.5251 6.17957 12.2016 6.50307 11.8025 6.50307C11.4035 6.50307 11.08 6.17957 11.08 5.78051C11.08 5.38145 11.4035 5.05795 11.8025 5.05795ZM11.8025 10.8384C12.2016 10.8384 12.5251 11.1619 12.5251 11.561C12.5251 11.9601 12.2016 12.2836 11.8025 12.2836C11.4035 12.2836 11.08 11.9601 11.08 11.561C11.08 11.1619 11.4035 10.8384 11.8025 10.8384ZM11.8025 16.6189C12.2016 16.6189 12.5251 16.9424 12.5251 17.3415C12.5251 17.7405 12.2016 18.064 11.8025 18.064C11.4035 18.064 11.08 17.7405 11.08 17.3415C11.08 16.9424 11.4035 16.6189 11.8025 16.6189Z"
                            fill="#6D6976"
                            stroke="#6D6976"
                            stroke-width="1.44512"
                          />
                        </svg>
                      </Button>

                    </div>
                  </TableCell>

                </TableRow>
              ))}

            </TableBody>
          </Table>
        </div>
        <Dialog open={isDialogOpen} onClose={closeDialog}>
          {selectedItem && (
            <div>
              <DialogTitle>
                <div className={styles.diologText}>ID: {selectedItem.id}</div>
              </DialogTitle>
              <DialogContent>
                <div className={styles.diologText}>
                  BILL FROM: {selectedItem.BILLFROM}
                </div>
              </DialogContent>
              <DialogContent>
                <div className={styles.diologText}>
                  TOTAL: {selectedItem.TOTAL}
                </div>
              </DialogContent>
              <DialogContent>
                <div className={styles.diologText}>
                  ISSUED DATE: {selectedItem.ISSUEDDATE}
                </div>
              </DialogContent>
              <DialogContent>
                <div className={styles.balanceitam}>
                  BALANCE: {selectedItem.BALANCE}
                </div>
              </DialogContent>
              <Button
                onClick={closeDialog}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "350px",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
              >
                Close
              </Button>
            </div>
          )}
        </Dialog>
      </div>
      <Dialog open={isEditModalOpen} onClose={closeEditModal}>
        {selectedItem && (
          <div className={styles.inputclass}>
            <DialogContent>
              <input
                type="text"
                value={selectedItem.BILLFROM}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    BILLFROM: e.target.value,
                  })
                }
              />
              <input
                type="text"
                value={selectedItem.TOTAL}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    TOTAL: e.target.value,
                  })
                }
              />

              <input
                type="text"
                value={selectedItem.ISSUEDDATE}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    ISSUEDDATE: e.target.value,
                  })
                }
              />

              <input
                type="text"
                value={selectedItem.BALANCE}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    BALANCE: e.target.value,
                  })
                }
              />
            </DialogContent>
            <Button
              onClick={() => {
                saveEditedData(selectedItem);
                closeEditModal();
              }}
              style={{ marginLeft: "450px" }}
            >
              Save
            </Button>
            <Button onClick={closeEditModal}>Cancel</Button>
          </div>
        )}
      </Dialog>
    </div>
  );
};
