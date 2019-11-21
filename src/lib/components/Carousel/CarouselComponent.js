import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Button from '../Button/Button';
import Carousel from './Carousel';
import './Carousel.css';

/**
 * WrapperComponent on the Carousel component
 * Adds callback
 */
export default class CarouselComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            page: 0,
        };
        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.setState({data: this.props.value});
    }

    carTemplate = car => {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div
                        className="p-col-12"
                        onClick={() =>
                            this.props.setProps({
                                clicked: {action: 'image', item: car},
                            })
                        }
                    >
                        <img src={car.image} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{car.brand}</div>
                        <div className="car-subtitle">
                            {car.year} | {car.color}
                        </div>

                        <div className="car-buttons">
                            <Button
                                text="search"
                                icon="pi pi-search"
                                className="p-button-secondary"
                                onClick={() =>
                                    this.props.setProps({
                                        clicked: {action: 'search', item: car},
                                    })
                                }
                            />
                            <Button
                                icon="pi pi-star"
                                className="p-button-secondary"
                                onClick={() =>
                                    this.props.setProps({
                                        clicked: {action: 'like', item: car},
                                    })
                                }
                            />
                            <Button
                                icon="pi pi-cog"
                                className="p-button-secondary"
                                onClick={() =>
                                    this.props.setProps({
                                        clicked: {
                                            action: 'settings',
                                            item: car,
                                        },
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        const autoplayInterval = this.props.autoplayInterval;
        const onPageChange =
            autoplayInterval > 0
                ? null
                : e => this.props.setProps({page: e.page});

        return (
            <div className="content-section implementation">
                <Carousel
                    id={this.props.id}
                    value={this.state.data}
                    itemTemplate={this.carTemplate}
                    numVisible={this.props.numVisible}
                    numScroll={this.props.numScroll}
                    responsiveOptions={this.props.responsiveOptions}
                    header={this.props.header}
                    footer={this.props.footer}
                    className={this.props.className}
                    contentClassName={this.props.contentClassName}
                    containerClassName={this.props.containerClassName}
                    dotsContainerClassName={this.props.dotsContainerClassName}
                    style={this.props.style}
                    circular={this.props.circular}
                    page={this.props.page}
                    onPageChange={onPageChange}
                    autoplayInterval={autoplayInterval}
                    orientation={this.props.orientation}
                    verticalViewPortHeight={this.props.verticalViewPortHeight}
                />
            </div>
        );
    }
}

CarouselComponent.defaultProps = {
    id: null,
    value: null,
    page: 0,
    header: null,
    footer: null,
    style: null,
    className: null,
    circular: false,
    autoplayInterval: 0,
    numVisible: 1,
    numScroll: 1,
    responsiveOptions: null,
    orientation: 'horizontal',
    verticalViewPortHeight: '300px',
    contentClassName: null,
    containerClassName: null,
    dotsContainerClassName: null,
    clicked: null,
    setProps: () => {},
};

CarouselComponent.propTypes = {
    /**
     * Unique identifier of the element.
     */
    id: PropTypes.string,
    /**
     * An array of objects to display.
     */
    value: PropTypes.any,
    /**
     * Index of the first item.
     */
    page: PropTypes.number,
    /**
     * Label of header.
     */
    header: PropTypes.any,
    /**
     * Label of footer.
     */
    footer: PropTypes.any,

    /**
     * Inline style of the component.
     */
    style: PropTypes.object,
    /**
     * Style class of the component.
     */
    className: PropTypes.string,
    /**
     * Function that gets an item in the value and returns the content for it.
     */
    circular: PropTypes.bool,
    /**
     * Time in milliseconds to scroll items automatically.
     */
    autoplayInterval: PropTypes.number,
    /**
     * 	Number of items per page.
     */
    numVisible: PropTypes.number,
    /**
     * Number of items to scroll.
     */
    numScroll: PropTypes.number,
    /**
     * 	An array of options for responsive design.
     */
    responsiveOptions: PropTypes.array,
    /**
     * Specifies the layout of the component, valid values are "horizontal" and "vertical".
     */
    orientation: PropTypes.string,
    /**
     * 	Height of the viewport in vertical layout.
     */
    verticalViewPortHeight: PropTypes.string,
    /**
     * 	Style class of main content.
     */
    contentClassName: PropTypes.string,
    /**
     * 	Style class of the viewport container.
     */
    containerClassName: PropTypes.string,
    /**
     * 	Style class of the paginator items.
     */
    dotsContainerClassName: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    clicked: PropTypes.object,
};
