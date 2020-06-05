import React from 'react';
import { Link, Route } from 'react-router-dom';
import Content from './Content';
import './Colab_Comic.css'; 
import { connect } from 'react-redux';
import { fetchGenres } from '../../actions/GenreAction';
import { addComic } from '../../actions/ComicActions';
import ImageUploader from 'react-images-upload';
import Footer from './footer';
class AddComic extends React.Component {
    constructor(props) {
        super(props)
        this.state = { images: [], imageUrls: [] }
        this.Save = this.Save.bind(this);
    }
    componentDidMount() {
        this.props.fetchGenres()
    }
    select() {
        var s = []

        s = this.props.gens.map(a => {
            return <option value={a.id} >{a.genre_name}</option>
        })
        return s;
    }
    Save(e) {
        e.preventDefault();
        var temp = new Date
        var date = temp.getMonth() + "/" + temp.getDate() + "/" + temp.getFullYear()
        let { name, genre_id, author, des } = this.state;
        var img = localStorage.getItem('image_url')
        var id = parseInt(genre_id)
        if (window.confirm('Add a comic??')) {
            this.props.addComic(name, id, author, 0, des, date, img)
            alert("Add success")

        }
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
                imageUrls: reader.result
            })
            localStorage.setItem('image_url', reader.result)
        };
    }

    render() {
        let { name, author, genre_id, chap_number, des } = this.state
        var image1 = {
            width: "210px",
            height: "240px"
        }
        return (
            <>
                <div className="row">
                    <div className="col-md-2">
                        <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                    </div>
                    <div className="col-md-10" style={{ width: "100%", height: "100%" }}>
                        <div className="content-wrapper" style={{ width: "100%", height: "100%", padding: "0 0" }}>
                            <nav aria-label="breadcrumb ">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active ml-3" aria-current="page">
                                        <span />Colab/Thêm truyện mới <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                    </li>
                                </ul>
                            </nav>
                            <div className="row mr-5 ml-5 ">
                                <div className="col-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h4 className="card-title">Thêm truyện mới</h4>
                                                    <p className="card-description"> Thông tin truyện </p>
                                                    <form className="forms-sample">
                                                        <div className="form-group">
                                                            <label htmlFor="comicname" style={{ float: "left" }}>Tên truyện</label>
                                                            <input type="text" value={name} onChange={e => this.setState({ name: e.target.value })} class="form-control" id="comicname" placeholder="Nhập tên truyện..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="author" style={{ float: "left" }}>Tác giả</label>
                                                            <input type="text" value={author} onChange={e => this.setState({ author: e.target.value })} class="form-control" id="author" placeholder="Tác giả..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="category" style={{ float: "left" }}>Thể loại</label>
                                                            <select value={genre_id} onChange={e => this.setState({ genre_id: e.target.value })} className="custom-select d-block w-100" id="category" required="">
                                                                {this.select()}
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="selectcategory" style={{ float: "left" }}>Mô tả</label>
                                                            <div className="form-group">
                                                                <textarea value={des} onChange={e => this.setState({ des: e.target.value })} className="form-control" id="selectcategory" rows="4"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label><Link to={"/Comic/"+this.props.match.params.index+"/Chap"}><i class="fas fa-plus"></i>Thêm chương </Link></label>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-md-4 mb-4 ">
                                                    <div className="row float-right">
                                                        <img style={image1} src={(this.state.imageUrls.length > 0) ? this.state.imageUrls : "http://dummyimage.com/250x235.bmp/dddddd/000000"}></img>
                                                    </div>
                                                    <input type="file" name="file" id="file" className="inputfile mt-4" style={{ marginLeft: "100px" }} onChange={this.selectImages} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{console.log(this.state)}
                            <div className="row">
                                <div className="col-md-7"></div>
                                <div className="col-md-5">
                                    <button type="button" onClick={this.Save} class="btn btn-pill btn-warning">Lưu</button>
                                    <button type="button" onClick={e => this.props.history.goBack()} class="btn btn-square btn-secondary">Cancel</button>
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
        gens: state.genre,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchGenres: () => dispatch(fetchGenres()),
        addComic: (name, id, author, chap_number, des, date, img) => dispatch(addComic(name, id, author, chap_number, des, date, img))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComic);