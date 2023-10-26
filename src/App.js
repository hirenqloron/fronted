// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Signup from "./auth/SignUp";
import Login from "./auth/LogIn";
import Welcome from "./pages/DashBoard/Welcome";
import Dashboard from "./pages/DashBoard/Dashboard";
import Layout from "./Layout";
import Index from "./pages/Profile";
import Me from "./pages/Me/Me";
import Attendance from "./pages/Me/Attendance/Attendance";
// import { Invoice } from "./pages/admin/Invoice";
import Incometax from "./pages/MyFinance/Incometax/Incometax";
import Summary from "./pages/MyFinance/Summary/Summary";
import Mysalary from "./pages/MyFinance/Mysalary/Mysalary";
import Mypay from "./pages/MyFinance/mypay/Mypay";
import ManageTax from "./pages/ManageTax/ManageTax";
import Organization from "./pages/admin/ORGANIZATION/Organization";
import AdminLayout from "./pages/admin/AdminLayout";
import MySettings from "./pages/MySettings/MySettings";
// import Chat from "./pages/Inbox/Chat/Chat";
import Sent from "./pages/Inbox/Email/Sent/Sent";
import Draft from "./pages/Inbox/Email/Drafts/Draft";
import Starred from "./pages/Inbox/Email/Starred/Starred";
import Spam from "./pages/Inbox/Email/Spam/Spam";
import Trash from "./pages/Inbox/Email/Trash/Trash";
import Inbox from "./pages/Inbox/Email/Inbox/Inbox";
import Inboxlayout from "./Inboxlayout";
import { Invoice } from "./pages/admin/invoice/Invoice";
import CreateInvoice from "./pages/admin/invoice/CreateInvoice/CreateInvoice";
import Chat from "./pages/Inbox/Chat/chats/Chat";
import Payroll from "./pages/admin/PAYROLL/Payroll";
import Contacts from "./pages/Inbox/Chat/contacts/Contacts";
import Conversation from "./pages/Inbox/Chat/conversation/Conversation";
import Start from "./pages/admin/Hrportal/Preboarding/start/Start";
import Home from "./pages/admin/Home/Home";
import Feature from "./pages/admin/Home/feautures/Feature";
import { Project } from "./pages/admin/projects/Project";
import AddProject from "./pages/admin/projects/AddProject/AddProject";
import ResetPass from "./auth/ResetPass";
import ForgotPass from "./auth/ForgotPass";
import AddAccount from "./pages/admin/Accounts/AddAccount/AddAccount";
import Otp from "./auth/Otp";
import Accounts from "./pages/admin/Accounts/AddAccount/accounts/Accounts";
import InvoicePdfView from "./pages/admin/invoice/InvoicePdfView";

const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      {/* <div className="App"> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/generateNewPassword" element={<ResetPass />} />
        <Route path="/forgotPassword" element={<ForgotPass />} />

        <Route element={<Layout />}>
          <Route path="/profile" element={<Index />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/me" element={<Me />} />
          <Route path="/me/attendance" element={<Attendance />} />
          <Route path="/myfinance/summary" element={<Summary />} />
          <Route path="/mypay/mysalary" element={<Mypay />} />
          <Route path="/mypay/payslips" element={<Mysalary />} />
          <Route path="/mypay/incometax" element={<Incometax />} />
          <Route element={<Inboxlayout />}>
            <Route path="/email/inbox" element={<Inbox />} />
            <Route path="/inbox/sent" element={<Sent />} />
            <Route path="/inbox/draft" element={<Draft />} />
            <Route path="/inbox/spam" element={<Spam />} />
            <Route path="/inbox/starred" element={<Starred />} />
            <Route path="/inbox/trash" element={<Trash />} />
          </Route>
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/contacts" element={<Contacts />} />
          <Route path="/chat/conversation" element={<Conversation />} />

          <Route path="/managetax" element={<ManageTax />} />
          <Route path="/settings" element={<MySettings />} />
          {/*INVOICE PATHS */}
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/invoice/create" element={<CreateInvoice />} />

          <Route path="/invoice/invoicePdf" element={<InvoicePdfView />} />
          {/* Project management Path */}
          <Route path="/projectManagent" element={<Project />} />
          <Route path="/projectManagent/addProject" element={< AddProject/>} />

          {/* Accounts Path */}
          <Route path="/accounts/addAccount" element={<AddAccount />} />
          <Route path="/accounts/getAccount" element={<Accounts/>} />

        </Route>
        
        <Route element={<AdminLayout />}>
          <Route path="/organization" element={<Organization />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/home" element={<Home />} />

          
        </Route>
        <Route path="/otp" element={<Otp/>} />

         {/* <Route path="/home/features" element={<Feature />} /> */}

        <Route path="/hrportal" element={<Start />} />
      </Routes>
      

      {/* </div> */}
    </Router>
    // </Provider>
  );
};

export default App;
