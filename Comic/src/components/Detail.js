import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Detail.css';
import { likeComic } from '../actions/ComicActions';
import { fetchLike } from '../actions/LikeComicAction';
import { getLike } from '../actions/LikeComicAction';
import { unLike } from '../actions/LikeComicAction';
import { connect } from 'react-redux';
import { fetchGenre } from '../actions/GenreAction';

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        // if(JSON.parse(localStorage.getItem('logined_user'))===null)
        // {
        //   if(window.confirm("vui lòng đăng nhập để tương tác")){
        //       return <Redirect to="/Signin" />
        //   }

        // }else{
        if (JSON.parse(localStorage.getItem('logined_user')) != null) {
            var user = JSON.parse(localStorage.getItem('logined_user'))
            this.props.getLike(user.id, this.props.id_comic)
        }
        
        // }

    }

    genre(id)
    {
        for(var i=0;i<this.props.genre.length;i++)
        {
            if(id==this.props.genre[i].genreID)
            {
                return this.props.genre[i].genre_name
                
            }
        }
    }
    btnClick() {
        if (JSON.parse(localStorage.getItem('logined_user')) === null) {
            alert("vui lòng đăng nhập để tương tác")
        } else {
            var user = JSON.parse(localStorage.getItem('logined_user'))

            if (this.props.liked === false) {
                this.props.fetchLike(user.id, this.props.id_comic)

            } else {

                this.props.unLike(user.id, this.props.id_comic)
            }
        }

    }
    daLike() {
        return ( 
        <> 
            <button className = "liked" onClick = { this.btnClick.bind(this) } >
                <i className = "fa fa-heart" > </i> 
            </button > 
            <span className = "like" > { this.props.like } </span>
        </> 
        );
    }
    chuaLike() {
        return (
        <> 
            < button className = "but-like" onClick = { this.btnClick.bind(this) } >
                <i className = "fa fa-heart" > </i> 
            </button> 
            < span className = "like" > { this.props.like } </span>
        </>
        );
    }
    render() {

        return ( 
        <>
            <div className = "title" >
                <h3 className = "title" >
                <Link to = { "/Comic/" + this.props.id_comic }
                className = "comicname" > { this.props.Name } </Link> </h3> 
            </div> 
            <div className = "contend" >
                <div className = "info" >
                    <p> Tác giả: <Link to = "/Author" className = "author" > { this.props.Author } </Link></p >
                    <p> Thể loại: < Link to = {"/Search/"+this.props.genreID} className = "author" > { this.genre(this.props.genreID) } </Link> </p >
                    <p> Trạng thái: < span className = "status" > { this.props.status } </span> </p >
                    <p> </p> 
                    <div className = "view"> { this.props.liked && this.daLike() } {!this.props.liked && this.chuaLike() } 
                        <button className = "but-dt" > < i className = "fa fa-eye" > { this.props.read } </i></button >
                    </div>

                </div> 
                <div className = "description" >
                    <p> { this.props.description } </p> 
                    <p> </p> 
                </div> 
            </div> 
        </>
        );
    }

}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        comic: state.comic,
        liked: state.like,
        genre:state.genre
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeComic: (id) => dispatch(likeComic(id)),
        fetchLike: (user_id, comic_id) => dispatch(fetchLike(user_id, comic_id)),
        getLike: (user_id, comic_id) => dispatch(getLike(user_id, comic_id)),
        unLike: (id, user_id, comic_id) => dispatch(unLike(id, user_id, comic_id)),
        fetchgenre:()=> dispatch(fetchGenre())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);