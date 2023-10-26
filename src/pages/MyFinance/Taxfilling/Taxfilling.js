import styles from "./Taxfilling.module.css";
const Taxfilling=()=>{
    return(
        <div>
 <div className={styles.taxfilling}>
    <p className={styles.taxpaid}>Tax Filing (Paid)</p>
    <p className={styles.taxfile}>File ITR</p>
</div>
<p className={styles.taxefile}>You can use ClearTax (our partner) to e-file your ITR.</p>
<div className={styles.taxpoints}>
    <p className={styles.taxpointsdata1}>We've partnered with ClearTax, largest tax platform in India.</p>
    <div className={styles.taxpointslist}>
        <li><span>Upload your Form -16 pdf</span></li>
        <li><span>Preview your return, created by Cleartax automatically</span></li>
        <li><span>Done with e-filing in just 5-7 mins</span></li>

    </div>
    <p className={styles.taxpointsdata2}>Due date to file your ITR for FY 2022-23 (AY 2023-24) is July 31, 2023</p>
    <p className={styles.taxpointsdata2}>Happy Filing !</p>
</div>
        </div>
    )
}
export default Taxfilling;