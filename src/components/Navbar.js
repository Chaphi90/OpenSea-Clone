import React from 'react'

function Navbar() {
    return (
        <div className="navbar">
            <img id="logo" src="https://opensea.io/static/images/logos/opensea.svg" alt="opensea-logo"/>
            <h4 id="navbar-title">OpenSea</h4>
            <input id="search" type="text" placeholder="Search OpenSea"></input>
            <div className="tabs">
                <p>Explore</p>
                <p>Stats</p>
                <p>Resources</p>
                <p>Create</p>
            </div>
        </div>
    )
}

export default Navbar

