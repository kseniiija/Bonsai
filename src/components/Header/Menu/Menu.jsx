import React from 'react'
import "./Menu.css"

function Menu({ menuActive, setMenuActive }) {

    return (
        <div className={`Menu${menuActive ? " visible" : ""}`}>
            <ul>
                <li>Home</li>
                <li>Bonsai knowledge</li>
                <li>Offering</li>
                <li>Blog</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
            <span onClick={() => setMenuActive(false)}>close</span>
        </div>
    )
}

export default Menu
