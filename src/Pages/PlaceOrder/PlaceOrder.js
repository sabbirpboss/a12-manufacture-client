import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hoocks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState([]);
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState();

    const history = useHistory();
    const redirect_uri = '/services';

    useEffect(() => {
        fetch('https://calm-dusk-84501.herokuapp.com/AllHandpatrai')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const exactService = service.filter(item => item._id === id);


    const name = exactService[0]?.name;
    const details = exactService[0]?.description;
    const price = exactService[0]?.price;
    const img = exactService[0]?.image;
    const userEmail = user.email;
    const userName = user.displayName;
    const status = 'Pending';


    const orderData = { name, details, price, img, userEmail, userName, address, number, status };



    const handlePlaceOrder = () => {
        if (address === '') {
            setError(`Enter Your Address`);
        }
        else if (number === '') {
            setError(`Enter Your Number`);
        }
        else {
            axios.post('https://calm-dusk-84501.herokuapp.com/Orders', orderData)
                .then(res => {
                    // console.log(res);
                })
            setError(``);
            history.push(redirect_uri);

        }
    }



    const handleAddress = e => {
        setAddress(e.target.value);
    }

    const handleNumber = e => {
        setNumber(e.target.value);
    }


    return (
        <div className='service-details'>
            <Card style={{ width: '26rem' }}>
                <Card.Img style={{ height: '20rem' }} variant="top" src={exactService[0]?.image} />
                <Card.Body>
                    <Card.Title>{exactService[0]?.name}</Card.Title>
                    <Card.Text>
                        {exactService[0]?.description.slice(0, 120)}
                    </Card.Text>
                    <Card.Title>Price: ${exactService[0]?.price}</Card.Title>

                    <Form.Group className="mb-3 mt-5">
                        <Form.Control placeholder={userName} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control placeholder={userEmail} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleAddress} type="text" placeholder="Enter Your Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleNumber} type="number" placeholder="Enter Your Phone Number" required />
                    </Form.Group>

                    <p className='mt-2 fs-5 text-danger'>{error}</p>

                    <div className='details-button'>
                        <Button variant="secondary" ><Link className='go-service' to='/services'>Go Back</Link></Button>
                        <Button variant="primary" onClick={handlePlaceOrder}>Review Order</Button>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlaceOrder;