import React, { useState } from 'react'
import "./Header.css"
import Menu from './Menu/Menu'
import Hamburger from 'hamburger-react'


function Header() {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className="Header">
            <div onClick={() => setMenuActive(!menuActive)}> <p>Hamburger</p></div>
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
        </div>
    )
}

export default Header
