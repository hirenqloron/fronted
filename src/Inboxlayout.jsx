import React from 'react'
import Email from './pages/Inbox/Email/Email';
import Searchbar from "./pages/Inbox/Email/Searchbar";
import { Outlet } from 'react-router-dom';
import "./App.css";
const Inboxlayout = () => {
  return (
    <div className='emaillayout'>
     <Email/>
        <div className='searchbar'>
           <Searchbar/>
            <div>
                 <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Inboxlayout