import React from 'react';

const Contact = () => {
    return (
        <div className='container mb-5'>
            <h1 className="text-center mb-5">Contact</h1>
            <div className="row justify-content-center mt-3">
            <div className="col-sm-3">
              <label  className="form-label">Name</label>
              <input type="text" className="form-control" id="firstName" placeholder=""  required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-3">
              <label  className="form-label">Email</label>
              <input type="text" className="form-control" id="lastName" placeholder=""  required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
         
        </div>
        <div className="row justify-content-center">
        <div className="col-sm-6 ">
              <label  className="form-label">Comments</label>
              <textarea type="text" className="form-control" id="lastName" placeholder="" required/>
              <div className="invalid-feedback">
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