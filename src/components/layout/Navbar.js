
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import profile from '../img/profile.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout} from '../../actions/auth';
import menu from '../img/menu.png';

const Navbar = ({ auth: {isAuthenticated, loading }, logout }) => {
    const guestLinks = (
        <header>
                <nav>
                    <ul>
                    <li ><h1 id="title">Crowned Jewels</h1></li>
                    <li className="dropdown">
                                <div className="dropbtn">
                                    <Link to="#">
                                        <img alt='menu' src={menu}  width="45px" padding='50px'/>
                                    </Link>
                                    <div className="dropdown-content" >
                                        <Link to = "/signup">Sign Up</Link>
                                        <Link to = "/login">Login</Link> 
                                    </div>
                                </div>
                        </li>
                        <li className="nav-right"><Link to ="/contact">Contact</Link></li>
                        <li className="nav-right"><Link to = "/posts">Posts</Link></li>
                        <li className="nav-right"><Link to = "/encouragement">Encouragement</Link> </li>
                        <li className="nav-right"><Link to ="/">Home</Link></li>

                    </ul>
                </nav>
        </header>
    );
    const authLinks = (
//         <header>
//         <nav>
//             <ul>
                
//                 <li><h1>Crowned Jewels</h1></li>
//                 <li className="dropdown">
//                         <div className="drop-btn">
//                             <a href= "/profile">
//                                 <img alt='profile' src={profile}  width="45px" />
//                             </a>
//                                 <div className="dropdown-content" >
//                                     <a href= "/create-post">Create Post</a>
//                                     <a href= "/profiles">User Bios</a>                               
//                                     <a href= "/login" onClick={logout}>Logout</a>
//                                 </div>
//                         </div>
//                 </li>
//                 <li><a href="/contact">Contact</a></li>
//                 <li><a href= "/posts">Posts</a></li>
//                 <li><a href= "/encouragement">Encouragement</a> </li>
//                 <li><a href="/">Home</a></li>
//             </ul>
//         </nav>
// </header>
        <header>
        <nav>
            <ul>
                
                <li><h1>Crowned Jewels</h1></li>
                <li className="dropdown">
                        <div className="drop-btn">
                            <Link to = "/profile">
                                <img alt='profile' src={profile}  width="45px" />
                            </Link>
                            <div className="dropdown-content" >
                                <Link to = "/create-post">Create Post</Link>
                                <Link to = "/profiles">User Bios</Link>                               
                                <Link to ="/login" onClick={logout}>Logout</Link>
                            </div>
                        
                        </div>
                    </li>
                <li className="nav-right"><Link to ="/contact">Contact</Link></li>
                <li className="nav-right"><Link to = "/posts">Posts</Link></li>
                <li className="nav-right"><Link to = "/encouragement">Encouragement</Link> </li>
                <li className="nav-right"><Link to ="/">Home</Link></li>

            </ul>
        </nav>
</header>
    )
    return (
        <header>
        {/* <h1>Crowned Jewels</h1> */}
        {!loading && (
             <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            // <Fragment>{!isAuthenticated ? guestLinks : isAuthenticated ? authLinks : isAdmin && isAuthenticated ? adminLinks : guestLinks} </Fragment>
            // <Fragment>{isAdmin && isAuthenticated ? adminLinks : {isAuthenticated} ? authLinks : guestLinks}</Fragment>
        )}
        </header>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // isAdmin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  // isAdmin: state.isAdmin
});
export default connect(mapStateToProps, { logout })(Navbar);
