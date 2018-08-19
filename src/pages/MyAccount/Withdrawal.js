import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './withdrawal.scss';

export default class Withdrawal extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className = {style.bigbody}>
                    <div className = {style.payIt}>
                        <h2>在线提现</h2>
                        <div className = {style.inputBox}>
                            <div className = {style.row}>
                                <p>提现金额</p>                  
                                <input ref = 'email' className = {style.input} placeholder = '请输入邮箱' />
                                <p className = {style.yuan}>元</p>
                            </div>
                            <p className = {style.inputWords}>帐户余额：<span>100000</span>元</p>
                            <div className = {style.row}>
                                <p><span>*</span>开户银行</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '开户银行' />
                            </div>
                            <div className = {style.row}>
                                <p><span>*</span>银行卡号</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '银行卡号' />
                            </div>
                            <div className = {style.row}>
                                <p><span>*</span>邮箱</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '请输入邮箱' />
                            </div>
                            <div className = {style.row}>
                                <p><span>*</span>姓名</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '请输入姓名' />
                            </div>
                            <div className = {style.row}>
                                <p><span>*</span>电话号码</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '请输入电话' />
                            </div>
                            <div className = {style.row}>
                                <p>短信验证</p>                 
                                <input ref = 'verificationCode' className = {style.inputCode} placeholder = '请输入短信验证码' />
{/*                                <button className = {style.sendCode}> 发送验证码 </button>
*/}                                <img src = {require ('./img/code.jpg')} />
                            </div>
                            <button className = {style.submit}> 确认提现 </button>



{/*                            
                            <p className = {style.inputWords}>备注：建议上传带有付款人帐号/姓名，收款人帐号/号户名的流水单截图，方便财务核对您提交的打款信息。</p>
                            */}
                        </div>
                        <dl className = {style.remind}>
                            <dt><img src = {require('./img/remind.png')} /><p>声明</p></dt>
                            <dd>用户需要确保以上填写的信息准确有效，若因以上账户信息错误导致的发货错误或延误等一切后果，需要用户自行承担！</dd>
                        </dl>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

