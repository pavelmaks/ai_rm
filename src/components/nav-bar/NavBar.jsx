import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './nav-bar.css'

const NavBar = props => {
    console.log(props)
    return (
        <header class="header">
            <div class="container">
                <div class="header__logo logo">
                    AI Road Marking
                </div>
                <ul class="header__menu menu">
                    <li class="menu__item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                            isActive ? 'menu__href menu__href--active' : 'menu__href'}
                        >
                            Распознавание
                        </NavLink>
                    </li>
                    <li class="menu__item">
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