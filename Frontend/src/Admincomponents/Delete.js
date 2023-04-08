import React from 'react';
import { useForm } from 'react-hook-form';
import "../AdminStyle/DeleteTrav.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Delete = () => {
    const { handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data); // Do something with the form data
        var x = document.getElementById("delete");
        x.style.display = "none";
    }

    function hide() {
        var x = document.getElementById("delete");
        x.style.display = "none";
    }

    return (
        <div id="delete" style={{
            top: "0px",
            position: "fixed",
            left: 0
        }} >
            <div class="modal-dialog">
                <div class="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="modal-header headdelete">
                            <h4 class="modal-title">Delete Employee</h4>
                            <button type="button" class="close btnx" data-dismiss="modal" aria-hidden="true" onClick={hide}>&times;</button>
                        </div>
                        <hr />
                        <div class="modal-body bodydelete">
                            <p>Are you sure you want to delete these Records?</p>
                            <p class="text-warning"><small>This action cannot be undone.</small></p>
                        </div>
                        <div class="modal-footer footerdelete">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={hide} />
                            <input type="submit" class="btn btn-danger" value="Delete" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Delete;