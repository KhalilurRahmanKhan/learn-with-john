import React from 'react';

const Services = (props) => {
    return (
      
        <div class="col-sm-4">
        <div class="card" style={{'width': '18rem',}}>
            <img src={props.data.picture} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.data.name}</h5>
                <small><i>{props.data.price}</i></small>
                <p class="card-text">{props.data.desc}.</p>
                <a href="#" class="btn btn-primary">Enroll Now</a>
            </div>
            </div>
        </div>
     
     
    );
};

export default Services;