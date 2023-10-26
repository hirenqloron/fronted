import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Elips from "../../../image/Ellipse.svg";
import Elips31 from "../../../image/Ellipse31.svg";
import Chip from "@mui/material/Chip";

import "./job.css";
import { colors } from "@mui/material";

const Job = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="grid-main">
      <div className="column-1">
        <div className="job-header">Job Profile</div>
        <Divider />
        <div className="">
          <div className="employ-no">
            EMPLOYEE NUMBER <span>DATE OF JOINING</span>
          </div>
          <div className="emoply-id">
            QT00000 <span>21 Aug, 2023</span>
          </div>

          <div className="job-primary">
            JOB TITLE - PRIMARY <span>JOB TITLE - SECONDARY</span>
          </div>
          <div className="job-primary-1">
            Software Developer<span>-Not Set-</span>
          </div>
          <div className="probation">
            IN PROBATION? <span>NOTICE PERIOD</span>
          </div>
          <div className="notic-period">
            Yes, 21 Aug, 2023 - 21 Nov, 2023 Qloron Technologies Probation
            Policy
            <span className="">Qloron technology Notice Period (3 Months)</span>
          </div>
          <div className="work-type">WORKER TYPE</div>
          <div className="parament">Permanent</div>
          <div className="bond">
            BAND
            <div className="not-set">-Not Set-</div>
          </div>
        </div>
      </div>
      <div className="column-2">
        <div className="job-header">Organization</div>
        <Divider />

        <div className="bussiness-unit">BUSINESS UNIT</div>
        <div className="bussiness-unit1">Qloron Private Limited</div>
        <div className="businee-unit2">DEPARTMENT</div>
        <div className="bussiness-unit3">Software Development</div>
        <div className="business-unit4">LOCATION</div>
        <div className="business-unit5">Hyderabad</div>
        <div className="bussiness-unit6">COST CENTER</div>
        <div className="busines-unit-7">-Not Set-</div>
        <div className="business-unit8">LEGAL ENTITY</div>
        <div className="business-unit9">Qloron Pvt. Ltd.</div>
        <div className="bussiness-unit10"> REPORTS TO</div>
        <div className="bussiness11">
          <img src={Elips} alt="" />
          <h1>
            Snehal Baraskar{" "}
           
          </h1>
          <div className="dot-div">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="bussiness-unit11">
          MANAGER OF MANAGER (L2 - MANAGER)
        </div>
        <div className="bussiness11">
          <img src={Elips31} alt="" />
          <h1>Nikhilesh Mandal </h1>
          <div className="dot-div">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <div className="column-3">
        <div className="job-header">Employee Time</div>
        <Divider />
        <div className="">
          <div className="employ-shift">
            SHIFT <span>WEEKLY OFF POLICY</span>
          </div>
          <div className="emoply-id2">
            Qloron technology Shift <span>Weekly off</span>
          </div>

          <div className="leave-plan">
            LEAVE PLAN <span>HOLIDAY CALENDAR</span>
          </div>
          <div className="job-primary-2">
            Qloron Technology Leave plan
            <span>Holidays for 2023 - Qloron Technology</span>
          </div>
          <div className="probation">ATTENDANCE NUMBER</div>
          <div className="notic-period">-Not Set-</div>

          <div className="disable-tracting">
            Disable attendance tracking{" "}
            <span>
              <Switch {...label} />
            </span>
          </div>
          <div className="Attendance-Schem">
            ATTENDANCE CAPTURE SCHEME <span>ATTENDANCE TRACKING POLICY</span>
          </div>
          <div className="shechme">
            Qloron technology Capture scheme <span>Qloron tracking policy</span>
          </div>
          <div className="shift-weekly">
            SHIFT WEEKLY OFF RULE <span>SHIFT ALLOWANCE POLICY</span>
          </div>
          <div className="shift-1">
            -Not Set- <span>-Not Set-</span>
          </div>
        </div>
      </div>
      <div className="column-4">
        <div className="job-header">Other</div>

        <Divider />

        <div className="employ-no">
          EXPENSE POLICY <span>LOAN POLICY</span>
        </div>
        <div className="emoply-id">
          -Not Set- <span>-Not Set-</span>
        </div>
      </div>
    </div>
  );
};

export default Job;
