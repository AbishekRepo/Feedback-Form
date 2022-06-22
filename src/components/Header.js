import React from 'react'

function Header({text}) {

    const handleColors = {
        backgroundColor : "rgba(0,0,0,0.4)",
        color : "#ff6a95",
    }

  return (
    <div style={handleColors}>
       <div className='container'>
        <h2>{text}</h2>
       </div>  
    </div>
  )
}


Header.defaultProps = {
    text : "Feedback"
}

export default Header