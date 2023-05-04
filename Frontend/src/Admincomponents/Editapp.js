import React, { useState, useEffect } from "react";
import "../AdminStyle/EditTrav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";

const Editapp = ({ id }) => {
  const auth = getAuthUser();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Fetch the data using axios and update the state
    axios
      .get(`http://localhost:4000/appointments/getone/${id}`)
      .then((response) => {
        console.log(response);
        setFormData(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    // Update the data using axios
    axios
      .put(`http://localhost:4000/appointments/${id}`, formData, {
        headers: {
          token: auth.token,
        },})
      .then((response) => {
        console.log(response.data);
        // Reset the form fields
        // setFrom("");
        // setTo("");
        // setTicketPrice("");
        // setDayAndTime("");
        // Hide the edit form
        hideEdit();
      })
      .catch((error) => console.log(error));
  }

  function hideEdit() {
    var x = document.getElementById("editapp");
    x.style.display = "none";
  }

  return (
    <div id="editapp" style={{ top: "0px", position: "fixed", left: 0 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header headadd">
              <h4 className="modal-title">Edit Appointments</h4>
              <button
                type="button"
                className="close btnx"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={hideEdit}
              >
                &times;
              </button>
            </div>
            <hr />
            <div className="modal-body ">
              <div className="form-group bodyadd">
                <label>From</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.from_where || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, from_where: e.target.value })
                  }
                />
              </div>
              <div className="form-group bodyadd">
                <label>To</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.to_where || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, to_where: e.target.value })
                  }
                />
              </div>
              <div className="form-group bodyadd">
                <label>Ticket price</label>
                <textarea
                  className="form-control"
                  required
                  value={formData.ticket_price || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, ticket_price: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="form-group bodyadd">
                <label>Day and time</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  value={formData.day_and_time || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, day_and_time: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="modal-footer footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel "
                onClick={hideEdit}
              />
              <input type="submit" className="btn btn-info" value="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editapp;
