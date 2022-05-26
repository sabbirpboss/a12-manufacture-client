import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AddService from '../Admin/AddService/AddService';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrder from '../Admin/ManageAllOrder/ManageAllOrder';
import ManageService from '../Admin/ManageService/ManageService';
import GiveReview from '../Coustomer/GiveReview/GiveReview';
import MyOrder from '../Coustomer/MyOrder/MyOrder';
import Payment from '../Coustomer/Payment/Payment';
import DashboardHome from '../DashboardHome/DashboardHome';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    let { path } = useRouteMatch();



    return (
        <main className="admin">
            <div className="row ">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 dash-body" >
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/addService`}>
                            <AddService></AddService>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageService`}>
                            <ManageService></ManageService>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/review`}>
                            <GiveReview></GiveReview>
                        </Route>
                        <Route path={`${path}/manageOrders`}>
                            <ManageAllOrder></ManageAllOrder>
                        </Route>
                        <Route path={`${path}/myorder`}>
                            <MyOrder></MyOrder>
                        </Route>

                    </Switch>

                </div>



            </div>
        </main>
    );
};

export default Dashboard;