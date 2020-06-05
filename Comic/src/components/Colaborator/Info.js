import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import {fetchListComic} from '../../actions/ComicActions';
import {fetchGenres} from '../../actions/GenreAction';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/PostFAction'
export class Info extends Component {
    constructor(props)
    {
        super(props)
    }
    componentDidMount()
    {
        this.props.fetchListComic()
        this.props.fetchGenres()
        this.props.fetchPosts()
    }
    render() {
        return (
            <>
                <div className="content-wrapper" style={{width:"100%", height:"100%"}}>
                    <div className="page-header">
                        <h3 className="page-title">
                            <span className="page-title-icon bg-gradient-primary text-white mr-2">
                                <i className="mdi mdi-home" />
                            </span> Dashboard </h3>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                    <span />Colaborator <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-info card-img-holder text-white">
                                <div className="card-body">
                                    <Link className="text-decoration-none" style={{fontSize:"50px", color:"#fff"}} to="/Colaborator/comics"><h4 className="font-weight-normal mb-3">Quản lý truyện <i className="mdi mdi-bookmark-outline mdi-24px float-right" />
                                    </h4>
                                    <h2 className="mb-5">{this.props.list.length}</h2>
                                    <a href="/Colaborator/comics" style={{fontSize:"50px", color:"#fff"}}><i className="mdi mdi-plus-circle-outline large"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-success card-img-holder text-white">
                                <div className="card-body">
                                    <Link className="text-decoration-none" style={{fontSize:"50px", color:"#fff"}} to="/Colaborator/categorys"><h4 className="font-weight-normal mb-3">Thể loại <i className="mdi mdi-diamond mdi-24px float-right" />
                                    </h4>
                                    <h2 className="mb-5">{this.props.gens.length}</h2>
                                    <a href="/Colaborator/categorys" style={{fontSize:"50px", color:"#fff"}}><i className="mdi mdi-plus-circle-outline large"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-primary card-img-holder text-white">
                                <div className="card-body">
                                    <Link className="text-decoration-none" style={{fontSize:"50px", color:"#fff"}} to="/Colaborator/forums"><h4 className="font-weight-normal mb-3">Diễn đàn <i className="mdi mdi-folder mdi-24px float-right" />
                                    </h4>
                                     <h2 className="mb-5">{this.props.posts.length}</h2>
                                    <a href="/Colaborator/forums" style={{fontSize:"50px", color:"#fff"}}><i className="mdi mdi-plus-circle-outline large"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.comics,
        gens:state.genre,
        posts:state.lpost
    }
}



const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchListComic: () => {  dispatch(fetchListComic())      },
        fetchGenres:()=>{dispatch(fetchGenres())},
        fetchPosts:()=> dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info);