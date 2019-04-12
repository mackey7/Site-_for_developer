import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
    return (
        <ul className="topNaviagtion_menu">
            {
                props.link.map(i => <li key={i}><a href={`"#${i}"`}> {i}</a></li>)
            }

        </ul>
    )
}
Link.propTypes = {
    link: PropTypes.array,
}
export default Link