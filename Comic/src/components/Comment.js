import React from 'react';
import './Comment.css';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchComt} from '../actions/CommentAction';
import {addComt} from '../actions/CommentAction';
import {getUserName} from '../actions/LoadUserAction';
class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state={}
    this.handleOnClick =this.handleOnClick.bind(this);
  }

  componentDidMount(){
    this.props.user();
  }
  componentWillMount()
  {
  }
  
  handleOnClick(e)
  {
    if(JSON.parse(localStorage.getItem('logined_user'))===null)
    {
      if(window.confirm("vui lòng đăng nhập để tương tác")){
        //this.props.history.push("/Signin")
      }

    }else{
      e.preventDefault();
      let {content} =this.state;
      var user=JSON.parse(localStorage.getItem('logined_user'));
      var temp= new Date
      var date=temp.getMonth()+"/"+temp.getDate()+"/"+temp.getFullYear()
      this.props.addComt(user.id,this.props.comicid[0],content,date); 
      this.setState({content: " " })
    }
    
  }
  findusername(userid)
  {
    var ten=""
    for(var i=0;i<this.props.getUserName.length;i++)
    {
      if(this.props.getUserName[i].id===userid)
      {
        ten=this.props.getUserName[i].username;
        break;
      }
    }
    return ten;
  }
 show()
 {  
  
   var cm = this.props.listcmt.map((cmt)=>{
    
    return(
     <>
      <li className=" media">
        <Link href="#" className="pull-left">
          <img src={cmt.user.image} alt="avatar" className="img-circle mr-3" />
       </Link>
        <div className="row media-body">
          <strong className="text-success">{cmt.user.username}</strong><br/>
          <p className="text-muted pull-right">
            <small className="text-muted ml-2" style={{fontSize:'10px'}}>{cmt.commentTime}</small>
          </p>
          <p>
            {cmt.content}
          </p>
        </div>
        
      </li>
      </>
    )
  })
  return cm;
 }
    render(){
     
    let {content}= this.state
   
        return(
            <>
            <hr/>
            <div className="row bootstrap snippets">
              <div className="col-md-12 col-sm-12">
                <div className="comment-wrapper">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      Comment panel
                    </div>
                    <div className="panel-body">
                      <textarea className="form-control" placeholder="write a comment..." rows={3} defaultValue={""} onChange={e=> this.setState({content: e.target.value})} value={content} required />
                      <br />
                      <button type="button" className="btn btn-info pull-right" onClick={this.handleOnClick}>Post</button>
                      <div className="clearfix" />
                      <hr />
                      <ul className="media-list">
                        {this.show()}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
    }
}
const mapStatetoProps = (state) =>{
  return {
    comt: state.comt,
    getUserName : state.user,
  };
}
const mapDispatchtoProps =(dispatch)=>{
  return {
    addComt: (user_id,comic_id,contend,time) => dispatch(addComt(user_id,comic_id,contend,time)),
    user: () => dispatch(getUserName())
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Comment);