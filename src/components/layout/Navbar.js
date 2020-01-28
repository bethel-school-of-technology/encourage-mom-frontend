
import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';
import profile from '../img/profile.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout} from '../../actions/auth';
import menu from '../img/menu.png';



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
                                <a onClick={logout} href="/#">
                                    {/* <i>
                                        <Redirect to='/login'></Redirect>
                                    </i> */}
                                    Logout
                                    </a> 
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
                                    {/* <Link to = "/profile"> */}
                                        <img alt='menu' src={menu}  width="45px" />
                                    {/* </Link> */}
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


// import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { logout } from '../../actions/auth';
// import { Link } from 'react-router-dom';

// import profile from '../img/profile.png';

// import menu from '../img/menu.png';

// // import { clearCurrentProfile } from '../../actions/profile';



// // This is a Header component for Navigation //

// class Navbar extends Component {
// //   onLogoutClick(e) {
// //     e.preventDefault();
// //     this.props.logoutUser();
// //     this.props.clearCurrentProfile();
// //   }
//   render() {

//     const { isAuthenticated } = this.props.auth;

//     const authLinks = (
//         <header>
//         <nav>
//             <ul>
//                 <li><h1>Crowned Jewels</h1></li>
//                 <li className="dropdown">
//                         <div className="dropbtn">
//                             <Link to = "/profile">
//                                 <img alt='profile' src={profile}  width="45px" />
//                             </Link>
//                             <div className="dropdown-content" >
//                                 <Link to = "/create-post">Create Post</Link>
//                                 <a onClick={logout} href='!#'>Logout</a> 
//                             </div>
                        
//                         </div>
//                     </li>
//                 <li className="nav-right"><Link to ="/contact">Contact</Link></li>
//                 <li className="nav-right"><Link to = "/posts">Posts</Link></li>
//                 <li className="nav-right"><Link to = "/encouragement">Weekly Encouragment</Link> </li>
//                 <li className="nav-right"><Link to ="/home">Home</Link></li>
//             </ul>
//         </nav>
// </header>
//     );

//     const guestLinks = (
//         <header>
//                 <nav>
//                     <ul>
//                     <li><h1>Crowned Jewels</h1></li>
//                     <li className="dropdown">
//                                 <div className="dropbtn">
//                                     <Link to = "/profile">
//                                         <img alt='menu' src={menu}  width="45px" />
//                                     </Link>
//                                     <div className="dropdown-content" >
//                                         <Link to = "/signup">Sign Up</Link>
//                                         <Link to = "/login">Login</Link> 
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

//     return (
//       <div>
//         <Fragment>
//           {isAuthenticated ? authLinks : guestLinks}
//         </Fragment>
//       </div>
//     )
//   }
// }

// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth
// })


