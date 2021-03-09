import React, { useState } from 'react'

function Navbar({onMakeCard}) {
    

        function handleSubmit(e) { 
            e.preventDefault()
        }

        return (
        <>
            <form className="header" onSubmit={handleSubmit}>
            <button onClick={onMakeCard} className="addCardButton">Make A Flashcard</button>
            <div className="form-group"></div>
                {/* <label htmlform="ages">Ages</label>
                <select id="ages" ></select> */}
            </form>

            <div>
            
                
            </div>
        </>
        )
    }
export default Navbar;
