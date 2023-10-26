
import React, { useState } from 'react';
import styleBudget from './BudgetEstimation.module.css';
import triangleSvg from '../../../../../svgIcons/mdi_arrow-drop-up.svg';
import NewBudget from './NewBudget';
import SavedBudget from './SavedBudget';

function BudgetEstimation() {
    const [activeTab, setActiveTab] = useState('new'); 
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return (
        <div>
        <div className={styleBudget.mainDashBar}>
          <p
            className={activeTab === 'new' ? styleBudget.navbarActive : styleBudget.navbar}
            onClick={() => handleTabClick('new')}
          >
            New Budget
            {activeTab === 'new' && <img src={triangleSvg} alt='activeTab' className={styleBudget.iconTri} />}
          </p>
          <p
            className={activeTab === 'saved' ? styleBudget.navbarActive : styleBudget.navbar}
            onClick={() => handleTabClick('saved')}
          >
            Saved Budget Reports
            {activeTab === 'saved' && <img src={triangleSvg} alt='activeTab' className={styleBudget.iconTri1} />}
          </p>
        </div>
  
        <div className={styleBudget.tab1}>
          {activeTab === 'new' && <NewBudget />}
          {activeTab === 'saved' && <SavedBudget />}
        </div>
      </div>
        
    )
}

export default BudgetEstimation