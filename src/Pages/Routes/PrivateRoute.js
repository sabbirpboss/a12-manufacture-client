import Profile from '../Dashboard/Profile/Profile';
import Purchase from '../Purchase/Purchase';

const PrivateRoute = [
    { name: 'Purchase', path: '/purchase', Component: Purchase },
    { name: 'Profile', path: '/profile', Component: Profile },
]

export default PrivateRoute;