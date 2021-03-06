import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import login from 'reducers/login';
import productlist from 'reducers/productlist';
import product from 'reducers/product';
import register from 'reducers/register';
import certification from 'reducers/certification';


export default combineReducers({
    counter,
    userInfo,
    login,
    productlist,
    product,
    register,
    certification
});