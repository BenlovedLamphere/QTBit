import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './myaccount.scss';

export default class TurnOver extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'myAccount'/>
        			<div className = {style.right}>
                        <div className = {style.titleSelect}>
                            <h2>我的矿机</h2>
                            <select defaultValue = 'all' className = {style.Select}>
                                <option value = 'all'>全部记录</option>
                                <option value = 'cny'>CNY</option>
                                <option value = 'btc'>BTC</option>
                                <option value = 'qc'>QC</option>
                                <option value = 'ghp'>GHP</option>
                            </select>
                        </div>
                        <table className = {style.myMiner}>
                            <tbody className = {style.turnOver}>
                              <tr>
                                <th>时间</th>
                                <th>类型</th>
                                <th>数量</th>
                                <th>状态</th>
                              </tr>
                              <tr>
                                <td>201801/01 18:49:09</td>
                                <td>充值CNY</td>
                                <td>2100.00</td>
                                <td>成功</td>                               
                              </tr>
                              <tr>
                                <td>201801/01 18:49:09</td>
                                <td>充值CNY</td>
                                <td>2100.00</td>
                                <td>成功</td>                               
                              </tr>
                              <tr>
                                <td>201801/01 18:49:09</td>
                                <td>充值CNY</td>
                                <td>2100.00</td>
                                <td>成功</td>                               
                              </tr>
                              <tr>
                                <td>201801/01 18:49:09</td>
                                <td>充值CNY</td>
                                <td>2100.00</td>
                                <td>成功</td>                               
                              </tr>
                              <tr>
                                <td>201801/01 18:49:09</td>
                                <td>充值CNY</td>
                                <td>2100.00</td>
                                <td>成功</td>                               
                              </tr>
                              <tr>
                                <td>201801/01 18:49:09</td>
                                <td>充值CNY</td>
                                <td>2100.00</td>
                                <td>成功</td>                               
                              </tr>
                              <tr>
                                <td>201801/01 18:49:09</td>
                                <td>充值CNY</td>
                                <td>2100.00</td>
                                <td>成功</td>                               
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

