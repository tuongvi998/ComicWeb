import React from 'react';
import './Filter.css';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import Footer from  './Footer';
import {connect} from 'react-redux';
import {SearchByName} from '../actions/SearchAction'
class Search extends React.Component
{
    constructor(props)
    {
        super(props)

    }
    componentDidMount()
    {
        console.log("COMP "+ localStorage.getItem('searchByName'))
        this.props.SearchByName(localStorage.getItem('searchByName'))
    }
    componentWillMount()
    {
        this.props.SearchByName(localStorage.getItem('searchByName'))

    }
    render()
    { 
        console.log("SEARCH")
        return(
            <>
          
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9">
                            <LeftBody/>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <RightBody/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <Footer/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
     result:state.comics
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      SearchByName:(keyword) =>dispatch(SearchByName(keyword))
  
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);