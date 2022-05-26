import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = (e) => {

        e.preventDefault();

        const name = e.target.Name.value;
        const unitPrice = e.target.unitPrice.value;
        const stock = e.target.stock.value;
        const description = e.target.description.value;
        const minOrder = e.target.minOrder.value;
        const image = e.target.image.value;

        const product = { name, unitPrice, stock, description, minOrder, image };

        fetch('https://powerful-fjord-17237.herokuapp.com/product', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        e.target.reset();
        toast.success('Product Added');
    }

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Add Product</span></h3>

            <div className='flex justify-center items-center mb-16'>
                <form onSubmit={handleAddProduct} className='flex flex-col bg-gray-300 mt-10 p-6 rounded-2xl w-full md:w-2/3'>

                    <label className='text-primary' htmlFor="Nme">Name</label>
                    <input className='rounded-3xl p-2 my-4' type="Name" name='Name' required />

                    <label className='text-primary' htmlFor="unitPrice">Unit Price</label>
                    <input className='rounded-3xl p-2 my-4' name='unitPrice' type='text' required />

                    <label className='text-primary mb-2' htmlFor="description">Description</label>
                    <textarea className='rounded-3xl p-3 my-4' name="description" id="" cols="30" rows="2" required></textarea>

                    <label className='text-primary' htmlFor="Stock">Stock</label>
                    <input className='rounded-3xl p-2 my-4' name='stock' type='number' required />

                    <label className='text-primary' htmlFor="MinOrder">Min Order</label>
                    <input className='rounded-3xl p-2 my-4' name='minOrder' type='number' required />

                    <label className='text-primary' htmlFor="image">Image Url</label>
                    <input className='rounded-3xl p-2 my-4' name='image' type='text' required />

                    <input className='btn btn-primary' type="submit" value="Add Product" />
                </form>
            </div>
        </>
    );
};

export default AddProduct;