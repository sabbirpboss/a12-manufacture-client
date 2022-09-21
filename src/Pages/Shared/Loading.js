import loading from '../../Assests/loading.gif';

const Loading = () => {
    return (
        <div className='flex justify-center items-center m-10'>
            <img src={loading} alt="" width={200} height={200} />
        </div>
    );
};

export default Loading;