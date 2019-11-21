import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from '../../utils/ToolTip';
import ObjectUtils from '../../utils/ObjectUtils';
import './Button.css';


/**
 * Component to render a button element
 */
export default class Button extends Component {
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

    renderIcon() {
        if (this.props.icon) {
            let className = classNames(this.props.icon, 'p-c', {
                'p-button-icon-left': this.props.iconPos !== 'right',
                'p-button-icon-right': this.props.iconPos === 'right',
            });

            return <span className={className}></span>;
        } else {
            return null;
        }
    }

    renderLabel() {
        const buttonLabel = this.props.label || 'p-btn';

        return <span className="p-button-text p-c">{buttonLabel}</span>;
    }

    render() {
        let className = classNames(
            'p-button p-component',
            this.props.className,
            {
                'p-button-icon-only': this.props.icon && !this.props.label,
                'p-button-text-icon-left':
                    this.props.icon &&
                    this.props.label &&
                    this.props.iconPos === 'left',
                'p-button-text-icon-right':
                    this.props.icon &&
                    this.props.label &&
                    this.props.iconPos === 'right',
                'p-button-text-only': !this.props.icon && this.props.label,
                'p-disabled': this.props.disabled,
            }
        );
        let icon = this.renderIcon();
        let label = this.renderLabel();

        let buttonProps = ObjectUtils.findDiffKeys(
            this.props,
            Button.defaultProps
        );

        return (
            <button
                ref={el => (this.element = el)}
                {...buttonProps}
                className={className}
            >
                {this.props.iconPos === 'left' && icon}
                {label}
                {this.props.iconPos === 'right' && icon}
                {this.props.children}
            </button>
        );
    }
}

Button.defaultProps = {
    label: null,
    icon: null,
    iconPos: 'left',
    tooltip: null,
    tooltipOptions: null,
};

Button.propTypes = {
    /**
     * Text of the button.
     */
    label: PropTypes.string,
    /**
     * Name of the icon.
     */
    icon: PropTypes.string,
    /**
     * Position of the icon, valid values are "left" and "right".
     */
    iconPos: PropTypes.string,
    /**
     * Content of the tooltip.
     */
    tooltip: PropTypes.string,
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions: PropTypes.object,
};
