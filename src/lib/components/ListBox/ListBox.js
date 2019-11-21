import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ObjectUtils from '../../utils/ObjectUtils';
import Tooltip from '../../utils/ToolTip';
import { ListBoxHeader } from './ListBoxHeader';
import { ListBoxItem } from './ListBoxItem';

/**
 * ListBox component
 */
export default class ListBox extends Component {
    constructor() {
        super();
        this.state = {
            filter: '',
        };

        this.onFilter = this.onFilter.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);
            else this.renderTooltip();
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions,
        });
    }

    onOptionClick(event) {
        if (this.props.disabled) {
            return;
        }

        if (this.props.multiple)
            this.onOptionClickMultiple(event.originalEvent, event.option);
        else this.onOptionClickSingle(event.originalEvent, event.option);

        this.optionTouched = false;
    }

    onOptionTouchEnd(event, option) {
        if (this.props.disabled) {
            return;
        }

        this.optionTouched = true;
    }

    onOptionClickSingle(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched
            ? false
            : this.props.metaKeySelection;

        if (metaSelection) {
            let metaKey = event.metaKey || event.ctrlKey;

            if (selected) {
                if (metaKey) {
                    value = null;
                    valueChanged = true;
                }
            } else {
                value = this.getOptionValue(option);
                valueChanged = true;
            }
        } else {
            value = selected ? null : this.getOptionValue(option);
            valueChanged = true;
        }

        if (valueChanged) {
            this.updateModel(event, value);
        }
    }

    onOptionClickMultiple(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched
            ? false
            : this.props.metaKeySelection;

        if (metaSelection) {
            let metaKey = event.metaKey || event.ctrlKey;

            if (selected) {
                if (metaKey) value = this.removeOption(option);
                else value = [this.getOptionValue(option)];

                valueChanged = true;
            } else {
                value = metaKey ? this.props.value || [] : [];
                value = [...value, this.getOptionValue(option)];
                valueChanged = true;
            }
        } else {
            if (selected) value = this.removeOption(option);
            else
                value = [
                    ...(this.props.value || []),
                    this.getOptionValue(option),
                ];

            valueChanged = true;
        }

        if (valueChanged) {
            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation: () => {},
                preventDefault: () => {},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value,
                },
            });
        }
    }

    onFilter(event) {
        this.setState({filter: event.query});
    }

    updateModel(event, value) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation: () => {},
                preventDefault: () => {},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value,
                },
            });
        }
    }

    removeOption(option) {
        return this.props.value.filter(
            val =>
                !ObjectUtils.equals(
                    val,
                    this.getOptionValue(option),
                    this.props.dataKey
                )
        );
    }

    isSelected(option) {
        let selected = false;
        let optionValue = this.getOptionValue(option);

        if (this.props.multiple) {
            if (this.props.value) {
                for (let val of this.props.value) {
                    if (
                        ObjectUtils.equals(val, optionValue, this.props.dataKey)
                    ) {
                        selected = true;
                        break;
                    }
                }
            }
        } else {
            selected = ObjectUtils.equals(
                this.props.value,
                optionValue,
                this.props.dataKey
            );
        }

        return selected;
    }

    filter(option) {
        let filterValue = this.state.filter.trim().toLowerCase();
        let optionLabel = this.getOptionLabel(option);

        return (
            optionLabel.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
        );
    }

    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }

    getOptionValue(option) {
        return this.props.optionLabel ? option : option.value;
    }

    getOptionLabel(option) {
        return this.props.optionLabel
            ? ObjectUtils.resolveFieldData(option, this.props.optionLabel)
            : option.label;
    }

    render() {
        let className = classNames(
            'p-listbox p-inputtext p-component',
            this.props.className,
            {
                'p-disabled': this.props.disabled,
            }
        );
        let items = this.props.options;
        let header;

        if (this.props.options) {
            if (this.hasFilter()) {
                items = items.filter(option => {
                    return this.filter(option);
                });
            }

            items = items.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);

                return (
                    <ListBoxItem
                        key={optionLabel}
                        label={optionLabel}
                        option={option}
                        template={this.props.itemTemplate}
                        selected={this.isSelected(option)}
                        onClick={this.onOptionClick}
                        onTouchEnd={e =>
                            this.onOptionTouchEnd(e, option, index)
                        }
                        tabIndex={this.props.tabIndex}
                    />
                );
            });
        }

        if (this.props.filter) {
            header = (
                <ListBoxHeader
                    filter={this.state.filter}
                    onFilter={this.onFilter}
                    disabled={this.props.disabled}
                />
            );
        }

        return (
            <div
                ref={el => (this.element = el)}
                id={this.props.id}
                className={className}
                style={this.props.style}
            >
                {header}
                <div
                    className="p-listbox-list-wrapper"
                    style={this.props.listContainerStyle}
                >
                    <ul className="p-listbox-list" style={this.props.listStyle}>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}

ListBox.defaultProps = {
    id: null,
    value: null,
    options: null,
    optionLabel: null,
    itemTemplate: null,
    style: null,
    listStyle: null,
    className: null,
    disabled: null,
    dataKey: null,
    multiple: false,
    metaKeySelection: false,
    filter: false,
    tabIndex: '0',
    tooltip: null,
    tooltipOptions: null,
    onChange: null,
};

ListBox.propTypes = {
    /**
     * Id: Unique identifier of the element.
     */
    id: PropTypes.string,
    /**
     * Selected value to display.
     */
    value: PropTypes.any,
    /**
     * An array of objects to display as the available options.
     */
    options: PropTypes.array,
    /**
     * Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.
     */
    optionLabel: PropTypes.string,
    /**
     * Function that gets the option and returns the content for it.
     */
    itemTemplate: PropTypes.func,
    /**
     * Inline style of the element.
     */
    style: PropTypes.object,
    /**
     * Inline style of inner list element.
     */
    listStyle: PropTypes.object,
    /**
     * Style class of the element.
     */
    className: PropTypes.string,
    /**
     * A property to uniquely match the value in options for better performance.
     */
    dataKey: PropTypes.string,
    /**
     * When specified, allows selecting multiple values.
     */
    multiple: PropTypes.bool,
    /**
     * Defines how multiple items can be selected,
     * when true metaKey needs to be pressed to select or
     * unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
     */
    metaKeySelection: PropTypes.bool,
    /**
     * When specified, displays a filter input at header.
     */
    filter: PropTypes.bool,
    /**
     * Index of the element in tabbing order.
     */
    tabIndex: PropTypes.string,
    /**
     * Content of the tooltip.
     */
    tooltip: PropTypes.string,
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions: PropTypes.object,
    /**
     * Callback to invoke when value of listbox changes.
     */
    onChange: PropTypes.func,
    /**
     * 	When specified, disables the component.
     */
    disabled: PropTypes.bool,
     /**
     * Style class of the container.
     */
    listContainerStyle: PropTypes.object,
};
