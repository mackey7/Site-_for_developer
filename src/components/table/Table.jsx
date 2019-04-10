import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortColumnMaxMin, sortColumnMinMax, changeFloor, changeGarden, changeStatus, changePrice } from "../../actions/actions"
import PaginationWrapper from './PaginationWrapper.jsx';
import './table.scss';


class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            pageOfItems: []
        };
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    sortColumnMinMax = (key) => {
        this.props.sortColumnMinMax(key)
    }
    sortColumnMaxMin = (key) => {
        this.props.sortColumnMaxMin(key)
    }
    changeFloor = e => {
        this.props.changeFloor(e.target.value)
    }
    changeGarden = e => {
        this.props.changeGarden(e.target.value)
    }
    changeStatus = e => {
        this.props.changeStatus(e.target.value);
    }
    changePrice = (e, key) => {
        console.log(e.target.value, key)
        this.props.changePrice(e.target.value, key)
    }

    render() {
        return (
            <div className='tableWrapper'>
                <div className="tableWrapper-btnContainer">

                    <select onClick={(e) => this.changeFloor(e)} name="" id="kondygnacja">
                        <option value="parter"> parter</option>
                        <option value="piętro"> piętro</option>
                    </select>
                    <select onClick={(e) => this.changeGarden(e)} name="" id="">
                        <option value="ogródek"> ogródek</option>
                        <option value="strych"> strych</option>
                    </select>
                    <select onClick={(e) => this.changeStatus(e)} name="status" id="">
                        <option value="wolny"> wolny</option>
                        <option value="rezerwacja"> rezerwacja</option>
                        <option value="sprzedany"> sprzedany</option>
                    </select>
                    <select onClick={(e) => this.changePrice(e, 'price')} name="" id="">
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
                                    <i onClick={() => this.sortColumnMinMax('nr')} class="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => this.sortColumnMaxMin('nr')} class="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </th>
                            <th >
                                Kondygnacja
                            <div className="arrow-container">
                                    <i onClick={() => this.sortColumnMinMax('floor')} class="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => this.sortColumnMaxMin('floor')} class="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </th>
                            <th >
                                powierzchnia użytkowa
                            <div className="arrow-container">
                                    <i onClick={() => this.sortColumnMinMax('area')} class="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => this.sortColumnMaxMin('area')} class="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </th>
                            <th >
                                powierzchnia ogródka / strychu
                            <div className="arrow-container">
                                    <i onClick={() => this.sortColumnMinMax('garden')} class="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => this.sortColumnMaxMin('garden')} class="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </th>
                            <th >
                                cenna brutto
                            <div className="arrow-container">
                                    <i onClick={() => this.sortColumnMinMax('price')} class="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => this.sortColumnMaxMin('price')} class="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </th>
                            <th>plan</th>
                            <th >
                                status
                            <div className="arrow-container">
                                    <i onClick={() => this.sortColumnMinMax('status')} class="fas fa-long-arrow-alt-up"></i>
                                    <i onClick={() => this.sortColumnMaxMin('status')} class="fas fa-long-arrow-alt-down"></i>
                                </div>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.flatsData.flatsData.map((item, index) => (
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
                    <PaginationWrapper />
                </table>




            </div >
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sortColumnMinMax: key => dispatch(sortColumnMinMax(key)),
        sortColumnMaxMin: key => dispatch(sortColumnMaxMin(key)),
        changeFloor: e => dispatch(changeFloor(e)),
        changeGarden: e => dispatch(changeGarden(e)),
        changeStatus: e => dispatch(changeStatus(e)),
        changePrice: (e, key) => dispatch(changePrice(e, key))

    }
}
const mapStateToProps = state => {
    return {
        flatsData: state.tableReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);