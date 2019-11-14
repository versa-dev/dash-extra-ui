import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PrevPageLink extends Component {
    render() {
        let className = classNames(
            'p-paginator-prev p-paginator-element p-link',
            {'p-disabled': this.props.disabled}
        );

        return (
            <button
                className={className}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                <span className="p-paginator-icon pi pi-caret-left-pg"></span>
            </button>
        );
    }
}

PrevPageLink.defaultProps = {
    id: null,
    disabled: false,
    onClick: null,
};

PrevPageLink.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
