import React, { useState } from "react";
import styles from "./Summary.module.css";
import hashsymbol from "../../../../image/hashsymbol.svg";
import thunder from "../../../../image/thunder.svg";
import greenbar from "../../../../image/greenbar.svg";
import usertime from "../../../../image/usertime.svg";
import dollar1 from "../../../../image/dollar1.svg";
import users from "../../../../image/users.svg";
import desktop from "../../../../image/desktop.svg";
import expenseandtravel from "../../../../image/expenseandtravel.svg";
import documentsout from "../../../../image/documentsout.svg";
import airplane from "../../../../image/airplane.svg";
import onboarding from "../../../../image/onborading.svg";
import { useNavigate } from "react-router-dom";
import Feature from "../feautures/Feature";
const Summary = () => {
  
  return (
    <div>
        <div className={styles.summarybox}>
          <div className={styles.headingsum}>
            <p>Phase 1 (9 Features)</p>
          </div>
          <div className={styles.admsummary}>
            <div>
              <div className={styles.mainbox}>
                <div className={styles.boxessum}>
                  <div className={styles.box}>
                    <p>
                      <span>1</span>
                      <span>Not Started</span>
                    </p>
                  </div>
                  <div className={styles.box}>
                    <p>
                      <span>2</span>
                      <span>In Progress</span>
                    </p>
                  </div>
                  <div className={styles.box}>
                    <p>
                      <span>6</span>
                      <span>Ready to use</span>
                    </p>
                  </div>
                </div>
                <div className={styles.secondbox}>
                  <span>JUL 06, 2023</span>
                  <span>Billing Starts</span>
                </div>
              </div>
              <div className={styles.headsum}>
                <span>In Progress Features</span>
                <span
                  style={{
                    color: "black",
                    fontSize: "10px",
                    marginTop: "3px",
                    marginLeft: "6px",
                  }}
                >
                  (2)
                </span>
              </div>
              <div className={styles.boxesflex1}>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.hashsym} src={hashsymbol} />
                    </span>
                    <span className={styles.tasktitle}>Core HR</span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                    <p>
                      <span className={styles.taskcompletiondate}>
                        JUN 06 - JUN 09
                      </span>
                      <span className={styles.taskdelay}>(95 Days Delay)</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.usertime} src={usertime} />
                    </span>
                    <span className={styles.tasktitle}>
                      Attendance Management
                    </span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                    <p>
                      <span className={styles.taskcompletiondate}>
                        JUN 06 - JUN 09
                      </span>
                      <span className={styles.taskdelay}>(95 Days Delay)</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.headsum}>
                <span>Not Started Features</span>
                <span
                  style={{
                    color: "black",
                    fontSize: "10px",
                    marginTop: "3px",
                    marginLeft: "6px",
                  }}
                >
                  (1)
                </span>
              </div>
              <div className={styles.task}>
                <div className={styles.mainhead}>
                  <span className={styles.hashimg}>
                    <img
                      className={styles.expensetravel}
                      src={expenseandtravel}
                    />
                  </span>
                  <span className={styles.tasktitle}>Expense & Travel</span>
                </div>
                <div className={styles.taskdata}>
                  <p>
                    <span className={styles.greenbar}>
                      <img src={greenbar} />
                    </span>
                    <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                  </p>
                  <p>
                    <span className={styles.taskcompletiondate}>
                      JUN 06 - JUN 09
                    </span>
                    <span className={styles.taskdelay}>(95 Days Delay)</span>
                  </p>
                </div>
                <div style={{ display: "flex", marginTop: "16px" }}>
                  <span className={styles.assignowner}>+ Assign Owner</span>
                  <span className={styles.dateandtime}>
                    <img className={styles.thunder} src={thunder} />
                    Jun 23, 2023, 4:09 pm
                  </span>
                </div>
              </div>
              <div className={styles.headsum}>
                <span>Completed & Ready to Use</span>
                <span
                  style={{
                    color: "black",
                    fontSize: "10px",
                    marginTop: "3px",
                    marginLeft: "6px",
                  }}
                >
                  (1)
                </span>
              </div>
              <div className={styles.boxesflex1}>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.onboarding} src={onboarding} />
                    </span>
                    <span className={styles.tasktitle}>
                      Onboarding & Offboarding
                    </span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.users} src={users} />
                    </span>
                    <span className={styles.tasktitle}>
                      Custom Roles & Permissions
                    </span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.boxesflex1}>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.desktop} src={desktop} />
                    </span>
                    <span className={styles.tasktitle}>Assets</span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.documents} src={documentsout} />
                    </span>
                    <span className={styles.tasktitle}>Documents</span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.boxesflex1}>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.airplane} src={airplane} />
                    </span>
                    <span className={styles.tasktitle}>Leave Managements</span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
                <div className={styles.task}>
                  <div className={styles.mainhead}>
                    <span className={styles.hashimg}>
                      <img className={styles.dollar} src={dollar1} />
                    </span>
                    <span className={styles.tasktitle}>Payroll</span>
                  </div>
                  <div className={styles.taskdata}>
                    <p>
                      <span className={styles.greenbar}>
                        <img src={greenbar} />
                      </span>
                      <span className={styles.taskcompletion}>6 / 7 Tasks</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", marginTop: "16px" }}>
                    <span className={styles.assignowner}>+ Assign Owner</span>
                    <span className={styles.dateandtime}>
                      <img className={styles.thunder} src={thunder} />
                      Jun 23, 2023, 4:09 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pendingdata}>
              <div className={styles.pending1}>
                <span>Pending Data Uploads</span>
                <span>(1 to 16)</span>
              </div>
              <div className={styles.pending2}>
                <span>Import Exited Employees Details</span>
                <span>Due on Jun 08</span>
              </div>
              <div className={styles.pending3}>
                <span>+ Assign Owner</span>
                <span>(95 Days Delay)</span>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Summary;
