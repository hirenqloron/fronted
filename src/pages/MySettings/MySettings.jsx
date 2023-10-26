import React, { useEffect, useState } from 'react';
import SelectSettings from './Components/SelectSettings/SelectSettings';
import Account from './Components/Account/Account';
import Security from './Components/Security/Security';
import Billing from './Components/Billing/Billing';
import Connections from './Components/Connections/Connections';
import Notifications from './Components/Notifications/Notifications';



const MySettings = () => {
  const [componentName ,setComponentName] = useState('account')

  const handleRedirection = (name) => {
    setComponentName(()=>name)
  };

  return (
    <React.Fragment>
      <SelectSettings handleRedirection={handleRedirection} componentName={componentName} />
{componentName === "account" && <Account /> }
{componentName === "security" && <Security/> }
{componentName === "billing" && <Billing/> }
{componentName === "notifications" && <Notifications/> }
{componentName === "connections" && <Connections/> }
    </React.Fragment>
  );
};

export default MySettings;

