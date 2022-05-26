import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Shared/NavBar';
import NotFound from './Pages/Shared/NotFound';
import { themeChange } from 'theme-change'
import { useEffect } from 'react';
import PublicRoute from './Pages/Routes/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer';
import RequerAuth from './Pages/RequerAuth/RequerAuth';
import Profile from './Pages/Dashboard/Profile/Profile';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Purcess from './Pages/Purcess/Purcess';
import Payment from './Pages/Dashboard/Payment';

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <HelmetProvider>
      <NavBar >
        <Routes>
          {
            PublicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }

          <Route path='/purcess/:id' element={
            <RequerAuth>
              <Purcess />
            </RequerAuth>} />

          <Route path='/dashboard' element={
            <RequerAuth>
              <Dashboard />
            </RequerAuth>
          } >
            <Route path='profile' element={<Profile />} />
            <Route path='myorders' element={<MyOrders />} />
            <Route path='payment/:paymentId' element={<Payment />} />
            <Route path='review' element={<AddReview />} />
            <Route path='orders' element={<ManageOrders />} />
            <Route path='addProduct' element={<AddProduct />} />
            <Route path='manageProducts' element={<ManageProducts />} />
            <Route path='makeAdmin' element={<MakeAdmin />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </NavBar>
    </HelmetProvider>
  );
}

export default App;
