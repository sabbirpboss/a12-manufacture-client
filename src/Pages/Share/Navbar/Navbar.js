import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';
import logo from '../../Images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const { logOut, user, name } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bar-custom">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/"><img className="nav-logo" src={logo} alt="" /> patrai</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item mx-3">
                            <Link className="nav-link px-3 active fs-5" aria-current="page" to="/home">Home</Link>
                        </li>

                        <li className="nav-item mx-3">
                            <Link className="nav-link px-3 active fs-5" aria-current="page" to="#/">About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link px-3 active fs-5" aria-current="page" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link px-3 active fs-5 " aria-current="page" to="/services">Services</Link>
                        </li>



                        {
                            user?.email &&
                            <li className="nav-item mx-3">
                                <Link className="nav-link px-3 active fs-5" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>

                        }
                        {
                            user?.email &&
                            <li className="nav-item mx-3 fs-5 nav-link " >
                                {user.displayName || name}
                            </li>
                        }


                        {
                            user?.email ?
                                <li className="nav-item mx-3">
                                    <Link className='header-button nav-link fs-5' to='/' onClick={logOut}>Log Out</Link>
                                </li>
                                :
                                <li className="nav-item mx-3">
                                    <Link className='header-button nav-link fs-5' to='/login'>Log In</Link>
                                </li>

                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
