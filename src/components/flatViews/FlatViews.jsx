import React, { Component } from 'react';
import Plan from './Plan.jsx';
import Buttons from './Buttons.jsx';
import DateView from './DateView.jsx';
import { flatViewsDate } from '../../api/flatViewsDate';
import './FlatViews.scss';

class FlatViews extends Component {
    constructor() {
        super();
        this.state = {
            flats: flatViewsDate
        }


    }
    render() {
        return (
            <section className="flatViews">
                {this.state.flats.map((item, index) => (
                    <div key={index} className='flatViews-container'>
                        <Plan image={item} />
                        <div className="flatViews__right">
                            <Buttons />
                            <DateView date={item} />
                        </div>
                    </div>



                ))}

            </section>
        )
    }
}
export default FlatViews;