import React from 'react'
import styles from  "./cardId.module.css"
import userImg from "../../../../image/Ash-Read.png";
const CardId = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
            <div className={styles.cardheaderbar}>
              <a className={styles.btnmessage} href="#"><svg viewBox="0 0 16 16" className={`${styles.bi} ${styles.bichatdotsfill}`} fill="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
</svg><span className={styles.sronly}>Message</span></a>
              <a className={styles.btnmenu} href="#"><svg viewBox="0 0 16 16" className={`${styles.bi} ${styles.bilist}`} fill="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" fill-rule="evenodd"></path>
</svg><span className={styles.sronly}>Menu</span></a>
            </div>
             <span className={styles.image}> <img className={styles.image}src={userImg} alt="Image" width={177} height={177} /></span>  
            <div className={styles.cardheaderslantededge}>      
            </div>
      </div>

      <div className={styles.cardbody}>
          <span className={styles.name}>John Smith</span><br/>
          <span className={styles.jobtitle}><u>Software Developer</u></span>
          <div className={styles.bio}>QT000123</div>
         </div>

      <div className={styles.cardfooter}>
         
              <div className={styles.stat}>
                <span className={styles.label}>Department</span>
                <span className={styles.value}>Software Development</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>Hyderabad, India</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.label}>Blood Group</span>
                <span className={styles.value}>O+</span>
             
          </div>
      </div>
  </div>
  )
}

export default CardId;
