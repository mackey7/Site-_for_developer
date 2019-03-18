import React, { Component } from 'react';
import Plan from './Plan.jsx';
import Buttons from './Buttons.jsx';
import DateView from './DateView.jsx';
import { switchView } from '../../actions/actions';
import { connect } from 'react-redux';
import './FlatViews.scss';

class FlatViews extends Component {

    changeView = (e) => {
        console.log(e.target.id)
        this.props.switchView(e.target.id)
    }
    render() {
        const flatView =
            this.props.flatViewsDate.map((item, index) => (
                <div key={index} className='flatViews-container'>
                    <Plan image={item} />
                    <div className="flatViews__right">
                        <Buttons onClick={this.changeView} />
                        <DateView date={item} />
                    </div>
                </div>
            ))

        return (
            <section className="flatViews">
                {flatView}
            </section>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        switchView: e => dispatch(switchView(e))
    }

}

const mapStateToProps = state => {
    return {
        singleFlatViewsDate: state.singleFlatViewsDate
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlatViews);