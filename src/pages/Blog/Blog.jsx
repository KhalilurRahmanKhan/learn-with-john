import React from 'react';


const Blog = () => {
    return (
       <div>
            <div className='container mt-3'>
            <h4>Difference between authorization and authentication?</h4>
            <p>Authentication is the way of checking the identity of a person and authorization is the system for controlling the access of a person.</p>
        </div>
        <div className='container mt-3'>
            <h4> Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>I am using firebase to add authentication system to my system. It is a popular third party solution for authentication. There are some other options also ,like: <li>passport</li><li>Auth0</li><li>JWT</li><li>Okta</li></p>
        </div>
        <div className='container mt-3'>
            <h4>What other services does firebase provide other than authentication?</h4>
            <p>There are some other services that firebase provide other than authentication:
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Cloud Messaging</li>
          </p>
        </div>
       </div>
    );
};

export default Blog;