import React from 'react';
import "../UserStyle/Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div class="inner-width">
                <h1 class="logo">Bus Ticket</h1>
                <i class="menu-toggle-btn fas fa-bars"></i>
                <nav class="navigation-menu">
                    <Link to="/tickets">Tickets</Link>
                    <Link to="/profile"> Profile </Link>

                    <Link to="/login"> Login</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;