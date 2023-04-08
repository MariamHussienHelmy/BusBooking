import React from 'react';
import "../UserStyle/Ticket.css";
const Ticket = () => {
    return (
        <div class="wrappers">
            <h2>Cairo ticket</h2>
            <hr />
            <h3>From : Alexandria</h3>
            <hr />
            <h3>To : Cairo</h3>
            <hr />
            <h3>Ticket Price : 200 EGP</h3>
            <hr />
            <h3>Day and Time : 21/9 5:00 PM</h3>

            <botton id="request">Reqest</botton>
        </div>
    );
};

export default Ticket;