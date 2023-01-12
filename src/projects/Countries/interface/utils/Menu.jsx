import React from 'react';
import { Link, NavLink, Outlet} from 'react-router-dom';

const Menu = () => {
    // active link state
    const [activeLink, setActiveLink] = React.useState(0);

    // active link style
    const activeLinkClass = "MenuButton MenuButtonActive";
    const inactiveLinkClass = "MenuButton";


    return (
        <div className="Menu">
            <NavLink className="MenuButton" to="/P1">Page 1</NavLink>
            <NavLink className="MenuButton" to="/P2">Page 2</NavLink>
            <NavLink className="MenuButton" to="/P3">Page 3</NavLink>
            <NavLink className="MenuButton" to="/P4">Page 4</NavLink>
        </div>
    )
}

export default Menu