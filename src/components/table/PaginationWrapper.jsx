import React, { Component } from 'react';
import PaginationButton from './PaginagtionButton'
import "./table.scss"

class Pagination extends Component {
    render() {
        return (
            <div className='tablePagination'>
                <PaginationButton value="first" />
                <PaginationButton value="next" />
                <PaginationButton value="previous" />
                <PaginationButton value="last" />
            </div>
        )
    }
}
export default Pagination