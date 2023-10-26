 
import styles from "./Form12bb.module.css";
const Form12bb = () => {
  return (
    <div>
      <div>
        <p className={styles.form12bbhead}>Form 12 BB</p>
        <p className={styles.form12bbdata}>
          Form 12BB is a provisional statement that has details about your
          proposed investments and Expenses that are Income Tax deductible.
        </p>
      </div>
      <div className={styles.form12bbsubdata}>
        <p className={styles.form12bcontent}>
          Select the financial year and generate the form
        </p>

        <div className={styles.selectitem}>
          <select className={styles.formselectlg}>
            <option className={styles.optionmenu} selected>
              APR 2023 - MAR 2024
            </option>
          </select>
          <p className={styles.form12button}>Generate Form 12 BB</p>
        </div>
      </div>
    </div>
  );
};
export default Form12bb;
