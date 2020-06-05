import React from 'react';
import {Link,Route} from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import './Admin_Comic.css';
import {connect} from 'react-redux';
import {fetchOneComic} from '../../actions/ComicActions';
import {updateChapter} from '../../actions/ChapterAction';
import {fetchChapter} from '../../actions/ChapterAction'
class ShowChapter extends React.Component{
    constructor(props)
    {
        super(props)
        console.log(this.props)
        this.state={
            name:'',
            content:''
        }
        this.Save = this.Save.bind(this);
    }
    componentDidMount()
    {
        this.props.fetchOneComic(this.props.match.params.index)
       
    }
   
    name()
    {
        var name=""
        for(var i=0;i<this.props.comic.length-1;i++)
        {
            name=this.props.comic[i].Name
        }
        return name
    }
    Save(e)
    {
        e.preventDefault();
    }
    show()
    {
        var s=[]       
        for(var i=0;i<this.props.chap.length;i++)
        {  
           
            s.push(
                <div className="row ">
                <div className="col-md-2">
                    <Content role={JSON.parse(localStorage.getItem('logined_user')).role} />
                </div>
                <div className="col-md-10">
                    <Nav/>                    
                    <div className="row" id="row">
                        <div className="col-md-7 ml-3 order-md-1">
                            <form className="needs-validation">
                                <div className="mb-3">
                                    <label for="username">Tên truyện</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"></div>
                                    <label type="text" class="form-control" id="username" >{this.name()}</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Tên chương</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"> </div>
                             <input type="text"  value={this.props.chap[i].chapter_name} class="form-control" id="name" readonly></input>
                                    </div>
                                </div>
                            
                                <div className="mb-3">
                                    <label for="username">Nội dung</label>
                                    <div className="form-group">
                                        <textarea value={this.props.chap[i].content}  className="form-control" id="exampleFormControlTextarea3" rows="8" readonly></textarea>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7"></div>
                            <div className="col-md-5">
                                <Link type="button" to={"/Comic/"+this.props.match.params.index+"/Chapter/"+this.props.match.params.id+"/Show"} class="btn btn-pill btn-warning">Edit</Link>
                                <Link type="button" to={"/Comic/"+this.props.match.params.index} class="btn btn-square btn-secondary">Cancel</Link>
                            </div>
                        </div>
                    </div>               
                </div>  
            )
        }
        return s;
    }
    render()
    {
        
        return (
            <>
            {this.show()}
               
        </>
        )
    }
}
const mapStateToProps =(state)=>
{
  return{
    comic: state.comic,
    chap:state.chapter
  };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneComic:(comic_id) => dispatch(fetchOneComic(comic_id)),
        fetchChapter:(chap_id,com_id) =>dispatch(fetchChapter(chap_id,com_id)),
        UpdateChapter:(chap_id,comic_id,name,content) => dispatch(updateChapter(chap_id,comic_id,name,content))
  };
}
  export default connect(mapStateToProps, mapDispatchToProps)(ShowChapter);