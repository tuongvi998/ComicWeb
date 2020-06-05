import React from 'react';
import {Link} from 'react-router-dom';
class Comic_mini extends React.Component{
    render()
    {
        var i_s={
            width: "40px",
            float: "left",
            textDecoration: "none",
        }
        var a_s={
            color:"#1b1e21",
            fontSize:"16px",
            textDecoration: "none",
        }
        var k={
            
                color: "slategray",fontSize:"14px"
            
        }
        return(
            <>
            <div className="popular-item-wrap">
                <div className="popular-img widget-thumbnail c-image-hover">
                    <Link className="book-img position-relative" to={"/Comic/"+this.props.id }style={i_s}>
                        <img style={i_s} src={this.props.src} alt="Hệ Thống Game Tại Dị Giới" className="zoom-me" />
                    </Link>
                </div>
           
                <div className="popular-content">
                    <h4 className="widget-title">
                        <Link style={a_s} to={"/Comic/"+this.props.id}>{this.props.name}</Link>
                    </h4>
                    <span className="post-on font-meta" style={k}>Cập nhật :{this.props.datetime} </span>                    
                </div>
           
            </div>
            <hr></hr>
            </>
        );
    }
}
export default Comic_mini;