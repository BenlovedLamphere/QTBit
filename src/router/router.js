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
import TurnOver from 'bundle-loader?lazy&name=turnover!pages/MyAccount/TurnOver';
import ProductList from 'bundle-loader?lazy&name=productlist!pages/ProductList/ProductList';
import Product from 'bundle-loader?lazy&name=product!pages/Product/Product';
import MyCart from 'bundle-loader?lazy&name=mycart!pages/MyCart/MyCart';
import EmptyCart from 'bundle-loader?lazy&name=emptycart!pages/MyCart/EmptyCart';
import MyOrder from 'bundle-loader?lazy&name=myorder!pages/MyOrder/MyOrder';
import PayWithCard from 'bundle-loader?lazy&name=paywithcard!pages/MyOrder/PayWithCard';
import EmptyOrder from 'bundle-loader?lazy&name=emptyorder!pages/MyOrder/EmptyOrder';
import MyInvite from 'bundle-loader?lazy&name=myinvite!pages/MyInvite/MyInvite';
import ForgotPwd from 'bundle-loader?lazy&name=forgotpwd!pages/ForgotPwd/ForgotPwd';
import SafetyCenter from 'bundle-loader?lazy&name=safetycenter!pages/SafetyCenter/SafetyCenter';
import EditPhone from 'bundle-loader?lazy&name=editphone!pages/SafetyCenter/EditPhone';
import EditPassword from 'bundle-loader?lazy&name=editphone!pages/SafetyCenter/EditPassword';
import AddCNYAccount from 'bundle-loader?lazy&name=addcnyaccount!pages/SafetyCenter/AddCNYAccount';
import AddQCAccount from 'bundle-loader?lazy&name=addqcaccount!pages/SafetyCenter/AddQCAccount';
import AddBTCAccount from 'bundle-loader?lazy&name=addbtcaccount!pages/SafetyCenter/AddBTCAccount';
import Certification from 'bundle-loader?lazy&name=certification!pages/SafetyCenter/Certification';

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
            <Route path="/turnover" component={createComponent(TurnOver)}/>
            <Route path="/productlist" component={createComponent(ProductList)}/>
            <Route path={`/product/:number`} component={createComponent(Product)}/>
            <Route path="/mycart" component={createComponent(MyCart)}/>
            <Route path="/emptycart" component={createComponent(EmptyCart)}/>
            <Route path="/myorder" component={createComponent(MyOrder)}/>
            <Route path="/paywithcard" component={createComponent(PayWithCard)}/>
            <Route path="/emptyorder" component={createComponent(EmptyOrder)}/>
            <Route path="/myinvite" component={createComponent(MyInvite)}/>
            <Route path="/forgotpwd" component={createComponent(ForgotPwd)}/>
            <Route path="/safetycenter" component={createComponent(SafetyCenter)}/>
            <Route path="/editphone" component={createComponent(EditPhone)}/>
            <Route path="/editpassword" component={createComponent(EditPassword)}/>
            <Route path="/addcnyaccount" component={createComponent(AddCNYAccount)}/>
            <Route path="/addqcaccount" component={createComponent(AddQCAccount)}/>
            <Route path="/addbtcaccount" component={createComponent(AddBTCAccount)}/>
            <Route path="/certification" component={createComponent(Certification)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);
