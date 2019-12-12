import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { PanelMenu } from './PanelMenu';


/**
 * PanelMenuComponent
 */
export default class PanelMenuComponent extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="content-section implementation">
                <PanelMenu
                    id={this.props.id}
                    model={this.props.model}
                    style={this.props.style}
                    className={this.props.className}
                    setProps={item => this.props.setProps(item)}
                />
            </div>
        );
    }
}

PanelMenuComponent.defaultProps = {
    id: null,
    model: null,
    style: {width: '300px'},
    className: null,
    setProps: null,
    panelmenuItem: null,
    panelsubmenu: null
};

PanelMenuComponent.propTypes = {
    /**
     * Unique identifier of the element.
     */
    id: PropTypes.string,
    /**
     * An array of menuitems.
     */
    model: PropTypes.array,
    /**
     * Inline style of the component.
     */
    style: PropTypes.object,
    /**
     * Style class of the component.
     */
    className: PropTypes.string,
    /**
     * callback
     */
    setProps: PropTypes.func,
    /**
     * Current menuitem
     */
    panelmenuItem: PropTypes.object,
    /**
     * Selected submenu item
     */
    panelsubmenu: PropTypes.object
};
