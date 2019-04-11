import React, { Component } from 'react';
import FlatViews from '../components/flatViews/FlatViews.jsx'
import { switchView } from '../actions/actions'
import { connect } from "react-redux";


class FlatViewsConatiner extends Component {

    changeView = (e) => {
        console.log(e.target.id)
        this.props.switchView(e.target.id)
    }
    render() {
        return (
            <FlatViews changeView={this.changeView} date={this.props.singleFlatViewsDate.singleFlatViewsDate} />
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
        singleFlatViewsDate: state.flatViewsReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlatViewsConatiner);