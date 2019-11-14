import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class LastPageLink extends Component {
    
    render() {
        let className = classNames('p-paginator-last p-paginator-element p-link', {'p-disabled': this.props.disabled});
        
        return (
            <button className={className} onClick={this.props.onClick} disabled={this.props.disabled}>
                <span className="p-paginator-icon pi pi-step-forward"></span>
            </button>
        );
    }
}

LastPageLink.defaultProps = {
    id: null,
    disabled: false,
    onClick: null
}

LastPageLink.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}