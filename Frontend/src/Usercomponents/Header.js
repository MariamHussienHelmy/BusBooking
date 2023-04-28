import React from "react";
import "../UserStyle/Header.css";
import { Link } from "react-router-dom";
import { removeAuthUser, getAuthUser } from "../helper/Storage";
import Axios from "axios";
const Header = () => {
  const auth = getAuthUser();
  const logout = async () => {
    await Axios.put("http://localhost:4000/auth/logout/" + auth.id);

    removeAuthUser();
  };

  return (
    <header>
      <div class="inner-width">
        <h1 class="logo">Bus Ticket</h1>
        <i class="menu-toggle-btn fas fa-bars"></i>
        <nav class="navigation-menu">
          <Link to="/tickets">Tickets</Link>
          {auth && <Link to="/profile"> Profile </Link>}

          {auth && (
            <Link to="/login" onClick={logout}>
              <div id="sign"> logout</div>
            </Link>
          )}
          {!auth && (
            <Link to="/login">
              {" "}
              <div id="sign"> login</div>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
