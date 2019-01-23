import React from 'react';

const Link = (props) => {
    return (
        <ul className="topNaviagtion_menu">
            {
                props.link.map(i => <li key={i}><a href={`"#${i}"`}> {i}</a></li>)
            }

        </ul>
    )
}
export default Link