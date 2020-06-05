import React from 'react';
import {Link,Route} from 'react-router-dom';
import Nav from './Nav';
import Content from '../Colaborator/Content';
import './Admin_Comic.css';
import {connect} from 'react-redux';
import {updateChapter,fetchChapters} from '../../actions/ChapterAction';
class UpdateChapter extends React.Component{
    constructor(props)
    {
        super(props)
        var chap=JSON.parse(localStorage.getItem('achap'))   
        var name
        var content
        for(var i=0;i<chap.length;i++)
        {
            name=chap[i].title
            content=chap[i].content
        }  
        this.state={
            name:name,
            content:content
        }
        this.Save = this.Save.bind(this);
    }
    componentDidMount()
    {
        
    }   
    name()
    {
        var name=""
        for(var i=0;i<this.props.comic.length;i++)
        {
            name=this.props.comic[i].name
        }
        return name
    }
    Save(e)
    {
        let {name,content} = this.state;
        if(window.confirm('Are you sure?'))
        {
            this.props.UpdateChapter(this.props.match.params.id,name,content)
            alert("Success")
            this.props.history.goBack()
            this.props.fetchChapters(this.props.match.params.index)
            this.props.history.push('/Comic/'+this.props.match.params.index+'/Show')
        }

    }
    show()
    {
        var s=[]       
        let{name,content}=this.state
       
            s.push(
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
                                    <label type="text" class="form-control" id="username" >{this.name()}</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Tên chương</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"> </div>
                                        <input type="text" value={name} onChange={e=> this.setState({name: e.target.value})} class="form-control" id="name" required></input>
                                    </div>
                                </div>
                            
                                <div className="mb-3">
                                    <label for="username">Nội dung</label>
                                    <div className="form-group">
                                        <textarea value={content} onChange={e=> this.setState({content: e.target.value})} className="form-control" id="exampleFormControlTextarea3" rows="8"></textarea>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7"></div>
                            <div className="col-md-5">
                                 <Link onClick={e=> this.Save()} type="button" to={"/Comic/"+this.props.match.params.index+"/Chapter/"+this.props.match.params.id+"/Show"} class="btn btn-pill btn-warning">Save</Link>
                                <Link type="button" to={"/Comic/"+this.props.match.params.index+"/Show"} class="btn btn-square btn-secondary">Cancel</Link>
                            </div>
                        </div>
                    </div>                  
                </div>  
            )
        
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
        fetchChapters: (id) => dispatch(fetchChapters(id)),

  };
}
  export default connect(mapStateToProps, mapDispatchToProps)(UpdateChapter);