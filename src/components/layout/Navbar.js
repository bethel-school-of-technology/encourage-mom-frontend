// import React from 'react'
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//     return (
//         <header>
//                 <nav>
//                     <ul>
//                         <li><h1>Crowned Jewels</h1></li>
//                             <li className="dropdown">
//                                 <div className="dropbtn">
//                                     <Link to = "/profile">
//                                         <img alt='menu' src={menu}  width="45px" />
//                                     </Link>
//                                     <div className="dropdown-content" >
//                                         <Link to = "/signup">Sign-up</Link>
//                                         <Link to = "/login">Login</Link> 
//                                         <Link to = "/logout">Logout</Link>
//                                     </div>
//                                 </div>
//                             </li>
//                         <li className="nav-right"><Link to ="/contact">Contact</Link></li>
//                         <li className="nav-right"><Link to = "/posts">Posts</Link></li>
//                         <li className="nav-right"><Link to = "/encouragement">Weekly Encouragment</Link> </li>
//                         <li className="nav-right"><Link to ="/home">Home</Link></li>


//                     </ul>
//                 </nav>
//         </header>
//     )
// }

// export default Navbar









import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import profile from '../img/profile.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout} from '../../actions/auth';
import menu from '../img/menu.png'


const Navbar = ({ auth: {isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <header>
        <nav>
            <ul>
                <li><h1>Crowned Jewels</h1></li>
                <li className="dropdown">
                        <div className="dropbtn">
                            <Link to = "/profile">
                                <img alt='profile' src={profile}  width="45px" />
                            </Link>
                            <div className="dropdown-content" >
                                <Link to = "/create-post">Create Post</Link>
                                <a onClick={logout} href="#!">Logout</a> 
                            </div>
                        </div>
                    </li>
                
                <li className="nav-right"><Link to ="/contact">Contact</Link></li>
                <li className="nav-right"><Link to = "/posts">Posts</Link></li>
                <li className="nav-right"><Link to = "/encouragement">Weekly Encouragment</Link> </li>
                <li className="nav-right"><Link to ="/home">Home</Link></li>
                
            </ul>
        </nav>
</header>
    );

    const guestLinks = (
        <header>
                <nav>
                    <ul>
                    <li><h1>Crowned Jewels</h1></li>
                    <li className="dropdown">
                                <div className="dropbtn">
                                    <Link to = "/profile">
                                        <img alt='menu' src={menu}  width="45px" />
                                    </Link>
                                    <div className="dropdown-content" >
                                        <Link to = "/signup">Sign Up</Link>
                                        <Link to = "/login">Login</Link> 
                                    </div>
                                </div>
                            </li>
                        
                        <li className="nav-right"><Link to ="/contact">Contact</Link></li>
                        <li className="nav-right"><Link to = "/posts">Posts</Link></li>
                        <li className="nav-right"><Link to = "/encouragement">Weekly Encouragment</Link> </li>
                        <li className="nav-right"><Link to ="/home">Home</Link></li>
                    </ul>
                </nav>
        </header>
    )
    return (
        <header>
        {/* <h1>Crowned Jewels</h1> */}
        {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
        </header>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ 
    auth: state.auth
})

export default connect(mapStateToProps,
     { logout })(Navbar);