import React from 'react';
import {Link} from 'react-router-dom';

class Comic_full extends React.Component{

    render()
    {
        var i_s={
            width: "150px",
        }
        var d_s={
            textAlign:"center"
        }
        var a_s={
            color:"#0282f9",
            fontSize:"10px",
            fontWeight: "600",
            lineHeight: "1.0",
            textDecoration: "none",
            textAlign:"center"
        }
        var i_k={
            float:"left",
            padding: "5px"           

        }
        var x={
            color:"#999",
            textAlign:"left"
        }
        var sp={
            backgroundColor: "#fff",
            color: "slategray",
            fontSize:"10px",
            fontWeight: "600",
            textDecoration: "none",
            textAlign:"center",
            // padding: "5px"
        }
        var icon={
            fontSize: "10px",
            color: "gray"
        }
        return(
            <>
            <div className="col-12 col-md-2" style={i_k}>
                <div className="page-item-detail manga">
                    <div className="item-thumb hover-details c-image-hover">
                        <Link className="book-img position-relative" to={"/Comic/"+this.props.id}>
                            <img style={i_s} src={this.props.Src} />
                        </Link>
                        <p className="title" style={d_s}><Link style={a_s} to={"/Comic/"+this.props.id}>{this.props.name}</Link></p>
                        <span className="chapter font-meta" style={sp}>
                        <Link to="/Search" className="btn-link" style={sp}>Tác giả: {this.props.author}</Link>
                        </span> 
                        <div className="view-like" style={icon}>
                            <i className="fa fa-eye">{this.props.follow}</i>
                            <i className="fa fa-heart">{this.props.like}</i>
                        </div>
                    </div>
            </div>
           </div>
            </>
        );
        
    }
}

  export default Comic_full;