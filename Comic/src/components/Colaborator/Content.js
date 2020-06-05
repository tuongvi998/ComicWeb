import React from 'react';
import { Link, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchListComic} from '../../actions/ComicActions';
class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
         var role=this.props.role
        var content=[]
        if(role==1)
        {
            content.push(
                <>
                <nav className="sidebar sidebar-offcanvas ml-3" id="sidebar">
                <ul className="nav">
                    <Link to="/" className="navbar-brand">
                        <h4>TVT</h4>
                    </Link>
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="http://facebookfplus.com/upload/images/600_97d118b7a6f8f87d18f7b1385ea7665e.png" alt="profile" />
                                <span className="login-status online" />
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <p className="font-weight-bold mb-2">Admin</p>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Admin">
                        <i className="mdi mdi-home menu-icon" />
                            <span className="menu-title ml-2">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Admin/Users">
                            <i className="mdi mdi-contacts menu-icon" />
                            <span className="menu-title ml-2">User</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Admin/Comics">
                            <i className="mdi mdi-format-list-bulleted menu-icon" />
                            <span className="menu-title ml-2">Quản lý truyện</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Admin/Categorys">
                            <i className="mdi mdi-table-large menu-icon" />
                            <span className="menu-title ml-2">Thể loại</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Admin/Forums">
                            <i className="mdi mdi-chart-bar menu-icon" />
                            <span className="menu-title ml-2">Diễn đàn</span>
                        </a>
                    </li>                    
                    <li className="nav-item">
                        <a className="nav-link float-md-left" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                            <i className="mdi mdi-medical-bag menu-icon" />
                            <span className="menu-title ml-2">Sample Pages</span>
                        </a>
                        <div className="collapse" id="general-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/blank-page.html"> Blank Page </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/login.html"> Login </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/register.html"> Register </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/error-404.html"> 404 </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/error-500.html"> 500 </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link float-md-left">
                        <a href="/" style={{textDecoration:"none"}}><button onClick={e=> {localStorage.removeItem('logined_user') ;localStorage.removeItem('login')}} className="btn btn-block btn-lg btn-gradient-success mt-4">Đăng xuất</button></a>
                        </span>
                    </li>
                </ul>
            </nav>
                </>
            )
        }
        else if(role==2)
        {
            content.push(
                <>
                <nav className="sidebar sidebar-offcanvas ml-3" id="sidebar">
                <ul className="nav">
                <Link to="/" className="navbar-brand">
                        <h4>TVT</h4>
                    </Link>
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="data:image/jpeg;base64,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" alt="profile" />
                                <span className="login-status online" />
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <p className="font-weight-bold mb-2">Colaborator</p>
                                
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Colaborator">
                        <i className="mdi mdi-home menu-icon" />
                            <span className="menu-title ml-2">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Colaborator/comics">
                            <i className="mdi mdi-format-list-bulleted menu-icon" />
                            <span className="menu-title ml-2">Quản lý truyện</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link float-md-left" href="/Colaborator/categorys">
                            <i className="mdi mdi-table-large menu-icon" />
                            <span className="menu-title ml-2">Thể loại</span>
                        </a>
                    </li>
                                        
                    <li className="nav-item">
                        <a className="nav-link float-md-left" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                            <i className="mdi mdi-medical-bag menu-icon" />
                            <span className="menu-title ml-2">Sample Pages</span>
                        </a>
                        <div className="collapse" id="general-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/blank-page.html"> Blank Page </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/login.html"> Login </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/register.html"> Register </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/error-404.html"> 404 </a></li>
                                <li className="nav-item"> <a className="nav-link float-md-left" href="pages/samples/error-500.html"> 500 </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link float-md-left">
                            <a href="/" style={{textDecoration:"none"}}><button onClick={e=> {localStorage.removeItem('logined_user') ;localStorage.removeItem('login')}} className="btn btn-block btn-lg btn-gradient-success mt-4">Đăng xuất</button></a>
                        </span>
                    </li>
                </ul>
            </nav>
                </>
            )
        }
        return (
            <div>
               {content}
           </div>
        );
    }
}

export default Content;