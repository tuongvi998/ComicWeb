import React from 'react';
import './Filter.css';
import { Link } from 'react-router-dom'
import Header from './Header';
import RightBody from './RightBody';
import Footer from './Footer';
import Comic from './Comic'
import { connect } from 'react-redux';
import { SearchByName } from '../actions/SearchAction';
import { fetchComicHot, fetchComicByCategory, filter } from '../actions/ComicActions'
class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
    }
    componentDidMount() {

    }

    search(e) {
        var check = document.getElementById("check")
        var status = check.checked ? 1 : 0
        console.log(status)
        var genreid = localStorage.getItem('genreid')
        console.log(genreid)
        this.props.filter(genreid, status)
        localStorage.removeItem('genreid')
        document.getElementById("selectgen").selectedIndex = 0
        check.checked = false

    }
    getGenreId(genre) {
        console.log(genre)
        for (var i = 0; i < this.props.list.length; i++) {
            console.log(this.props.list[i].genre_name)
            if (this.props.list[i].genre_name == genre) {
                return this.props.list[i].genreID
            }

        }
    }
    show(comics) {
        if (comics.length == 0) {
            return <div className="row ">
                <p style={{ marginLeft: "40%" }}>NO RESULT</p>
            </div>
        }
    }
    render() {

        localStorage.setItem('searchByName', this.props.match.params.string)
        var con_m21 = {
            backgroundColor: "#fff",
            height: "95%",


        }

        var table_s = {
            textAlign: "center",
            width: "70%",

        }
        var li = {
            listStyle: "none"
        }
        var option = this.props.list.map((a, index) => {
            return <><option value={a.genreID} id={a.genreID}>{a.genre_name}</option></>
        })
        var comics = []
        comics = this.props.result.map(a => {
            return <Comic id={a.id} Src={a.image} name={a.name} author={a.author} follow={a.views} like={a.likes} />
        })
        return (
            <>
                <div className="">
                    <Header />
                    <div>
                        <div className="container mt-4">
                            <div className="row mt-2">
                                <div className="col-md-12 col-lg-9 mb-4">
                                    <div style={con_m21}>
                                        <div className="content m2l">
                                            <div >
                                                <form>
                                                    <table style={table_s}>
                                                        <tr>
                                                            <td>
                                                                <select id="selectgen" onChange={e => localStorage.setItem('genreid', (e.target.value))} class="mdb-select md-form colorful-select dropdown-primary">
                                                                    <option value="0" >Thể Loại </option>
                                                                    {option}

                                                                </select>
                                                            </td>
                                                            <td>

                                                            </td>
                                                            <td>
                                                                <input type="checkbox" id="check" />Truyện Full
                                                        </td>
                                                            <td>
                                                                <Link onClick={this.search} to="/Search" className="btn btn-search"><i class="fa fa-search fa-fw"></i>Tìm truyện</Link>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </form>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div>
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/" aria-label="Previous">
                                                            <span aria-hidden="true">«</span>
                                                            <span className="sr-only">Previous</span>
                                                        </Link>
                                                    </li>
                                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/" aria-label="Next">
                                                            <span aria-hidden="true">»</span>
                                                            <span className="sr-only">Next</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div className="row ">
                                            {comics}
                                        </div>
                                        {this.show(comics)}


                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-3">
                                    <RightBody />
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <Footer />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.search,
        list: state.genre
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SearchByName: (keyword) => dispatch(SearchByName(keyword)),
        fetchComicByCategory: (id) => dispatch(fetchComicByCategory(id)),
        filter: (id, s) => dispatch(filter(id, s))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);