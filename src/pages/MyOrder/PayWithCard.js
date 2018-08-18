import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './myorder.scss';

export default class PayWithCard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className = {style.bigbody}>
                    <div className = {style.payIt}>
                        <h2>线下银行卡支付</h2>

                        <div className = {style.inputBox}>
                            <div className = {style.row}>
                                <p>订单ID</p>                  
                                <input ref = 'email' className = {style.input} placeholder = '请输入邮箱' />
                            </div>
                            <div className = {style.row}>
                                <p><span>*</span>银行户名</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '请输入密码' />
                            </div>
                            <div className = {style.row}>
                                <p><span>*</span>银行卡号</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '请输入密码' />
                            </div>
                            <div className = {style.row}>
                                <p><span>*</span>付款金额</p>                  
                                <input ref = 'password' className = {style.input} placeholder = '请输入密码' />
                            </div>
                            <p className = {style.inputWords}>订单需付金额：<span>100000</span>元</p>

                            <div className = {style.row} style = {{justifyContent:'flex-start'}}>
                                <p><span>*</span>银行户名</p>                  
                                <dl>
                                    <dt><img src = {require('./img/add.png')}/></dt>
                                    <dd>上传附件</dd>
                                </dl>
                            </div>
                            <p className = {style.inputWords}>备注：建议上传带有付款人帐号/姓名，收款人帐号/号户名的流水单截图，方便财务核对您提交的打款信息。</p>
                            <button className = {style.submit}> 确认支付 </button>
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

