import React from 'react';
import {Link,Route} from 'react-router-dom';
import './Comic_inSlider.css';
class Comic_inSlider extends React.Component{
    constructor(props)
    {
      super(props)
    }
    render()
    {
        return (
            <>
            
            <Link className="book-img position-relative" id="top" to={"/Comic/"+this.props.id} >
              <img  src={this.props.Image} style={{width:"98%"}}/>
              <strong className="tencomic">{this.props.Name}</strong>
            </Link>
            </>
        )
        }
}
  export default Comic_inSlider;