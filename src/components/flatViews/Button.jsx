import React, { Component } from 'react';
import project from '../../images/apartment_projections_img.png'

const Button = (props) => {

    return (
        <div>
            <input className="btn-changeProject" type="button" value={props.text} />
        </div>
    )
}

export default Button;