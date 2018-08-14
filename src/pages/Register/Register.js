import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './register.scss';

export default class Register extends Component {
    render() {
        return (
            <div className={style.bigbg}>
                <div className = {style.loginBox}>
                    <div className = {style.rowTitle}>
                        <h1>帐号登录</h1>
                        <img src = {require('./img/logo_gray.png')} />
                    </div>
                    <div className = {style.row}>
                        <p>邮箱<span></span></p>                  
                        <input className = {style.input} placeholder = '请输入邮箱' />
                        <div className = {style.inputAfter}><img src = {require('./img/email_icon.png')}/></div>
                    </div>
                    <div className = {style.row}>
                        <p>密码<span></span></p>                  
                        <input className = {style.input} placeholder = '请输入密码' />
                        <div className = {style.inputAfter}><img src = {require('./img/lock_icon.png')}/></div>
                    </div>
                    <div className = {style.row}>
                        <p>确认密码<span></span></p>                  
                        <input className = {style.input} placeholder = '请再次输入密码' />
                        <div className = {style.inputAfter}><img src = {require('./img/lock_icon.png')}/></div>
                    </div>
                    <div className = {style.row}>
                        <p>手机号码<span></span></p>                 
                        <input className = {style.inputCode} placeholder = '请输入手机号码' />
                        <div className = {style.inputAfter}><img src = {require('./img/phone_icon.png')}/></div>
                        <button className = {style.sendCode}> 发送验证码 </button>
                   </div>
                    <div className = {style.row}>
                        <p>短信验证<span></span></p>                  
                        <input className = {style.input} placeholder = '请输入短信验证码' />
                        <div className = {style.inputAfter}><img src = {require('./img/safe_icon.png')}/></div>
                    </div>
                    <div className = {style.rowLaw}>
                        <input type="checkbox" defaultChecked /><p>我已阅读并同意<Link to = ''>《钱通比特服务条款》</Link></p>
                    </div>
                    <button className = {style.submit}> 创建新帐户 </button>
                    <div className = {style.rowRegister}>
                        <Link to = ''>没有收到邮件？</Link>
                        <Link className = {style.goReg} to = '/login/'><p>已有帐号/去登录</p><img src = {require('./img/go_icon.png')}/></Link>
                    </div>
                </div>
            </div>
        )
    }
}