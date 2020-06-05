import React from 'react';
import { Link, Route } from 'react-router-dom';
import Content from '../Colaborator/Content';

import { connect } from 'react-redux';
import {addCategory} from '../../actions/ComicActions';
import Footer from './footer';
class AddCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
        this.Save = this.Save.bind(this);
    }
    componentDidMount() {
    }
 
    Save(e) {
        let{cate}=this.state
        console.log(cate)
        this.props.addCategory(cate)
    }

   

    render() {
      let{cate}=this.state
        return (
            <>
                <div className="row">
                    <div className="col-md-2">
                        <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                    </div>
                    <div className="col-md-10" style={{ width: "100%", height: "100vh%" }}>
                        <div className="content-wrapper" style={{ width: "100%", height: "100vh", padding: "0 0" }}>
                            <nav aria-label="breadcrumb ">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active ml-3" aria-current="page">
                                        <span />Thêm thể loại <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                    </li>
                                </ul>
                            </nav>
                            <div className="row mr-5 ml-5 ">
                                <div className="col-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h4 className="card-title">Thêm thể loại</h4>
                                                        <div className="form-group">
                                                            <label htmlFor="comicname" style={{ float: "left" }}>Tên Thể loại</label>
                                                            <input type="text" value={cate} onChange={e => this.setState({ cate: e.target.value })}  class="form-control" id="comicname" placeholder="Nhập tên truyện..." />
                                                        {console.log(this.state.cate)}
                                                        </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-7"></div>
                                <div className="col-md-5">
                                    <button type="button" onClick={this.Save} class="btn btn-pill btn-gradient-warning">Lưu</button>
                                    <button type="button" onClick={e => this.props.history.goBack()} class="btn btn-square btn-gradient-secondary ml-2">Cancel</button>
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
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCategory:(cate)=> dispatch(addCategory(cate))
        };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);