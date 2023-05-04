import React from "react";
import "../UserStyle/User.css";
import { getAuthUser } from "../helper/Storage";
const User = () => {
  const user = getAuthUser();
  const name = user.name;
  const email = user.email;
  const phone = user.phone;
  return (
    <div>
      <div className="all">
        <div className="card">
          <img className="avatar" src={require("./avt.png")} />

          <h2>{name}</h2>

          <h3>Contact:</h3>
          <p> {email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
