import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Steps.css';

/**
 * Steps 
 */
export class Steps extends Component {

    itemClick(event, item, index) {
        if (this.props.readOnly || item.disabled) {
            event.preventDefault();
            return;
        }

        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                item: item,
                index: index,
            });
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: index,
            });
        }
    }

    renderItem(item, index) {
        const className = classNames('p-steps-item', item.className, {
            'p-highlight p-steps-current': index === this.props.activeIndex,
            'p-state-default': index !== this.props.activeIndex,
            'p-disabled':
                item.disabled ||
                (index !== this.props.activeIndex && this.props.readOnly),
        });

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
                    onClick={event => this.itemClick(event, item, index)}
                >
                    <span className="p-steps-number">{index + 1}</span>
                    <span className="p-steps-title">{item.label}</span>
                </a>
            </li>
        );
    }

    renderItems() {
        if (this.props.model) {
            const items = this.props.model.map((item, index) => {
                return this.renderItem(item, index);
            });

            return <ul role="tablist">{items}</ul>;
        } else {
            return null;
        }
    }

    render() {
        const className = classNames(
            'p-steps p-component',
            this.props.className,
            {'p-steps-readonly': this.props.readonly}
        );
        const items = this.renderItems();

        return (
            <div
                id={this.props.id}
                className={className}
                style={this.props.style}
            >
                {items}
            </div>
        );
    }
}

Steps.defaultProps = {
    id: null,
    model: null,
    activeIndex: 0,
    readOnly: true,
    style: null,
    className: null,
    onSelect: null,
};

Steps.propTypes = {
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
    /**
     * Callback to invoke when the new step is selected.
     */
    onSelect: PropTypes.func,
};
