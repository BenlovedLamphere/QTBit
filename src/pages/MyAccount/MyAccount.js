import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './myaccount.scss';

export default class MyAccount extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'myAccount'/>
        			<div className = {style.right}>
        				<h2>我的资产</h2>
        				<div className = {style.itemBox}>
        					<div className = {style.boxTitle}>
	        					<h3>人民币CNY</h3>
	        					<Link to ='' >查看流水 ></Link>
        					</div>
        					<div className = {style.boxBody}>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>总资产</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>冻结资金</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>帐户余额</dd>
        						</dl>
        						<ul>
        							<li><Link className = {style.blueBtn} to = ''>充值CNY</Link></li>
        							<li><Link className = {style.whiteBtn} to = ''>提取CNY</Link></li>
        						</ul>
        					</div>
        				</div>
        				<div className = {style.itemBox}>
        					<div className = {style.boxTitle}>
	        					<h3>比特币BTC</h3>
	        					<Link to ='' >查看流水 ></Link>
        					</div>
        					<div className = {style.boxBody}>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>总资产</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>冻结资金</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>帐户余额</dd>
        						</dl>
        						<ul>
        							<li><Link className = {style.blueBtn} to = ''>充值CNY</Link></li>
        							<li><Link className = {style.whiteBtn} to = ''>提取CNY</Link></li>
        						</ul>
        					</div>
        				</div>
        				<div className = {style.itemBox}>
        					<div className = {style.boxTitle}>
	        					<h3>中币QC</h3>
	        					<Link to ='' >查看流水 ></Link>
        					</div>
        					<div className = {style.boxBody}>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>总资产</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>冻结资金</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>帐户余额</dd>
        						</dl>
        						<ul>
        							<li><Link className = {style.blueBtn} to = ''>充值CNY</Link></li>
        							<li><Link className = {style.whiteBtn} to = ''>提取CNY</Link></li>
        						</ul>
        					</div>
        				</div>
        				<div className = {style.itemBox}>
        					<div className = {style.boxTitle}>
	        					<h3>GHP</h3>
	        					<Link to ='' >查看流水 ></Link>
        					</div>
        					<div className = {style.boxBody}>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>总资产</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>冻结资金</dd>
        						</dl>
        						<dl>
        							<dt><span>0.00</span> 元</dt>
        							<dd>帐户余额</dd>
        						</dl>
        						<ul>
        							<li><Link className = {style.blueBtn} to = ''>充值CNY</Link></li>
        							<li><Link className = {style.whiteBtn} to = ''>提取CNY</Link></li>
        						</ul>
        					</div>
        				</div>
                        <h2>我的矿机</h2>
                        <table className = {style.myMiner}>
                            <tbody>
                              <tr>
                                <th>矿机编号</th>
                                <th>商品名称</th>
                                <th>状态</th>
                                <th>使用期限</th>
                                <th>剩余时间</th>
                                <th>剩余电量</th>
                                <th>已采BTC</th>
                                <th>操作</th>
                              </tr>
                              <tr>
                                <td>10001</td>
                                <td>算力服务器14T<br/>送6个月</td>
                                <td>运行中</td>
                                <td>2018-08-09至<br/>2018-09-08</td>
                                <td>365天</td>
                                <td>90天</td>
                                <td>0.00005678</td>
                                <td><div className = {style.tableBtns}><Link className = {style.blueBtn} to = ''>矿机充电</Link></div></td>                  
                              </tr>
                              <tr>
                                <td>10001</td>
                                <td>算力服务器14T<br/>送6个月</td>
                                <td>运行中</td>
                                <td>2018-08-09至<br/>2018-09-08</td>
                                <td>365天</td>
                                <td>90天</td>
                                <td>0.00005678</td>
                                <td><div className = {style.tableBtns}><Link className = {style.blueBtn} to = ''>矿机充电</Link></div></td>                  
                              </tr>
                              <tr>
                                <td>10001</td>
                                <td>算力服务器14T<br/>送6个月</td>
                                <td>运行中</td>
                                <td>2018-08-09至<br/>2018-09-08</td>
                                <td>365天</td>
                                <td>90天</td>
                                <td>0.00005678</td>
                                <td><div className = {style.tableBtns}><Link className = {style.blueBtn} to = ''>矿机充电</Link></div></td>                  
                              </tr>
                              <tr>
                                <td>10001</td>
                                <td>算力服务器14T<br/>送6个月</td>
                                <td>运行中</td>
                                <td>2018-08-09至<br/>2018-09-08</td>
                                <td>365天</td>
                                <td>90天</td>
                                <td>0.00005678</td>
                                <td><div className = {style.tableBtns}><Link className = {style.blueBtn} to = ''>矿机充电</Link><Link className = {style.redBtn} to = ''>删除矿机</Link></div></td>                  
                              </tr>
                              <tr>
                                <td>10001</td>
                                <td>算力服务器14T<br/>送6个月</td>
                                <td>运行中</td>
                                <td>2018-08-09至<br/>2018-09-08</td>
                                <td>365天</td>
                                <td>90天</td>
                                <td>0.00005678</td>
                                <td><div className = {style.tableBtns}><Link className = {style.blueBtn} to = ''>矿机充电</Link></div></td>                  
                              </tr>
                            </tbody>
                        </table>
        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}

