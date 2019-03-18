import React, { Component } from 'react';
import Button from './Button.jsx';

const Buttons = () => {

    return (



        <div className="buttons">
            <div className="buttons-row">
                <Button text='Parter Lewy' />
                <Button text='Parter Prawy' />
            </div>
            <div className="buttons-row">
                <Button text='Piętro Lewy' />
                <Button text='Piętro Prawe' />
            </div>

        </div>

    )
}

export default Buttons;