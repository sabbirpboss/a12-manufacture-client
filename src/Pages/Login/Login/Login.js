import { React, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';
import './Login.css';


const Login = () => {
    const { signInWithGoogle, handleEmailLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/dashboard';

    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [message, setMessage] = useState('');
    const [googleMessage, setGoogleMessage] = useState('');

    const handleGoogleLogin = () => {

        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setGoogleMessage(error.message);
            })
    }





    const handleRegistration = e => {
        e.preventDefault();
    }

    const handleEmail = e => {
        setEmail(e.target.value);

    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }



    const handleLogin = () => {
        handleEmailLogin(email, password)
            .then((result) => {
                result.user &&
                    history.push(redirect_uri);
            })
            .catch((error) => {
                setMessage(error.message);
            })
    }

    return (
        <div className='container'>

            <h1>Please Login</h1>


            <form className='mb-3' onSubmit={handleRegistration}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <p className='error-message'>{message}</p>
                <button type="submit" onClick={handleLogin} className="btn btn-primary">Log In</button>
            </form>
            <div>

            </div>
            <div className="mb-3 form-check">
                <p>Don't have any account? Please <Link to='/register'>Register</Link></p>
            </div>

            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sing In</button>

            <p className='error-message mt-2'>{googleMessage}</p>
        </div>
    );
};

export default Login;