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
            data64
        } = this.props;
    
        return (
          <PDFViewer
            document={url ? { url } : (data64 ? { data64 } : {})}
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
    date64: PropTypes.string,
};

PDFViewerComponent.defaultProps = {
    url: undefined,
    date64: undefined,
};