import React from 'react';
import Comic_mini from './Comic_mini';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchGenres } from '../actions/GenreAction';
import './Right_body.css';
import {fetchComicByCategory} from '../actions/ComicActions'
class RightBody extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchGenres();
    }
    render() {
        var con_d = {
            backgroundColor: "#fff",
            height: "100%",
            width: "90%",
            border: "none",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
        }
        var i_s = {
            color: "teal",
            textDecoration: "none",
        }
        var tb_s = {
            margin: "20px"
        }
        var a_style = {
            cursor: "pointer",
            border: "1px solid #E1E1E1",
            padding: "3px 8px",
            fontWeight: " bold",
            color: "#fff",
            textDecoration: "none",
            backgroundColor: "teal",
            borderRadius: "8px",
            marginBottom: "-5px"
        }
        var list = this.props.gens.map((value_, index) => {
            return <><Link to="/Search" className="theloai" onClick={e=> this.props.fetchComicByCategory(value_.genreID)} >{value_.genre_name}</Link><br></br></>
        })
        return (
            <>
                <div className="row">
                    <div className="ml-5" style={con_d}>
                        <div>
                            <h5 className="widget-heading font-nav mt-3" title="TRUYỆN ĐỌC NHIỀU NHẤT" >
                                <i style={i_s} className="fab fa-font-awesome-flag"></i>
                                <Link to="/" style={i_s}> THỂ LOẠI</Link>
                            </h5>
                        </div>
                        <hr></hr>
                        <div className="widget-content" style={tb_s}>
                            {list}
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
            </>
        );
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
        fetchComicByCategory:(id)=> dispatch(fetchComicByCategory(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightBody);


