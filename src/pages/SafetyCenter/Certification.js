import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import style from './safetycenter.scss';

export default class Certification extends Component {
    render() {
        return (
        	<div>
        		<Header/>
        		<div className = {style.bigbody}>
        			<SideBar witchOne = 'mySecurity'/>
        			<div className = {style.right}>
                  <h2>实名认证</h2>
                  <dl className = {style.photoWords}>
                    <dt>照片要求</dt>
                    <dd>1、请确保照片完整，清晰可见，格式为jpg/jpeg/png，需<span>小于1000KB</span>。证件必须在有效期内。</dd>
                    <dd>2、请上传手持证件照片，照片中需附一张白纸<span>写有“钱通比特”和当前日期</span>，确保您的面部清晰可见，所有证件详细信息都清晰可读，否则将影响您的审核进度。</dd>
                  </dl>
                  <p className = {style.humanIdName}>护照/身份证号</p> 
                  <input ref = 'handPhone' className = {style.humanId} placeholder = '请输入您的身份证号或护照号' />
                  <div className = {style.updateBox}>
                    <ul>
                      <li>
                        <dl>
                          <dt>护照/身份证正面照片：</dt>
                          <dd>
                            <img src = {require('./img/update.png')}/>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>示例：</dt>
                          <dd>
                            <img src = {require('./img/1.png')}/>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <dl>
                          <dt>护照/身份证反面照片：</dt>
                          <dd>
                            <img src = {require('./img/update.png')}/>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>示例：</dt>
                          <dd>
                            <img src = {require('./img/2.png')}/>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <dl>
                          <dt>手持护照/身份证照片：</dt>
                          <dd>
                            <img src = {require('./img/update.png')}/>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>示例：</dt>
                          <dd>
                            <img src = {require('./img/3.png')}/>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </div>

                  
                  <button className = {style.bigBlueBtn} onClick = {()=>{this.goNext()}} > 确定 </button>

        			</div>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}

