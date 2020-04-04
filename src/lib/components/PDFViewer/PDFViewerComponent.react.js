import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PDFViewer from 'pdf-viewer-reactjs'

/**
 * PDF Viewer component with controls
 * Page navigation
 * Zoom
 * Rotation
 */
export default class PDFViewerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value};
    }

    render() {
        const {
            url,
            base64,
            ...rest
        } = this.props;

        return (
            <PDFViewer
                document={url ? { url } : (base64 ? { base64 } : {})}
                {...rest}
            />
        );
    }
}

PDFViewerComponent.propTypes = {
    /**
     * The url of the PDF document
     */
    url: PropTypes.string,

    /**
     *  PDF file encoded in base64
     */
    base64: PropTypes.string,

    /**
     * The page that will be shown first on document load
     */
    page: PropTypes.number,

    /**
     * Scale factor relative to the component parent element
     */
    scale: PropTypes.number,

    /**
     * Scale factor to be increased or decreased on Zoom-in or zoom-out
     */
    scaleStep: PropTypes.number,

    /**
     * Maximun scale factor for zoom-in
     */
    maxScale: PropTypes.number,

    /**
     * Minimum scale factor for zoom-in
     */
    minScale: PropTypes.number,

    /**
     * CSS classes that will be setted for the component wrapper
     */
    css: PropTypes.string,

    /**
     * By default navbar is displayed on bottom, but can be placed on top by passing this prop
     */
    navbarOnTop: PropTypes.bool,

    /**
     * By default zoom buttons are displayed, but can be hidden by passing this prop
     */
    hideZoom: PropTypes.bool,

    /**
     * By default rotation buttons are displayed, but can be hidden by passing this prop
     */
    hideRotation: PropTypes.bool,

    /**
     * By default Right Click and Context Menu are enabled, but can be disabled by passing this prop
     */
    protectContent: PropTypes.bool,
};

PDFViewerComponent.defaultProps = {
    url: '',
    base64: '',
    page: 1,
    scale: 1,
    scaleStep: .5,
    maxScale: 3,
    minScale: .5,
    css: '',
    navbarOnTop: false,
    hideZoom: false,
    hideRotation: false,
    protectContent: false,
};