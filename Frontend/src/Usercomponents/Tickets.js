import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Ticket from "./Ticket";
import Axios from "axios";
const Tickets = () => {
  const [ticket, setticket] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    setticket({ ...ticket, loading: true });
    Axios.get("http://localhost:4000/appointments/show", {
      params: {
        search: search,
      },
    })
      .then((resp) => {
        setticket({ ...ticket, results: resp.data, loading: false, err: null });
      })
      .catch((err) => {
        setticket({
          ...ticket,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [ticket.reload]);
  const searchMovies = (e) => {
    e.preventDefault();
    setticket({ ...ticket, reload: ticket.reload + 1 });
    console.log(search);
  };
  return (
    <div>
      <Header />
      <form onSubmit={searchMovies}>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      {ticket.results.map((t) => (
        <div key={t.id}>
          <Ticket
            from_where={t.from_where}
            to_where={t.to_where}
            ticket_price={t.ticket_price}
            day_and_time={t.day_and_time}
            id={t.id}
          />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Tickets;
