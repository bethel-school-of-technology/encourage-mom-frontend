import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { logout} from '../../actions/auth';

class authLanding extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Welcome, Admin!</h1>
                <h3>As an admin user, you are able to delete unused accounts, delete inappropriate posts, add encouragement. </h3>
                </div>
                    <nav className="admin-links">
                        <ul className="admin">
                                <a>Admin Links:</a>
                                <br/>
                                <br/>
                                <a href="/admin-users"> View and Manage Users</a>
                                <br/>
                                <br/>
                                <a href="/admin-posts">View and Manage Posts</a>
                                <br/>
                                <br/>
                                <a href="/admin-encouragement">Create Encouragement</a>
                                <br/>
                        </ul>
                    </nav>

            </div> 
        )
    }
}

export default authLanding;