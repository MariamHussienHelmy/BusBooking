import "../AdminStyle/AddTrav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";

const Add = () => {
  const auth = getAuthUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/traveler/create",
        {
          name,
          email,
          phone,
          password,
        },
        {
          headers: {
            token: auth.token,
          }}
      );
      console.log("added succsefuly");
    } catch (err) {
      console.log(err);
    }
  };

  function hide() {
    const x = document.getElementById("add");
    x.style.display = "none";
  }

  return (
    <div
      id="add"
      style={{
        top: "0px",
        position: "fixed",
        left: 0,
      }}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form onSubmit={onSubmit}>
            <div class="modal-header headadd">
              <h4 class="modal-title">Add Traveler</h4>
              <button
                type="button"
                class="close btnx"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={hide}
              >
                &times;
              </button>
            </div>
            <hr />
            <div class="modal-body ">
              <div class="form-group bodyadd">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={nameChangeHandler}
                />
              </div>
              <div class="form-group bodyadd">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </div>
              <div class="form-group bodyadd">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  value={password}
                  onChange={passwordChangeHandler}
                />
              </div>
              <div class="form-group bodyadd">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  class="form-control"
                  value={phone}
                  onChange={phoneChangeHandler}
                />
              </div>
            </div>

            <div class="modal-footer footeradd">
              <button
                type="button"
                className="btn btn-default"
                // data-dismiss="modal"
                onClick={hide}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success" onClick={hide}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
