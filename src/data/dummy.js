import { RiHomeSmile2Line, RiAppsLine } from 'react-icons/ri'
import { MdOutlineMailOutline } from 'react-icons/md'
import { LuUsers, LuClock3 } from 'react-icons/lu'
import * as RiIcons from "react-icons/ri";
import { GoOrganization } from 'react-icons/go'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { SlUser } from 'react-icons/sl'
import { BsBriefcase, BsCalendar4Week } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import bankOutlineIcon from '../svgIcons/mdi_bank_outline.svg';
import fluentPeopleTeam from '../svgIcons/fluent_people-team-28-regular.svg';
import organizationCharm from '../svgIcons/charm_organisation.svg'
import userMeIcon from '../svgIcons/User.svg';
import envelopIcon from '../svgIcons/Envelope.svg';
import payrollIcon from '../svgIcons/iconoir_hand-cash.svg'
import performanceIcon from '../svgIcons/tabler_activity.svg';
import userIcon from '../svgIcons/clarity_employee-group-line.svg';
import projectManagentIcon from '../svgIcons/basil_bag-outline.svg'
import timeAttendIcon from '../svgIcons/Group.svg';
import clientIcon from '../svgIcons/Vector-2.svg'
import invoiceIcon from '../svgIcons/Vector-3.svg';
import pendingInvoiceIcon from '../svgIcons/Vector-1.svg';
import accountIcon from '../svgIcons/tabler_cash.svg'

export const Sidelinks = [
  {
    title: "Dashboard",

    links: [
      {
        id: 1,
        name: "home",
        title: "Home",
        permission: [{ role: 'ROLE_USER' }, { role: 'ROLE_ADMIN' }],
        icon: <RiHomeSmile2Line />,
        link: "/",// /welcome
      },
    ],
  },

  {
    title: "APPS & PAGES",
    links: [
      {
        id: 2,
        name: "me",
        title: "Me",
        permission: [{ role: 'ROLE_USER' }, { role: 'ROLE_ADMIN' }],
        icon: <div style={{ marginTop: '0.5rem' }}> <img src={userMeIcon} alt="me Icon" />  </div>,
        link: "/me",
        //  <User  />,
        sublinks: [
          {
            id: 1,
            name: "leave",
            title: "Leave",
            permission: [{ role: 'ROLE_USER' }, { role: 'ROLE_ADMIN' }],
            link: "/me/leave",
          },
          {
            id: 2,
            name: "attendance",
            title: "Attendance",
            permission: [{ role: 'ROLE_USER' }, { role: 'ROLE_ADMIN' }],
            link: "/me/attendance",
          },
        ],
      },
      {
        id: 3,
        name: "inbox",
        title: "Inbox",
        permission: [{ role: 'ROLE_ADMIN' }, { role: 'ROLE_USER' }],
        iconClosed: <div> <img src={envelopIcon} alt="me Icon" />  </div>,
        iconOpened: <div> <img src={envelopIcon} alt="me Icon" />  </div>,
        submenuOpen: false, // Flag to control the submenu display
        sublinks: [
          {
            id: "1",
            name: "email",
            title: "Email",
            link: "/inbox/email",
          },
          {
            id: "2",
            name: "chat",
            title: "Chat",
            link: "/inbox/chat",
          },
        ],
        link: "/email/inbox",
        icon: <MdOutlineMailOutline />,
      },

      {
        id: 4,
        name: "myteam",
        title: "My Team",
        permission: [{ role: 'ROLE_USER' }, { role: 'ROLE_ADMIN' }],
        icon: <div> <img src={fluentPeopleTeam} alt="Bank Outline Icon" />  </div>,
        link: "/myTeam",
      },
      {
        id: 5,
        name: "myfinances",
        title: "My Finances",
        permission: [{ role: 'ROLE_ADMIN' }, { role: 'ROLE_USER' }],
        // icon: <Landmark  />,
        icon: <div> <img src={bankOutlineIcon} alt="Bank Outline Icon" />  </div>,
        link: "/myfinance/summary",
      },
      {
        id: 6,
        name: "org",
        title: "Organization",
        permission: [ { role: 'ROLE_ADMIN' }],
        icon: <div> <img src={organizationCharm} alt="org Icon" />  </div>,
        link: "/organization",
      },
      {
        id: 7,
        name: "performance",
        title: "Performance",
        permission: [{ role: 'ROLE_USER' },{ role: 'ROLE_ADMIN' }],
        link: "/performance",
        icon: <div> <img src={performanceIcon} alt="Performance Icon" />  </div>,
      },
      {
        id: 8,
        name: "projectManagent",
        title: "Project Managent",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={projectManagentIcon} alt="Performance Icon" />  </div>,
        link: "/projectManagent",
      },
      {
        id: 9,
        name: "timeAttendance",
        title: "Time & Attendance",
        permission: [{ role: 'ROLE_USER' },{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={timeAttendIcon} alt="Bank Outline Icon" />  </div>,
        link: "/timeAttendance",
      },
      {
        id: 10,
        name: "payroll",
        title: "Payroll",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={payrollIcon} alt="Bank Outline Icon" />  </div>,
        link: "/payroll",
      },
      {
        id: 11,
        name: "users",
        title: "User",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={userIcon} alt="Bank Outline Icon" />  </div>,
        link: "/users",
      },
      {
        id: 15,
        name: "accounts",
        title: "Accounts",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <LuUsers />,
        // submenuOpen: false, // Flag to control the submenu display
        link: "/accounts/addAccount",
        // submenu: [
        //   {
        //     id: "1",
        //     name: "addAccount",
        //     title: "Add Account",
        //     linkto: "/accounts/addAccount",
        //   },
        // ],
        // link: "",
        //   icon:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        //   <path d="M9.13974 17.8956C4.38204 17.8956 0.525391 14.0389 0.525391 9.28122C0.525391 4.52352 4.38204 0.66687 9.13974 0.66687C13.8975 0.66687 17.7541 4.52352 17.7541 9.28122C17.7541 14.0389 13.8975 17.8956 9.13974 17.8956ZM9.13974 16.1727C10.9675 16.1727 12.7204 15.4466 14.0128 14.1542C15.3052 12.8618 16.0312 11.109 16.0312 9.28122C16.0312 7.45349 15.3052 5.70061 14.0128 4.40821C12.7204 3.11581 10.9675 2.38974 9.13974 2.38974C7.31201 2.38974 5.55913 3.11581 4.26673 4.40821C2.97433 5.70061 2.24826 7.45349 2.24826 9.28122C2.24826 11.109 2.97433 12.8618 4.26673 14.1542C5.55913 15.4466 7.31201 16.1727 9.13974 16.1727ZM10.0012 9.28122H13.4469V11.0041H8.27831V4.97405H10.0012V9.28122Z" fill="#6D6976"/>
        // </svg>
      },
      {
        id: 12,
        name: "account",
        title: "Account",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={accountIcon} alt="Bank Outline Icon" />  </div>,
        link: "/accounts/getAccount",
      },
      {
        id: 13,
        name: "apps",
        title: "Apps",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <RiAppsLine />,
        link: "/apps",
      },
      {
        id: 14,
        name: "clients",
        title: "Clients",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={clientIcon} alt="client Icon" />  </div>,
        link: "/clients",
      },
      {
        id: 15,
        name: "invoices",
        title: "Invoices",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={invoiceIcon} alt="Bank Outline Icon" />  </div>,
        link: "/invoice",
      },
      {
        id: 16,
        name: "pendingInvoice",
        title: "Pending Invoices",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={pendingInvoiceIcon} alt="Bank Outline Icon" />  </div>,
        link: "/pendingInvoice",
      },
      {
        id: 17,
        name: "hrportal",
        title: "Hr Portal",
        permission: [{ role: 'ROLE_ADMIN' }],
        icon: <div> <img src={pendingInvoiceIcon} alt="Hr Portal Icon" />  </div>,
        link: "/hrportal",
      },
    ],
  },
];