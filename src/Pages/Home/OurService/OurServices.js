import { Link } from 'react-router-dom';
import useServices from '../../../Hoocks/useServices';
import './OurServices.css';

const OurServices = () => {

    const [services, spinner] = useServices();
    const [homeServices] = [services.slice(0, 6)];
    return (
        <div className='someService-section container mt-5 mb-5'>
            <h1>Our Services</h1>

            {
                spinner ?

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {homeServices.map((service) => (
                            <div className="col">
                                <div class="card some-service">
                                    <img src={service.image} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{service.name}</h5>
                                        <p class="card-text">{service.description.slice(0, 120)}</p>
                                    </div>
                                    <div>
                                        <Link to={`/placeorder/${service._id}`}>
                                            <button className="btn btn-warning">
                                                Add To Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :

                    <div className="d-flex justify-content-center align-items-center m-5">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

            }

        </div>
    );
};

export default OurServices;
















