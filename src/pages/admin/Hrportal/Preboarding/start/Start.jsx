import styles from "./Start.module.css";
import { GoSearch } from "react-icons/go";
const Start=()=>{
return (
  <div className={styles.portaladmin}>
    <div className={styles.sidebar}></div>
    <div className={styles.hrportal}>
      <div className={styles.heading}>
        <p>SORTBOXS</p>
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
        <div className={styles.new}>
          <p>+New</p>
        </div>
        <div className={styles.sortboxportal}>
          <p>Sortboxs HR Portal</p>
          <p><img/></p>
        </div>
      </div>
    </div>
  </div>
);
}
export default Start;