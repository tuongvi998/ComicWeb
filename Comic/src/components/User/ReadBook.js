import React from 'react';
import './Read.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Book from './Book';
import { Link, Route } from 'react-router-dom';
class ReadBook extends React.Component{
    render(){
        return(
            <>
                <div className="row">
                    <div className="col-xs-6 col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-10">
                        <div className="ml-sm-2">
                            <Nav br="Sách đã đọc"/>
                        </div> 
                        <div>
                            <Book/>
                        </div>                       
                    </div>  
                </div>
            </>
        )
    }
}
export default ReadBook;