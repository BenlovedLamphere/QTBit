import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './safetycenter.scss';

export default class SafetyCenter extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'mySecurity'/>
        			<div className = {style.right}>
                        <h2>安全中心</h2>
                        <table className = {style.myMiner}>
                            <tbody>
                              <tr>
                                <th style = {{width:'140px'}}>绑定手机</th>
                                <td style = {{width:'460px'}}><p>182****9996</p></td>
                                <td style = {{width:'100px'}}><p><img src = {require('./img/success_lit.png')}/><span>已绑定</span></p></td>
                                <td><Link to = ''>去修改</Link></td>                  
                              </tr>
                              <tr>
                                <th>绑定邮箱</th>
                                <td><p>67839@qq.com</p></td>
                                <td><p><img src = {require('./img/success_lit.png')}/><span>已绑定</span></p></td>
                                <td></td>                  
                              </tr>
                              <tr>
                                <th>我的密码</th>
                                <td><p className = {style.words}>用于保护帐户信息和登录安全</p></td>
                                <td><p><img src = {require('./img/success_lit.png')}/><span>已绑定</span></p></td>
                                <td><Link to = ''>去修改</Link></td>                  
                              </tr>
                              <tr>
                                <th>实名认证</th>
                                <td><p className = {style.words}>实名认证用于用户安全，建议立即设置</p></td>
                                <td><p><img src = {require('./img/fail_lit.png')}/><span>已绑定</span></p></td>
                                <td><Link to = ''>去修改</Link></td>                  
                              </tr>
                              <tr>
                                <th>绑定谷歌验证器<br/>(Authenticator)</th>
                                <td><p className = {style.words}>为了您的帐户安全，在进行交易、充值及提现等操作前需<br/>要您先开启两步认证。</p></td>
                                <td><p><img src = {require('./img/fail_lit.png')}/><span>已绑定</span></p></td>
                                <td><Link to = ''>去修改</Link></td>                  
                              </tr>
                              <tr>
                                <th>CNY提现地址</th>
                                <td><p className = {style.words}>用于CNY帐户提现</p></td>
                                <td><p><img src = {require('./img/success_lit.png')}/><span>已绑定</span></p></td>
                                <td><Link to = ''>去修改</Link></td>                  
                              </tr>
                              <tr>
                                <th>QC提现地址</th>
                                <td><p className = {style.words}>用于QC帐户提现</p></td>
                                <td><p><img src = {require('./img/success_lit.png')}/><span>已绑定</span></p></td>
                                <td><Link to = ''>去修改</Link></td>                  
                              </tr>
                              <tr>
                                <th>BTC提现地址</th>
                                <td><p className = {style.words}>用于BTC帐户提现</p></td>
                                <td><p><img src = {require('./img/success_lit.png')}/><span>已绑定</span></p></td>
                                <td><Link to = ''>去修改</Link></td>                  
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

