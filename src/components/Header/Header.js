import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './header.scss';
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className = {style.bigbg}>
        		<div className = {style.oneonebg}>
	        		<ul ref = 'menu' className = {style.menuDiv} onMouseOver = {()=>{
        				this.refs.menu.style.display = 'block';
	        		}} style = {{display:'none'}} onMouseOut = {()=>{
        				this.refs.menu.style.display = 'none';
	        		}}>
						<li><Link to = ''>我的帐户</Link></li>
						<li><Link to = ''>我的邀请</Link></li>
						<li><Link to = ''>购物车</Link></li>
						<li><Link to = ''>我的订单</Link></li>
						<li><Link to = ''>安全中心</Link></li>
						<li><Link to = ''>提交工单</Link></li>
						<li><Link to = ''>系统公告</Link></li>
						<li><Link to = ''>退出帐号</Link></li>
					</ul>
        			<h1><img src = {require('./img/logo.png')} /></h1>
        			<ul>
        				<li><Link to=''>首页</Link></li>
        				<li><Link to=''>关于我们</Link></li>
        				<li><Link to=''>算力商城</Link></li>
        				<li><Link to=''>推荐人计划</Link></li>
        			</ul>
        			<Link to = 'javacript:;' className = {style.myCenter} onMouseOver = {()=>{
        				this.refs.menu.style.display = 'block';
        			}} onMouseOut = {()=>{
        				this.refs.menu.style.display = 'none';
        			}}>
        				<img className = {style.human} src = {require('./img/people_icon.png')} />
        				<p>个人中心</p>
        				<img className = {style.goingDown} src = {require('./img/up_blue.png')} />
        			</Link>
        		</div>
        	</div>
        )
    }
}