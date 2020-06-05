import React from 'react';
import { Link, Route } from 'react-router-dom';
import Content from '../Colaborator/Content';
import './Admin_Comic.css';
import Footer from './footer';
import { connect } from 'react-redux';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { Redirect } from 'react-router-dom'
import { fetchOneComic } from '../../actions/ComicActions';
import { addChapter, fetchChapters } from '../../actions/ChapterAction'
class AddChapter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.Save = this.Save.bind(this);
    }
    componentDidMount() {
        this.props.fetchOneComic(this.props.match.params.index)
        this.props.fetchChapters(this.props.match.params.index)
    }

    Save(e) {
        e.preventDefault();
        let { name, content } = this.state;
        this.props.addChapter(this.props.match.params.index, name, content, parseInt(this.props.chaps.length + 1))
        this.setState({
            name: '',
            content: ''
        })
        this.props.fetchChapters(this.props.match.params.index)
        this.props.history.push("/Comic/" + this.props.match.params.index + "/Show")

    }
    selectFile = (file) => {

        this.setState({ file: file })
        let reader = new FileReader()
        reader.onload = () => {
            this.setState({
                content: reader.result
            })

        };
    }

    render() {
        let { name, content } = this.state
        var comic
        for (var i = 0; i < this.props.comic.length; i++) {
            comic = this.props.comic[i].name
        }
        console.log(comic)
        return (
            <>
                <div className="row ">
                    <div className="col-md-2">
                        <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                    </div>
                    <div className="col-md-10" style={{ width: "100%", height: "100%" }}>
                        <div className="content-wrapper" style={{ width: "100%", height: "100%", padding: "0 0 0 0" }}>
                            <nav aria-label="breadcrumb ">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active ml-3" aria-current="page">
                                        <span />Thêm chương mới <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                    </li>
                                </ul>
                            </nav>
                            <div className="row">
                                <div className=" col-md-10 offset-md-1 ml-3">
                                    <form className="needs-validation">
                                        <div className="mb-3">
                                            <label for="username" style={{ float: "left" }}>Tên truyện</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend"></div>
                                                <label type="text" class="form-control" id="username"  >{comic}</label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="username" style={{ float: "left" }}>Tên chương</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend"> </div>
                                                <input type="text" value={name} onChange={e => this.setState({ name: e.target.value })} class="form-control" id="username" required></input>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label className="mb-3" for="username" style={{ float: "left" }}>Nội dung</label><br />
                                            <div className="form-group">
                                                {/* <textarea value={this.state.content} onChange={e => this.setState({ content: e.target.value })} className="form-control" id="exampleFormControlTextarea3" rows="4"></textarea> */}
                                                <FroalaEditor value={this.state.content} onChange={e => this.setState({ content: e.target.value })} ></FroalaEditor>
                                                <input type="file" className=" mt-4" onChange={e => this.selectFile(e.target.files[0])}></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-7"></div>
                                <div className="col-md-5 mb-3">
                                    <button type="button" onClick={this.Save} class="btn btn-gradient-warning w-25 mr-4">Lưu</button>
                                    <button type="button" onClick={e => this.props.history.goBack()} class="btn btn-gradient-secondary w-25">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comic: state.comic,
        chaps: state.chapters
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneComic: (comic_id) => dispatch(fetchOneComic(comic_id)),
        fetchChapters: (id) => dispatch(fetchChapters(id)),
        addChapter: (id, name, content, stt) => dispatch(addChapter(id, name, content, stt))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddChapter);