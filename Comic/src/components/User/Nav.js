import React from 'react';
import './Nav.css';
import {Link,Route} from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-lg-0">
                            <li className="breadcrumb-item">
                                <Link to="/User/page">Trang cá nhân</Link>
                            </li>
                            <li className="breadcrumb-item active">{this.props.br}</li>
                        </ul>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i class="fas fa-home"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><i class="fas fa-bell"></i></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/User/page">
                                    <img src="https://cdn.shopify.com/s/files/1/0078/6563/0831/products/TogaPrint_grande.png?v=1552807118" id="avatar" alt="user"/>
                                </Link>
                            </li>
                        </ul>
                    
                    </div>
                </nav>
            </div>
        )
    }
}
export default Nav;