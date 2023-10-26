import styles from "./Taxsavingadv.module.css";
const Taxsavingadv = () => {
  return (
    <div>
       <div className={styles.taxfilling}>
        <p className={styles.taxpaid}>Tax Saving Investment</p>
        <p className={styles.taxfile}>Invest & Save Tax</p>
      </div>
      <p className={styles.taxefile}>
        You can use ClearTax (our partner) to do tax saving investment.
      </p>
      <div className={styles.taxpoints}>
        <p className={styles.taxpointsdata1}>
          Wondering how to save taxes & grow your wealth at the same time?.
        </p>
        <div className={styles.taxpointslist}>
          <li>
            <span>
              You can save upto ₹ 45,000 in taxes by investment in the best
              performing mutual funds.
            </span>
          </li>
          <li>
            <span>
              Cleartax continuously monitors your investment portfolio &
              recommends periodic re-balancing to maximize your investment
              returns.
            </span>
          </li>
          <li>
            <span>
              Get the best investment advisory with the convenience of 100%
              online & paperless process - for Free !
            </span>
          </li>
          <li>
            <span>
              Cleartax enables you in the best tax saving ELSS mutual funds in
              India in under 5 minutes.
            </span>
          </li>
          <li>
            <span>
              ELSS mutual funds are better than PPF,ULIP/LIC Insurance &
              tax-saving FDs owing to much higher returns & lowest lock-in
              period.
            </span>
          </li>
        </div>
        <p className={styles.taxpointsdata2}>
          With all your investment in one place, have complete transparency of
          every transaction and always stay on your investment track.
        </p>
        <p className={styles.taxpointsdata2}>Happy Filing !</p>
      </div>
      <p className={styles.taxefile1}>A service offering from our partner <span style={{fontWeight:"700",color:"black"}}>cleartax</span> </p>
    </div>
  );
};
export default Taxsavingadv;
