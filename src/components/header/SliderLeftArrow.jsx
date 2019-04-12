
import React from 'react';
import PropTypes from 'prop-types';


const SliderLeftArrow = props => {

    return (
        <div className='arrowContainer-left'>
            <a
                href="#"
                className="slider_arrow-left"
                onClick={props.onClick}
            >
                <span className="fa fa-3x fa-angle-left" />
            </a>
        </div>
    )
}
SliderLeftArrow.propTypes = {
    onClick: PropTypes.func
}
export default SliderLeftArrow