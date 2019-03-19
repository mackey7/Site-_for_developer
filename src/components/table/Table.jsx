import React from 'react';
import { connect } from 'react-redux';
import { sortColumn } from "../../actions/actions"
import './table.scss';


class Table extends React.Component {
    sortColumn = (key) => {
        console.log(key)
        this.props.sortColumn(key)
    }

    render() {
        return (
            <div className='tableWrapper'>
                <div className="tableWrapper-brnContainer">
                    <select name="" id="">
                        <option value=""> kondygnacja</option>
                        <option value=""> kondygnacja</option>
                    </select>
                    <select name="" id="">
                        <option value=""> ogródek</option>
                        <option value=""> strych</option>
                    </select>
                    <select name="status" id="">
                        <option value=""> status</option>
                        <option value=""> wolny</option>
                        <option value=""> rezerwacja</option>
                        <option value=""> sprzedany</option>
                    </select>
                    <select name="" id="">
                        <option value=""> cena</option>
                        <option value=""> najmniejsza</option>
                        <option value=""> największa</option>
                    </select>
                    <input type="button" value="FILTROWANIE" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => this.sortColumn('nr')}>nr budynku mieszkania</th>
                            <th onClick={() => this.sortColumn('floor')}>Kondygnacja</th>
                            <th onClick={() => this.sortColumn('area')}>powierzchnia użytkowa</th>
                            <th onClick={() => this.sortColumn('garden')}>powierzchnia ogródka / strychu</th>
                            <th onClick={() => this.sortColumn('price')}>cenna brutto</th>
                            <th >plan</th>
                            <th onClick={() => this.sortColumn('status')}>status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.flatsData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nr}</td>
                                <td>{item.floor}</td>
                                <td>{item.area}m2</td>
                                <td>{item.garden}m2</td>
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
        sortColumn: key => dispatch(sortColumn(key))
    }
}
const mapStateToProps = state => {
    return {
        flatsData: state.flatsData
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);