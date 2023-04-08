import React from 'react';
import "../AdminStyle/EditTrav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
const Editapp = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add your logic for handling form submission here
    };

    function hideEdit() {
        var x = document.getElementById("editapp");
        x.style.display = "none";
    }

    return (
        <div id="editapp" style={{ top: "0px", position: "fixed", left: 0 }}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="modal-header headadd">
                            <h4 class="modal-title">Edit Appointments</h4>
                            <button
                                type="button"
                                class="close btnx"
                                data-dismiss="modal"
                                aria-hidden="true"
                                onClick={hideEdit}
                            >
                                &times;
                            </button>
                        </div>
                        <hr />
                        <div class="modal-body ">
                            <div class="form-group bodyadd">
                                <label>From</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    required
                                    {...register('from')}
                                />
                            </div>
                            <div class="form-group bodyadd">
                                <label>To</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    required
                                    {...register('to')}
                                />
                            </div>
                            <div class="form-group bodyadd">
                                <label>Ticket price</label>
                                <textarea
                                    class="form-control"
                                    required
                                    {...register('ticketPrice')}
                                ></textarea>
                            </div>
                            <div class="form-group bodyadd">
                                <label>Day and time</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    required
                                    {...register('dayAndTime')}
                                />
                            </div>
                        </div>
                        <div class="modal-footer footer">
                            <input
                                type="button"
                                class="btn btn-default"
                                data-dismiss="modal"
                                value="Cancel "
                                onClick={hideEdit}
                            />
                            <input
                                type="submit"
                                class="btn btn-info"
                                value="Save"
                                onClick={hideEdit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Editapp;