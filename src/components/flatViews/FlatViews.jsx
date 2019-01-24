import React, { Component } from 'react';
import './FlatViews.scss';

import Plan from './Plan.jsx';
import Buttons from './Buttons.jsx';
import DateView from './DateView.jsx';

class FlatViews extends Component {
    render() {
        return (
            <section className="flatViews">
                <div className='flatViews-container'>
                    <Plan />
                    <div className="flatViews__right">
                        <Buttons />
                        <DateView />
                    </div>
                </div>
            </section>
        )
    }
}
export default FlatViews;