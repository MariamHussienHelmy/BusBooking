import React from 'react';
import "../UserStyle/Header.css";
import { Link } from 'react-router-dom';
import Axios from "axios";
export const word = async () => {
    let status = await Axios.get("http://localhost:8080/auth/isactive");
    var sign = document.getElementById("sign");
    let stat = status.data.status + '';
    if (stat == "active") {
        if (sign) {
            sign.innerHTML = "logout";
        }

    }
    else if (stat == "inactive") {
        if (sign) {
            sign.innerHTML = "login";
        }
    }
    // console.log(sign.innerHTML)
}
const Header = () => {

    const logout = async () => {
        await Axios.put("http://localhost:8080/auth/logout");
        localStorage.clear();
        word();
    };



    word();
    return (
        <header>
            <div class="inner-width">
                <h1 class="logo">Bus Ticket</h1>
                <i class="menu-toggle-btn fas fa-bars"></i>
                <nav class="navigation-menu">
                    <Link to="/tickets">Tickets</Link>
                    <Link to="/profile"> Profile </Link>

                    <Link to="/login" onClick={(logout)} ><div id="sign"> logout</div></Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
