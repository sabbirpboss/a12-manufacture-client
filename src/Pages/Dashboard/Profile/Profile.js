import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiEdit } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import avater from '../../../Assests/avater.png';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import EditeModal from './EditeModal';

const Profile = () => {

    const [user] = useAuthState(auth);
    const [modalClose, setModalClose] = useState('');

    const { data: profile, isLoading, error, refetch } = useQuery('porfile', () => fetch(`http://localhost:5000/user/${user?.email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-4'><span className=' border-b-2 border-accent'>Profile</span></h3>
            <div className='flex justify-center items-center my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL ? user?.photoURL : avater} alt='' />

                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user?.displayName}</h2>
                        <h2 className="card-title">{user?.email}</h2>
                    </div>
                    <div className='m-6 font-bold'>
                        <p>Education: {profile?.education ? profile?.education : 'you not set any education yet.'}</p>
                        <p>Location: {profile?.location ? profile?.location : 'you not set any location yet.'}</p>
                        <p>Phone: {profile?.phone ? profile?.phone : 'you not set any Phone number yet.'}</p>
                        <p>Linkedin: {profile?.linkedin ? profile?.linkedin : 'you not set education yet.'}</p>
                    </div>
                    <label
                        for="edit-modal"
                        disabled={!profile}
                        onClick={() => setModalClose('open')}
                        className="btn btn-xs btn-accent"
                    ><BiEdit className='text-lg mr-2' /> Update Profile</label>
                </div>
                {
                    modalClose &&
                    <EditeModal
                        profile={profile}
                        refetch={refetch}
                        setModalClose={setModalClose}
                    >

                    </EditeModal>
                }
            </div>
        </>
    );
};

export default Profile;