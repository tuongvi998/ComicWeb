import React, { Component } from 'react';
import './ForumNPost.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import {getUName} from '../actions/LoadUserAction';
import {connect} from 'react-redux';
import newpost from '../reducers/new_post_reducer';
export class ForumNPost extends Component {
    constructor(props) {
        super(props);
        new FroalaEditor('textarea#froala-editor')
        this.state={}
    }
   
    render() {
        var userin= JSON.parse(localStorage.getItem("logined_user"))
        let {content,title}= this.state
        return (
            <>
                <Header />
                <div className="container" style={{height:"100vh"}}>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <div className="phantop">
                                <Link className="pull-left">
                                    <img src={userin.image} alt="" className="avatar" />
                                    <strong>{userin.username}</strong>
                                </Link>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <hr></hr>
                            <div className="content">
                                <form className="form">
                                    <p>Tựa đề: </p>
                                    <input className="form-control" type="text" placeholder="Đủ nghĩa - Ngắn gọn - Súc tích" defaultValue={""} onChange={e=> this.setState({title: e.target.value})} value={title} required />
                                    <p>Nội dung bài viết</p>
                                    <FroalaEditor defaultValue={""} onChange={e=> this.setState({content: e.target.value})} value={content} required></FroalaEditor>
                                    <button className="btn btn-info mt-2">Post</button>
                                    <button className="btn btn-dark mt-2 ml-1">Hủy</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        us: newpost
    }
}
const mapDispatchToProps =(dispatch) =>{
    return {
        getUName: (id)=>dispatch(getUName(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ForumNPost);
