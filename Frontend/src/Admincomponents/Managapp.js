import React from 'react';
import Si from "./Si";
import "../AdminStyle/Mangeapp.css";
import Addapp from './Addapp';
import Editapp from './Editapp';
import Delete from './Delete';
import "../AdminStyle/Addapp.css";
import "../AdminStyle/AddTrav.css";
import "../AdminStyle/EditTrav.css";
import "../AdminStyle/Editapp.css";
const Ma = () => {
    function display() {
        var x = document.getElementById("addapp");
        x.style.display = "block";
    }
    function displayedit() {
        var x = document.getElementById("editapp");
        x.style.display = "block";
    }
    function displaydelete() {
        var x = document.getElementById("delete");
        x.style.display = "block";
    }
    return (
        <>
            <Si />

            <div class="container-xl " id="tble" style={{
                top: "30px",
                left: 300,
                position: "fixed",
                width: 1200
            }}>
                <div  >
                    <div class="table-wrapper ">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2>Manage <b>Appointments </b></h2>
                                </div>
                                <div class="col-sm-6">
                                    <a class="btn btn-success" data-toggle="modal" onClick={display} ><i
                                        class="material-icons">&#xE147;</i> <span>Add</span></a>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
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
                                <tr>
                                    <td>cairo</td>
                                    <td> Helwan</td>
                                    <td> 70 EGP</td>
                                    <td>20/7 7:00 AM</td>

                                    <td>
                                        <a class="edit" data-toggle="modal"><i class="material-icons"
                                            data-toggle="tooltip" title="Edit" onClick={displayedit}>&#xE254;</i></a>
                                        <a class="delete" data-toggle="modal"><i
                                            class="material-icons" data-toggle="tooltip" title="Delete" onClick={displaydelete}>&#xE872;</i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <Addapp />
            <Editapp />
            <Delete />

        </>
    );
};

export default Ma;