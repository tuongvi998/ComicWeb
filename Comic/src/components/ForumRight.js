import React from 'react';
import './ForumRight.css';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions/PostFAction';
import {connect} from 'react-redux';
export class ForumRight extends React.Component {
    constructor(props)
    {
        super(props)
    }
    componentDidMount()
    {
        this.props.fetchPosts();
    }
    render() {
        var list=this.props.posts.map((value_,index)=>{
            return<>
                <tr>
                <th><Link to={"/FDetail/"+ value_.id} className="tieude">{value_.title}</Link></th>
                            <td scope="row">{value_.user.username}</td>
                            <td>{value_.likePosts.length}</td>
                            <td>{value_.answers.length}</td>
                            <td>{value_.postTime}</td>
                </tr>
            </>
        })
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Mới cập nhật<span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Được quan tâm</a>


                        </div>
                    </div>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btnNav" type="submit"><i style={{ color: "green" }} className="fas fa-search btnsearch"></i></button>
                        <button class="btnNav" type="submit"><Link to="/Forum-New-Post"><i style={{ color: "green" }} className="fas fa-edit"></i></Link></button>
                    </form>
                </nav>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Chủ thớt</th>
                            <th scope="col">Tiêu đề</th>
                            <th scope="col">Comment</th>
                            <th scope="col"><i className="far fa-clock"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        {list}
                    </tbody>
                </table>
            </>
        );
    }
}
const mapStateToProps =(state)=>
{
    return{
        posts: state.lpost,
    };
}
const mapDispatchToProps = (dispatch)=>
{
    return {
        fetchPosts: ()=>dispatch(fetchPosts()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ForumRight);
