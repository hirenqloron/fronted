import React, { useState } from 'react'
import styled from './payrollAnalytics.module.css'
import Analytics from './AnalyticsSec/Analytics'
import CompensationPlanning from './Compensation Planning/CompensationPlanning'
import CompareComStat from './Compare Compensation Stat/CompareComStat'
import BudgetEstimation from './BudgetEstimation/BudgetEstimation'
import EmployeeCompetitiveness from './EmployeeCompetitiveness/EmployeeCompetitiveness'
import GeographicalDifferences from './GeographicalDifferences/GeographicalDifferences'

const PatrollAnalytics = () => {
    const [activeComponent, setActiveComponent] = useState('Analytics');

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };
    const isActiveTab = (tabName) => activeComponent === tabName;

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'Analytics':
                return <Analytics />;
            case 'Budget Estimation':
                return <BudgetEstimation />;
                case 'Compensation Planning':
                  return <CompensationPlanning />;
              case 'Compare Compensation Stat':
                return <CompareComStat />;
              case 'Employee Competitiveness':
                return <EmployeeCompetitiveness />;
              case 'Geographical Differences':
                return <GeographicalDifferences />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className={styled.mainDashBar}>
                <p 
                 className={`${styled.navbar} ${isActiveTab('Analytics') ? styled.activeTab : ''}`}
                    onClick={() => handleComponentChange('Analytics')}
                >Analytics</p>
                <p  className={`${styled.navbar} ${isActiveTab('Compensation Planning') ?  styled.activeTab  : ''}`}
                  onClick={() => handleComponentChange('Compensation Planning')} >Compensation Planning</p>
                
                <p  className={`${styled.navbar} ${isActiveTab('Budget Estimation') ?  styled.activeTab  : ''}`}
                 
                    onClick={() => handleComponentChange('Budget Estimation')}
                > Budget Estimation</p>
                <p  className={`${styled.navbar} ${isActiveTab('Compare Compensation Stat') ?  styled.activeTab  : ''}`}
                  onClick={() => handleComponentChange('Compare Compensation Stat')}>Compare Compensation Stat</p>
                <p  className={`${styled.navbar} ${isActiveTab('Employee Competitiveness') ?  styled.activeTab  : ''}`}
                  onClick={() => handleComponentChange('Employee Competitiveness')} >Employee Competitiveness</p>
                <p  className={`${styled.navbar} ${isActiveTab('Geographical Differences') ?  styled.activeTab  : ''}`}
                  onClick={() => handleComponentChange('Geographical Differences')}>Geographical Differences</p>
            </div>
            <div>
                {renderActiveComponent()}
            </div>
        </>
    )
}

export default PatrollAnalytics