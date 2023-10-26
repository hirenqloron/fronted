import React from 'react'
import styles from './CompensationPlanning.module.css'
import blue from '../../../../../image/blue.svg'
import red from '../../../../../image/red.svg'
import doenerror from '../../../../../image/doenerror.svg'


const CompensationPlanning = () => {
  const dataTable = [
    {
      date: 'October 2023',
      note: 31,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'November 2023',
      note: 31,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'December 2023',
      note: 31,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'January 2024',
      note: 31,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'Feburary 2024',
      note: 30,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'March 2024',
      note: 30,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'April 2024',
      note: 30,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'May 2024',
      note: 30,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'June 2024',
      note: 30,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
    {
      date: 'July 2024',
      note: 30,
      status: "INR 9,26,407",
      lastActioned: 'INR 9,26,407',
      nextApprover: "INR 0",
      actions: 'INR 2,974',
      coast: 'INR 9,26,407'
    },
  ];
  return (
    <div className={styles.MainCompensationPlanning}>

      <div className={styles.innerCompensationpart}>
        <h1>Compensation Summary</h1>
        <div className={styles.MainCharts}>
          <h1>Compensation Cost - Upcoming Months</h1>
          <div className={styles.Charts}></div>
          <div className={styles.mainAmountCards}>
            <div className={styles.innermainAmountCards}>
              <div className={styles.amountCARD}>
                <div className={styles.circuleCard}>FIX PAY</div>
                <div className={styles.NonecirculeCard}>
                  <h1>INR</h1>
                  <p>1,10,32,649</p>
                </div>
              </div>
              <div className={styles.amountCARD}>
                <div className={styles.circuleCard}>FIX PAY</div>
                <div className={styles.NonecirculeCard}>
                  <h1>INR</h1>
                  <p>1,10,32,649</p>
                </div>
              </div>
              <div className={styles.amountCARD}>
                <div className={styles.circuleCard}>FIX PAY</div>
                <div className={styles.NonecirculeCard}>
                  <h1>INR</h1>
                  <p>1,10,32,649</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.table_Container}>
            <div className={styles.newJoinyySomethingEmployee}>
              <div className={styles.innernewJoinyySomethingEmployee}>
                <h3><img src={blue} alt='img' /> &nbsp; New Employee Joinee</h3>
                <h3><img src={red} alt='img' /> &nbsp;  Employee Exit</h3>
              </div>
              <div className={styles.innernewJoinyySomethingEmployee}><h3>Total: 12 &nbsp; &nbsp;<img src={doenerror} alt='img' style={{ width: '14px' }} /></h3></div>
            </div>
            <table className="Attendance-table">
              <tr className={styles.theading}>
                <th>UPCOMING MONTHS</th>
                <th>ESTIMATED EMPLOYEE COST</th>
                <th>COMPENSATAION COST</th>
                <th>FIX PAY</th>
                <th>BONUS</th>
                <th>OTHERS</th>
                <th>FINAL COST</th>

              </tr>
              {dataTable.map((data, i) => (
                <tr key={i} className={styles.tData}>
                  <td>{data.date}</td>
                  <td>{data.note}</td>
                  <td>{data.status}</td>
                  <td className="ACTIONED-BY">{data.lastActioned}</td>
                  <td></td>
                  <td>{data.actions}</td>
                  <td>{data.coast}</td>

                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CompensationPlanning
