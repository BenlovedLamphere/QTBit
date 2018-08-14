import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {connect} from 'react-redux';
import {getproduct} from "actions/product";
import style from './product.scss';

class Product extends Component {


    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }

    componentDidMount() {
        let productNum = this.props.match.params.number;
        this.props.getproduct(productNum);
    }


    render() {
        let productDom = '';
        console.log(this);
        if (this.props.product.product.data) {


            let imgsArr = this.props.product.product.data.imageList;
            let imgDom = imgsArr.map((elt)=>{
                return <img className = {style.descimg} src = {elt.url} key = {elt.id}/>
            })


            productDom =<div className = {style.bigbg}>
                            <div className = {style.goodsheader}>
                                <img className = {style.titlePic} src = {this.props.product.product.data.imageList[0].url} />
                                <div className = {style.goodsword}>
                                    <h3>{this.props.product.product.data.goodsName}</h3>
                                    <dl>
                                        <dt>售价：<p className = {style.price}>¥{this.props.product.product.data.goodsPrice}</p></dt>
                                        <dt>销量：<p>186</p>  人气：<p>198</p></dt>
                                    </dl>
                                    <ul>
                                        <li>
                                            <h4>租赁数量</h4>
                                            <p className = {style.addndecre}><input className = {style.btn} type = "button" defaultValue = "-"/><input className = {style.nums} defaultValue = '1'/><input className = {style.btn} type = "button" defaultValue = "+" /></p>
                                        </li>
                                        <li>
                                            <h4>租赁时间</h4>
                                            <input type= 'input' defaultValue = {this.props.product.product.data.goodsDays + '天'} />
                                        </li>
                                    </ul>
                                    <Link className = {style.addToCart} to = ''><img src = {require('./img/buy_white.png')}/><p>加入购物车</p></Link>
                                </div>
                            </div>

                            <ul className = {style.tabs}>
                                <li onMouseOver = {()=>{
                            this.refs.goodsdesc.style.display = 'block';
                            this.refs.howtopay.style.display = 'none';
                            this.refs.payded.style.display = 'none';
                        }} ><Link to = ''>产品详情</Link></li>
                                <li onMouseOver = {()=>{
                            this.refs.goodsdesc.style.display = 'none';
                            this.refs.howtopay.style.display = 'block';
                            this.refs.payded.style.display = 'none';
                        }} ><Link to = ''>付款方式</Link></li>
                                <li onMouseOver = {()=>{
                            this.refs.goodsdesc.style.display = 'none';
                            this.refs.howtopay.style.display = 'none';
                            this.refs.payded.style.display = 'block';
                        }} ><Link to = ''>售后政策</Link></li>
                            </ul>

                            <div ref = 'goodsdesc' className = {style.goodsdesc}>
                                <h3>产品描述：</h3>
                                <p>1、本产品含电源，需全额付款。</p>
                                <p>2、本批产品无法修改地址。</p>
                                <p>3、本产品支持顺丰（默认空运）、德邦物流、德邦快递、顺达航空配送，运费到付、具体费用请咨询物流供应商。</p>
                                <p className = {style.red}>注意：因各个国家和地区的电源插头不一样，电源不包含220V端电源线。电源6PN线接口为10条。</p>

                                <p>{this.props.product.product.data.goodsDesc}</p>
                                <div className = {style.line}></div>
                                <h3>联系详情</h3>
                                <dl>
                                    <dt><img src = {require('./img/qrcode.png')} /></dt>
                                    <dd>
                                        <p>联系电话</p>
                                        <p className = {style.tel}>400-890-8855</p>
                                        <p>QQ客服：800816025（10：00-18：00）</p>
                                        <p>QQ群：646128116 （10：00-18：00）</p>
                                        <p className = {style.shallow}>扫码关注钱通比特公众号，获取最新矿机租赁信息</p>
                                    </dd>
                                </dl>
                                <div className = {style.line}></div>
                                <h3>商品介绍</h3>

                                {imgDom}

                                <div className = {style.line}></div>
                                <h3>注意事项：</h3>
                                <p>1、机箱变形或者散热片脱落，请不要通电，联系售后通电。</p>
                                <p>2、不能使用两个电源带同一个算力版。</p>
                                <p>3、建议使用蚂蚁矿池（www.antpool.cn）</p>
                                <p>4、矿机切勿使用POE交换机，容易造成控制板烧板。</p>
                            </div>

                            <div ref = 'howtopay' className = {style.howtopay} style = {{display:'none'}} >
                                <table className = {style.payway}>
                                    <tbody>
                                      <tr className = {style.blue}>
                                        <td style = {{width:'180px'}}>付款帐户</td>
                                        <td>福建湛华智能科技有限公司</td>
                                      </tr>
                                      <tr>
                                        <td>银行帐户</td>
                                        <td>3010 5286 0000 01</td>                  
                                      </tr>
                                      <tr className = {style.blue}>
                                        <td>付款帐户</td>
                                        <td>平安银行福建自贸试验区福州片区分行营业部</td>                  
                                      </tr>
                                      <tr>
                                        <td>备注</td>
                                        <td><p>1、付款后，请登录官网用户中心，选择“我的订单”，点击订单后的“付款信息”，填写付款人姓名和付款金额等信息。</p>
                                            <p>2、按照目前我国税务法规，订单的付款方（个人或公司）必须与合同购买方以及发票抬头一致；如果付款方、合同购买方、发票抬头不一致，或者一个订单内含有多个付款方（个人或公司）时每个付款方的付款金额非整数台价款的情况，则无法提供该订单的合同与发票。</p>
                                        </td>                  
                                      </tr>
                                      <tr className = {style.blue}>
                                        <td>风险提示</td>
                                        <td>比特币价格决定矿机价值，付款后即锁定本批订单数量和价格，不论比特币上涨或下跌，本订单不会涨价或退款。</td>                  
                                      </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div  ref = 'payded' className = {style.payded} style = {{display:'none'}} >
                                <p><strong>矿机不同于消费类电子产品，而是根据顾客需求特殊定制的、用于投资的产品，投资需谨慎。本产品售后服务政策如下，</strong></p>
                                <p><strong>一旦购买，即视为对本政策的认同。</strong></p>
                                <p>1、无论是否发货，付款后均不能退款、退货；</p>
                                <p>2、矿机产品的保修期为自发货之日起180天；</p>
                                <p>3、由于市场波动，在您购买后，产品价格可能会随时调整，我们不承担事先通知、价格补偿的义务。</p>
                                <div className = {style.line}></div>
                                <p><strong>以下情况会使保修失效</strong></p>
                                <p>1、矿机本身被拆卸，私自改动、更换元器件；</p>
                                <p>2、雷击、电压浪涌，劣质电源等造成的损坏；</p>
                                <p>3、进水、电路板和元器件受潮、出现腐蚀选成的损坏；</p>
                                <p>4、电路板存在烧毁痕迹的或者芯片衩烧毁的；</p>
                                <p>5、超频。</p>
                                <p>注意：如果发生了以上情况，我们为您矿机提供收费维修服务。具体流程请参考商城的售后流程。</p>

                            </div>
                        </div>

        }

        return (
        	<div>
        		<Header/>
                    {productDom}
        		<Footer/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        product: state.product
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getproduct: (num) => {
            dispatch(getproduct(num))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);




                                // <img className = {style.descimg} src = {require('./img/bigpic.png')} />
