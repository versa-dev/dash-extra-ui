import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CurrentPageReport extends Component {
    
    render() {
        let text = this.props.template
            .replace("{currentPage}", this.props.page + 1)
            .replace("{totalPages}", this.props.pageCount);
            
        return <span className="p-paginator-current">{text}</span>
    }
}

CurrentPageReport.defaultProps = {
    id: null,
    pageCount: null,
    page: null,
    template: '({currentPage} of {totalPages})'
}

CurrentPageReport.propTypes = {
    id: PropTypes.string,
    pageCount: PropTypes.number,
    page: PropTypes.number,
    template: PropTypes.string
}