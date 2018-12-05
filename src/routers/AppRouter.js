import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import React from "react";
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';
import PortfolioItemPage from '../components/PortfolioItemPage'

//Rout through the different pages
const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/contact" component={ContactUs}/>
                <Route component={NotFoundPage}/>
                <Route/>
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;