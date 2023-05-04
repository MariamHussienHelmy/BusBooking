import React, { useEffect, useState } from "react";
import "../AdminStyle/ShowTicket.css";
import axios from "axios";
const ShowTicket = (props) => {
  const [ticket, setTicket] = useState([]);
  console.log(props.id);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/request/history/${props.id}`)
      .then((res) => {
        setTicket(res.data);
        console.log(res.data);
      });
  });
  return (
    <>
      {ticket.map((ticket) => (
        <div className="wrappers">
          <h2>ticket name</h2>
          <hr />
          <h3>From :{ticket.from_where}</h3>
          <hr />
          <h3>To : {ticket.to_where}</h3>
          <hr />
          <h3>Ticket Price : {ticket.ticket_price} EGP</h3>
          <hr />
          <h3>Day and Time : {ticket.day_and_time}</h3>
          <br />
        </div>
      ))}
    </>
  );
};

export default ShowTicket;
