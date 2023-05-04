import React from "react";
import "../UserStyle/Ticket.css";
import { getAuthUser } from "../helper/Storage";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Ticket = (props) => {
  var id;
  const user = getAuthUser();
  const navigate = useNavigate();
  const request = () => {
    if (user) {
      id = user.id;
      Axios.post("http://localhost:4000/request/create/" + props.id + "/" + id);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="wrappers">
      <h2>{props.to_where} Ticket</h2>
      <hr />
      <h3>From : {props.from_where}</h3>
      <hr />
      <h3>To : {props.to_where}</h3>
      <hr />
      <h3>Ticket Price : {props.ticket_price}</h3>
      <hr />
      <h3>Day and Time : {props.day_and_time}</h3>

      <botton id="request" onClick={request}>
        Reqest
      </botton>
    </div>
  );
};

export default Ticket;
