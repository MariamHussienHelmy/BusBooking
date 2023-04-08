import React from 'react';
import Si from "./Si";
import "../AdminStyle/Show.css";
import "../AdminStyle/ShowTicket.css";
import ShowTicket from './ShowTicket';
const Show = () => {
    return (
        <div>
            <Si />
            <div class="head">
                <h2>History of Requests</h2>
            </div>
            <ShowTicket />

        </div>

    );
};

export default Show;