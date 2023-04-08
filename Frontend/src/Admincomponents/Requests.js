import React from 'react';
import Si from "./Si";
import "../AdminStyle/Request.css";


const Requests = () => {

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
                                    <h2>Manage <b>Requests</b></h2>
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>user1@gmail.com</td>
                                    <td>cairo</td>
                                    <td> Helwan</td>
                                    <td>20/7 7:00 AM</td>

                                    <td>
                                        <td >
                                            <div class="btns" >
                                                <input type="submit" class="btn btn-success" value="Accept" />
                                                <input type="submit" class="btn btn-danger" value="reject" />
                                            </div>

                                        </td>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>



        </>
    );
};

export default Requests;