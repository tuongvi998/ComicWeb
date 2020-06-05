import React from 'react';
import { Link } from 'react-router-dom';
import './Detail_R.css';
import { connect } from 'react-redux';
import { fetchGenres } from '../actions/GenreAction';
class Detail_R extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchGenres();
    }
    render() {

        var list = this.props.gens.map((value_, index) => {
            return <><Link to="/Search" className="theloai ml-5"  >{value_.genre_name}</Link><br></br></>
        })
        return (
            <>
                <div className="category">
                    <h4 className="title">Thể loại truyện</h4>
                    <div>
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
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchGenres: () => dispatch(fetchGenres()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail_R);
