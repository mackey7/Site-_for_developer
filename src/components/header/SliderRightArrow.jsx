import React from 'react'
import PropTypes from 'prop-types';

const SliderRightArrow = props => {

    return (
        <div className='arrowContainer-right'>
            <a
                href="#"
                className="slider_arrow-right"
                onClick={props.onClick}
            >
                <span className="fa fa-3x fa-angle-right" />
            </a>
        </div>

    )
}
SliderRightArrow.propsTypes = {
    onClick: PropTypes.func
}
export default SliderRightArrow