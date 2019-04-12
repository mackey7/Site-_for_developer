import React from 'react';
import PropTypes from 'prop-types';
const Plan = (props) => {

    return (
        <div className="flatViews__left">
            <img className="project-img" src={props.image.image} alt="project" />
        </div>

    )
}
Plan.propTypes = {
    image: PropTypes.object,
}
export default Plan;