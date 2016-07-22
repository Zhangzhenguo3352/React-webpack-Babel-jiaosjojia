import React,{Component} from 'react';
import {Router,Route,browserHistory, Link} from 'react-router';

import './index.css';
// 纯函数定义 组件，就是 三个 jsx 组件
const Home = (props) =>
    <div>
        <Links />
        <h1>Home-a</h1>
        {props.children}
    </div>;
const About = (props) =>
    <div>

        <h1>About-b</h1>
        {props.children}
    </div>;
const Contact = () =>
    <div>

        <h1>Contact-c</h1>
    </div>;
//访问 about  url：   http://localhost:3333/#/about?_k=wh2nw3   后面的 _k=wh2nw3 其实用的相对来说 还是少一些，因为它还是有一些问题
class App extends Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    <Route path="about" component={About}>
                        <Route path="contact" component={Contact}></Route>
                    </Route>
                </Route>

            </Router>
        )
    }
}
//Link 的使用 是react-router 提供的组件，可以自己使用进行路由切换
//1, 引入 { Router,Route,hashHistory, Link }
//2, 下面的 Link 用法
//3, 上面 使用是  <links /> 使用
const Links = () =>
    <nav>
        <Link activeClassName="active" to="/">Home1 </Link>
        <Link activeClassName="active" to="/about">About2 </Link>
        <Link activeClassName="active" to="/about/contact">Contact3</Link>
    </nav>


export default App;



//import React, {Component} from 'react';
//import { MyComponent } from '../../components'
//
//import './index.css'
//export default class App extends Component{
//    render(){
//        return(
//            <div>
//                <MyComponent/>
//                <p>App的数据</p>
//            </div>
//        )
//    }
//}






//import React, {Component} from 'react';
////这是 第三步,
//export default class App extends Component{
//    render(){
//        return(
//            <div>
//                <h1>App</h1>
//                {/*这时候应该看，../../routes/index.js 看它们是怎么个包含关系*/}
//                {this.props.children}
//            </div>
//        )
//    }
//}
