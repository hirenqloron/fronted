import React,{useState} from 'react';
import './Appcomponenet .css'; // Import your component's CSS file for styling

const AppComponent = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <div className={`toggle-container ${darkMode ? 'dark-mode' : ''}`}>
        <button className="toggle-button" onClick={toggleMode}>
          Toggle Mode
        </button>
      </div>
    );
  }


export default AppComponent;
