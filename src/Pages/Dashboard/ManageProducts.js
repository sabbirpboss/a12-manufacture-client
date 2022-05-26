import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';
import Loading from '../Shared/Loading';
import DeleteModal2 from './DeleteModal2';

const ManageProducts = () => {

    const [products, isLoading, error, refetch] = useProducts();
    const [modalClose, setModalClose] = useState(null);

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Manage all orders</span></h3>

            <div className="overflow-x-auto mx-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Unit Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(({ _id, name, stock, unitPrice }, index) => <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{name}</td>
                                <td>{stock}</td>
                                <td>{unitPrice}</td>
                                <td>
                                    {
                                        <label
                                            onClick={() => setModalClose('open')}
                                            for="delete-modal2"
                                            className="btn btn-xs bg-red-500">Delete</label>
                                    }
                                </td>

                                <td>

                                    {
                                        modalClose &&
                                        <DeleteModal2
                                            refetch={refetch}
                                            setModalClose={setModalClose}
                                            _id={_id}
                                            productName={name}
                                        >
                                        </DeleteModal2>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageProducts;