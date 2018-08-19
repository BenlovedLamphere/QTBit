import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './myinvite.scss';

export default class MyInvite extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'myInvite'/>
        			<div className = {style.right}>
        				<h2>我的资产</h2>
        				<div className = {style.inviteBox}>
        					<img className = {style.qrcode} src = {require('./img/qrcode.png')} />
        					<ul className = {style.inviteThings}>
        						<li>我的推荐ID</li>
        						<li><input type = 'input' defaultValue = '3126'/> <Link to = ''>复制</Link></li>
        						<li>推荐链接</li>
        						<li><input type = 'input' defaultValue = 'http://www.qt-bit.com/?invitecode=3216'/> <Link to = ''>复制</Link></li>
        					</ul>
        					<ul className = {style.invited}>
        						<li>
        							<p>已推荐好友</p>
        							<p><span>6</span>位</p>
        						</li>
        						<li>
        							<p>已获得奖励</p>
        							<p><span>13200</span>元</p>
        						</li>
        					</ul>
        				</div>
        				<div className = {style.tableBox}>
        					<div className = {style.leftTable}>
        						<h3>已邀好友</h3>
		                        <table className = {style.tables}>
		                            <tbody>
		                              <tr>
		                                <th>手机号</th>
		                                <th>时间</th>
		                              </tr>
		                              <tr>
		                                <td>13693838383</td>
		                                <td>2018/87/90</td>
		                              </tr>
		                              <tr>
		                                <td>12999999999</td>
		                                <td>2019/07/55</td>
		                              </tr>
		                              <tr>
		                                <td>12999999999</td>
		                                <td>2019/07/55</td>
		                              </tr>
  									</tbody>
  								</table>
        					</div>

        					<div className = {style.rightTable}>
        						<h3>奖金记录</h3>
		                        <table className = {style.tables}>
		                            <tbody>
		                              <tr>
		                                <th>客户姓名</th>
		                                <th>推荐人</th>
		                                <th>矿机编号</th>
		                                <th>推荐奖励</th>
		                                <th>时间</th>
		                              </tr>
		                              <tr>
		                                <td>五五</td>
		                                <td>王五</td>
		                                <td>10009</td>
		                                <td>2400</td>
		                                <td>2019/07/55</td>
		                              </tr>
		                              <tr>
		                                <td>五五</td>
		                                <td>王五</td>
		                                <td>10009</td>
		                                <td>2400</td>
		                                <td>2019/07/55</td>
		                              </tr>
		                              <tr>
		                                <td>五五</td>
		                                <td>王五</td>
		                                <td>10009</td>
		                                <td>2400</td>
		                                <td>2019/07/55</td>
		                              </tr>
  									</tbody>
  								</table>
        					</div>
        				</div>

        				<h2 className = {style.words}>兑换说明</h2>
        				<div className = {style.wordsBox}>
        					<p>1.您推荐的用户购买算力服务器后，您可以获得算力合约合同金额8%的直接推荐奖励或4%的间接推荐奖励。</p>
        					<p>2.QT-BIG.COM保留随时对推荐奖励规则进行调整的权利，但是对您推荐的好友数量没有限制。</p>
        					<p>3.被推荐人必须使用您的推荐链接、二维码或者推荐ID注册才可以。</p>
        					<p>特别注意：由于市场环境的改变，欺诈风险的存在等原因，QT-BIT.COM保留随时对推荐奖励收益规则作出调整的最终解释权。</p>
        				</div>
        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}