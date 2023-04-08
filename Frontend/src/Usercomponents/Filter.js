import React from 'react';
import "../UserStyle/Filter.css";
const Filter = () => {
    return (
        <div>
            <div class="all">
                <h3 class="p-1 border-bottom filterby">Filter By</h3>
                <div class="filter">
                    <h3>Destination</h3>
                    <form class="ml-md-2">
                        <div class="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="type" /> <label
                            class="pl-1 pt-sm-0 pt-1"> Cairo</label> </div>
                        <div class="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="type" /> <label
                            class="pl-1 pt-sm-0 pt-1">Giza</label> </div>
                        <div class="form-inline border rounded p-md-2 p-sm-1"> <input type="radio" name="type" /> <label
                            class="pl-1 pt-sm-0 pt-1">helwan</label> </div>
                    </form>
                </div>
                <div class="filter">
                    <h3>Price</h3>
                    <form class="ml-md-2">

                        <div class="form-inline border rounded p-sm-2 my-2"> <input type="checkbox" name="type" /> <label
                            class="pl-1 pt-sm-0 pt-1">0-100 EGP</label> </div>
                        <div class="form-inline border rounded p-sm-2 my-2"> <input type="checkbox" name="type" /> <label
                            class="pl-1 pt-sm-0 pt-1">100-500 EGP</label> </div>
                        <div class="form-inline border rounded p-sm-2 my-2"> <input type="checkbox" name="type" /> <label
                            class="pl-1 pt-sm-0 pt-1"></label> 500-1000 EGP</div>

                        <div class="form-inline border rounded p-md-2 p-sm-1"> <input type="checkbox" name="type" /> <label
                            class="pl-1 pt-sm-0 pt-1">over 1000 EGP</label> </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Filter;