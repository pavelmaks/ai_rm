import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './nav-bar.css'

const NavBar = props => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo logo">
                    AI Road Marking
                </div>
                <ul className="header__menu menu">
                    <li className="menu__item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                            isActive ? 'menu__href menu__href--active' : 'menu__href'}
                        >
                            Распознавание
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink 
                            to="/calibrate" 
                            className={({ isActive }) =>
                            isActive ? 'menu__href menu__href--active' : 'menu__href'}
                        >
                            Калибровка</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}


NavBar.propTypes = {}

export default NavBar