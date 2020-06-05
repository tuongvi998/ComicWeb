import React from 'react';
import { Link, Route } from 'react-router-dom';
import Content from '../Colaborator/Content';
import '../Colaborator/Colab_Comic.css';
import Footer from './footer';
import { connect } from 'react-redux';
import { fetchListComic, deleteComic ,fetchOneComic} from '../../actions/ComicActions';
import { fetchGenres } from '../../actions/GenreAction';
import { SearchByName } from '../../actions/SearchAction';
class Admin_Comic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
        this.search = this.search.bind(this)
    }
    componentDidMount() {
        this.props.fetchListComic()
        this.props.fetchGenres()
    }
    componentWillMount()
    {
        this.props.fetchListComic()
        this.props.fetchGenres()
    }
    findGenre(id) {
        var gen = ""
        for (var i = 0; i < this.props.gens.length; i++) {
            if (this.props.gens[i].genreID === id) {
                gen = this.props.gens[i].genre_name
                break;
            }
        }
        return gen;
    }
    show() {
        
        return this.props.list.map((a) =>           
            <tr className="row w-100">
                <td className="col-md-3">
                    <img src={a.image} className="mr-2" alt="image" /><br/>
                    <Link onClick={e=> {this.props.fetchOneComic(a.id);}} to={"/Comic/" + a.id + "/Show"}>{a.name}</Link>
                </td>
                <td className="col-md-3"> {this.findGenre(a.genreID)} </td>
                <td className="col-md-3">
                {a.author}
                </td>
                <td className="col-md-3"> 
                    <ul className="ml-5">
                        <li id="but" ><Link  to={"/Comic/" + a.id + "/Show"} onClick={e=> {this.props.fetchOneComic(a.id);}}> <i class="far fa-eye" ></i></Link></li>
                        <li id="but" ><Link onClick={e=> {this.props.fetchOneComic(a.id);}} to={"/Comic/" + a.id + "/Show"}><i class="far fa-edit" style={{color:"purple"}}></i></Link></li>
                        <li id="but" ><Link onClick={e => { if (window.confirm("Are you sure??")) this.props.deleteComic(a.id) }} ><i id="del" class="far fa-trash-alt"></i></Link></li>
                    </ul> 
                </td>
            </tr>
        )
    }
    search(keyword) {
        this.props.SearchByName(keyword)
    }
    render() {
        var a = {
            float: "left"
        }
        let { keyword } = this.state
        return (
            <>
                <div className="containers">
                    <div className="row" >
                        <div className="col-md-2 col-lg-2">
                            <Content role={1}/>
                        </div>
                        <div className="col-md-10 col-lg-10" style={{height: "100%"}}>
                            <div className="card" style={{ width: "100%", backgroundColor:"#f2edf3"}}>
                                <div className="card-header" style={{backgroundColor:"ghostwhite"}}>
                                    <p><i class="fas fa-table mr-2"></i>Quản lý truyện</p>
                                </div>
                                <div id="addcomic"> <Link to="/Comics/Add"><i class="fas fa-plus"></i>Thêm truyện </Link></div>
                                <div className="card-body mt-1">
                                        <div className=" dt-bootstrap4" id="">
                                            <div className="row>">
                                                <div className="col-sm-12 col-md-6  grid-margin">
                                                    <div className="input-group" >
                                                        <input type="search" id="adsearch" value={keyword} onChange={e => this.setState({ keyword: e.target.value })} className="form-control" placeholder="Tìm tên truyện,..." />
                                                        <span className="input-group-btn">
                                                            <button onClick={e => this.search(this.state.keyword)} id="adbut" className="btn btn-primary" type="submit" >
                                                                <i className="fas fa-search"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 grid-margin">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title">Danh sách truyện</h4>
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr className="row w-100">
                                                                            <th className="col-md-3"> Tên truyện </th>
                                                                            <th className="col-md-3"> Thể loại </th>
                                                                            <th className="col-md-3"> Tác giả </th>
                                                                            <th className="col-md-3"> Action </th>
                                                                            
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
                                            <div className="row">
                                                <div className="dataTables_info ml-4" id="dataTable_info" role="status" aria-live="polite"><i class="fas fa-pencil-ruler mr-2"></i>THỐNG KÊ {this.props.list.length} cuốn truyện</div>
                                            </div>
                                            <div className="row justify-content-center align-items-center">
                                                <div className="dataTables_paginate paging_simple_numbers ">
                                                    <ul className="pagination ">
                                                        <li className="paginate_button page-item previous disabled" id="dataTable_previous"><Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</Link></li>
                                                        <li className="paginate_button page-item active"><Link to={"/Comics/trang/" + 1} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</Link></li>
                                                        <li className="paginate_button page-item "><Link to={"/Comics/trang" + 2} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">2</Link></li>
                                                        <li className="paginate_button page-item "><Link to={"/Comics/trang" + 3} aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">3</Link></li>
                                                        <li className="paginate_button page-item next" ><Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Next</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <Footer/>
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
        gens: state.genre,
        search: state.search
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListComic: () => dispatch(fetchListComic()),
        fetchGenres: () => dispatch(fetchGenres()),
        deleteComic: (id) => dispatch(deleteComic(id)),
        SearchByName: (key) => dispatch(SearchByName(key)),
        fetchOneComic:(id)=> dispatch(fetchOneComic(id))

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin_Comic);  