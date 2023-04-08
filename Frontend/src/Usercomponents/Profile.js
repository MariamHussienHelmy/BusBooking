import React from 'react';
import Header from '../Usercomponents/Header';
import Footer from '../Usercomponents/Footer';
import User from '../Usercomponents/User';
import HistoryTickets from '../Usercomponents/HistoryTickets';
const Profile = () => {
    return (
        <div>
            <Header />
            <User />
            <HistoryTickets />

            <Footer />
        </div>
    );
};

export default Profile;