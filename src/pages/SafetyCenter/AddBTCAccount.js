import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './safetycenter.scss';

export default class AddBTCAccount extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'mySecurity'/>
        			<div className = {style.right}>
                  <h2>新增BTC帐户</h2>
                  <div className = {style.loginBox}>
                      <div className = {style.row}>
                          <p><span>*</span>BTC地址</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入BTC地址' />
                      </div>
                      <div className = {style.row}>
                          <p>备注信息</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入备注地址' />
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

