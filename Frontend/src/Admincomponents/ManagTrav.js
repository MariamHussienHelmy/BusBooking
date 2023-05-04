import React, { useEffect, useState } from "react";
import "../AdminStyle/Table.css";
import Si from "./Si";
import Add from "./AddTrav";
import Edit from "./EditTrav";
import Delete from "./Delete";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";

const ManagTrav = () => {
  const auth = getAuthUser();
  function display() {
    const x = document.getElementById("add");
    x.style.display = "block";
  }
  const [editId, setEditId] = useState(null);
  function displayedit(id) {
    setEditId(id);
    const x = document.getElementById("edit");
    x.style.display = "block";
  }
  function displaydelete() {
    const x = document.getElementById("delete");
    x.style.display = "block";
  }
  const [traveler, setTraveler] = useState([]); //destructure usestate to set data as array
  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/traveler/${id}`,{
      headers: {
        token: auth.token,
      }}).then((res) => {
      setTraveler(traveler.filter((traveler) => traveler.id !== id));
      console.log(res.data);
    });
  };

  useEffect(() => {
    //usestate to store data && useeffect to get data every each request
    //axios to get api from db
    axios.get("http://localhost:4000/traveler/all").then((res) => {
      console.log("sucsess");
      setTraveler(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <Si />
      <head />
      <div
        class="container-xl "
        style={{
          top: "30px",
          left: 300,
          position: "fixed",
          width: 1200,
        }}
      >
        <div>
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>
                    Manage <b>Travelers </b>
                  </h2>
                </div>
                <div class="col-sm-6 btnadd">
                  <button class="btn btn-success" onClick={display}>
                    <i class="material-icons">&#xE147;</i> <span> Add</span>
                  </button>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>History of requests</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {traveler.map((traveler) => (
                  <tr key={traveler.id}>
                    <td>{traveler.name}</td>
                    <td>{traveler.email}</td>
                    <td>{traveler.phone}</td>
                    <td>
                      <Link to={`/show/${traveler.id}`}>
                        <button class="btn btn-success">Show</button>
                      </Link>
                    </td>

                    <td>
                      <a className="edit" data-toggle="modal">
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          onClick={() => displayedit(traveler.id)}
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
                                "Are you sure you wish to delete this traveler?"
                              )
                            )
                              handleDelete(traveler.id);
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
      <Add />
      <Edit id={editId} />
      <Delete />
    </div>
  );
};

export default ManagTrav;
