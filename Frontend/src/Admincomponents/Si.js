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
      <div className="sidebar open">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon"></i>
          <div className="logo_name">Bus Booking</div>
          <i className="bx bx-menu-alt-right" id="btn"></i>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/manageappoint">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Appointments</span>
            </Link>
          </li>

          <li>
            <Link to="/managetrav">
              <i className="bx bx-user"></i>
              <span className="links_name">Travelers</span>
            </Link>
          </li>
          <li>
            <Link to="/requests">
              <i className="bx bx-chat"></i>
              <span className="links_name">Requests</span>
            </Link>
          </li>
          <li className="profile">
            <div className="profile-details">
              <div className="name_job">
                <div>
                  {auth && (
                    <Link to="/login" onClick={logout}>
                      <div
                        id="sign"
                        className="butto"
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
                      className="butto"
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
