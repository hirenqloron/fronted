import React from 'react'
// import Declaration from "./Declaration"
import styles from "./Incomeothersou.module.css";
const Incomeothersou = () => {
  return (
    <div>

      <div className={styles.incomesource}>
        <p className={styles.incheading}>Income From Other Sources</p>
        <p className={styles.incdata}>
          Income from other sources is a residual category used to classify
          income that is not classified as taxed under any other head of income.
        </p>
      </div>
      <div className={styles.incomebox}>
        <p>Income from other sources is not Added</p>
      </div>
    </div>
  );
}

export default Incomeothersou