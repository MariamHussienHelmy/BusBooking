import "../AdminStyle/AddTrav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useForm } from 'react-hook-form';

const Add = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        hide();
    }

    function hide() {
        var x = document.getElementById("add");
        x.style.display = "none";
    }

    return (
        <div id="add" style={{
            top: "0px",
            position: "fixed",
            left: 0
        }}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="modal-header headadd">
                            <h4 class="modal-title">Add Traveler</h4>
                            <button type="button" class="close btnx" data-dismiss="modal" aria-hidden="true" onClick={hide}>&times;</button>
                        </div>
                        <hr />
                        <div class="modal-body " >
                            <div class="form-group bodyadd">
                                <label>Email</label>
                                <input type="text" class="form-control" {...register("email", { required: true })} />
                            </div>
                            <div class="form-group bodyadd">
                                <label>Phone</label>
                                <input type="text" class="form-control" {...register("phone", { required: true })} />
                            </div>
                        </div>

                        <div class="modal-footer footeradd">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={hide} />
                            <input type="submit" class="btn btn-success btnad" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;