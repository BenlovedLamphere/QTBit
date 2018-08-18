import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './safetycenter.scss';

export default class EditPhone extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'mySecurity'/>
        			<div className = {style.right}>
                  <h2>修改手机</h2>
                  <div className = {style.loginBox}>
                      <div className = {style.row}>
                          <p>新手机号</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入手机号码' />
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

