import React from 'react';
import Comicfull from './Comic_full';
import { connect } from 'react-redux';
import { fetchComicFull } from '../actions/ComicActions';
class List_full extends React.Component {
    constructor(props)
    {
        super(props)
    }
    componentDidMount() {
        this.props.fetchComicFull();

    }
    show() {
        var result = [];

        for (var i = 0; i < this.props.list.length; i++) {
            result.push( < Comicfull id = { this.props.list[i].id }
                Src = { this.props.list[i].image }
                name = { this.props.list[i].name }
                author = { this.props.list[i].author }
                follow = { this.props.list[i].views }
                like = { this.props.list[i].likes }
                />)
            }
            if(result.length==0) return <p style={{marginLeft:"40%"}}>NO RESULT</p>
            else   return result;
    }
    render() {
        return ( 
            <> 
            { this.show() } 
            
            </>
        )
    }
}
        const mapStateToProps = (state) => {
            return {
                list: state.comics
            }
        }



        const mapDispatchToProps = (dispatch, props) => {
            return {
                fetchComicFull: () => {
                    dispatch(fetchComicFull())

                }
            }
        }
        export default connect(mapStateToProps, mapDispatchToProps)(List_full);