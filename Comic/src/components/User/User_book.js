import React from 'react';
import './User_book.css';
import { Link, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Book from './Book';
import {getLike} from '../../actions/ManagerUserAction';
import {connect} from 'react-redux';
import Comic from '../Comic';
class User_book extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount()
    {
        var user=JSON.parse(localStorage.getItem('logined_user'))
        this.props.getLike(user.id)
    }
    render(){
        console.log(this.props.like.length)  
        console.log(this.props.posts)  
        var likescm= []
        for(var i=0;i<this.props.like.length;i++)
        {
            likescm.push( <Comic id = {this.props.like[i].comic.id} name={this.props.like[i].comic.name} Src = {this.props.like[i].comic.image} author={this.props.like[i].comic.author} />)
        }
        // console.log(likes)
        return(
            <>
                <div className="row">
                    <div className="col-xs-6 col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-10">
                        <div className="ml-sm-2">
                            <Nav br="Tủ sách"/>
                        </div> 
                        <div className="mt-3">
                            {likescm}
                        </div>                       
                    </div>  
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        like: state.user1
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLike :(id) => dispatch(getLike(id))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (User_book);
