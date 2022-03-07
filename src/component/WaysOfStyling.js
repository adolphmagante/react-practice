import React from 'react'
import '../styles/WaysOfStyling.css'

const WaysOfStyling = () => {
    const internal = {
        height: "20px",
        width: "100%",
        backgroundColor: "gold"
    }

    return (
    <>
        {
            //Internal CSS
        }
            <div style={internal}>
                <p>Internal</p>
            </div>
        
        {
            //External CSS
        }
        
            <div className="external">
                <p>External</p>
            </div>

        {
            //External CSS ID
        }
        
            <div id="external">
                <p>External ID</p>
            </div>

        {
            //Inline CSS ID
        }
        
            <div style={{width: "100%", height: "20px", backgroundColor: "lightcyan"}}>
                <p>Inline ID</p>
            </div>
        
    </>
  )
}

export default WaysOfStyling

