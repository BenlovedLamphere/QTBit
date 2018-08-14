import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getwords} from "actions/login";

import style from './login.scss';

class Login extends Component {





    componentDidMount() {

        //如果想静态页面第一次加载后自动请求接口，写在这里：
        //this.props.getwords('5');
    }



    render() {
        console.log (this.props.wordstext.words.hitokoto)

        if (this.props.wordstext.hitokoto) {
            alert(this.props.wordstext.words.hitokoto)
        }


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
						<p>验证码<span></span></p>            		
            			<input className = {style.inputCode} placeholder = '请输入密码' />
            			<div className = {style.inputAfter}><img src = {require('./img/safe_icon.png')}/></div>
            			<img src = {require ('./img/code.jpg')} />
            		</div>
            		<button className = {style.submit} onClick = {()=>{this.props.getwords('5')}}> 立即登录 </button>
            		<div className = {style.rowRegister}>
            			<Link to = ''>忘记密码？</Link>
            			<Link className = {style.goReg} to = '/register/'><p>注册帐号</p><img src = {require('./img/go_icon.png')}/></Link>
            		</div>
            	</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        wordstext: state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getwords: (num) => {
            dispatch(getwords(num))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);