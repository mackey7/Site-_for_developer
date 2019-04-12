import React from 'react';
import PaginationButton from './PaginagtionButton'
import PropTypes from 'prop-types';
import "./table.scss"

const Pagination = props => {
    return (
        <div className='tablePagination'>
            <PaginationButton value="first" event={props.first} btnDisable={props.currentPage == 1 ? true : false} />
            <PaginationButton value="previous" event={props.previous} btnDisable={props.currentPage == 1 ? true : false} />
            <PaginationButton value="next" event={props.next} btnDisable={props.currentPage == props.numberOfPages ? true : false} />
            <PaginationButton value="last" event={props.last} btnDisable={props.currentPage == props.numberOfPages ? true : false} />
        </div>
    )

}
Pagination.propTypes = {
    first: PropTypes.func,
    previous: PropTypes.func,
    next: PropTypes.func,
    last: PropTypes.func,
    currentPage: PropTypes.number,
    numberOfPages: PropTypes.number,
}
export default Pagination