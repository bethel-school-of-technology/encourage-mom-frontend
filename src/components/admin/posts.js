// lists all posts with delete functions

import React, { Component } from "react";

class postAdmin extends Component {
    render() {
        return (
                <div>
                <h1 className="admin">Admin Post Page</h1>
                <a className="admin-a" href='/auth-landing'>Back to Admin Home Page</a>
                </div>
            
        );
    }
}

export default postAdmin;