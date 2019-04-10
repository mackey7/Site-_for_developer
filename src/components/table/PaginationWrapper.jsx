import React from 'react';
import PaginationButton from './PaginagtionButton'
import "./table.scss"

const Pagination = props => {
    return (
        <div className='tablePagination'>
            <PaginationButton value="first" event={props.first} />
            <PaginationButton value="next" event={props.next} />
            <PaginationButton value="previous" event={props.previous} />
            <PaginationButton value="last" event={props.last} />
        </div>
    )

}
export default Pagination