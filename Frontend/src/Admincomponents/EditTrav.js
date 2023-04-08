import React from 'react';
import { useForm } from 'react-hook-form';
import "../AdminStyle/EditTrav.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = () => {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
        // TODO: Add logic to save updated traveler data
    }

    function hideEdit() {
        var x = document.getElementById("edit");
        x.style.display = "none";
    }

    return (
        <div id="edit"
            style={{
                top: "0px",
                position: "fixed",
                left: 0
            }}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="modal-header headadd">
                            <h4 class="modal-title">Edit Traveler</h4>
                            <button type="button" class="close btnx" data-dismiss="modal" aria-hidden="true" onClick={hideEdit}>&times;</button>
                        </div>
                        <hr />
                        <div class="modal-body bodyadd">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" name="email"  {...register('email')} required />
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" class="form-control" name="phone"  {...register('phone')} required />
                            </div>

                        </div>

                        <div class="modal-footer footeredit">
                            <input type="button" class="btn btn-default" value="Cancel" onClick={hideEdit} />
                            <input type="submit" class="btn btn-info" value="Save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;