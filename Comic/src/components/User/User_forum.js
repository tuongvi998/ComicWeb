import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Nav from './Nav';
import {getPost} from '../../actions/ManagerUserAction';
import {connect} from 'react-redux';
export class User_forum extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount()
    {
        var user=JSON.parse(localStorage.getItem('logined_user'))
        this.props.getPost(user.id)
    }
    render() {

        var list =[];
        console.log(this.props.post);
        for(var i = 0; i< this.props.post.length; i++){
            list.push(
                <>
                <tr>
                    <td>{this.props.post[i].title}</td>
                    <td>{this.props.post[i].postTime}</td>
                    <td>
                        <Link to='/FDetail'><button className="btn btn-gradient-info">Xem</button></Link>
                    </td>
                </tr>
                </>
            )
        }
        console.log("vi " +list);
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <Nav br="Diễn đàn"></Nav>
                        <div className="col-md-12 ">
                            <div className="card m-5" style={{backgroundColor:"#f0f0f0", border:"none"}}>
                                <div className="card-body">
                                    <h4 className="card-title">Lịch sử </h4>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Tiêu đề</th>
                                                <th>Thời gian</th>
                                                <th>Bài đăng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.user1
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPost :(id) => dispatch(getPost(id))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(User_forum);
