import React from 'react';
import './module.menu.css'

 const Header = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="menu--item">
                    <a className="menu--item_link" href="/Info">Info</a>
                </li>
                <li className="menu--item">
                    <a className="menu--item_link" href="/Contacts">Contacts</a>
                </li>

            </ul>
        </nav>
    )
}


export default Header;