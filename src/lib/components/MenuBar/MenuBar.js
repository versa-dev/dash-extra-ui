import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MenubarSub} from './MenubarSub';
import './MenuBar.css';

/**
 * MenuBar
 */
export class Menubar extends Component {
    renderCustomContent() {
        if (this.props.children) {
            return (
                <div className="p-menubar-custom">{this.props.children}</div>
            );
        } else {
            return null;
        }
    }

    render() {
        const className = classNames(
            'p-menubar p-component',
            this.props.className
        );
        const customContent = this.renderCustomContent();

        return (
            <div
                id={this.props.id}
                className={className}
                style={this.props.style}
            >
                <MenubarSub
                    model={this.props.model}
                    root={true}
                    setProps={this.props.setProps}
                />
                {customContent}
            </div>
        );
    }
}

Menubar.defaultProps = {
    id: null,
    model: null,
    style: null,
    className: null,
    setProps: null
};

Menubar.propTypes = {
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
     * Callback function
     */
    setProps: PropTypes.func,
};
