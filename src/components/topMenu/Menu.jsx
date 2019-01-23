import React, { Component } from 'react';
import Link from './Link.jsx';
import "./menu.scss";

class Menu extends Component {
    state = {
        links: ['inwestycja', 'dostępność', 'Rzuty mieszkań', 'Kontakt']
    }
    render() {
        return (
            <nav className="topNaviagtion">
                <Link link={this.state.links} />
            </nav>
        )
    }
}
export default Menu;