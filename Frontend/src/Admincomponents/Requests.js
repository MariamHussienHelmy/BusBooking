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
        //console.log(resp); 
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
 
  const accept = (appid, reqid) => { 
 
    Axios.put("http://localhost:4000/request/accept/" + appid + "/" + reqid).then((resp) => { 
 
      setrequest({ ...request, loading: true, reload: request.reload + 1 }); 
 
    }) 
  }; 
 
  const reject = (id) => { 
    Axios.put("http://localhost:4000/request/decline/" + id); 
    setrequest({ ...request, loading: true, reload: request.reload + 1 }); 
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
                    Manage <b>Requests</b> 
                  </h2> 
                </div> 
              </div> 
            </div> 
 
            <table className="table table-striped table-hover"> 
              <thead> 
                <tr> 
                  <th>Traveler</th> 
                  <th>From</th> 
                  <th>To</th> 
 
                  <th>Day and Time</th> 
                  <th>Number of travelers</th> 
                  <th>Maxmium</th> 
                  <th>Status</th> 
                  <th>Actions</th> 
                </tr> 
              </thead> 
              <tbody> 
                {request.results.map((t) => ( 
                  <tr > 
                    <td>{t.email}</td> 
                    <td>{t.from_where}</td> 
                    <td> {t.to_where}</td> 
                    <td>{t.day_and_time}</td> 
                    <td>{t.number_of_traveler}</td> 
                    <td>{t.max_number_of_travelers}</td> 
 
                    <td>{t.status}</td> 
                    <td> 
                      <td> 
                        <div className="btns"> 
                          <input 
                            type="submit" 
                            className="btn btn-success" 
                            value="Accept" 
                            onClick={() => accept(t.appid, t.id)} 
                          /> 
                          <input 
                            type="submit" 
                            className="btn btn-danger" 
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