import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Pages/Share/Navbar/Navbar';
import Footer from './Pages/Share/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AllService from './Pages/AllService/AllService';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' >
            <Home></Home>
          </Route>
          <Route exact path='/home' >
            <Home></Home>
          </Route>
          <Route exact path='/blogs' >
            <Blogs></Blogs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/services'>
            <AllService></AllService>
          </Route>
          <PrivateRoute path='/placeorder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
