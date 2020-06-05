import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import './Header.css';
import Topbar from './Top_bar';
import Nav from './Nav';
class Header extends React.Component{
    render()
    {
      return(
        <>
          <div className="contai">
            <div className="row" id="head"> 
                <div className =" col-md-12 col-lg-12">
                  <Topbar/>                  
                </div>
            </div>
            <div className="row">
                <div className =" col-md-12 col-lg-12">
                  <Nav/>                  
                </div>
            </div>
          </div>
        </>
      );
    }
}

export default Header;
      