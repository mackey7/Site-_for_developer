import React from 'react';
import { connect } from 'react-redux';
import { sortColumn, changeFloor, changeGarden, changeStatus, changePrice } from "../../actions/actions"
import './table.scss';


class Table extends React.Component {
    sortColumn = (key) => {
        this.props.sortColumn(key)
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
                            <th onClick={() => this.sortColumn('nr')}>
                                nr budynku mieszkania
                            <div className="arrow-container"><i class="fas fa-long-arrow-alt-up"></i>  <i class="fas fa-long-arrow-alt-down"></i>  </div>
                            </th>
                            <th onClick={() => this.sortColumn('floor')}>

                                Kondygnacja
                            <div className="arrow-container"><i class="fas fa-long-arrow-alt-up"></i>  <i class="fas fa-long-arrow-alt-down"></i>  </div>
                            </th>
                            <th onClick={() => this.sortColumn('area')}>powierzchnia użytkowa
                            <div className="arrow-container"><i class="fas fa-long-arrow-alt-up"></i>  <i class="fas fa-long-arrow-alt-down"></i>  </div>
                            </th>
                            <th onClick={() => this.sortColumn('garden')}>powierzchnia ogródka / strychu
                            <div className="arrow-container"><i class="fas fa-long-arrow-alt-up"></i>  <i class="fas fa-long-arrow-alt-down"></i>  </div>
                            </th>
                            <th onClick={() => this.sortColumn('price')}>cenna brutto
                            <div className="arrow-container"><i class="fas fa-long-arrow-alt-up"></i>  <i class="fas fa-long-arrow-alt-down"></i>  </div>
                            </th>
                            <th>plan</th>
                            <th onClick={() => this.sortColumn('status')}>status
                            <div className="arrow-container"><i class="fas fa-long-arrow-alt-up"></i>  <i class="fas fa-long-arrow-alt-down"></i>  </div>
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
                </table>

                <div className="tablePagination">
                    <div className="tablePagination__item">1</div>
                    <div className="tablePagination__item">2</div>
                    <div className="tablePagination__item">3</div>
                    <div className="tablePagination__item">4</div>
                </div>
            </div >
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sortColumn: key => dispatch(sortColumn(key)),
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