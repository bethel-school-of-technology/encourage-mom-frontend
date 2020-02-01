import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { logout} from '../../actions/auth';

class Home extends Component {
    render() {
        return (
            <div>
            <div>Auth Landing</div>
            
            <Link to ="/login" onClick={logout}>Logout</Link>
            </div> 
        )
    }
}

export default Home;