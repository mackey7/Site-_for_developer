import React, { Component } from 'react';
import SliderLeftArrow from './SliderLeftArrow.jsx';
import SliderRightArrow from './SliderRightArrow.jsx';
import { SlidesData } from '../../api/SlidesData.js';
import Slide from './Slide.jsx';
import './Header.scss';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      slides: SlidesData
    };
  }

  goToSlide = index => {
    this.setState({
      activeIndex: index
    });
  };

  prevSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.state;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;
    this.setState({
      activeIndex: index
    });

  };

  nextSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.state;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };




  render() {
    return (
      <section className="Slider">


        <SliderLeftArrow onClick={e => this.prevSlide(e)} />

        <ul className="Slider_item">
          {this.state.slides.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />

          ))}

        </ul>

        <SliderRightArrow onClick={e => this.nextSlide(e)} />


      </section>
    )
  }
}