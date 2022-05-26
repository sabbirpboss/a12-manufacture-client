import React from 'react';
import useAuth from '../../../Hoocks/useAuth';
import defaultUser from '../../Images/userDefault2.png';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className=" p-5 text-center ">
            <div>
                <h1 className='mb-5' >Welcome your dashboard</h1>
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        {
                            user.photoURL ?
                                <img style={{ borderRadius: '50%' }} src={user.photoURL} alt="" />
                                :
                                <img style={{ borderRadius: '50%' }} src={defaultUser} alt="" />
                        }

                        <h3>Name: {user.displayName}</h3>
                        <h4>Email: {user.email}</h4>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DashboardHome;