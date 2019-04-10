import React, { Component } from 'react';
import './table.scss';


const Table = (props) => {
    return (
        <div className='tableWrapper'>
            <div className="tableWrapper-btnContainer">

                <select onClick={(e) => props.changeFloor(e)} name="" id="kondygnacja">
                    <option value="parter"> parter</option>
                    <option value="piętro"> piętro</option>
                </select>
                <select onClick={(e) => props.changeGarden(e)} name="" id="">
                    <option value="ogródek"> ogródek</option>
                    <option value="strych"> strych</option>
                </select>
                <select onClick={(e) => props.changeStatus(e)} name="status" id="">
                    <option value="wolny"> wolny</option>
                    <option value="rezerwacja"> rezerwacja</option>
                    <option value="sprzedany"> sprzedany</option>
                </select>
                <select onClick={(e) => props.changePrice(e, 'price')} name="" id="">
                    <option value="najmniejsza"> najmniejsza</option>
                    <option value="największa"> największa</option>
                </select>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            nr budynku mieszkania
                            <div className="arrow-container">
                                <i onClick={() => props.sortColumnMinMax('nr')} class="fas fa-long-arrow-alt-up"></i>
                                <i onClick={() => props.sortColumnMaxMin('nr')} class="fas fa-long-arrow-alt-down"></i>
                            </div>
                        </th>
                        <th >
                            Kondygnacja
                            <div className="arrow-container">
                                <i onClick={() => props.sortColumnMinMax('floor')} class="fas fa-long-arrow-alt-up"></i>
                                <i onClick={() => props.sortColumnMaxMin('floor')} class="fas fa-long-arrow-alt-down"></i>
                            </div>
                        </th>
                        <th >
                            powierzchnia użytkowa
                            <div className="arrow-container">
                                <i onClick={() => props.sortColumnMinMax('area')} class="fas fa-long-arrow-alt-up"></i>
                                <i onClick={() => props.sortColumnMaxMin('area')} class="fas fa-long-arrow-alt-down"></i>
                            </div>
                        </th>
                        <th >
                            powierzchnia ogródka / strychu
                            <div className="arrow-container">
                                <i onClick={() => props.sortColumnMinMax('garden')} class="fas fa-long-arrow-alt-up"></i>
                                <i onClick={() => props.sortColumnMaxMin('garden')} class="fas fa-long-arrow-alt-down"></i>
                            </div>
                        </th>
                        <th >
                            cenna brutto
                            <div className="arrow-container">
                                <i onClick={() => props.sortColumnMinMax('price')} class="fas fa-long-arrow-alt-up"></i>
                                <i onClick={() => props.sortColumnMaxMin('price')} class="fas fa-long-arrow-alt-down"></i>
                            </div>
                        </th>
                        <th>plan</th>
                        <th >
                            status
                            <div className="arrow-container">
                                <i onClick={() => props.sortColumnMinMax('status')} class="fas fa-long-arrow-alt-up"></i>
                                <i onClick={() => props.sortColumnMaxMin('status')} class="fas fa-long-arrow-alt-down"></i>
                            </div>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nr}</td>
                            <td>{item.floor}</td>
                            <td>{item.area}m2</td>
                            <td>{item.garden}{" "}{item.gardenArea}m2</td>
                            <td>{item.price} zł</td>
                            <td>pobierz</td>
                            <td>{item.status}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Table;