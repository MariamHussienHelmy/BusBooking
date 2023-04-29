import React from "react";
import Si from "./Si";
import "../AdminStyle/Request.css";
import Axios from "axios";
import { getAuthUser } from "../helper/Storage";
import { useState, useEffect } from "react";
const Requests = () => {
  const auth = getAuthUser();
  const [request, setrequest] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setrequest({ ...request, loading: true });
    Axios.get("http://localhost:4000/request/all")
      .then((resp) => {
        console.log(resp);
        setrequest({
          ...request,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setrequest({
          ...request,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [request.reload]);

  const completed = (id) => {
    const count = Axios.get(
      "http://localhost:4000/request/counttravlers/" + id
    );

    return count;
  };
  const max = (id) => {
    const count = Axios.get("http://localhost:4000/request/maxtravlers/" + id);
    return count;
  };
  const check = (id) => {
    if (completed(id) >= max(id)) {
      console.log(completed(id));

      return true;
    } else {
      return false;
    }
  };

  const accept = (id) => {
    const count = completed(id);
    const maxNumber = max(id);

    if (count >= maxNumber) {
      Axios.put("http://localhost:4000/request/complete/" + id, {
        headers: {
          token: auth.token,
        },
      });
    } else {
      Axios.put("http://localhost:4000/request/accept/" + id, {
        headers: {
          token: auth.token,
        },
      });
    }
  };

  const reject = (id) => {
    Axios.put("http://localhost:4000/request/decline/" + id);
  };
  return (
    <>
      <Si />

      <div
        class="container-xl "
        id="tble"
        style={{
          top: "30px",
          left: 300,
          position: "fixed",
          width: 1200,
        }}
      >
        <div>
          <div class="table-wrapper ">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>
                    Manage <b>Requests</b>
                  </h2>
                </div>
              </div>
            </div>

            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Traveler</th>
                  <th>From</th>
                  <th>To</th>

                  <th>Day and Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {request.results.map((t) => (
                  <tr>
                    <td>{t.email}</td>
                    <td>{t.from_where}</td>
                    <td> {t.to_where}</td>
                    <td>{t.day_and_time}</td>
                    <td>{t.status}</td>
                    <td>
                      <td>
                        <div class="btns">
                          {!check(t.appid) && (
                            <input
                              type="submit"
                              class="btn btn-success"
                              value="Accept"
                              onClick={() => accept(t.id)}
                            />
                          )}
                          {check(t.appid) && (
                            <input value="Completed" disabled />
                          )}

                          <input
                            type="submit"
                            class="btn btn-danger"
                            value="reject"
                            onClick={() => reject(t.id)}
                          />
                        </div>
                      </td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
