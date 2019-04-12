import React from 'react';
import Button from './Button.jsx';
import PropTypes from 'prop-types';

const Buttons = (props) => {

    return (
        <div className="buttons">
            <div className="buttons-row">
                <Button onClick={props.onClick} id='pal' text='Parter Lewy' />
                <Button onClick={props.onClick} id='pap' text='Parter Prawy' />
            </div>
            <div className="buttons-row">
                <Button onClick={props.onClick} id='pil' text='Piętro Lewy' />
                <Button onClick={props.onClick} id='pip' text='Piętro Prawe' />
            </div>

        </div>

    )
}
Buttons.propTypes = {
    onClick: PropTypes.func,
}
export default Buttons;