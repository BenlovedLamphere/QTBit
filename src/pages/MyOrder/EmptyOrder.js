import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './myorder.scss';


export default class EmptyOrder extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'myOrder'/>
        			<div className = {style.right}>
        				<h2>销售订单</h2>
                        <ul className = {style.tabs}>
                            <li onMouseOver = {()=>{
                        this.refs.allOrder.style.display = 'block';
                        this.refs.waitPay.style.display = 'none';
                        this.refs.paydedOrder.style.display = 'none';
                    }} ><Link to = ''>全部订单</Link></li>
                            <li onMouseOver = {()=>{
                        this.refs.allOrder.style.display = 'none';
                        this.refs.waitPay.style.display = 'block';
                        this.refs.paydedOrder.style.display = 'none';
                    }} ><Link to = ''>待付款</Link></li>
                            <li onMouseOver = {()=>{
                        this.refs.allOrder.style.display = 'none';
                        this.refs.waitPay.style.display = 'none';
                        this.refs.paydedOrder.style.display = 'block';
                    }} ><Link to = ''>交易完成</Link></li>
                        </ul>
                        <div ref = 'allOrder' className = {style.allOrder}>
	                        <div className = {style.emptyBox}>
	                            <img src = {require('./img/empty.png')} />
	                            <h4>暂无订单，<br/>去其他地方转转吧～</h4>
	                        </div>
                        </div>
                        <div ref = 'waitPay' style = {{display:'none'}} className = {style.waitPay}>
	                        <div className = {style.emptyBox}>
	                            <img src = {require('./img/empty.png')} />
	                            <h4>暂无订单，<br/>去其他地方转转吧～</h4>
	                        </div>
                        </div>
                        <div ref = 'paydedOrder' style = {{display:'none'}} className = {style.paydedOrder}>
	                        <div className = {style.emptyBox}>
	                            <img src = {require('./img/empty.png')} />
	                            <h4>暂无订单，<br/>去其他地方转转吧～</h4>
	                        </div>
                        </div>
        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}

