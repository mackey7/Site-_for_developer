import React from 'react';
import "./table.scss"
import PropTypes from 'prop-types';
const PaginationButton = (props) => {

    return (

        <input className="pagination_button" type="button" onClick={props.event} value={props.value} disabled={props.btnDisable} />

    )
}

PropTypes.PaginationButton = {
    event: PropTypes.func,
    value: PropTypes.string,
    btnDisable: PropTypes.string

}
export default PaginationButton