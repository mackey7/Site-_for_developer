import React from 'react';
import PropTypes from 'prop-types';
import './table.scss';


const Table = (props) => {
    return (
        <div className='tableWrapper'>
            <div className="tableWrapper-btnContainer">

                <select onClick={(e) => props.changeFloor(e)} >
                    <option value="parter"> parter</option>
                    <option value="piętro"> piętro</option>
                </select>
                <select onClick={(e) => props.changeGarden(e)} >
                    <option value="ogródek"> ogródek</option>
                    <option value="strych"> strych</option>
                </select>
                <select onClick={(e) => props.changeStatus(e)} >
                    <option value="wolny"> wolny</option>
                    <option value="rezerwacja"> rezerwacja</option>
                    <option value="sprzedany"> sprzedany</option>
                </select>
                <select onClick={(e) => props.changePrice(e, 'price')}>
                    <option value="najmniejsza"> najmniejsza</option>
                    <option value="największa"> największa</option>
                </select>

            </div>
            <table>
                <thead>
                    <tr>
                        <th >
                            <div className='cell'>
                                <p>   nr budynku mieszkania  </p>

                                <div className="arrow-container">
                                    <i onClick={() => props.sortColumnMinMax('nr')} className="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => props.sortColumnMaxMin('nr')} className="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </div>

                        </th>
                        <th >
                            <div className='cell'>
                                <p>  Kondygnacja </p>
                                <div className="arrow-container">
                                    <i onClick={() => props.sortColumnMinMax('floor')} className="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => props.sortColumnMaxMin('floor')} className="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </div>
                        </th>
                        <th >
                            <div className='cell'>
                                <p> powierzchnia użytkowa  </p>
                                <div className="arrow-container">
                                    <i onClick={() => props.sortColumnMinMax('area')} className="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => props.sortColumnMaxMin('area')} className="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </div>
                        </th>
                        <th >
                            <div className='cell'>
                                <p> powierzchnia ogródka / strychu  </p>
                                <div className="arrow-container">
                                    <i onClick={() => props.sortColumnMinMax('garden')} className="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => props.sortColumnMaxMin('garden')} className="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </div>
                        </th>
                        <th >
                            <div className='cell'>
                                <p> cenna brutto  </p>
                                <div className="arrow-container">
                                    <i onClick={() => props.sortColumnMinMax('price')} className="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => props.sortColumnMaxMin('price')} className="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </div>
                        </th>
                        <th>plan</th>
                        <th >
                            <div className='cell'>
                                <p>  status </p>
                                <div className="arrow-container">
                                    <i onClick={() => props.sortColumnMinMax('status')} className="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => props.sortColumnMaxMin('status')} className="fas fa-long-arrow-alt-down"></i>
                                </div>
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
Table.propTypes = {
    data: PropTypes.array,
    sortColumnMinMax: PropTypes.func,
    sortColumnMaxMin: PropTypes.func,
    changePrice: PropTypes.func,
    changeStatus: PropTypes.func,
    changeGarden: PropTypes.func,
    changeFloor: PropTypes.func,

}
export default Table;