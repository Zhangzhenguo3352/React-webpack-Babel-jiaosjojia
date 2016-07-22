#  老师的网址 这个链接是路由讲解 http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/React-router%E8%B7%AF%E7%94%B1%E5%AE%9E%E8%B7%B5.html
#1,browserHistory和hashHistory不一样，使用browserHistory的时候，浏览器中导航栏的URL就不会出现_k的hash键值对。
#  实际项目中也一般用browserHistory.
#    .1 引用时 hashHistory 改用 browserHistory
#    .2 <Router history={hashHistory}> 改用 <Router history={browserHistory}>
#    .3  在启动 webpack-dev-server 的时候必须 添加 --history-api-fallback 参数 ，
#            没有添加 这个参数 ，browserHistory 将不能找到 这个路由
#
# 2,
#  //Link 的使用 是react-router 提供的组件，可以自己使用进行路由切换
#    .1, 引入 { Router,Route,hashHistory, Link }   添加了 Link
#    .2, 下面的 Link 用法
#        const Links = () =>
#            <nav>
#                <Link to="/">Home </Link>
#                <Link to="/about">About </Link>
#                <Link to="/contact">Contact</Link>
#            </nav>
#    .3, 上面 使用是  <links /> 使用
#            const Home = () =>
#                <div>
#                    <Links />
#                    <h1>Home</h1>
#                </div>;
#
#3,
#   .1 activeStyle 路由选中状态 编写 ，这是第一种，！！！这种方法更好
#     const Links = () =>
#         <nav>
#             <Link activeStyle={{fontSize:'40px',color:'red'}} to="/">Home </Link>
#             <Link activeStyle={{fontSize:'40px',color:'#399'}}to="/about">About </Link>
#             <Link activeStyle={{fontSize:'40px',color:'#f90'}} to="/contact">Contact</Link>
#         </nav>
#   .2 activeClassName 可以 定义 class 名字，在index.css 中用
#       。1
#         const Links = () =>
#             <nav>
#                 <Link activeClassName="active" to="/">Home </Link>
#                 <Link activeClassName="active" to="/about">About </Link>
#                 <Link activeClassName="active" to="/contact">Contact</Link>
#             </nav>
#       。2   index.css 写
#             .active{
#                 font-size:30px;
#                 color:red;
#             }
#       。3   要引用   import './index.css';

#4, 路由嵌套
#       class App extends Component {
#         render() {
#           return (

#             <Router history={browserHistory}>
#               <Route path="/" component={Home}>
#                 <Route path="about" component={About}>
#                   <Route path="contact" component={Contact} />
#                 </Route>
#               </Route>
#             </Router>

#           );
#         }
#       }

#       // "/"                Home
#       // "/about"           Home + About
#       // "/about/contact"   Home + About + Contact

#5,在 组件嵌套 的基础上   const Home = (props) => {   {props.children}    } 添加了props, 并且使用 props.children
#   .1 我们看到 , /about 和 /about/contact
#     const Links = () =>
#             <nav>
#                 <Link activeClassName="active" to="/">Home1 </Link>
#                 <Link activeClassName="active" to="/about">About2 </Link>
#                 <Link activeClassName="active" to="/about/contact">Contact3</Link>
#             </nav>

#   .2  props.children 找的元素是   <Route> =》 Route找的是 =》 Links的 to="xxx" 对象的内容

#   import React,{Component} from 'react';
#   import {Router,Route,browserHistory, Link} from 'react-router';

#   import './index.css';
#   const Home = (props) =>
#       <div>
#           <Links />
#           <h1>Home-a</h1>
#           {props.children}
#       </div>;
#   const About = (props) =>
#       <div>

#           <h1>About-b</h1>
#           {props.children}
#       </div>;
#   const Contact = () =>
#       <div>

#           <h1>Contact-c</h1>
#       </div>;
#   class App extends Component {
#       render(){
#           return (
#               <Router history={browserHistory}>
#                   <Route path="/" component={Home}>
#                       <Route path="about" component={About}>
#                           <Route path="contact" component={Contact}></Route>
#                       </Route>
#                   </Route>

#               </Router>
#           )
#       }
#   }
#   const Links = () =>
#       <nav>
#           <Link activeClassName="active" to="/">Home1 </Link>
#           <Link activeClassName="active" to="/about">About2 </Link>
#           <Link activeClassName="active" to="/about/contact">Contact3</Link>
#       </nav>
#   export default App;



