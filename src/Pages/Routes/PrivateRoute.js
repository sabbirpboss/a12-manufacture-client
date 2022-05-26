import Profile from '../Dashboard/Profile/Profile';
import Purcess from '../Purcess/Purcess';

const PrivateRoute = [
    { name: 'Purcess', path: '/purcess', Component: Purcess },
    { name: 'Profile', path: '/profile', Component: Profile },
]

export default PrivateRoute;