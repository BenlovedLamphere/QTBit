import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {connect} from 'react-redux';
import {getproductlist} from "actions/productlist";
import style from './productlist.scss';

class ProductList extends Component {
    componentDidMount() {
        this.props.getproductlist();
    }
    render() {
        let productsDom = '';
        if (this.props.products.products.data) {
            let productsArr = this.props.products.products.data.resultList;
            productsDom = productsArr.map((elt)=>{
                let productUrl = '/product/' + elt.id;
                return  <li className = {style.bigli} key = {elt.id}>
                            <Link to = {productUrl} ><img className = {style.bigimg} src = {elt.goodsImgUrl} /></Link>
                            <h2>{elt.goodsName}</h2>
                            <h3>¥{elt.goodsPrice}</h3>
                            <div className = {style.descBox}>
                                <ul>
                                    <li>
                                        <h4>租赁数量</h4>
                                        <p className = {style.addndecre}><input className = {style.btn} type = "button" defaultValue = "-"/><input ref = {elt.id} className = {style.nums} defaultValue = '1'/><input className = {style.btn} type = "button" defaultValue = "+" /></p>
                                    </li>
                                    <li>
                                        <h4>租赁时间</h4>
                                        <input type= 'input' defaultValue = {elt.goodsDays + '天'} />
                                    </li>
                                </ul>
                                <Link className = {style.addToCart} to = ''><img src = {require('./img/buy_white.png')}/><p>加入购物车</p></Link>
                            </div>
                        </li>
            })
        }
        return (
        	<div style = {{background:"#fff"}}>
        		<Header/>
        		<img style = {{width:'100%'}} src = {require('./img/banner.png')}/>
        		<div className = {style.bigbg}>
        			<ul className = {style.bigul}>

                        {productsDom}

        			</ul>
        		</div>
        		<Footer/>
        	</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productlist
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getproductlist: (num) => {
            dispatch(getproductlist(num))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

/*
                        <li className = {style.bigli}>
                            <img className = {style.bigimg} src = {require('./img/pdpic.png')} />
                            <h2>1T算力720天合约（含电费）</h2>
                            <h3>¥10000</h3>
                            <div className = {style.descBox}>
                                <ul>
                                    <li>
                                        <h4>租赁数量</h4>
                                        <p className = {style.addndecre}><input className = {style.btn} type = "button" defaultValue = "-"/><input className = {style.nums} defaultValue = '1'/><input className = {style.btn} type = "button" defaultValue = "+" /></p>
                                    </li>
                                    <li>
                                        <h4>租赁时间</h4>
                                        <input type= 'input' defaultValue = '90天' />
                                    </li>
                                </ul>
                                <Link className = {style.addToCart} to = ''><img src = {require('./img/buy_white.png')}/><p>加入购物车</p></Link>
                            </div>
                        </li>
                        <li className = {style.bigli}>
                            <img className = {style.bigimg} src = {require('./img/pdpic.png')} />
                            <h2>1T算力720天合约（含电费）</h2>
                            <h3>¥10000</h3>
                            <div className = {style.descBox}>
                                <ul>
                                    <li>
                                        <h4>租赁数量</h4>
                                        <p className = {style.addndecre}><input className = {style.btn} type = "button" defaultValue = "-"/><input className = {style.nums} defaultValue = '1'/><input className = {style.btn} type = "button" defaultValue = "+" /></p>
                                    </li>
                                    <li>
                                        <h4>租赁时间</h4>
                                        <input type= 'input' defaultValue = '90天' />
                                    </li>
                                </ul>
                                <Link className = {style.addToCart} to = ''><img src = {require('./img/buy_white.png')}/><p>加入购物车</p></Link>
                            </div>
                        </li>
                        <li className = {style.bigli}>
                            <img className = {style.bigimg} src = {require('./img/pdpic.png')} />
                            <h2>1T算力720天合约（含电费）</h2>
                            <h3>¥10000</h3>
                            <div className = {style.descBox}>
                                <ul>
                                    <li>
                                        <h4>租赁数量</h4>
                                        <p className = {style.addndecre}><input className = {style.btn} type = "button" defaultValue = "-"/><input className = {style.nums} defaultValue = '1'/><input className = {style.btn} type = "button" defaultValue = "+" /></p>
                                    </li>
                                    <li>
                                        <h4>租赁时间</h4>
                                        <input type= 'input' defaultValue = '90天' />
                                    </li>
                                </ul>
                                <Link className = {style.addToCart} to = ''><img src = {require('./img/buy_white.png')}/><p>加入购物车</p></Link>
                            </div>
                        </li>
                        <li className = {style.bigli}>
                            <img className = {style.bigimg} src = {require('./img/pdpic.png')} />
                            <h2>1T算力720天合约（含电费）</h2>
                            <h3>¥10000</h3>
                            <div className = {style.descBox}>
                                <ul>
                                    <li>
                                        <h4>租赁数量</h4>
                                        <p className = {style.addndecre}><input className = {style.btn} type = "button" defaultValue = "-"/><input className = {style.nums} defaultValue = '1'/><input className = {style.btn} type = "button" defaultValue = "+" /></p>
                                    </li>
                                    <li>
                                        <h4>租赁时间</h4>
                                        <input type= 'input' defaultValue = '90天' />
                                    </li>
                                </ul>
                                <Link className = {style.addToCart} to = ''><img src = {require('./img/buy_white.png')}/><p>加入购物车</p></Link>
                            </div>
                        </li>*/

