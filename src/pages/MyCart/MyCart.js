import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './mycart.scss';
export default class MyCart extends Component {
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
		        			<li><p>共计<span>3</span>件</p></li>
		        		</ul>	
		        		<table className = {style.myCart}>
                            <tbody>
                              <tr className = {style.h40}>
                                <th style = {{width:'349px'}}>商品</th>
                                <th style = {{width:'100px'}}>售价</th>
                                <th style = {{width:'120px'}}>数量</th>
                                <th style = {{width:'100px'}}>小计</th>
                                <th style = {{width:'80px'}}>操作</th>
                              </tr>
                              <tr>
                                <td>
                                	<dl className = {style.goodsName}>
                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
                                		<dd>
                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
                                			<p className = {style.p14}>充值电费</p>
	        								<input type= 'input' defaultValue = '电费900天 ¥18000' />
                                		</dd>
                                	</dl>
                                </td>
                                <td><p>¥13200</p></td>
                                <td><p className = {style.addndecre}><input className = {style.btn} type = "button" value = "-"/><input className = {style.nums} value = '1'/><input className = {style.btn} type = "button" value = "+" /></p></td>
                                <td><p className = {style.red}>¥13200</p></td>
                                <td><img className = {style.del} src = {require('./img/delete_buy_icon.png')}/></td>           
                              </tr>
                              <tr>
                                <td>
                                	<dl className = {style.goodsName}>
                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
                                		<dd>
                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
                                			<p className = {style.p14}>充值电费</p>
	        								<input type= 'input' defaultValue = '电费900天 ¥18000' />
                                		</dd>
                                	</dl>
                                </td>
                                <td><p>¥13200</p></td>
                                <td><p className = {style.addndecre}><input className = {style.btn} type = "button" value = "-"/><input className = {style.nums} value = '1'/><input className = {style.btn} type = "button" value = "+" /></p></td>
                                <td><p className = {style.red}>¥13200</p></td>
                                <td><img className = {style.del} src = {require('./img/delete_buy_icon.png')}/></td>           
                              </tr>
                              <tr>
                                <td>
                                	<dl className = {style.goodsName}>
                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
                                		<dd>
                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
                                			<p className = {style.p14}>充值电费</p>
	        								<input type= 'input' defaultValue = '电费900天 ¥18000' />
                                		</dd>
                                	</dl>
                                </td>
                                <td><p>¥13200</p></td>
                                <td><p className = {style.addndecre}><input className = {style.btn} type = "button" value = "-"/><input className = {style.nums} value = '1'/><input className = {style.btn} type = "button" value = "+" /></p></td>
                                <td><p className = {style.red}>¥13200</p></td>
                                <td><img className = {style.del} src = {require('./img/delete_buy_icon.png')}/></td>           
                              </tr>
                              <tr>
                                <td>
                                	<dl className = {style.goodsName}>
                                		<dt><img src = {require('./img/prdimg.png')} /></dt>
                                		<dd>
                                			<p className = {style.p16}>14T算力服务器 期限720天+送180天</p>
                                			<p className = {style.p14}>充值电费</p>
	        								<input type= 'input' defaultValue = '电费900天 ¥18000' />
                                		</dd>
                                	</dl>
                                </td>
                                <td><p>¥13200</p></td>
                                <td><p className = {style.addndecre}><input className = {style.btn} type = "button" value = "-"/><input className = {style.nums} value = '1'/><input className = {style.btn} type = "button" value = "+" /></p></td>
                                <td><p className = {style.red}>¥13200</p></td>
                                <td><img className = {style.del} src = {require('./img/delete_buy_icon.png')}/></td>           
                              </tr>
                            </tbody>
                        </table>

                        <div className = {style.total}><p>总消费合计：<span>¥39600</span></p></div>

						<ul className = {style.btnBox}>
							<li><Link className = {style.whiteBtn} to = ''>继续购物</Link></li>
							<li><Link className = {style.blueBtn} to = ''>提交订单</Link></li>
						</ul>

        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}