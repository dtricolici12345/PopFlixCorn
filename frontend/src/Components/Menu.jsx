import React from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.css';






export default function Menu() {
    return (

        <div className="menu">
            <NavLink to="/filter" className="menu-item" activeClassName="active">
                <img src="src\assets\filter.png" alt="Filter" />
            </NavLink>



            <NavLink to="/checklist" className="menu-item" activeClassName="active">
                <img src="src\assets\checklist.png" alt="CheckList" />
            </NavLink>


            <NavLink to="/game" className="menu-item" activeClassName="active">
                <img src="src\assets\game.png" alt="Game" />
            </NavLink>


            <NavLink to="/shope" className="menu-item" activeClassName="active">
                <img src="src\assets\shope.png" alt="Shope" />
            </NavLink>


            <NavLink to="/aboutus" className="menu-item" activeClassName="active">
                <img src="src\assets\aboutus.png" alt="AboutUs" />
            </NavLink>

        </div>

    );
};