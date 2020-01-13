import React from 'react'
import { Link } from 'react-router-dom';
import menu from '../img/menu.png'

const Navbar = () => {
    return (
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
                                        <Link to = "/signup">Sign-up</Link>
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
}

export default Navbar