import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortColumnMaxMin, sortColumnMinMax, changeFloor, changeGarden, changeStatus, changePrice } from "../actions/actions"
import Table from '../components/table/Table'
import PaginationWrapper from '../components/table/PaginationWrapper.jsx'


class TableContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageList: [],
            currentPage: 1,
            numberPerPage: 10,
            numberOfPages: 0
        };
    }
    sortColumnMinMax = (key) => {
        this.props.sortColumnMinMax(key)
    }
    sortColumnMaxMin = (key) => {
        this.props.sortColumnMaxMin(key)
    }
    changeFloor = e => {
        this.props.changeFloor(e.target.value)
    }
    changeGarden = e => {
        this.props.changeGarden(e.target.value)
    }
    changeStatus = e => {
        this.props.changeStatus(e.target.value);
    }
    changePrice = (e, key) => {
        console.log(e.target.value, key)
        this.props.changePrice(e.target.value, key)
    }

    getNumberOfPages = () => {
        return Math.ceil(this.props.flatsData.flatsData.length / this.state.numberPerPage);
    };



    nextPage = () => {
        this.setState((state) => {
            return { currentPage: state.currentPage += 1 }
        })
        this.loadList();
        console.log('click')

    };

    previousPage = () => {
        this.setState((state) => {
            return { currentPage: state.currentPage -= 1 }
        })
        this.loadList();
        console.log('click')

    };

    firstPage = () => {
        this.setState((state) => {
            return { currentPage: state.currentPage = 1 }
        })
        this.loadList();
        console.log('click')

    };

    lastPage = () => {
        const { numberOfPages } = this.state
        this.setState(() => {
            return { currentPage: numberOfPages }
        })
        this.loadList();
        console.log('click')

    };

    loadList = () => {
        const { numberPerPage, currentPage } = this.state
        let begin = (currentPage - 1) * numberPerPage;
        let end = begin + numberPerPage;
        this.setState(() => {
            return {
                pageList: this.props.flatsData.flatsData.slice(begin, end),
                numberOfPages: this.getNumberOfPages()
            };
        })
        console.log(this.state.numberOfPages)
    };
    componentDidMount() {
        this.getNumberOfPages()
        this.loadList();

    };
    render() {
        return (
            <section>
                <Table
                    changePrice={this.changePrice}
                    changeStatus={this.changeStatus}
                    changeGarden={changeGarden}
                    changeFloor={changeFloor}
                    sortColumnMaxMin={sortColumnMaxMin}
                    sortColumnMinMax={sortColumnMinMax}
                    data={this.state.pageList}

                />
                <PaginationWrapper first={this.firstPage} next={this.nextPage} previous={this.previousPage} last={this.lastPage} currentPage={this.state.currentPage} numberOfPages={this.state.numberOfPages} />
            </section>
        )
    }

}
const mapDispatchToProps = dispatch => {
    return {
        sortColumnMinMax: key => dispatch(sortColumnMinMax(key)),
        sortColumnMaxMin: key => dispatch(sortColumnMaxMin(key)),
        changeFloor: e => dispatch(changeFloor(e)),
        changeGarden: e => dispatch(changeGarden(e)),
        changeStatus: e => dispatch(changeStatus(e)),
        changePrice: (e, key) => dispatch(changePrice(e, key))

    }
}
const mapStateToProps = state => {
    return {
        flatsData: state.tableReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);