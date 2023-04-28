import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminStyle/EditTrav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const EditTrav = ({ id }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data using axios and update the state
    axios
      .get(`http://localhost:4000/traveler/getone/${id}`)
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
      .put(`http://localhost:4000/traveler/${id}`, formData)
      .then((response) => {
        console.log(response.data);
        // Hide the edit form
        hideEdit();
        // Navigate to the manage travelers page
        navigate("/managetrav", { state: { updated: true } });
      })
      .catch((error) => console.log(error));
  }

  function hideEdit() {
    var x = document.getElementById("edit");
    x.style.display = "none";
  }

  return (
    <div id="edit" style={{ top: "0px", position: "fixed", left: 0 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header headadd">
              <h4 className="modal-title">Edit Travelers</h4>
              <button
                type="button"
                className="close btnx"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={hideEdit}
              >
                ×
              </button>
            </div>
            <hr />
            <div className="modal-body ">
              <div className="form-group bodyadd">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group bodyadd">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group bodyadd">
                <label>Phone</label>
                <textarea
                  className="form-control"
                  required
                  value={formData.phone || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                ></textarea>
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

export default EditTrav;
