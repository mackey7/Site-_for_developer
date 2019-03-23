import React from 'react';
import { connect } from 'react-redux';
import { sortColumn, changeFloor, changeGarden, changeStatus, changePrice } from "../../actions/actions"
import './table.scss';


class Table extends React.Component {
    sortColumn = (key) => {
        console.log(key)
        console.log(this.props.sortColumn(key))
        this.props.sortColumn(key)
    }



    changeFloor = e => {
        console.log(e.target.value);
        console.log(this.props.changeFloor(e.target.value));
        this.props.changeFloor(e.target.value)
    }
    changeGarden = e => {
        console.log(e.target.value);
        this.props.changeGarden(e.target.value)
    }
    changeStatus = e => {
        console.log(e.target.value);
        console.log(this.props.changeStatus(e.target.value));
        this.props.changeStatus(e.target.value);
    }
    changePrice = e => {
        console.log(e.target.value);
        console.log(this.props.changePrice(e.target.value));
        this.props.changePrice(e.target.value)
    }

    render() {
        return (
            <div className='tableWrapper'>
                <div className="tableWrapper-btnContainer">

                    <select onClick={(e) => this.changeFloor(e)} name="" id="kondygnacja">
                        <option value=""> kondygnacja</option>
                        <option value="parter"> parter</option>
                        <option value="piętro"> piętro</option>

                    </select>
                    <select onClick={(e) => this.changeGarden(e)} name="" id="">
                        <option value="ogródek"> ogródek</option>
                        <option value="strych"> strych</option>
                    </select>
                    <select onClick={(e) => this.changeStatus(e)} name="status" id="">
                        <option value=""> status</option>
                        <option value="wolny"> wolny</option>
                        <option value="rezerwacja"> rezerwacja</option>
                        <option value="sprzedany"> sprzedany</option>
                    </select>
                    <select onClick={(e) => this.changePrice(e)} name="" id="">
                        <option value=""> cena</option>
                        <option value="najmniejsza"> najmniejsza</option>
                        <option value="największa"> największa</option>
                    </select>

                </div>
                <table>
                    <thead>
                        <tr>
                            <th onSelect={() => this.sortColumn('nr')}>nr budynku mieszkania</th>
                            <th onSelect={() => this.sortColumn('floor')}>Kondygnacja</th>
                            <th onSelect={() => this.sortColumn('area')}>powierzchnia użytkowa</th>
                            <th onSelect={() => this.sortColumn('garden')}>powierzchnia ogródka / strychu</th>
                            <th onSelect={() => this.sortColumn('price')}>cenna brutto</th>
                            <th >plan</th>
                            <th onSelect={() => this.sortColumn('status')}>status</th>

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
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sortColumn: key => dispatch(sortColumn(key)),
        changeFloor: e => dispatch(changeFloor(e)),
        changeGarden: e => dispatch(changeGarden(e)),
        changeStatus: e => dispatch(changeStatus(e)),
        changePrice: e => dispatch(changePrice(e))

    }
}
const mapStateToProps = state => {
    return {
        flatsData: state.tableReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);