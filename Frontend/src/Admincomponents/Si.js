import React from "react";
import "../AdminStyle/sidebar.css";
import { Link } from "react-router-dom";
import { removeAuthUser, getAuthUser } from "../helper/Storage";
import Axios from "axios";
const s = () => {
  const auth = getAuthUser();
  const logout = async () => {
    await Axios.put("http://localhost:4000/auth/logout/" + auth.id);

    removeAuthUser();
  };
  return (
    <div>
      <div class="sidebar open">
        <div class="logo-details">
          <i class="bx bxl-c-plus-plus icon"></i>
          <div class="logo_name">Bus Booking</div>
          <i class="bx bx-menu-alt-right" id="btn"></i>
        </div>
        <ul class="nav-list">
          <li>
            <Link to="/manageappoint">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Appointments</span>
            </Link>
          </li>

          <li>
            <Link to="/managetrav">
              <i class="bx bx-user"></i>
              <span class="links_name">Travelers</span>
            </Link>
          </li>
          <li>
            <Link to="/requests">
              <i class="bx bx-chat"></i>
              <span class="links_name">Requests</span>
            </Link>
          </li>
          <li class="profile">
            <div class="profile-details">
              <div class="name_job">
                <div>
                  {auth && (
                    <Link to="/login" onClick={logout}>
                      <div
                        id="sign"
                        class="butto"
                        style={{ backgroundColor: "#1d1b31" }}
                      >
                        {" "}
                        logout
                      </div>
                    </Link>
                  )}
                  {!auth && (
                    <Link
                      to="/login"
                      class="butto"
                      style={{ backgroundColor: "#1d1b31" }}
                    >
                      {" "}
                      <div id="sign"> login</div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default s;
