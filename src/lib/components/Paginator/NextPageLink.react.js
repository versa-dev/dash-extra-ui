import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class NextPageLink extends Component {
    
    render() {
        let className = classNames('p-paginator-next p-paginator-element p-link', {'p-disabled': this.props.disabled});
        
        return (
            <button className={className} onClick={this.props.onClick} disabled={this.props.disabled}>
                <span className="p-paginator-icon pi pi-caret-right-pg"></span>
            </button>
        );
    }
}

NextPageLink.defaultProps = {
    id: null,
    disabled: false,
    onClick: null
}

NextPageLink.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}