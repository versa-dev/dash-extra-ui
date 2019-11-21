import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class FirstPageLink extends Component {

    render() {
        let className = classNames('p-paginator-first p-paginator-element p-link', {'p-disabled': this.props.disabled});
        
        return (
            <button className={className} onClick={this.props.onClick} disabled={this.props.disabled}>
                <img className="p-paginator-icon pi pi-step-backward" src={require("./images/prev.png")} alt=""></img>
            </button>
        );
    }
}

FirstPageLink.defaultProps = {
    id: null,
    disabled: false,
    onClick: null
}

FirstPageLink.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}