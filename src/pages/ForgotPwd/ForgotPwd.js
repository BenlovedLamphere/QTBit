import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import style from './forgotpwd.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ForgotPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step:1,
        };
    }
    componentDidMount() {
    }

    goNext () {
        let stepstate = this.state;
        stepstate.step = Number(stepstate.step) + 1;
        this.setState(stepstate);
    }


    render() {
        let aStepDom = '';
        console.log (this.state)


        switch (this.state.step) {
            case 1:
                aStepDom =  <div className = 'example' key = {this.state.step}>
                                <img className = {style.stepimg} src = {require('./img/step_01.png')}/>
                                <ul className = {style.stepwords}>
                                    <li className = {style.nowstep}>验证手机</li>
                                    <li>重设密码</li>
                                    <li>修改成功</li>
                                </ul>
                                <div className = {style.loginBox}>
                                    <div className = {style.row}>
                                        <p>验证手机<span></span></p>                  
                                        <input ref = 'handPhone' className = {style.input} placeholder = '请输入手机号码' />
                                        <div className = {style.inputAfter}><img src = {require('./img/phone_icon.png')}/></div>
                                    </div>
                                    <div className = {style.row}>
                                        <p>短信验证<span></span></p>                 
                                        <input ref = 'verificationCode' className = {style.inputCode} placeholder = '请输入短信验证码' />
                                        <div className = {style.inputAfter}><img src = {require('./img/safe_icon.png')}/></div>
                                        <button className = {style.sendCode}> 发送验证码 </button>
                                   </div>
                                    <button className = {style.submit} onClick = {()=>{this.goNext()}} > 下一步 </button>
                                </div>
                            </div>
                break;
            case 2:
                aStepDom =  <div className = 'example' key = {this.state.step}>
                                <img className = {style.stepimg} src = {require('./img/step_02.png')}/>
                                <ul className = {style.stepwords}>
                                    <li>验证手机</li>
                                    <li className = {style.nowstep}>重设密码</li>
                                    <li>修改成功</li>
                                </ul>
                                <div className = {style.loginBox}>
                                    <div className = {style.row}>
                                        <p>密码<span></span></p>                  
                                        <input ref = 'password' className = {style.input} placeholder = '请输入密码' />
                                        <div className = {style.inputAfter}><img src = {require('./img/lock_icon.png')}/></div>
                                    </div>
                                    <div className = {style.row}>
                                        <p>确认密码<span></span></p>                  
                                        <input ref = 'rePassword' className = {style.input} placeholder = '请再次输入密码' />
                                        <div className = {style.inputAfter}><img src = {require('./img/lock_icon.png')}/></div>
                                    </div>
                                    <button className = {style.submit} onClick = {()=>{this.goNext()}}  > 下一步 </button>
                                </div>
                            </div>
                break;
            case 3:
                aStepDom =   <div className = 'example' key = {this.state.step}>
                                <img className = {style.stepimg} src = {require('./img/step_03.png')}/>
                                <ul className = {style.stepwords}>
                                    <li>验证手机</li>
                                    <li>重设密码</li>
                                    <li className = {style.nowstep}>修改成功</li>
                                </ul>
                                <div className = {style.loginBox}>
                                    <dl className = {style.resetSuccess}>
                                        <dt><img src = {require('./img/success_big.png')}/></dt>
                                        <dt>密码重置成功！</dt>
                                        <dd>请您尽快使用新密码<Link to = ''>【登录】</Link></dd>
                                    </dl>
                                </div>
                            </div>
                break;
            default:
                break;
            return;
        }

        return (
        	<div style = {{background:'#fff'}}>
                <Header/>
                    <div className = {style.bigbody}>
                        <h1>重置密码</h1>

                    <ReactCSSTransitionGroup
                          transitionName="example"
                          transitionAppearTimeout={1500}
                          transitionEnterTimeout={1500}
                          transitionLeaveTimeout={1300}
                          transitionAppear={true}
                          transitionEnter={true}
                          transitionLeave={true}>
                        {aStepDom}
                    </ReactCSSTransitionGroup>


                    </div>
                <Footer/>
        	</div>
        )
    }
}

