import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './safetycenter.scss';

export default class EditPassword extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'mySecurity'/>
        			<div className = {style.right}>
                  <h2>修改密码</h2>
                  <div className = {style.loginBox}>
                      <div className = {style.row}>
                          <p>原密码</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入原密码' />
                      </div>
                      <div className = {style.row}>
                          <p>新密码</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '请输入新密码' />
                      </div>
                      <div className = {style.row}>
                          <p>确认密码</p>                  
                          <input ref = 'handPhone' className = {style.input} placeholder = '再次输入密码' />
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

