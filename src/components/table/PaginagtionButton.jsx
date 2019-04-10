import React from 'react';
import "./table.scss"

const PaginationButton = (props) => {

    return (

        <input className="pagination_button" type="button" onClick={props.event} value={props.value} />

    )
}
export default PaginationButton