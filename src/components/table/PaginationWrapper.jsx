import React from 'react';
import PaginationButton from './PaginagtionButton'
import "./table.scss"

const Pagination = props => {
    return (
        <div className='tablePagination'>
            <PaginationButton value="first" event={props.first} btnDisable={props.currentPage == 1 ? true : false} />
            <PaginationButton value="previous" event={props.previous} btnDisable={props.currentPage == 1 ? true : false} />
            <PaginationButton value="next" event={props.next} btnDisable={props.currentPage == props.numberOfPages ? true : false} />
            <PaginationButton value="last" event={props.last} btnDisable={props.currentPage == props.numberOfPages ? true : false} />
            {console.log('number:' + props.numberOfPages + 'current:' + props.currentPage)}
        </div>
    )

}
export default Pagination