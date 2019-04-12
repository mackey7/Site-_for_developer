import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

    return (
        <div>
            <input onClick={props.onClick} className="btn-changeProject" id={props.id} type="button" value={props.text} />
        </div>
    )
}
Button.propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.string,
    text: PropTypes.string,
}
export default Button;