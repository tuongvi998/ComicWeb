import React from 'react';
import './User_page.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Info from './Info';
import Book from './Book';
import {Link,Route} from 'react-router-dom';

class User_page extends React.Component{
    render(){
        return(
            <>
                <div className="row">
                    <div className="col-xs-4 col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-xs-8 col-sm-6 col-md-10">
                        <div className="">
                            <Nav br="Thông tin"/>
                            <div className="row">
                                <Info/>
                            </div>
                        </div>                        
                    </div>
                </div>
                
            </>
        )
    }
}
export default User_page;