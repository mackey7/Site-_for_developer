import React from 'react';
import Plan from './Plan.jsx';
import Buttons from './Buttons.jsx';
import DateView from './DateView.jsx';
import './FlatViews.scss';

const FlatViews = (props) => {
    const { date } = props
    const flatView = date.map(
        (item, index) => (
            <div key={index} className='flatViews-container'>
                <Plan image={item} />
                <div className="flatViews__right">
                    <Buttons onClick={props.changeView} />
                    <DateView date={item} />
                </div>
            </div>
        ))


    return (
        <section className="flatViews" >
            {flatView}
        </section>
    )
}

export default FlatViews;