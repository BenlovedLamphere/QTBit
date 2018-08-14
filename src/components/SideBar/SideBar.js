import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './sidebar.scss';

export default class SideBar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
    	console.log();
        return (
			<ul className = {style.left}>
				<li><Link className = {this.props.witchOne == 'myAccount' ? style.onHover : ''} to = ''>我的帐户</Link></li>
				<li><Link className = {this.props.witchOne == 'myInvite' ? style.onHover : ''} to = ''>我的邀请</Link></li>
				<li><Link className = {this.props.witchOne == 'myCart' ? style.onHover : ''} to = ''>购物车</Link></li>
				<li><Link className = {this.props.witchOne == 'myOrder' ? style.onHover : ''} to = ''>我的订单</Link></li>
				<li><Link className = {this.props.witchOne == 'mySecurity' ? style.onHover : ''} to = ''>安全中心</Link></li>
				<li><Link className = {this.props.witchOne == 'submitWork' ? style.onHover : ''} to = ''>提交工单</Link></li>
				<li><Link className = {this.props.witchOne == 'sysBulletin' ? style.onHover : ''} to = ''>系统公告</Link></li>
				<li><Link className = {this.props.witchOne == 'exitAccount' ? style.onHover : ''} to = ''>退出帐号</Link></li>
			</ul>
        )
    }
}

