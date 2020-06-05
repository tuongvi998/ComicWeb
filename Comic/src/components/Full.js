import React from 'react';
import Listfull from './List_full';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchGenres} from '../actions/GenreAction';
import {fetchComicByCategory} from '../actions/ComicActions'
class Full extends React.Component{
    constructor(props)
    {
        super(props)
      
    }
   
    render(){
        var con_m21={
            backgroundColor: "#fff",
            height: "95%",
            width: "100%"
        }
        return(
            <div style={con_m21}>
               <div className="row">
                   <Listfull/>
                </div> 
            </div>
        );

        
    }
}
const mapStateToProps = (state) => {
    return {
     list: state.genre
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchGenres:() =>dispatch(fetchGenres()),
      fetchComicByCategory:(id) => dispatch(fetchComicByCategory(id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Full);