import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './myorder.scss';


export default class MyOrder extends Component {
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
                        	<ul className = {style.title}>
                        		<li className = {style.col0c2}>订单号：201805230149058123</li>
                        		<li className = {style.col9fa}>2018/02/28 18:34:02</li>
                        	</ul>
                        	<table className = {style.order}>
                        		<tbody>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td>
		                                	<p>选择支付方式：</p>
											<input name="cardPay" type="radio" defaultChecked="checked"/>线下银行卡支付 
											<input className = {style.aliPay} name="aliPay" type="radio" />支付宝支付
		                                </td>
		                                <td colSpan="2">
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}><Link to = ''>取消订单</Link></p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>应付：<span>¥18000</span></p>
                                			<p className = {style.p14}><Link className = {style.blueBtn} to = ''>提交订单</Link></p>
		                                </td>
	                        		</tr>
	                        	</tbody>
                           	</table>



                        	<ul className = {style.title}>
                        		<li className = {style.col0c2}>订单号：201805230149058123</li>
                        		<li className = {style.col9fa}>2018/02/28 18:34:02</li>
                        	</ul>
                        	<table className = {style.order}>
                        		<tbody>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td>
		                                	<p className = {style.paydedTd}>支付方式：<span>线下银行卡支付</span></p>
		                                </td>
		                                <td colSpan="2">
		                                	<p className = {style.paydedTd}>商品总价：<span>¥18000</span></p>
		                                </td>
		                                <td>
		                                	<p className = {style.paydedTd}>已付：<span>¥18000</span></p>
		                                </td>
	                        		</tr>
	                        	</tbody>
                           	</table>
                        </div>
                        <div ref = 'waitPay' style = {{display:'none'}} className = {style.waitPay}>
                        	<ul className = {style.title}>
                        		<li className = {style.col0c2}>订单号：201805230149058123</li>
                        		<li className = {style.col9fa}>2018/02/28 18:34:02</li>
                        	</ul>
                        	<table className = {style.order}>
                        		<tbody>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td>
		                                	<p>选择支付方式：</p>
											<input name="cardPay" type="radio" defaultChecked="checked"/>线下银行卡支付 
											<input className = {style.aliPay} name="aliPay" type="radio" />支付宝支付
		                                </td>
		                                <td colSpan="2">
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}><Link to = ''>取消订单</Link></p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>应付：<span>¥18000</span></p>
                                			<p className = {style.p14}><Link className = {style.blueBtn} to = ''>提交订单</Link></p>
		                                </td>
	                        		</tr>
	                        	</tbody>
                           	</table>
                        	<ul className = {style.title}>
                        		<li className = {style.col0c2}>订单号：201805230149058123</li>
                        		<li className = {style.col9fa}>2018/02/28 18:34:02</li>
                        	</ul>
                        	<table className = {style.order}>
                        		<tbody>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td>
		                                	<p>选择支付方式：</p>
											<input name="cardPay" type="radio" defaultChecked="checked"/>线下银行卡支付 
											<input className = {style.aliPay} name="aliPay" type="radio" />支付宝支付
		                                </td>
		                                <td colSpan="2">
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}><Link to = ''>取消订单</Link></p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>应付：<span>¥18000</span></p>
                                			<p className = {style.p14}><Link className = {style.blueBtn} to = ''>提交订单</Link></p>
		                                </td>
	                        		</tr>
	                        	</tbody>
                           	</table>
                        </div>
                        <div ref = 'paydedOrder' style = {{display:'none'}} className = {style.paydedOrder}>
                        	<ul className = {style.title}>
                        		<li className = {style.col0c2}>订单号：201805230149058123</li>
                        		<li className = {style.col9fa}>2018/02/28 18:34:02</li>
                        	</ul>
                        	<table className = {style.order}>
                        		<tbody>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td>
		                                	<p className = {style.paydedTd}>支付方式：<span>线下银行卡支付</span></p>
		                                </td>
		                                <td colSpan="2">
		                                	<p className = {style.paydedTd}>商品总价：<span>¥18000</span></p>
		                                </td>
		                                <td>
		                                	<p className = {style.paydedTd}>已付：<span>¥18000</span></p>
		                                </td>
	                        		</tr>
	                        	</tbody>
                           	</table>
                        	<ul className = {style.title}>
                        		<li className = {style.col0c2}>订单号：201805230149058123</li>
                        		<li className = {style.col9fa}>2018/02/28 18:34:02</li>
                        	</ul>
                        	<table className = {style.order}>
                        		<tbody>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td style = {{width:'340px'}}>
		                                	<dl className = {style.goodsTitle}>
		                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
		                                		<dd>
		                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
		                                			<p className = {style.p14}>电费900天 ¥18000</p>
		                                		</dd>
		                                	</dl>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>售价</p>
		                                </td>
		                                <td>
                                			<p className = {style.p16}>1</p>
                                			<p className = {style.p14}>数量</p>
		                                </td>    
		                                <td>
                                			<p className = {style.p16}>¥18000</p>
                                			<p className = {style.p14}>金额小计</p>
		                                </td>
	                        		</tr>
	                        		<tr>
		                                <td>
		                                	<p className = {style.paydedTd}>支付方式：<span>线下银行卡支付</span></p>
		                                </td>
		                                <td colSpan="2">
		                                	<p className = {style.paydedTd}>商品总价：<span>¥18000</span></p>
		                                </td>
		                                <td>
		                                	<p className = {style.paydedTd}>已付：<span>¥18000</span></p>
		                                </td>
	                        		</tr>
	                        	</tbody>
                           	</table>
                        </div>
        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}

