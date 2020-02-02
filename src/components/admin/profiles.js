// lists all users with delete functions
import React, { Component } from "react";


class profileAdmin extends Component {
    render() {
        return (
                <div>
                <h1 className="admin">User Admin Page</h1>
                <a className="admin-a" href='/auth-landing'>Back to Admin Home Page</a>
                </div>
            
        );
    }
}

export default profileAdmin;