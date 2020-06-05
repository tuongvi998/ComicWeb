import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../reducers/login_reducer';
import { fetchGenres } from '../actions/GenreAction'
import './Top_bar.css';
import { SearchByName } from '../actions/SearchAction'
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.logout()
  }
  render() {
    var role = this.props.role
    console.log("render role " + role)
    let { search } = this.state
    return (
      <>
        <div id="headers">
          <div className="container" >
            <div className="row level" style={{ backgroundColor: "#fff" }}>
              <div className="d-flex justify-content-start">
                <Link className="logo ml-5" to="/">
                  <button id="logo_but">TVT</button>
                </Link>
              </div>
              <div className="input-group  d-flex justify-content-center " style={{ width: "500px" }}>
                <input value={search} onChange={e => this.setState({ search: e.target.value })} className="form-control py-2 border-right-0 border-radius-25" type="search" placeholder="Bạn đang tìm kiếm điều gì?" id="ip1" />
                <span className="input-group-append">

                  <Link onClick={this.handleClick} to={"/Search/" + search} className="btn" id="ip2" ><i style={{ color: "#fff" }} className="fas fa-search btnsearch"></i></Link>
                </span>
              </div>
              <div className="d-flex justify-content-end">
                <div className="sign mr-5">
                  {this.login_logout()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    )
  }

  handleClick() {
    this.props.SearchByName(this.state.search)
  }

  login_logout() {
    if (localStorage.getItem('login') === 'success') {

      return this.login()
    }
    else {

      return (
        <>
          <Link className="btn" id="login" to='/Signin' >Đăng nhập</Link>
          <Link className="btn ml-2" id="signup" to='/Signup' >Đăng ký</Link>
        </>
      )
    }

  }
  logoutf() {
    localStorage.removeItem('login')
    localStorage.removeItem('logined_user')
    //document.getElementById('user').remove()
    var link = document.getElementById('login')
    link.setAttribute('href', '/Signin')
    var icon = document.getElementById('icon')
    icon.setAttribute('class', 'fas fa-sign-in-alt link')
    //   link.setAttribute('data-content','Signin/Signup')
    document.getElementById("user").style.visibility = "hidden";



  }
  login() {
    var span
    var link
    var i
    var user
    var linkto;
    var loginuser = JSON.parse(localStorage.getItem('logined_user'));
    //var role = this.props.role;
    console.log("role " + loginuser.role)
    if (loginuser.role == 1) {
      linkto = "/Admin"
    }
    else if (loginuser.role == 2) {
      linkto = "/Colaborator"
    }
    else if (loginuser.role == 0) {
      linkto = "/User/page"
    }
    span = 'Logout'
    link = '/'
    i = "fas fa-sign-out-alt"
    user = <Link to={linkto
    } id="user">{JSON.parse(localStorage.getItem('logined_user')).username}</Link>
    return <>
      {user}
      <Link onClick={this.logoutf} id="login" className="link" to={link}><i id="icon" className={i}></i></Link>
    </>

  }



}
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    SearchByName: (keyword) => dispatch(SearchByName(keyword))

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);