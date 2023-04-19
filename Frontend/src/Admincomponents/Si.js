import React from 'react';
import "../AdminStyle/sidebar.css";
import { Link } from 'react-router-dom';
const s = () => {
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
                                <div > <Link to="/login">
                                        <button class="butto" style={{ backgroundColor: "#1d1b31" }}>Log
                                            out</button>
                                    </Link></div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default s;
