import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './safetycenter.scss';

export default class AddCNYAccount extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'mySecurity'/>
        			<div className = {style.right}>
                  <h2>新增CNY帐户</h2>
                  <div className = {style.loginBox}>
                      <div className = {style.row}>
                          <p>收款人姓名</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入收款人姓名' />
                      </div>
                      <div className = {style.row}>
                          <p>收款人帐号</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入收款人帐号' />
                      </div>
                      <div className = {style.row}>
                          <p>收款银行</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入收款银行' />
                      </div>
                      <div className = {style.row}>
                          <p>短信验证</p>                 
                          <input ref = 'verificationCode' className = {style.inputCode} placeholder = '请输入短信验证码' />
                          <button className = {style.sendCode}> 发送验证码 </button>
                      </div>

                      <button className = {style.submit} onClick = {()=>{this.goNext()}} > 确定 </button>
                  </div>
        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}

