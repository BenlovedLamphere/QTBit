import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import Login from 'bundle-loader?lazy&name=login!pages/Login/Login';
import Register from 'bundle-loader?lazy&name=register!pages/Register/Register';
import MyAccount from 'bundle-loader?lazy&name=myaccount!pages/MyAccount/MyAccount';
import ProductList from 'bundle-loader?lazy&name=productlist!pages/ProductList/ProductList';
import Product from 'bundle-loader?lazy&name=product!pages/Product/Product';
import MyCart from 'bundle-loader?lazy&name=mycart!pages/MyCart/MyCart';
import MyOrder from 'bundle-loader?lazy&name=myorder!pages/MyOrder/MyOrder';
import MyInvite from 'bundle-loader?lazy&name=myinvite!pages/MyInvite/MyInvite';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/page1" component={createComponent(Page1)}/>
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/login" component={createComponent(Login)}/>
            <Route path="/register" component={createComponent(Register)}/>
            <Route path="/myaccount" component={createComponent(MyAccount)}/>
            <Route path="/productlist" component={createComponent(ProductList)}/>
            <Route path="/product" component={createComponent(Product)}/>
            <Route path="/mycart" component={createComponent(MyCart)}/>
            <Route path="/myorder" component={createComponent(MyOrder)}/>
            <Route path="/myinvite" component={createComponent(MyInvite)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);
