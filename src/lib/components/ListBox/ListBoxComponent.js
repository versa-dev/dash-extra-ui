import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListBox from './ListBox';
import './ListBox.css';

/**
 * Wrapper component for the listbox.Adds custom template and styling
 */
class ListBoxComponent extends Component {
    sampleTemplate(option) {
        const {imagePath} = option;
        if (imagePath == undefined || imagePath.trim() == '') {
            return option.label;
        }
        return (
            <div className="p-clearfix">
                <img
                    src={imagePath}
                    style={{
                        display: 'inline-block',
                        margin: '5px 0 0 5px',
                        width: 48,
                    }}
                />
                <span
                    style={{
                        fontSize: '1em',
                        float: 'right',
                        margin: '1em .5em 0 0',
                    }}
                >
                    {option.label}
                </span>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section implementation">
                    <ListBox
                        id={this.props.id}
                        value={this.props.value}
                        filter={this.props.filter}
                        options={this.props.options}
                        onChange={e => this.props.setProps({value: e.value})}
                        itemTemplate={this.sampleTemplate}
                        style={this.props.style}
                        listStyle={this.props.listStyle}
                        listContainerStyle={this.props.listContainerStyle}
                        multiple={this.props.multiple}
                        disabled={this.props.disabled}
                        tooltip={this.props.tooltip}
                    />
                </div>
            </div>
        );
    }
}

ListBoxComponent.defaultProps = {
    listContainerStyle: {maxHeight: 500},
    id: null,
    value: null,
    options: null,
    filter: false,
    style: null,
    listStyle: null,
    listContainerStyle: null,
    multiple: false,
    disabled: false,
    tooltip: null,
};

ListBoxComponent.propTypes = {
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

export default ListBoxComponent;
