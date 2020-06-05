import React from 'react';
import { Router, Route, Link,Switch, NavLink } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { login } from './../reducers/login_reducer';
import './Login.css';
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        console.log("OK")
        if(localStorage.getItem('signup')!=null)localStorage.removeItem('signup')
        this.onSubmit = this.onSubmit.bind(this);
    }
    render()
    {
      var image_s={
        width:"250px"
      }
    var d_s={  
        border: "1px solid #fff",
        padding: "100px 20px 10px 10px",
        width: "500px",
        textAlign: "center",
    }
    var sign={
        color: "teal",
        fontWeight:" bold",

    }
    var p={
        textAlign:"left",
        fontWeight:" 1000",
        fontVariant: "ordinal"
    }
    var input={
        width: "400px",
        marginLeft:" 40px"
    }
    var thi={
        display: "inline-block",
    }
    var i={
      color:"red"
    }
        let {email, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return(
                  
             <>
             <div className="containers h-100">
                
              </div>
              <form name="loginForm" className="row h-100 justify-content-center align-items-center" onSubmit={this.onSubmit}>
                <div className="position-relative ">
                  <div className="box">
                  {/* ,backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/000/549/557/non_2x/abstract-technology-background-geometric-vector-background-global-network-connections-with-points-and-lines.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat" */}
                    <div className="row mt-5" style={{border:"1px solid teal",borderRadius:"8px" ,backgroundImage: "url('https://www.megoras.com.tr/wp-content/uploads/2019/04/BACK12.png')",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                    <div className="col-md-4 justify-content-center align-items-center phanTrai">
                    {/* <Link to="/"><img src={require('../TVT.PNG')} style={{width:'250px'}} alt="Logo"/></Link> */}
                      <Link className="logo"  to="/">
                          <button id="logo_but1">TVT</button>
                      </Link> 
                      <p className="slogan">Tạo tài khoản và trải nghiệm với những nhân vật trong những bộ truyện mình yêu thích</p>
                      <div><strong style={{color:"#fff", textAlign:"center"}}>Not have Account <Link to="/Signup" style={{textDecoration:"none"}} >Signup</Link></strong></div>
                    </div>
                      <div className="col-md-8">
                        <div className="bg" id="bran" style={d_s}>
                          <h1 style={sign}>SIGN IN</h1>
                          <form action="">
                            <div className="form-group">
                              <p style={p} ><i className="far fa-user"></i> User Name</p>
                              <input style={input} type="text" className="form-control" id="userName"
                              placeholder="User name" onChange={e => this.setState({email: e.target.value})} value={email} required/>
                            </div>
                            <div className="form-group">
                            <p style={p}><i className="fas fa-lock"></i> PassWord</p>
                              <input style={input} type="password" className="form-control" id="passWord"
                              placeholder="***********" onChange={e => this.setState({password: e.target.value})} value={password} required />
                            </div>
                            <div className="message">  
                            { isLoginSuccess && this.LoginSuccess() }
                            { loginError && <p style={i}>Check PassWord and Username</p> }
                            {!isLoginSuccess}
                          </div>
                            <button type="submit" className="btn-signin" >Sign in</button>
                            
                          </form>
                        </div>
                        <div className="row  justify-content-center ">
                        <strong ><Link to="/" style={{textDecoration:"none",color:"teal"}}><i className="far fa-arrow-alt-circle-left"></i>Back to Homepage </Link></strong>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </form>

             </>

         
        )
    }
    
    LoginSuccess()
    {
      
      localStorage.setItem('login','success')
      let user =JSON.parse(localStorage.getItem('logined_user'))
      if(user.role==0)      
      { 
        return <Redirect  to="/"/>
        
      }
      else if(user.role==1)
      {
        
        return  <Redirect to="/Admin" />
      }
      else if(user.role==2)
      {
        
        return  <Redirect to="/Colaborator" />
      }
     
    }
    onSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
          email: '',
          password: '',
        });
      }
    
}


const mapStateToProps = (state) => {
    return {
      isLoginPending: state.login.isLoginPending,
      isLoginSuccess: state.login.isLoginSuccess,
      loginError: state.login.loginError,
     
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password)),
     
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);