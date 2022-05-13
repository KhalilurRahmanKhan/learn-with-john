import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    return (
      
        <div className="col-sm-4">
        <div className="card" style={{'width': '18rem',}}>
            <img src={props.data.picture} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <small><i>{props.data.price}</i></small>
                <p className="card-text">{props.data.desc}.</p>
                <Link to="/checkout" className="btn btn-primary">Enroll Now</Link>
            </div>
            </div>
        </div>
     
     
    );
};

export default Services;