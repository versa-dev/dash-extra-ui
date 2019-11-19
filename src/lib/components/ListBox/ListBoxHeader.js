import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputText} from '../Inputtext/InputText';


/**
 * Header component of the listbox
 */
export class ListBoxHeader extends Component {
    constructor() {
        super();
        this.onFilter = this.onFilter.bind(this);
    }

    onFilter(event) {
        if (this.props.onFilter) {
            this.props.onFilter({
                originalEvent: event,
                query: event.target.value,
            });
        }
    }

    render() {
        return (
            <div className="p-listbox-header">
                <div className="p-listbox-filter-container">
                    <InputText
                        type="text"
                        role="textbox"
                        value={this.props.filter}
                        onChange={this.onFilter}
                        disabled={this.props.disabled}
                    />
                    <span className="p-listbox-filter-icon pi pi-search"></span>
                </div>
            </div>
        );
    }
}
ListBoxHeader.defaultProps = {
    filter: null,
    disabled: false,
    onFilter: null,
};

ListBoxHeader.propTypes = {
    /**
     * When specified, displays a filter input at header.
     */
    filter: PropTypes.string,
    /**
     * When specified, disables the component.
     */
    disabled: PropTypes.bool,
    /**
     * Callback to invoke when value of filter list changes
     */
    onFilter: PropTypes.func,
};
