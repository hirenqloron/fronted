import React, { useEffect, useState } from 'react';
import Profile from './components/profile/Profile';
import About from './about/about';
import User from "../UserProfile/User";
import Job from "../UserProfile/Job/Job"
import Document from "../UserProfile/Document/Document"
import { Assets } from '../UserProfile/Asset/Assets';
import IdCard from './components/profile/IdCard';
import CardId from './components/profile/cardId';


const Index = () => {
  const [componentName ,setComponentName] = useState('about')

  const handleRedirection = (name) => {
    setComponentName(()=>name)
  };

  return (
    <React.Fragment>
      <Profile handleRedirection={handleRedirection} componentName={componentName} />
      { componentName == 'about' && <About/>}
      { componentName == 'user' && <User/>}
      { componentName == 'job' && <Job/>}
      { componentName == 'doc' && <Document/>}
      { componentName == 'assets' && <Assets/>}
       {/* <IdCard/> */}
       {/* <CardId/> */}
    </React.Fragment>
  );
};

export default Index;





