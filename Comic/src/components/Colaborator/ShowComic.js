import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Update_Comic.css';
import Nav from './Nav';
import Content from './Content';
import { fetchGenres } from '../../actions/GenreAction';
import { fetchOneComic } from '../../actions/ComicActions';
import { fetchChapters } from '../../actions/ChapterAction';
import { deleteChapter, fetchChapter } from '../../actions/ChapterAction'
import { connect } from 'react-redux'
class ShowComic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.fetchAchap = this.fetchAchap.bind(this)
    }
    componentDidMount() {
        this.props.fetchGenres()
        this.props.fetchOneComic(this.props.match.params.index)
        this.props.fetchChapters(this.props.match.params.index)
    }
    select() {
        var s = []

        s = this.props.gens.map(a => {
            var check = false;
            if (this.props.comic[1] == a.genre_name) check = true;
            return <option selected={check} value={a.id}>{a.genre_name}</option>
        })
        return s;
    }
    tus(st) {
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
        var s = []
        if (this.props.comic.length > 0)
            for (var i = 0; i < this.props.comic.length - 1; i++) {
                localStorage.setItem('a_comic_edit', JSON.stringify(this.props.comic[i]))
                
                s.push(<>
                    <div className="row" id="row">
                        <div className="col-md-7 ml-3 order-md-1">
                            <form className="needs-validation">
                                <div className="mb-3">
                                    <label for="username">Tên truyện </label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"></div>
                                        <input type="text" class="form-control" id="username" value={this.props.comic[i].name} required=""></input>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Tác giả</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"> </div>
                                        <input type="text" class="form-control" id="username" value={this.props.comic[i].author} required=""></input>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Thể loại</label>
                                    <select className="custom-select d-block w-100" id="country" required="">
                                        {this.select()}
                                    </select>
                                </div>
                                <div className=" mb-3">
                                    <label for="cc-expiration">Trạng thái</label>
                                    <select onChange={(e) => this.setState({ status: e.target.value })} className="custom-select d-block w-100" id="country" required="">
                                        {this.tus(this.props.comic[i].status)}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Mô tả</label>
                                    <div className="form-group">
                                        <textarea className="form-control" id="exampleFormControlTextarea3" value={this.props.comic[i].description} rows="4"></textarea>
                                    </div>
                                </div>

                                <div className=" mb-3">
                                    <label for="cc-expiration">Số chương</label>
                                    <label type="text" class="form-control" id="cc-expiration" placeholder="" value={this.props.chaps.length} required="">{this.props.chaps.length}</label>

                                </div>
                                <div className="mb-3">
                                    <label><Link to={"/Comic/" + this.props.match.params.index + "/Chap"}><i class="fas fa-plus"></i>Thêm chương </Link></label>

                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 order-md-2 ml-3 mb-4">
                            <div className="row">
                                <img id="s" src={this.props.comic[i].Image}></img>

                            </div>
                            <div className="row">
                                <div className="col-md-7">
                                    <Link to={"/Comic/" + this.props.comic[i].id + "/Edit"} type="button" className="btn btn-pill btn-warning">Sửa</Link>
                                    <Link type="button" onClick={e => this.props.history.push('/Admin/Comics')} class="btn btn-square btn-secondary">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )
            }
        return s;

    }
    fetchAchap = (id) => {

        this.props.fetchChapter(id, this.props.match.params.index)
    }
    render() {
        var image = {
            width: "210px",
            height: "240px"
        }
        var list = this.props.chaps.map((a) =>
            <tr>
                <td ><p id="li">Chương số {a.id} : {a.chapter_name}</p></td>
                <td >
                    <ul>
                        <li id="but" ><Link to={"/Comic/" + this.props.match.params.index + "/Chapter/" + a.id + "/Show"} onClick={() => this.fetchAchap(a.id)}><button ><i class="far fa-eye"></i></button></Link></li>
                        <li id="but" ><button id={a.id} onClick={e => { if (window.confirm("Are you sure??")) this.props.deleteChapter(a.id, this.props.match.params.index) }} ><i id="del" class="far fa-minus-square"></i></button></li>
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
                    <div className="col-md-10">
                        {this.show()}
                        {list}
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
        fetchChapter: (id1, id) => dispatch(fetchChapter(id1, id)),
        deleteChapter: (id, com) => dispatch(deleteChapter(id, com))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowComic);