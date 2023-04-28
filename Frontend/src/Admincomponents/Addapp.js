import React, { useState } from "react";
import axios from "axios";
import "../AdminStyle/AddTrav.css";
import "../AdminStyle/Addapp.css";

const Addapp = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [ticket_price, setPrice] = useState("");
  const [day_and_time, setTime] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/appointments/create", {
        from,
        to,
        ticket_price,
        day_and_time,
      });
      console.log("Appointment created successfully!");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const hide = () => {
    const x = document.getElementById("addapp");
    x.style.display = "none";
  };

  const reset = () => {
    setFrom("");
    setTo("");
    setPrice("");
    setTime("");
  };

  return (
    <div
      id="addapp"
      style={{
        top: "0px",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={onSubmit}>
            <div className="modal-header headadd">
              <h4 className="modal-title">Add Appointments</h4>
              <button
                type="button"
                className="close btnx"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={hide}
              >
                ×
              </button>
            </div>
            <hr />
            <div className="modal-body">
              <div className="form-group bodyadd">
                <label>From</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div className="form-group bodyadd">
                <label>To</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
              <div className="form-group bodyadd">
                <label>Ticket price</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={ticket_price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group bodyadd">
                <label>Day and time</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  value={day_and_time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer footeradd">
              <button
                type="button"
                className="btn btn-default"
                // data-dismiss="modal"
                // value="Cancel"
                onClick={hide}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success"
                // value="Add"
                onClick={hide}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addapp;
