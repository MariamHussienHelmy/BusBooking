import React from 'react';
import "../AdminStyle/AddTrav.css";
import "../AdminStyle/Addreq.css";

const Addreq = () => {
    function hide() {
        var x = document.getElementById("addreq");
        x.style.display = "none";
    }
    return (
        <div id="addreq" style={{
            top: "0px",
            position: "fixed",
            left: 0
        }}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header headadd">
                            <h4 class="modal-title">Add Appointments</h4>
                            <button type="button" class="close btnx" data-dismiss="modal" aria-hidden="true" onClick={hide}>&times;</button>
                        </div>
                        <hr />
                        <div class="modal-body">
                            <div class="form-group bodyadd">

                                <label>Traveler</label>
                                <input type="text" class="form-control" required />
                            </div>
                            <div class="form-group bodyadd">

                                <label>From</label>
                                <input type="text" class="form-control" required />
                            </div>
                            <div class="form-group bodyadd">
                                <label>To</label>
                                <input type="text" class="form-control" required />
                            </div>

                            <div class="form-group bodyadd">
                                <label>Day and time</label>
                                <input type="text" class="form-control" required />
                            </div>

                        </div>
                        <div class="modal-footer footeradd">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={hide} />
                            <input type="submit" class="btn btn-success" value="Add" onClick={hide} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addreq;
