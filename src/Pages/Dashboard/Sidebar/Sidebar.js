import {
    Link,
    useRouteMatch
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShoppingBasket, faListAlt, faPlusSquare, faSignOutAlt, faCreditCard, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import useAuth from '../../../Hoocks/useAuth';
import defaultImage from '../../Images/userDefault2.png';

const Sidebar = () => {


    let { url } = useRouteMatch();

    const { user, logOut } = useAuth();
    const [admins, setAdmins] = useState([]);

    const handleLogout = () => {
        logOut();
    }



    useEffect(() => {
        fetch("https://calm-dusk-84501.herokuapp.com/Admins")
            .then((res) => res.json())
            .then((data) => {
                setAdmins(data)
            })

    }, []);


    const findAdmin = admins.filter(admin => admin.email === user.email);



    return (
        <div className="sidebar py-5">
            <div className="text-center mb-5">
                {
                    user.photoURL ?
                        <img style={{ borderRadius: '50%', width: '150px' }} src={user.photoURL} alt="" />
                        :
                        <img style={{ borderRadius: '50%', width: '150px' }} src={defaultImage} alt="" />
                }
            </div>
            <div className="sidebarOption  ">
                <Link className="sidebarLink text-light" to={`${url}`}><FontAwesomeIcon icon={faListAlt} /> Profile</Link>
            </div>

            {findAdmin[0]?.email ?
                <div>

                    <div className="sidebarOption">
                        <Link className="sidebarLink text-light" to={`${url}/addService`}><FontAwesomeIcon icon={faPlusSquare} /> Add Services</Link>
                    </div>
                    <div className="sidebarOption">
                        <Link className="sidebarLink text-light" to={`${url}/makeAdmin`}><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                    </div>
                    <div className="sidebarOption">
                        <Link className="sidebarLink text-light" to={`${url}/manageService`}><FontAwesomeIcon icon={faTasks} /> Manage Services</Link>
                    </div>
                    <div className="sidebarOption">
                        <Link className="sidebarLink text-light" to={`${url}/manageOrders`}><FontAwesomeIcon icon={faTasks} /> Manage Orders</Link>
                    </div>
                </div>

                :


                <div>

                    <div className="sidebarOption">
                        <Link className="sidebarLink text-light" to={`${url}/myorder`}><FontAwesomeIcon icon={faShoppingBasket} /> My Order</Link>
                    </div>
                    <div className="sidebarOption">
                        <Link className="sidebarLink text-light" to={`${url}/payment`}><FontAwesomeIcon icon={faCreditCard} /> Payment</Link>
                    </div>
                    <div className="sidebarOption">
                        <Link className="sidebarLink text-light" to={`${url}/review`}><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
                    </div>
                </div>


            }

            <div onClick={handleLogout} className="sidebarOption logout">
                <Link className="sidebarLink text-light" to="/home"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
            </div>

        </div>
    );
};

export default Sidebar;