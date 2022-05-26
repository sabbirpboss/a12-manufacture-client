import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {

    const [products, isLoading, error] = useProducts();

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    return (
        <>
            <Helmet>
                <title>Products - Industo LTD.</title>
            </Helmet>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>All Your Needs</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 pl-6'>
                {
                    products?.map(product => <Product key={product._id} product={product} />)
                }
            </div>
            <div className="btn-group grid grid-cols-2 my-6">
                <button className="btn btn-outline">Previous page</button>
                <button className="btn btn-outline">Next</button>
            </div>
        </>
    );
};

export default Products;