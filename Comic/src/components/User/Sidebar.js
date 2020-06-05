import React from 'react';
import './Sidebar.css';
import { Link, Route } from 'react-router-dom';
class Sidebar extends React.Component{
    render(){
        return(
            <>
             <div className="container-fluid">
                <div className="row">
                    <nav className=" d-none d-md-block side-color sidebar">
                        <Link className="navbar-brand" to="/">
                        TVT COMIC
                        </Link>
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link id="navlink" className="nav-link " to="/User/page">
                                        <span data-feather="home" />Thông tin cá nhân <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="navlink" className="nav-link " to="/User/Book">
                                        <span data-feather="home" />Truyện đã thích
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link id="navlink" className="nav-link" to='/User/forum'>
                                        <span data-feather="users" />
                                        Diễn đàn
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a id="navlink" className="nav-link" href="#">
                                        <span data-feather="bar-chart-2" />
                                        Reports
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id="navlink" className="nav-link" href="#">
                                        <span data-feather="layers" />
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            </>
        )
    }
}
export default Sidebar;