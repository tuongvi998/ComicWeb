import React from 'react';
import './Home.css';
import Header from './Header.js';
import Slider from './Slider';
import LeftBody from './LeftBody';
import Footer from './Footer.js';
import Full from './Full.js';
import RightBody from './RightBody'
class Home extends React.Component{
    render(){
      
        return(
            <>
                <Header/>
                <Slider/>
                <div className="container bg-navy mt-3">
                    <hr/>
                    <div className="row mt-3">
                        <div className="col-md-9 ">
                            <h3 id="update">Truyện đang cập nhật <i class="fas fa-arrow-circle-right"></i></h3>
                            <LeftBody/>
                        </div>
                        <div className="col-md-3">
                            <RightBody/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <h3  id="update">Truyện đã hoàn thành <i class="fas fa-arrow-circle-right"></i></h3>
                        <div className="col-md-12">
                            <Full/>
                        </div>
                    </div>
                    <hr/>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Home;