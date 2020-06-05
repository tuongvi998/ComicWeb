import React from 'react';
import './Book.css';
import { Link, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {getLikedComics,fetchListComic} from '../../actions/ComicActions'
import Comic from '../Comic';
class Book extends React.Component{
    componentDidMount(){
        var user=JSON.parse(localStorage.getItem('logined_user'))
        var user_id=user.id
        this.props.getLikedComics(user_id)
        this.props.fetchListComic()
    }
    show()
    {
        var comics=[]
        var likedcomicid=this.props.result.map(a=>{
            return a.comic_id
        })
        for(var j=0;j<likedcomicid.length;j++)
        {
            var comicid=likedcomicid[j]
            for(var i=0;i<this.props.list.length;i++)
            {
               
                if(this.props.list[i].id===comicid)
                {
                    console.log(this.props.list[i].id)
                    comics.push(
                        <>
                         <div className="container" id="vi">
                            <div className="row mt-5 ml-5">
                                <div className="col-xs-6 col-md-3 ">
                                    <img id="cm_image" src={this.props.list[i].Image} alt={this.props.list[i].Name}/>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 mt-2 cminfo">
                                    <Link><h4>{this.props.list[i].Name}</h4></Link>
                                    <h6>Tác giả: <Link>{this.props.list[i].Author}</Link></h6>
                                    <h6>Số chương: {this.props.list[i].Chappter_number_of}</h6>
                                    <hr style={{ color:' #ffcc66', border:'1px solid  #ffcc66',textAlign:'left' }}/>
                                    <p style={{color:'#0d0d0d'}}>{this.props.list[i].Description}</p>
                                    <Link to={"/Comic/"+this.props.list[i].id}  className="mt-5 read" style={{color: 'black'}}><h6>ĐỌC TIẾP<i className="fas fa-arrow-circle-right ml-2"></i> </h6> </Link>
                                </div>
                            </div>
                        </div> 
                        </>
                    )
                }
            }
        }
       
      
        return comics
        
    }
    render(){
       
        
        return(
            <>
            <div className="container">
                <div className="row">
                    {this.show()}
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
     result:state.likedcomic,
     list:state.comics
    
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getLikedComics:(id) =>dispatch(getLikedComics(id)),
      fetchListComic:()=> dispatch(fetchListComic())
      
    };
  }
export default  connect(mapStateToProps, mapDispatchToProps) (Book);