import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = { pager: {} }
    }
    componentWillMount() {
        if (this.props.items && this.props.items.lenght) {
            this.setPage(this.props.initialPage)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }
    setPage(page) {
        const items = this.props.items;
        const pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return
        }
        pager = this.getPager(items.lenght, page);

        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems);


    }

    getPager(totoalItems, currentPage, pageSize) {
        currentPage = current || 1;
        pageSize = pageSize || 10;
        const totalPages = Math.ceil(totaolItems / pageSize);
        const startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPae = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = totalPages;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4
            }
        }

        const startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startInex + pageSize - 1, totalItems - 1);

        var apges = [...Array((andPage + 1) - startPage).keys()].map(i => startpage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    render() {
        const pager = this.state.pager;

    }

}
export default Pagination