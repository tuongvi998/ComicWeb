import React from 'react';
import { Link, Route } from 'react-router-dom';
import Content from '../Colaborator/Content';
import { fetchGenres } from '../../actions/GenreAction';
import { fetchOneComic, updateComic, fetchListComic } from '../../actions/ComicActions';
import { fetchChapters } from '../../actions/ChapterAction';
import { deleteChapter, fetchChapter } from '../../actions/ChapterAction'
import { connect } from 'react-redux'
import Footer from './footer';
class ShowComic extends React.Component {
    constructor(props) {
        super(props);
        this.fetchAchap = this.fetchAchap.bind(this)
    }
    componentDidMount() {
        this.props.fetchOneComic(this.props.match.params.index)
        this.props.fetchGenres()
        this.props.fetchChapters(this.props.match.params.index)
    }

    selectImages = (event) => {
        let images = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|PNG|gif)$/))
        this.setState({ images: images })
        var file = event.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({
                Image: reader.result
            })
        };
    }
    select(genre_id) {
        var s = []
        s = this.props.gens.map(a => {
            var check = false;
            if (genre_id == a.genreID) check = true;
            return <option selected={check} value={a.genreID}>{a.genre_name}</option>
        })
        return s;
    }
    status(st) {
        var s = []
        s.push(
            <>
                <option selected={(st == 0)} value="0">Còn tiếp</option>
                <option selected={(st == 1)} value="1">Full</option>
            </>
        )
        return s;
    }
    show() {
        var image = {
            width: "210px",
            height: "240px",
            marginLeft: "100px"
        }
        var s = this.props.comic
        var k = this.props.comic.map(a => {
            return <>
                <nav aria-label="breadcrumb ">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active ml-3" aria-current="page">
                            <span /> Truyện: {a.name} <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                        </li>
                    </ul>
                </nav>
                <div className="row" id="row">
                    <div className="col-md-7 " style={{ marginTop: "40px" }}>
                        <form className="needs-validation ml-3">
                            <div className="mb-3">
                                <label for="sname" className="float-left">Tên truyện</label>
                                <input type="text" class="form-control" id="sname" value={a.name} required=""></input>
                            </div>
                            <div className="mb-3">
                                <label for="sauthor" className="float-left">Tác giả</label>
                                <input type="text" class="form-control" id="sauthor" value={a.author} required=""></input>
                            </div>
                            <div className="mb-3">
                                <label for="scategory" className="float-left">Thể loại</label>
                                <select className="custom-select d-block float-left w-100" id="scategory" required="">
                                    {this.select(a.genreID)}
                                </select>
                            </div>
                            <div className=" mb-3">
                                <label for="sstatus" className="float-left">Trạng thái</label>
                                <select className="custom-select d-block w-100" id="sstatus" required="">
                                    {this.status(a.status)}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="username" className="float-left">Mô tả</label>
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea3" value={a.description} rows="4"></textarea>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="cc-expiration" className="float-left">Số chương</label>
                                {/* <label type="text" class="form-control mt-3" id="cc-expiration" placeholder="" required="">{this.props.chaps.length}</label> */}
                                <div className="form-group">
                                    <input type="text" className="form-control" id="cc-expiration" value={this.props.chaps.length}></input>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label><Link to={"/Comic/" + this.props.match.params.index + "/Chap"}><i class="fas fa-plus"></i>Thêm chương </Link></label>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5" style={{ marginTop: "40px" }} >
                        <div className="row text-center" >
                            <img style={image} src={a.image}></img>
                        </div>
                        <input className="form-control w-auto ml-4 mt-2" type="file"
                            onChange={this.selectImages} multiple />
                    </div>
                </div>
            </>
        })

        return k;

    }
    fetchAchap = (id) => {

        this.props.fetchChapter(id)
    }
    Save() {


    }
    fetchAchap = (id) => {

        this.props.fetchChapter(id)
    }
    render() {
        var image = {
            width: "210px",
            height: "240px"
        }
        var chapters_ = []
        var k = 0;
        for (var i = 0; i < this.props.chaps.length; i++)
            chapters_ = this.props.chaps.map(a => {
                k++;
                return a
            })
        localStorage.setItem('chaplength', k)
        var list = chapters_.map((a) =>
            <tr className="row w-100">
                <td className="col-md-6"><p id="li">Chương số {a.stt} : {a.title}</p></td>
                <td className="col-md-6">
                    <ul>
                        <li id="but" ><Link to={"/Comic/" + this.props.match.params.index + "/Chapter/" + a.chapterID + "/Show"} onClick={e => this.fetchAchap(a.chapterID)}><i class="far fa-eye"></i></Link></li>
                        <li id="but" ><Link to={"/Comic/" + this.props.match.params.index + "/Chapter/" + a.chapterID + "/Show"} onClick={e => this.fetchAchap(a.chapterID)}><i class="far fa-edit" style={{ color: "purple" }}></i></Link></li>
                        <li id="but" ><Link id={a.id} onClick={e => { if (window.confirm("Are you sure??")) { this.props.deleteChapter(a.chapterID, this.props.match.params.index) } }} ><i id="del" class="far fa-trash-alt"></i></Link></li>
                    </ul>
                </td>
            </tr>
        )
        return (
            <>
                <div className="row ">
                    <div className="col-md-2">
                        <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                    </div>
                    <div className="col-md-10" style={{ width: "100%", height: "100%" }}>
                        <div className="content-wrapper" style={{ width: "100%", height: "100%", padding: "0 0" }}>
                            {this.show()}
                            <div className="row">
                                <div className="col-md-10" style={{ marginLeft: "50px" }}>
                                    {list}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-7 mb-4">
                                    <Link to={"/Comic/" + this.props.match.params.index + "/Update"} className="btn btn-pill btn-gradient-warning">Edit</Link>
                                    <Link onClick={e => { this.props.history.push('/Colaborator/comics'); }} className="btn btn-square btn-gradient-secondary ml-3">Cancel</Link>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        gens: state.genre,
        comic: state.comic,
        chaps: state.chapters
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchGenres: () => dispatch(fetchGenres()),
        fetchOneComic: (comic_id) => dispatch(fetchOneComic(comic_id)),
        fetchChapters: (id) => dispatch(fetchChapters(id)),
        fetchChapter: (id) => dispatch(fetchChapter(id)),
        updateComic: (id, Name, Author, genre_id, des, Image, date, chaps, Status) =>
            dispatch(updateComic(id, Name, Author, genre_id, des, Image, date, chaps, Status)),
        deleteChapter: (id, a) => dispatch(deleteChapter(id, a)),
        fetchListComic: () => dispatch(fetchListComic()),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowComic);