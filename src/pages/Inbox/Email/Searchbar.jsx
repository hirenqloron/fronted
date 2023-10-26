import React from 'react'
import styles from "./Searchbar.module.css";
import { GoSearch } from "react-icons/go";
import Checkbox from "@mui/material/Checkbox";
import { IoRefreshSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
const Searchbar = () => {
  return (
    <div>
      <div className={styles.leftheader}>
        <button className={styles.btnsearch}>
          <GoSearch
            style={{
              fontSize: "20px",
              color: "#C9C9C9",
              background: "none",
              marginTop: "6px",
            }}
          />
        </button>
        <input
          type="text"
          className={styles.inputsearch}
          placeholder="Search mail"
        />
      </div>
      <div className={styles.icons}>
        <p>
          <Checkbox
            style={{ color: "#B0BAC9", marginLeft: "4px" }}
            // checked={selectAll}
            // onChange={handleSelectAll}
          />
        </p>
        <p>
          <IoRefreshSharp />
        </p>
        <p>
          <BsThreeDotsVertical />
        </p>
      </div>
    </div>
  );
}

export default Searchbar