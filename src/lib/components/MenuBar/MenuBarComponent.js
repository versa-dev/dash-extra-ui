import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Button from '../Button/Button';
import {InputText} from '../Inputtext/InputText';
import {Menubar} from './MenuBar';
import './MenuBarComponent.css';

/**
 * MenuBarComponent
 */
export default class MenubarComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="content-section implementation">
                <Menubar
                    model={this.props.model}
                    setProps={props => this.props.setProps(props)}
                    // activeItem={this.props.activeItem}
                >
                    <InputText
                        placeholder={this.props.inputPlaceholder}
                        type="text"
                    />
                    <Button
                        label={this.props.btnlabel}
                        icon={this.props.btnicon}
                        style={{marginLeft: 4}}
                    />
                </Menubar>
            </div>
        );
    }
}

MenubarComponent.defaultProps = {
    id: null,
    model: null,
    style: null,
    className: null,
    setProps: null,
    menubarItem: null,
    submenubarItem: null,
    btnlabel: 'Logout',
    btnicon: 'pi pi-power-off',
    inputPlaceholder: 'Search',
};

MenubarComponent.propTypes = {
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
     * Input placeholder
     */
    inputPlaceholder: PropTypes.string,
    /**
     * Button Icon
     */
    btnicon: PropTypes.string,
    /**
     * Button label
     */
    btnlabel: PropTypes.string,
    /**
     * Style class of the component.
     */
    className: PropTypes.string,
    /**
     * Current Menu object
     */
    menubarItem: PropTypes.object,
    /**
     * Currently selected item
     */
    submenubarItem: PropTypes.object,
    /**
     * Callback function
     */
    setProps: PropTypes.func,
};
