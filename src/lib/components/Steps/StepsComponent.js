import React, {Component} from 'react';
import {Steps} from './Steps';
import PropTypes from 'prop-types';
import './StepsComponent.css';


/**
 * WrapperComponent on the Steps component
 * Adds callback
 */
export default class StepsComponent extends Component {
    render() {
        return (
            <Steps
                model={this.props.model}
                activeIndex={this.props.activeIndex}
                onSelect={e => this.props.setProps({activeIndex: e.index})}
                readOnly={false}
                style={this.props.style}
                className={this.props.className}
                id={this.props.id}
            />
        );
    }
}

StepsComponent.defaultProps = {
    id: null,
    model: null,
    activeIndex: 0,
    readOnly: true,
    style: null,
    className: null,
    onSelect: null,
};

StepsComponent.propTypes = {
    /**
     * Unique identifier of the element.
     */
    id: PropTypes.string,
    /**
     * An array of menuitems.
     */
    model: PropTypes.array.isRequired,
    /**
     * Index of the active item.
     */
    activeIndex: PropTypes.number,
    /**
     * 	Whether the items are clickable or not.
     */
    readOnly: PropTypes.bool,
    /**
     * Inline style of the component.
     */
    style: PropTypes.object,
    /**
     * Style class of the component.
     */
    className: PropTypes.string,
};
