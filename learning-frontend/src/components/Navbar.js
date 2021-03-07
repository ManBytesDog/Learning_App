import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {

        function handleSubmit(e) { 
            e.preventDefault()
        }

        return (
        <>
            <form className="header" onSubmit={handleSubmit}>
            <div className="form-group"></div>
                <label htmlform="ages">Ages</label>
                <select id="ages" ></select>
            </form>

            <div>
            <h1></h1>
                
            </div>
        </>
        )
    }
}
