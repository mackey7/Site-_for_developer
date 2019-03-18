import React, { Component } from 'react'


export default class SliderRightArrow extends Component {
    render() {
        return (
            <div className='arrowContainer-right'>
                <a
                    href="#"
                    className="slider_arrow-right"
                    onClick={this.props.onClick}
                >
                    <span className="fa fa-3x fa-angle-right" />
                </a>
            </div>

        )
    }
}