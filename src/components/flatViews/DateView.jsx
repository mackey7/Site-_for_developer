import React, { Component } from 'react';

const DateView = (props) => {

    return (
        <div className="dataTable">
            <div>
                <div>{props.date.room1.id}</div>
                <div>{props.date.room1.name}</div>
                <div>{props.date.room1.powierzchnia}</div>
            </div>
            <div>
                <div>{props.date.room2.id}</div>
                <div>{props.date.room2.name}</div>
                <div>{props.date.room2.powierzchnia}</div>
            </div>
            <div>
                <div>{props.date.room3.id}</div>
                <div>{props.date.room3.name}</div>
                <div>{props.date.room4.powierzchnia}</div>
            </div>
            <div>
                <div>{props.date.room4.id}</div>
                <div>{props.date.room4.name}</div>
                <div>{props.date.room4.powierzchnia}</div>
            </div>
            <div>
                <div>{props.date.room5.id}</div>
                <div>{props.date.room5.name}</div>
                <div>{props.date.room5.powierzchnia}</div>
            </div>
            <div>
                <div>{props.date.room6.id}</div>
                <div>{props.date.room6.name}</div>
                <div>{props.date.room6.powierzchnia}</div>
            </div>
            <div>
                <div>{props.date.room7.id}</div>
                <div>{props.date.room7.name}</div>
                <div>{props.date.room7.powierzchnia}</div>
            </div>
        </div>
    )
}

export default DateView;