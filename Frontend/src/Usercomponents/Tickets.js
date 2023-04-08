import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Filter from './Filter';
import Ticket from './Ticket';
const Tickets = () => {
    return (
        <div >
            <Header />
            <Filter />
            <Ticket />
            <Ticket />
            <Ticket />
            <Footer />
        </div>
    );
};

export default Tickets;