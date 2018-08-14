import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './footer.scss';
export default class Footer extends Component {
    render() {
        return (
        	<div className = {style.bigbg}>
                <div className = {style.oneonebg} style = {{height:'235px'}}>
                    <ul className = {style.leftPart}>
                        <li>
                            <dl>
                                <dt>产品&活动</dt>
                                <dt>算力商城</dt>
                                <dt>推荐人计划</dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>关于我们</dt>
                                <dt>公司介绍</dt>
                                <dt>商务合作</dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>用户须知</dt>
                                <dt>用户协议</dt>
                                <dt>法律声明</dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>服务与支持</dt>
                                <dt>帮助中心</dt>
                                <dt>公告</dt>
                            </dl>
                        </li>
                    </ul>
                    <ul className = {style.rightPart}>
                        <li className = {style.telWord}>客服热线</li>
                        <li className = {style.telNum}>400-800-8800</li>
                        <li>
                            <dl>
                                <dd><img src = {require('./img/weiChat.jpg')}/></dd>
                                <dd><img src = {require('./img/qq.jpg')}/></dd>
                                <dd><img src = {require('./img/weibo.jpg')}/></dd>
                            </dl>
                        </li>
                    </ul>
                </div>
                <div className = {style.oneonebg} style = {{'borderTop':'3px solid #eaf1f9'}}>
                    <h2><img src = {require('./img/logo.png')}/></h2>
                    <p className = {style.copyRight} >COPYRIGHTS 2018 ALL RIGHT RESERVED BY QT-BIT</p>
                </div>
        	</div>
        )
    }
}

