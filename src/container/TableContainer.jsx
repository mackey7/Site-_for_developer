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
    sortColumnMinMax = key => {
        this.props.sortColumnMinMax(key);
    };
    sortColumnMaxMin = key => {
        this.props.sortColumnMaxMin(key);
    };
    changeFloor = e => {
        console.log(e.target.value)
        this.props.changeFloor(e.target.value);
    };
    changeGarden = e => {
        this.props.changeGarden(e.target.value);
    };
    changeStatus = e => {
        this.props.changeStatus(e.target.value);
    };
    changePrice = (e, key) => {
        console.log(e.target.value, key);
        this.props.changePrice(e.target.value, key);
    };

    getNumberOfPages = (flatsData) => {
        return Math.ceil(
            flatsData.length / this.state.numberPerPage
        );
    };

    nextPage = () => {
        this.setState({
            currentPage: this.state.currentPage += 1
        })
        this.loadList(this.state.currentPage, this.props.flatsData.flatsData);
    };

    previousPage = () => {
        this.setState({
            currentPage: this.state.currentPage -= 1
        })
        this.loadList(this.state.currentPage, this.props.flatsData.flatsData);
    };

    firstPage = () => {
        this.setState(state => {
            return { currentPage: 1 };
        });
        this.loadList();
    };

    lastPage = () => {
        const { numberOfPages } = this.state;
        this.setState(() => {
            return { currentPage: numberOfPages };
        });
        this.loadList();
    };

    loadList = (actualPage, flatsData) => {
        const { numberPerPage } = this.state;
        let begin = (actualPage - 1) * numberPerPage;
        let end = begin + numberPerPage;
        const flatsDatas = flatsData

        this.setState(() => {
            return {
                pageList: flatsDatas.slice(begin, end),
                numberOfPages: this.getNumberOfPages(flatsDatas)
            };
        });
    };

    componentDidMount() {
        this.getNumberOfPages(this.props.flatsData.flatsData);
        this.loadList(1, this.props.flatsData.flatsData);
    }

    componentWillReceiveProps(nextProps) {
        this.getNumberOfPages(nextProps.flatsData.flatsData);
        this.loadList(1, nextProps.flatsData.flatsData)
    }

    render() {
        return (
            <section>
                <Table
                    changePrice={this.changePrice}
                    changeStatus={this.changeStatus}
                    changeGarden={this.changeGarden}
                    changeFloor={this.changeFloor}
                    sortColumnMaxMin={this.sortColumnMaxMin}
                    sortColumnMinMax={this.sortColumnMinMax}
                    data={this.state.pageList}
                />
                <PaginationWrapper
                    first={this.firstPage}
                    next={this.nextPage}
                    previous={this.previousPage}
                    last={this.lastPage}
                    currentPage={this.state.currentPage}
                    numberOfPages={this.state.numberOfPages}
                />
            </section>
        );
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