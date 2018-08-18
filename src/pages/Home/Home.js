import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import Nav from 'components/Nav/Nav';
                import {Link} from 'react-router-dom';

import style from './home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                已完成的页面：
                <Link to = '/register/'>注册 </Link>
                <Link to = '/login/'>登录 </Link>
                <Link to = '/myaccount/'>帐户中心 </Link>
                <Link to = '/productlist/'>产品列表 </Link>
                <Link to = '/product/'>产品详情  </Link>
                <Link to = '/myorder/'>我的订单 </Link>
                <Link to = '/mycart/'>我的购物车 </Link>
                <Link to = '/myinvite/'>我的邀请 </Link>
                <Link to = '/forgotpwd/'>忘记密码 </Link>
                <Link to = '/emptycart/'>空购物车 </Link>
                <Link to = '/emptyorder/'>空订单 </Link>
                <Link to = '/turnover/'>流水列表 </Link>
                <Link to = '/paywithcard/'>使用银行卡支付 </Link>
                <Link to = '/safetycenter/'>安全中心 </Link>
                <Link to = '/editphone/'>修改手机 </Link>
                <Link to = '/editpassword/'>修改密码 </Link>
                <Link to = '/editpassword/'>新增CNY帐户 </Link>
                <Link to = '/editpassword/'>新增QC帐户 </Link>
                <Link to = '/editpassword/'>新增BTC帐户 </Link>
                <Link to = '/certification/'>实名认证 </Link>
            </div>
        )
    }
}

export default hot(module)(Home);