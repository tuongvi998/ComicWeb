import React from 'react';
import './App.css';
import { Router } from 'react-router';
import { Route, Switch,Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import index from './components/Admin/index';
import createBrowserHistory from 'history/createBrowserHistory';
import Comic_detail from './components/Comic_detail';
import Admin_Comic from './components/Admin/Admin_Comic';
import AddComic from './components/Admin/AddComic';
import Chapter_detail from './components/Chapter_detail';
import Filter from './components/Filter';
import Author from './components/Author_comic';
import Forum from './components/Forum';
import ForumDetail from './components/ForumDetail';
import Admin_user from './components/Admin/Admin_user';
import User_page from './components/User/User_page';
import User_book from './components/User/User_book';
import User_forum from './components/User/User_forum';
import Read from './components/User/ReadBook';
import AddChapter from './components/Admin/AddChapter';
import ShowChapter from './components/Admin/ShowChapter';
import UpdateComic from './components/Admin/UpdateComic';
import UpdateChapter from './components/Admin/UpdateChapter';
import ShowComic from './components/Admin/ShowComic';
import ForumNPost from './components/ForumNPost';
import Admin_Cate from './components/Admin/Admin_Cate';
import Admin_forum from './components/Admin/Admin_forum';
import Show_Cate from './components/Admin/Show_Cate';
import Colab_Cate from './components/Colaborator/Colab_Cate';
import Colab_forum from './components/Colaborator/Colab_forum';
import Colab_Comic from './components/Colaborator/Colab_Comic';
import Colab_AddChapter from './components/Colaborator/AddChapter';
import Colab_AddComic from './components/Colaborator/AddComic';
import AddCategory from './components/Colaborator/AddCategory';

const history = createBrowserHistory()
class App extends React.Component {
  render(){
    
    return (
      <div className="App">      
        <Router history={history}>
          <Switch> 
          <Route path = '/Admin/Show/Category/:id' component = {Show_Cate}/>
          <Route path= '/Error' component ={Error}/>
          <Route path='/Colaborator/categorys' exact component={Colab_Cate}/>
          <Route path='/Colaborator/forums' exact component = {Colab_forum}/>
          <Route path = '/Colaborator/comics' exact component =  {Colab_Comic}/>
          <Route path = '/Colaborator/add/comic' exact component = {Colab_AddComic}/>
          <Route path = '/Colaborator/add/chap' exact component = {Colab_AddChapter} />
          <Route path='/Forum-New-Post' exact component={ForumNPost}/>
          <Route path='/FDetail/:id'exact  component={ForumDetail}/>
          <Route path='/Forum' exact component={Forum} />
          <Route path='/Search' exact component={Filter}/>  
          <Route path="/search/:string" exact component ={Filter}/>
          <Route path="Comic/search" exact component ={Filter}/>
          <Route path='/Author/' component={Author}/>      
          <Route path='/Signin' exact component={Login}/>   
          <Route path='/Signup' exact component={Signup}/>   
          <Route path='/Comic/:index' exact component={Comic_detail}/>   
          <Route path='/TruyenMoi' exact component={Filter}/>   
          <Route path='/TruyenHot' exact component={Filter}/>   
          <Route path='/Category' exact component={Filter}/>
          <Route path='/Comic/:index/Chapter/:id' exact component={Chapter_detail}/>   
     
          <Route path='/Comic/:index/Chapter/:id/Show' exact component={ShowChapter}/> 
          <Route path='/Comic/:index/Chapter/:id/Edit' exact component={UpdateChapter}/> 
          <Route path='/Comic/:index/Chap' exact component={AddChapter}/> 
          <Route path='/Admin' exact component={index}/>
          <Route path='/Colaborator' exact component={index}/>
          <Route path='/Admin/Comics' exact component={Admin_Comic}/> 
          <Route path='/Comics/Add' exact component={AddComic}/> 
          <Route path='/Comic/:index/Show' component={ShowComic}/> 
          <Route path='/Comic/:index/Update' component={UpdateComic}/> 
          <Route path='/Comic/:index/Delete' component={Admin_Comic}/> 
          {/* <Route path='/Comic/:index/Chap/:id' component={AddChapter}/>  */}
          <Route path="/Comics/trang:index" component={Admin_Comic}/>
          <Route path='/Admin/Users' exact component={Admin_user}/>
          <Route path='/Users/Add' exact component={Admin_user}/>
          <Route path='/User/page' exact component={User_page}/> 
          <Route path='/User/book' exact component={User_book}/> 
          <Route path='/User/forum' exact component={User_forum}/>
          <Route path='/User/readbook' exact component={Read}/> 
          <Route path='/Admin/Categorys' exact component={Admin_Cate}/>
          <Route path='/Admin/Forums' exact component={Admin_forum}/>
          <Route path="/Comics/AddCategory" exact component={AddCategory}/>
          <Route path='/' component={Home} />
          
          </Switch>        
      </Router>
      
      </div>
    );
  }
  
}

export default App;
