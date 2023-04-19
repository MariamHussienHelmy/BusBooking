import React from 'react';
import "../AdminStyle/Table.css";
import Si from "./Si";
import Add from "./AddTrav";
import Edit from "./EditTrav";
import Delete from './Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
const ManagTrav = () => {

    function display() {
        var x = document.getElementById("add");
        x.style.display = "block";
    }
    function displayedit() {
        var x = document.getElementById("edit");
        x.style.display = "block";
    }
    function displaydelete() {
        var x = document.getElementById("delete");
        x.style.display = "block";
    }
    return (
        <div>
            <Si />
            <head>
            </head>
            <div class="container-xl " style={{
                top: "30px",
                left: 300,
                position: "fixed",
                width: 1200
            }}>
                <div   >
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2>Manage <b>Travelers </b></h2>
                                </div>
                                <div class="col-sm-6 btnadd">
                                    <button class="btn btn-success" onClick={display} ><i class="material-icons"
                                    >&#xE147;</i> <span> Add</span></button>

                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Phone</th>
                                    <th>History of requests</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>user1@gmail.com</td>
                                    <td> Passs123</td>
                                    <td>0112223333</td>
                                    <td>
                                        <Link to="/show">
                                            <button class="btn btn-success">Show</button>
                                        </Link>
                                    </td>

                                    <td>
                                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                                            data-toggle="tooltip" title="Edit" onClick={displayedit} >&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i
                                            class="material-icons" data-toggle="tooltip" title="Delete" onClick={displaydelete}>&#xE872;</i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <Add />
            <Edit />
            <Delete />
        </div>
    );
};

export default ManagTrav;
