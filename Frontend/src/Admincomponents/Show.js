import React from "react";
import Si from "./Si";
import "../AdminStyle/Show.css";
import "../AdminStyle/ShowTicket.css";
import ShowTicket from "./ShowTicket";
import { useParams } from "react-router-dom";
const Show = () => {
  const { id } = useParams();
  return (
    <div>
      <Si />
      <div class="head">
        <h2>History of Requests</h2>
      </div>
      <ShowTicket id={id} />
    </div>
  );
};

export default Show;
