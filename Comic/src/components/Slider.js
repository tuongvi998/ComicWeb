import React from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import './Slider.css';
import {fetchComicHot} from '../actions/ComicActions';
import {connect} from 'react-redux';
import Comic_inSlider from './Comic_inSlider';

const noOfItems = 12;
const noOfCards = 5;
const autoPlayDelay = 2000;
const chevronWidth = 50;

const Wrapper = styled.div`
  padding: 10px ${chevronWidth}px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #1c1c1c;
`;

class Slider extends React.Component {
    
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
    this.props.fetchComicHot();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));
  get1()
  {
      var result=[]
      for(var i=0;i<this.props.listhot.length;i++)
      {
          result.push(
          <Comic_inSlider id={this.props.listhot[i].id} Image={this.props.listhot[i].image} Name={this.props.listhot[i].name} />)
      }
      return result;
    }
  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<button className="pre-next">{'>'}</button>}
          leftChevron={<button className="pre-next">{'<'}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={this.get1()}
        />
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) =>{
        return{
          listhot: state.comichot
        }
      }
 
      const mapDispatchToProps =(dispatch, props)=>
      {
        return {
          fetchComicHot : ()=>{
          dispatch(fetchComicHot())
      
        }
      }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Slider);