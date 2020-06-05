import React from 'react';
import {connect} from 'react-redux'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Detail from './Detail';
import Detail_R from './Detail_R';
import ListChap from './ListChap';
import Comment from './Comment';
import './Comic_detail.css';
import {Link} from 'react-router-dom'
import {fetchOneComic} from '../actions/ComicActions';
import {fetchChapters} from '../actions/ChapterAction'
class Comic_detail extends React.Component{

    componentDidMount()
    {
        this.props.fetchOneComic(this.props.match.params.index);  
    }
    componentWillMount()
    {}
    image()
    {
        var im;
       
        for(var i=0;i<this.props.comic.length;i++)
        {
          im=<img id="s" src={this.props.comic[i].image}></img>
        }
        return <>{im}</>
    }
    Detail()
    {
        var result=[];
            for(var i = 0; i < this.props.comic.length; i++)
            {
                var s=this.props.comic[i].status
                var tus=""
                if(s===0)
                {
                    tus="Còn tiếp"
                }
                else if(s===1)
                {
                    tus="Full"
                }
                localStorage.setItem('comic_name',this.props.comic[i].name)
                result.push(<Detail id_comic={this.props.comic[i].id }Name={this.props.comic[i].name} 
                    Author={this.props.comic[i].author} 
                    like={this.props.comic[i].likes} genreID={this.props.comic[i].genreID}
                    read={this.props.comic[i].views} status={tus} description={this.props.comic[i].description}/>)
            }
            return result;
            
    }
    show()
    {
    var chapters_=[]
    for(var i=0;i<this.props.comic.length;i++)
    chapters_=this.props.comic[i].chapters.map(a=>{
        return a
    })
    var cmts=[]
    for (var i=0;i<this.props.comic.length;i++)
    {
        cmts=this.props.comic[i].comments.map(a=>{
            return a
        })
    }
    var comicid=this.props.comic.map(a=> {
        return a.id
    })
        return (     
        <div className="">    
            <Header/>      
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        <div className="row wrap-detail">
                            <div className="col-md-4">
                               {this.image()}
                            </div>
                            <div className="col-md-8 details">
                                {this.Detail()}  
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                        <ListChap chapters={chapters_} />
                        </div>
                    </div>
                    <hr/>                    
                    <div className="col-md-12 col-lg-3">
                        <Detail_R/>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="row">   
                    <div className="col-md-12">
                    <Comment comicid={comicid} listcmt={cmts}/>
                    </div>                
                </div>              
            </div>   
            <div className="row">  
                <Footer/>                
            </div>
        </div> 
        )
    }
    render()
    {
       
        return(
            <>
           {this.show()}
           </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
     comic: state.comic, 
     chaps: state.chapters
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchOneComic: (id) => dispatch(fetchOneComic(id)),        
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Comic_detail);