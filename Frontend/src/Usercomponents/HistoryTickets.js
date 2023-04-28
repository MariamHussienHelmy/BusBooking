import React from "react";
import "../UserStyle/HistoryTickets.css";
import { getAuthUser } from "../helper/Storage";
import { useState, useEffect } from "react";
import Axios from "axios";
const HistoryTickets = () => {
  const user = getAuthUser();
  const id = user.id;
  //  /history/:id
  const [history, sethistory] = useState({
    loading: true,
    results: [],
    err: null,
  });

  useEffect(() => {
    sethistory({ ...history, loading: true });
    Axios.get("http://localhost:4000/request/history/" + id)
      .then((resp) => {
        console.log(resp);
        sethistory({
          ...history,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        sethistory({
          ...history,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, []);

  return (
    <>
      {history.results.map((t) => (
        <div class="wrappers">
          <h2>{t.to_where} ticket</h2>
          <hr />
          <h3>From : {t.from_where}</h3>
          <hr />
          <h3>To : {t.to_where}</h3>
          <hr />
          <h3>Ticket Price : {t.ticket_price} EGP</h3>
          <hr />
          <h3>Day and Time : {t.day_and_time}</h3>
          <button id="accept">{t.status}</button>
        </div>
      ))}
    </>
  );
};

export default HistoryTickets;
