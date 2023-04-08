import React from 'react';
import "../UserStyle/User.css";
const User = () => {
    return (
        <div>
            <div class="all">
                <div class="card">
                    <img src={require('./avt.png')} />

                    <h2>John Doe</h2>

                    <h3>Contact:</h3>
                    <p> user1@gmail.com</p>
                    <p>+20223336</p>
                </div>
            </div>

        </div>
    );
};

export default User;