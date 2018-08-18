import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './mycart.scss';
export default class EmptyCart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'myCart'/>
        			<div className = {style.right}>
		        		<ul className = {style.title}>
		        			<li><h2>我的资产</h2></li>
		        			<li><p>共计<span>0</span>件</p></li>
		        		</ul>	
                        <div className = {style.emptyBox}>
                            <img src = {require('./img/cart.png')} />
                            <h4>购物车暂时是空的，<br/>快去购买您心仪的产品吧～</h4>
                            <Link className = {style.goShoping} to =''>立即购物</Link>
                        </div>
        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}