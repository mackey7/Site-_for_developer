import React from 'react';
import { tableData } from '../../api/tableData'
import './table.scss';


class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            ofert: tableData
        }

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
                            <th>nr budynku mieszkania</th>
                            <th>Kondygnacja</th>
                            <th>powierzchnia użytkowa</th>
                            <th>powierzchnia ogródka  strychu</th>
                            <th>cenna brutto</th>
                            <th>plan</th>
                            <th>status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.ofert.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nr}</td>
                                <td>{item.kondygnacja}</td>
                                <td>{item.powierzchnia}m2</td>
                                <td>{item.dodatek}m2</td>
                                <td>{item.cena} zł</td>
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
export default Table;