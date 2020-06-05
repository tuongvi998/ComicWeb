import React from 'react';
import { Link, Route } from 'react-router-dom';
import Content from '../Colaborator/Content';
import Footer from './footer';
import Ad_info from './Info';
import Info from '../Colaborator/Info';
import './index.css'
class index extends React.Component {
    render() {
        var meno = {
            marginTop: "20px",
        }
        var info=[];
        var user = JSON.parse(localStorage.getItem('logined_user'));
        if(user.role==1){
            info.push(<Ad_info/>)
        }else if (user.role==2){
            info.push(<Info/>)
        }
        return (
            <div id="mmenu_screen">
                <div className="clear" />
                <div className="row flex-fill">
                    <div className="col-md-2" >
                        <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                    </div>
                    <div className="col-md-10 " >
                        {info}
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}
export default index;