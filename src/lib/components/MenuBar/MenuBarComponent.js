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
    onValueChange = e => {
        this.props.setProps({menubarInput: e.target.value});
    };

    onSearch = input => {
        this.props.setProps({searchQuery: input});
    };

    render() {
        const {menubarInput, btnlabel, btnicon, inputPlaceholder} = this.props;
        const showInputText = this.props.inputTextBox && (
            <span>
                <InputText
                    placeholder={inputPlaceholder}
                    type="text"
                    value={menubarInput || ''}
                    onChange={e => this.onValueChange(e)}
                />
                <span
                    className="p-listbox-filter-icon pi pi-search"
                    onClick={() => this.onSearch(menubarInput)}
                ></span>
            </span>
        );
        const showButton = this.props.button && (
            <Button
                label={btnlabel}
                icon={btnicon}
                style={{marginLeft: 4}}
                onClick={() => this.props.setProps({btnClick: 'logout'})}
            />
        );
        return (
            <div className="content-section implementation">
                <Menubar
                    model={this.props.model}
                    setProps={props => this.props.setProps(props)}
                    // activeItem={this.props.activeItem}
                >
                    {showInputText}
                    {showButton}
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
    inputTextBox: true,
    button: true,
    searchQuery: null,
    menubarInput: null,
    btnClick: null,
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
     * Show or hide input text box
     */
    inputTextBox: PropTypes.bool,
    /**
     * Show or hide button
     */
    button: PropTypes.bool,
    searchQuery: PropTypes.string,
    menubarInput: PropTypes.string,
    btnClick: PropTypes.string,
    /**
     * Callback function
     */
    setProps: PropTypes.func,
};
