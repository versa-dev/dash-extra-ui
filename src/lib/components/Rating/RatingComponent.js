import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Rating from './Rating';
import './Rating.css';
// import '../../../../test.css'

export default class RatingComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="content-section implementation">
                <Rating
                    onChange={e => this.props.setProps({value: e.value})}
                    {...this.props}
                />
            </div>
        );
    }
}

RatingComponent.defaultProps = {
    id: null,
    value: null,
    disabled: false,
    readonly: false,
    stars: 5,
    cancel: true,
    style: null,
    className: null,
    tooltip: null,
    tooltipOptions: null,
    setProps: () => {},
};

RatingComponent.propTypes = {
    /**
     * Unique identifier of the element.
     */
    id: PropTypes.string,
    /**
     * Value of the rating.
     */
    value: PropTypes.number,
    /**
     * When present, it specifies that the element should be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * When present, changing the value is not possible.
     */
    readonly: PropTypes.bool,
    /**
     * Number of stars.
     */
    stars: PropTypes.number,
    /**
     * When specified a cancel icon is displayed to allow removing the value.
     */
    cancel: PropTypes.bool,
    /**
     * Inline style of the component.
     */
    style: PropTypes.object,
    /**
     * ClassName of the component.
     */
    className: PropTypes.string,
    /**
     * Content of the tooltip.
     */
    tooltip: PropTypes.string,
    /**
     * 	Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
