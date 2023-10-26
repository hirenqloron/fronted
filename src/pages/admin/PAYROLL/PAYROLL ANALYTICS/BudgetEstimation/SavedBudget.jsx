import React from 'react'
import measureClockTime from "../../../../../svgIcons/measureClockTime.svg"

const contextStyle={
color:'#C9C9C9',
textAlign: "center",
}
const divMainSavedBudget = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    height:'63vh' //'100vh' Full viewport height
  };
  

  
function SavedBudget() {
  return (
      <div style={divMainSavedBudget}>
          <img src={measureClockTime} alt='measureClockTime' />
          <p style={contextStyle}>Currently there are no reports here. Once budget estimataions are
              <br />
              saved, they will show up here.</p>
      </div>
  )
}

export default SavedBudget