import React from 'react';
import {Link,Route} from 'react-router-dom';
import Nav from './Nav';
import Content from '../Colaborator/Content';
import './Admin_Comic.css';
import {connect} from 'react-redux';
import {updateChapter,fetchChapter} from '../../actions/ChapterAction';
class ShowChapter extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount()
    {
        this.props.fetchChapter(this.props.match.params.id)
    }   
    show()
    {
           console.log(this.props.comic)
        var s=this.props.chap.map(a=>{
         return  <>           
            <div className="row ">
                <div className="col-md-2">
                    <Content role={JSON.parse(localStorage.getItem('logined_user')).role}/>
                </div>
                <div className="col-md-10" style={{    marginTop: "50px"}}>                   
                    <div className="row" id="row">
                        <div className="col-md-7 ml-3 order-md-1">
                            <form className="needs-validation">
                                <div className="mb-3">
                                    <label for="username">Tên truyện</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"></div>
                                    <label type="text" class="form-control" id="username" >{this.props.comic.map(a=>{return a.name})}</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Tên chương</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"> </div>
                                        <input type="text" value={a.title}class="form-control" id="name" required></input>
                                    </div>
                                </div>
                            
                                <div className="mb-3">
                                    <label for="username">Nội dung</label>
                                    <div className="form-group">
                                        <textarea value={a.content} className="form-control" id="exampleFormControlTextarea3" rows="8"></textarea>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7"></div>
                            <div className="col-md-5">
                                 <Link type="button" to={"/Comic/"+this.props.match.params.index+"/Chapter/"+this.props.match.params.id+"/Edit"} class="btn btn-pill btn-warning">Edit</Link>
                                <Link type="button" to={"/Comic/"+this.props.match.params.index+"/Show"} class="btn btn-square btn-secondary">Cancel</Link>
                            </div>
                        </div>
                    </div>                  
                </div>  
                </>
        })
       
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
        UpdateChapter:(chap_id,name,content) => dispatch(updateChapter(chap_id,name,content)),
        fetchChapter: (id) => dispatch(fetchChapter(id)),
  };
}
  export default connect(mapStateToProps, mapDispatchToProps)(ShowChapter);