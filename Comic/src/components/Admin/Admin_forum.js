import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Content from '../Colaborator/Content';
import Footer from './footer';
import {fetchPosts} from '../../actions/PostFAction';
import {connect} from 'react-redux';

export class Admin_forum extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchPosts()
    }
    // show(){
    //     var result = []
         
    //     //  = this.props.posts.map((a, index)=>{
        //     return(<>
        //         <tr  className="row w-100">
        //             <td className="col-md-4">{a.title}</td>
        //             <td className="col-md-4">{a.title}</td>
        //             <td className="col-md-4">
        //                 <ul className="ml-5">
        //                 <li id="but" ><Link ><button className = "btn btn-gradient-primary">Xem</button></Link></li>
        //                 <li id="but" ><button className="btn btn-gradient-danger">Xóa</button></li>
        //             </ul>
        //             </td>
        //         </tr>
        //     </>)
        //     for (var a =0; a < this.props.posts.length; a++){
        //         result.push(
        //             <tr  className="row w-100">
        //             <td className="col-md-4">{a.title}</td>
        //             <td className="col-md-4">{a.title}</td>
        //             <td className="col-md-4">
        //                 <ul className="ml-5">
        //                 <li id="but" ><Link ><button className = "btn btn-gradient-primary">Xem</button></Link></li>
        //                 <li id="but" ><button className="btn btn-gradient-danger">Xóa</button></li>
        //             </ul>
        //             </td>
        //         </tr>
        //         )
        //     }
        //     return result;
        // }
    
    render() {
        console.log(this.props.posts)
        var list =[
            {user: "vi", post:"tim truyen ne"},
            {user: "thu", post:"ae giup do"},
            {user: "thi", post:"can tim truyen..."},
            {user: "vi", post:"tim truyen ne"},
            {user: "thu", post:"ae giup do"},
            {user: "thi", post:"can tim truyen..."},
            {user: "vi", post:"tim truyen ne"},
            {user: "thu", post:"ae giup do"},
            {user: "thi", post:"can tim truyen..."},
            {user: "vi", post:"tim truyen ne"},
            {user: "thu", post:"ae giup do"},
            {user: "thi", post:"can tim truyen..."}
        ]
        
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                    </div>
                    <div className="col-md-10" style={{ height: "100%" }}>
                        <div className="content-wrapper" style={{ height: "100%", padding:"0 0 "}} >
                            <nav aria-label="breadcrumb ">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active ml-3" aria-current="page">
                                        <span />Admin/Quản lý diễn đàn <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                    </li>
                                </ul>
                            </nav>
                            <div className="row m-3">
                                <div className="col-sm-12 col-md-6  grid-margin">
                                    <div className="input-group" >
                                        <input type="search" id="adsearch" className="form-control" placeholder="Tìm bài đăng..." />
                                        <span className="input-group-btn">
                                            <button id="adbut"  className="btn btn-primary" type="submit" >
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card ml-5 mr-5 mb-5">
                                <div className="card-body mb-3">
                                    <h4>Diễn đàn</h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr className="row w-100">
                                                    <th className="col-md-4">Bài đăng</th>
                                                    <th className="col-md-4">Người đăng</th>
                                                    <th className="col-md-4">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {/* {this.show()} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                                <div className="dataTables_info ml-5 mb-5" id="dataTable_info" role="status" aria-live="polite"><i class="fas fa-pencil-ruler mr-2"></i>THỐNG KÊ: {10} bài đăng</div>
                                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
   return{
    posts : state.lpost
   }
}
const mapDispatchToProps=(dispatch, props)=>{
    return {
        fetchPosts: () => {dispatch(fetchPosts())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin_forum);
