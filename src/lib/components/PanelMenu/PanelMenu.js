import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {CSSTransition} from 'react-transition-group';
import './PanelMenu.css';

/**
 * PanelMenu
 */
class PanelMenuSub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: null,
        };
    }

    onItemClick(event, item) {
        this.props.setProps({panelsubmenu: item})
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
            });
        }

        if (this.state.activeItem && this.state.activeItem === item) {
            this.setState({
                activeItem: null,
            });
        } else {
            this.setState({
                activeItem: item,
            });
        }
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator"></li>
        );
    }

    renderIcon(item) {
        const className = classNames('p-menuitem-icon', item.icon);

        if (item.icon) {
            return <span className={className}></span>;
        } else {
            return null;
        }
    }

    renderSubmenuIcon(item, active) {
        const className = classNames('p-panelmenu-icon pi pi-fw', {
            'pi-caret-right': !active,
            'pi-caret-down': active,
        });

        if (item.items) {
            return <span className={className}></span>;
        } else {
            return null;
        }
    }

    renderSubmenu(item, active) {
        const submenuWrapperClassName = classNames('p-toggleable-content', {
            'p-toggleable-content-collapsed': !active,
        });

        if (item.items) {
            return (
                <CSSTransition
                    classNames="p-toggleable-content"
                    timeout={{enter: 400, exit: 250}}
                    in={active}
                >
                    <div className={submenuWrapperClassName}>
                        <PanelMenuSub model={item.items} setProps={this.props.setProps}/>
                    </div>
                </CSSTransition>
            );
        } else {
            return null;
        }
    }

    renderMenuitem(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('p-menuitem', item.className, {
            'p-disabled': item.disabled,
        });
        const icon = this.renderIcon(item, active);
        const submenuIcon = this.renderSubmenuIcon(item, active);
        const submenu = this.renderSubmenu(item, active);

        return (
            <li
                key={item.label + '_' + index}
                className={className}
                style={item.style}
            >
                <a
                    href={item.url || '#'}
                    className="p-menuitem-link"
                    target={item.target}
                    onClick={event => this.onItemClick(event, item, index)}
                >
                    {submenuIcon}
                    {icon}
                    <span className="p-menuitem-text">{item.label}</span>
                </a>
                {submenu}
            </li>
        );
    }

    renderItem(item, index) {
        if (item.separator) return this.renderSeparator(index);
        else return this.renderMenuitem(item, index);
    }

    renderMenu() {
        if (this.props.model) {
            return this.props.model.map((item, index) => {
                return this.renderItem(item, index);
            });
        } else {
            return null;
        }
    }

    render() {
        const className = classNames('p-submenu-list', this.props.className);
        const menu = this.renderMenu();

        return <ul className={className}>{menu}</ul>;
    }
}

/**
 * PanelMenu
 */

export class PanelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: null,
        };
    }

    onItemClick(event, item) {
        this.props.setProps({panelmenuItem: item})
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
            });
        }

        if (this.state.activeItem && this.state.activeItem === item) {
            this.setState({
                activeItem: null,
            });
        } else {
            this.setState({
                activeItem: item,
            });
        }
    }

    renderPanelIcon(item) {
        const className = classNames('p-menuitem-icon', item.icon);

        if (item.items) {
            return <span className={className}></span>;
        } else {
            return null;
        }
    }

    renderPanelToggleIcon(item, active) {
        const className = classNames('p-panelmenu-icon pi pi-fw', {
            'pi-caret-right': !active,
            ' pi-caret-down': active,
        });
        if (item.items) {
            return <span className={className}></span>;
        } else {
            return null;
        }
    }

    renderPanel(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('p-panelmenu-panel', item.className, {
            'p-disabled': item.disabled,
        });
        const headerClassName = classNames('p-component p-panelmenu-header', {
            'p-highlight': active,
        });
        const toggleIcon = this.renderPanelToggleIcon(item, active);
        const itemIcon = this.renderPanelIcon(item);
        const contentWrapperClassName = classNames('p-toggleable-content', {
            'p-toggleable-content-collapsed': !active,
        });

        return (
            <div
                key={item.label + '_' + index}
                className={className}
                style={item.style}
            >
                <div className={headerClassName} style={item.style}>
                    <a
                        href={item.url || '#'}
                        className="p-panelmenu-header-link ng-tns-c2-1 ng-star-inserted"
                        onClick={e => this.onItemClick(e, item)}
                    >
                        {toggleIcon}
                        {itemIcon}
                        <span className="p-menuitem-text">{item.label}</span>
                    </a>
                </div>
                <CSSTransition
                    classNames="p-toggleable-content"
                    timeout={{enter: 400, exit: 250}}
                    in={active}
                >
                    <div className={contentWrapperClassName}>
                        <div className="p-panelmenu-content">
                            <PanelMenuSub
                                model={item.items}
                                className="p-panelmenu-root-submenu"
                                setProps={this.props.setProps}
                            />
                        </div>
                    </div>
                </CSSTransition>
            </div>
        );
    }

    renderPanels() {
        if (this.props.model) {
            return this.props.model.map((item, index) => {
                return this.renderPanel(item, index);
            });
        } else {
            return null;
        }
    }

    render() {
        const className = classNames(
            'p-panelmenu p-component',
            this.props.className
        );
        const panels = this.renderPanels();

        return (
            <div
                id={this.props.id}
                className={className}
                style={this.props.style}
            >
                {panels}
            </div>
        );
    }
}

PanelMenuSub.defaultProps = {
    model: null,
    setProps: null
};

PanelMenuSub.propTypes = {
    /**
     * An array of menuitems.
     */
    model: PropTypes.any,
    /**
     * callback
     */
    setProps:PropTypes.func.isRequired
};

PanelMenu.defaultProps = {
    id: null,
    model: null,
    style: null,
    className: null,
    setProps: null
};

PanelMenu.propTypes = {
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
    setProps:PropTypes.func.isRequired
};
