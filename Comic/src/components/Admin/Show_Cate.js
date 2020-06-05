import React, { Component } from 'react';
import Content from '../Colaborator/Content';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchComicByCategory } from '../../actions/ComicActions';
import Comic from '../Comic';
import Footer from './footer';
import { fetchGenres } from '../../actions/GenreAction';
import {fetchOneComic} from '../../actions/ComicActions';


export class Show_Cate extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchComicByCategory(this.props.match.params.id);
        this.props.fetchGenres();
    }
    findGenre(id) {
       
        var gen = ""
        console.log(id)
        for (var i = 0; i < this.props.gens.length; i++) {
            
            if (this.props.gens[i].genreID == id) {
                console.log(this.props.gens[i].genreID)
                gen = this.props.gens[i].genre_name
                break;
            }
        }
        return gen;
    }
    show() {
        return this.props.comics.map(a => {
            return (
                <>
                    <tr className="row w-100">
                        <td className="col-md-4">
                            <img src={a.image} className="mr-2" alt="image" /><br />
                            <Link onClick={e => { this.props.fetchOneComic(a.id); }} to={"/Comic/" + a.id + "/Show"}>{a.name}</Link>
                        </td>
                        <td className="col-md-4">
                            {a.author}
                        </td>
                        <td className="col-md-4">
                            <Link className="ml-5" to={"/Comic/" + a.id + "/Show"} onClick={e => { this.props.fetchOneComic(a.id); }}> <i class="far fa-eye" ></i></Link>
                        </td>
                    </tr>
                </>
            )
        })
    }
    cate(){
       return this.props.gens.genre_name
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                    </div>
                    <div className="col-md-10 h-100" >
                        <div className="content-wrapper" style={{ padding: "0 0 ", height: "100vh" }} >
                            <nav aria-label="breadcrumb ">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active ml-3" aria-current="page">
                                        <span />Thể loại: {this.findGenre(this.props.match.params.id)} <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                    </li>
                                </ul>
                            </nav>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card ml-5 mt-4 mr-5">
                                        <div className="card-body">
                                            <h4 className="card-title">Danh sách truyện</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr className="row w-100">
                                                            <th className="col-md-4"> Tên truyện </th>
                                                            <th className="col-md-4"> Tác giả </th>
                                                            <th className="col-md-4"> Action </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.show()}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comics: state.search,
        gens: state.genre,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComicByCategory: (genreID) => dispatch(fetchComicByCategory(genreID)),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchOneComic:(id)=> dispatch(fetchOneComic(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Show_Cate);
