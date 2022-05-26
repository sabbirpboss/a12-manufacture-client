import axios from 'axios';
import React, { useState } from 'react';

const AddService = () => {

    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')


    const data = { name, description, price, image }

    const handleFrom = e => {
        e.preventDefault()
        e.target.reset();
    }


    const handleName = e => {
        setName(e.target.value);
    }

    const handleDetails = e => {
        setDescription(e.target.value);
    }

    const handlePrice = e => {
        setPrice(e.target.value);
    }

    const handleImage = e => {
        setImage(e.target.value);
    }




    const handleSubmit = () => {

        if (data.name === '' || data.description === '' || data.price === '' || data.image === '') {
            console.log('name nai')
        }
        else {
            axios.post('https://calm-dusk-84501.herokuapp.com/AllHandpatrai', data)
                .then(res => {
                    // console.log(res);
                })
            setName('');
            setDescription('');
            setImage('');
            setPrice('');
        }



    }



    return (
        <main style={{ width: '80%' }}>
            <div>

                <h1 className=' text-center mt-5'>Add Service</h1>

                <br />
                <div>
                    <form onSubmit={handleFrom}>
                        <label className="fs-5 fw-bold text-secondary">service name*</label>
                        <input onBlur={handleName} className="form-control " placeholder="Name is required" required name="name" />
                        <br />
                        <label className="fs-5 fw-bold text-secondary">description*</label>
                        <input onBlur={handleDetails} className="form-control" placeholder="Description" required name="description" />
                        <br />
                        <label className="fs-5 fw-bold text-secondary">price*</label>
                        <input onBlur={handlePrice} type='number' className="form-control" placeholder="Price" required name="price" />
                        <br />
                        <label className="fs-5 fw-bold text-secondary">Upload service image</label>
                        <input name="photo" className="form-control" onBlur={handleImage} type="text" required placeholder='Add Image Url' />
                        <br />
                        <button onClick={handleSubmit} type="submit" className="brandBtn mb-5 text-center">SUBMIT</button>
                    </form>
                </div>
            </div>
        </main >
    );
};

export default AddService;