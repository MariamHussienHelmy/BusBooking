import React from 'react';
import "../AdminStyle/AddTrav.css";
import "../AdminStyle/Addapp.css";
import { useForm } from 'react-hook-form';

const Addapp = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    function hide() {
        var x = document.getElementById("addapp");
        x.style.display = "none";
    }

    return (
        <div id="addapp" style={{
            top: "0px",
            position: "fixed",
            left: 0
        }}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="modal-header headadd">
                            <h4 class="modal-title">Add Appointments</h4>
                            <button type="button" class="close btnx" data-dismiss="modal" aria-hidden="true" onClick={hide}>&times;</button>
                        </div>
                        <hr />
                        <div class="modal-body">
                            <div class="form-group bodyadd">
                                <label>From</label>
                                <input type="text" class="form-control" required {...register("from")} />
                            </div>
                            <div class="form-group bodyadd">
                                <label>To</label>
                                <input type="text" class="form-control" required {...register("to")} />
                            </div>
                            <div class="form-group bodyadd">
                                <label>Ticket price</label>
                                <input type="text" class="form-control" required {...register("price")} />
                            </div>
                            <div class="form-group bodyadd">
                                <label>Day and time</label>
                                <input type="text" class="form-control" required {...register("time")} />
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

export default Addapp;