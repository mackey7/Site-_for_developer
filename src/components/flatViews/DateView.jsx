import React, { Component } from 'react';

const DateView = (props) => {

    return (
        <div className="dataTable">
            <table>
                <tbody>
                    <tr>
                        <td>{props.date.room1.id}</td>
                        <td>{props.date.room1.name}</td>
                        <td>{props.date.room1.powierzchnia} m2</td>

                    </tr>
                    <tr>
                        <td>{props.date.room2.id}</td>
                        <td>{props.date.room2.name}</td>
                        <td>{props.date.room2.powierzchnia} m2</td>
                    </tr>
                    <tr>
                        <td>{props.date.room3.id}</td>
                        <td>{props.date.room3.name}</td>
                        <td>{props.date.room4.powierzchnia} m2</td>
                    </tr>
                    <tr>
                        <td>{props.date.room4.id}</td>
                        <td>{props.date.room4.name}</td>
                        <td>{props.date.room4.powierzchnia} m2</td>
                    </tr>
                    <tr>
                        <td>{props.date.room5.id}</td>
                        <td>{props.date.room5.name}</td>
                        <td>{props.date.room5.powierzchnia} m2</td>
                    </tr>
                    <tr>
                        <td>{props.date.room6.id}</td>
                        <td>{props.date.room6.name}</td>
                        <td>{props.date.room6.powierzchnia} m2</td>
                    </tr>
                    <tr>
                        <td>{props.date.room7.id}</td>
                        <td>{props.date.room7.name}</td>
                        <td>{props.date.room7.powierzchnia} m2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DateView;