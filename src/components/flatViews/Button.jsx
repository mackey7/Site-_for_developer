import React from 'react';

const Button = (props) => {

    return (
        <div>
            <input onClick={props.onClick} className="btn-changeProject" id={props.id} type="button" value={props.text} />
        </div>
    )
}

export default Button;