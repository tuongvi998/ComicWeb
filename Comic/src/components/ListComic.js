import React from 'react';
import Comic from './Comic';
import { connect } from 'react-redux';
import { fetchComicUpdateNew } from '../actions/ComicActions';
class ListComic extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchComicUpdateNew();

    }
    show() {
        var result = [];

        for (var i = 0; i < this.props.list.length; i++) {
            result.push(< Comic id={this.props.list[i].id}
                Src={this.props.list[i].image}
                name={this.props.list[i].name}
                author={this.props.list[i].author}
                follow={this.props.list[i].views}
                like={this.props.list[i].likes}
            />)
        }
        if (result.length == 0) return <p style={{ marginLeft: "40%" }}>NO RESULT</p>
        else return result;
    }
    render() {
        return (
            <>
                {this.show()}

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.comicnew
    }
}



const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchComicUpdateNew: () => {
            dispatch(fetchComicUpdateNew())

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListComic);