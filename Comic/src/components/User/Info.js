import React from 'react';
import './Info.css';
import { Link } from 'react-router-dom';
import './Book.css';
class Info extends React.Component{
    render(){
        var user= JSON.parse(localStorage.getItem('logined_user'))
        var username=user.username
        var image = user.image
        return (
            <>
            <div className="coverContent mt-0">
                <div className="coverProfile">
                    <img src = "https://genknews.genkcdn.vn/2017/photo-4-1490675003802.jpg" id="cv"/>
                </div>
                <div class="avatarProfile">
                    <img id="avar" src ={image}/>
                    {/* <img id="avar" src ="https://cdn.shopify.com/s/files/1/0078/6563/0831/products/TogaPrint_grande.png?v=1552807118"/> */}
                </div>
            </div>
            <div className="card ml-5 mt-4 mb-5 "  style={{width: '90%'}}>
            <div id="user-profile-2" className="user-profile">
                <div className="tabbable">
                    <ul className="nav nav-tabs padding-18">
                        <li className="active">
                            <a data-toggle="tab" href="#home">
                                <i className="green ace-icon fa fa-user bigger-120" />
                                Profile
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content no-border padding-24">
                        <div id="home" className="tab-pane in active">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <h4 className="blue">
                                        <span className="middle blue ml-5" >{username}</span>
                                        <span className="label label-purple arrowed-in-right ml-5" style={{color: 'green', fontSize:'15px'}}>
                                        <i className="ace-icon fa fa-circle smaller-80 align-middle" />
                                        online
                                        </span>
                                    </h4>
                                    <div className="profile-user-info mr-4" style={{textAlign:'center'}}>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Username </div>
                                            <div className="profile-info-value">
                                                <span style={{color:'black'}}>username</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Location </div>
                                            <div className="profile-info-value">
                                                <i className="fa fa-map-marker light-orange bigger-110 mr-4" />
                                                <span style={{color:'black'}}>Đà Nẵng</span>
                                                <span style={{color:'black'}}>Việt Nam</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Age </div>
                                            <div className="profile-info-value">
                                                <span style={{color:'black'}}>20</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Joined </div>
                                            <div className="profile-info-value">
                                                <span style={{color:'black'}}>2019/06/20</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Last Online </div>
                                            <div className="profile-info-value">
                                                <span style={{color:'black'}}>3 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr hr-8 dotted" />
                                        <div className="profile-user-info">
                                            <div className="profile-info-row">
                                                <div className="profile-info-name"> Website </div>
                                                <div className="profile-info-value">
                                                    <a href="#" target="_blank">www.user.com</a>
                                                </div>
                                            </div>
                                            <div className="profile-info-row">
                                                <div className="profile-info-name">
                                                    <i className="middle ace-icon fa fa-facebook-square bigger-150 blue" />
                                                </div>
                                                <div className="profile-info-value">
                                                    <a href="#">Find me on Facebook</a>
                                                </div>
                                            </div>
                                            <div className="profile-info-row">
                                                <div className="profile-info-name">
                                                    <i className="middle ace-icon fa fa-twitter-square bigger-150 light-blue" />
                                                </div>
                                                <div className="profile-info-value">
                                                    <a href="#">Follow me on Twitter</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /#tabb */}
                    </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}
export default Info;