import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../../Hoocks/useAuth';

const MakeAdmin = () => {
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [addAdmin, setAddAdmin] = useState({})



    const handleAdminForm = e => {
        e.preventDefault();
        e.target.reset();
    }


    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handleNumber = e => {
        setNumber(e.target.value);
    }

    const adminInfo = { email, number };




    const handleSubmit = () => {

        if (number === '' || email === '') {
            console.log('empty admin')
        }
        else {
            axios.post('https://calm-dusk-84501.herokuapp.com/Admins', adminInfo)
                .then(res => {
                })
            setNumber('');
            setEmail('');
        }
    }

    return (
        <main >

            <div className="p-5">
                <h1 className=' text-center'>Add Admin</h1>

                <br />
                <div>
                    <form onSubmit={handleAdminForm}>

                        <label className="fs-5 fw-bold text-secondary">Admin Email*</label>
                        <input onBlur={handleEmail} className="form-control " placeholder='Email' name="email" required />
                        <br />
                        <label className="fs-5 fw-bold text-secondary">Admin Phone</label>
                        <input onBlur={handleNumber} className="form-control" placeholder="Phone" name="phone" required />
                        <br />
                        <button onClick={handleSubmit} type="submit" className="brandBtn text-center">Make Admin</button>
                    </form>
                </div>


            </div>

        </main>
    );
};

export default MakeAdmin;