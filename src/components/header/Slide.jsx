import React, { Component } from 'react';

export default class Slide extends Component {
    render() {
        return (
            <li className={
                this.props.index == this.props.activeIndex
                    ? 'slide_item slide_item--active'
                    : 'slide_item'
            }
            >
                <img src={this.props.slide.img} alt={this.props.slide.alt} />

            </li>
        )
    }
}