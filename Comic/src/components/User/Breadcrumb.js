import React from 'react';
import {Link,Route} from 'react-router-dom';
class Breadcrumb extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <Link to="/User_page">Trang cá nhân</Link>
                </li>
                <li className="breadcrumb-item active">{this.props.br}</li>
            </ol>
            </div>
        )
    }
}
export default Breadcrumb;