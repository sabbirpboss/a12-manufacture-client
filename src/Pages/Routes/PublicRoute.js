import Home from '../Home/Home';
import Products from '../Products/Products';
import Portfolio from '../Portfolio/Portfolio';
import Blog from '../Blog/Blog';
import Login from '../Login/Login';
import Register from '../Login/Register';

const PublicRoute = [
    { name: 'Home', path: '/', Component: Home, },
    { name: 'Home', path: '/home', Component: Home, },
    { name: 'Login', path: '/login', Component: Login, },
    { name: 'register', path: '/register', Component: Register, },
    { name: 'Products', path: '/products', Component: Products, },
    { name: 'Portfolio', path: '/portfolio', Component: Portfolio, },
    { name: 'Blog', path: '/blog', Component: Blog, },

]

export default PublicRoute;