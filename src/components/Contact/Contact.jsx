import React from 'react';

const Contact = () => {
    return (
        <div className='container mb-5'>
            <h1 className="text-center mb-5">Contact</h1>
            <div class="row justify-content-center mt-3">
            <div class="col-sm-3">
              <label for="firstName" class="form-label">Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-3">
              <label for="lastName" class="form-label">Email</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
         
        </div>
        <div className="row justify-content-center">
        <div class="col-sm-6 ">
              <label for="lastName" class="form-label">Comments</label>
              <textarea type="text" class="form-control" id="lastName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-1">

        <button className='btn btn-primary mt-3 '>Submit</button>
        </div>
        </div>
        </div>
    );
};

export default Contact;