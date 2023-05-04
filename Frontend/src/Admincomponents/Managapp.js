import React, { useEffect, useState } from "react";
import Si from "./Si";
import "../AdminStyle/Mangeapp.css";
import Addapp from "./Addapp";
import Editapp from "./Editapp";
import Delete from "./Delete";
import "../AdminStyle/Addapp.css";
import "../AdminStyle/AddTrav.css";
import "../AdminStyle/EditTrav.css";
import "../AdminStyle/Editapp.css";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";

const Ma = () => {
  const auth = getAuthUser();
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/appointments/all`).then((res) => {
      setAppointment(res.data);
      console.log(res.data);
    });
  }, []);

  function display() {
    var x = document.getElementById("addapp");
    x.style.display = "block";
  }
  const [editId, setEditId] = useState(null);
  function displayedit(id) {
    setEditId(id);
    var x = document.getElementById("editapp");
    x.style.display = "block";
  }

  function displaydelete() {
    var x = document.getElementById("delete");
    x.style.display = "block";
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/appointments/${id}`,{
      headers: {
        token: auth.token,
      }}).then((res) => {
      setAppointment(
        appointment.filter((appointment) => appointment.id !== id)
      );
      console.log(res.data);
    });
  };

  return (
    <>
      <Si />

      <div
        className="container-xl "
        id="tble"
        style={{
          top: "30px",
          left: 300,
          position: "fixed",
          width: 1200,
        }}
      >
        <div>
          <div className="table-wrapper ">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Appointments </b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={display}
                  >
                    <i className="material-icons">&#xE147;</i> <span>Add</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Ticket Price</th>
                  <th>Day and Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointment.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.	from_where}</td>
                    <td>{appointment.to_where}</td>
                    <td>{appointment.ticket_price} EGP</td>
                    <td>{appointment.day_and_time}</td>
                    <td>
                      <a className="edit" data-toggle="modal">
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          onClick={() => displayedit(appointment.id)}
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a className="delete" data-toggle="modal">
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you wish to delete this appointment?"
                              )
                            )
                              handleDelete(appointment.id);
                          }}
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Addapp />
      <Editapp id={editId} />
      <Delete />
    </>
  );
};

export default Ma;
