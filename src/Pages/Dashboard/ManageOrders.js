import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import DeleteModal1 from './DeleteModal1';
import DeleverdModal from './DeleverdModal';

const ManageOrders = () => {

    const [modalClose, setModalClose] = useState(null);
    const { data: orders, isLoading, error, refetch } = useQuery('orders', () => fetch('http://localhost:5000/allorders').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error?.massage)
    }

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-accent'>Manage all orders</span></h3>

            <div className="overflow-x-auto mx-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Stutas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(({ _id, productName, quantity, paid, price, transactionId, deleverd, email }, index) => <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{email}</td>
                                <td>{productName}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>
                                    {(price && !paid) && <p className='text-red-500 pl-3 rounded-full bg-warning'>Not paid</p>}
                                    {(price && paid) && <div>
                                        {
                                            deleverd ? <div>
                                                <p><span className='text-success'>Paid</span></p>
                                                <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
                                            </div> : <label
                                                onClick={() => setModalClose('open')}
                                                for="deleverd-modal"
                                                className='btn btn-xs bg-green-500'>Dleverd</label>
                                        }
                                    </div>}
                                </td>
                                <td>
                                    {
                                        !paid &&
                                        <label
                                            onClick={() => setModalClose('open')}
                                            for="delete-modal1"
                                            className="btn btn-xs bg-red-500">Cancel</label>
                                    }
                                </td>
                                <td>
                                    {
                                        modalClose &&
                                        <DeleverdModal
                                            setModalClose={setModalClose}
                                            _id={_id}
                                            productName={productName}
                                        >
                                        </DeleverdModal>
                                    }
                                    {
                                        modalClose &&
                                        <DeleteModal1
                                            refetch={refetch}
                                            setModalClose={setModalClose}
                                            _id={_id}
                                            productName={productName}
                                        >
                                        </DeleteModal1>
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

export default ManageOrders;