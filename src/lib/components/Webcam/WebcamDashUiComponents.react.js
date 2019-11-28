import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class WebcamDashUiComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value};

        this.getScreenshot = this.getScreenshot.bind(this);
        this.handleScreenshot = setInterval(this.getScreenshot, 1000);  // 25 FPS
    }

    getScreenshot(){
        const currScreenshot = this.webcam.getScreenshot();
        if(this.props.setProps)
        {
            this.props.setProps({
                screenshot: currScreenshot
            })
        }
    }

    updateIntervals(prevProps){
        const {screenshotInterval} = this.props;

        if (this.handleScreenshot === undefined ||
            prevProps.screenshotInterval !== screenshotInterval){
            clearInterval(this.handleScreenshot);
            this.handleScreenshot = setInterval(
                this.getScreenshot,
                screenshotInterval
            );
        }
    }

    componentDidUpdate(prevProps){
        this.updateIntervals(prevProps);
    }

    
    render() {
        const {
            className,
            audio,
            height,
            width,
            screenshotWidth,
            screenshotFormat,
            screenshotQuality
        } = this.props;
    
        return (
            <Webcam
                ref={node => this.webcam = node}
                className={className}
                audio={audio}
                height={height}
                width={width}
                screenshotFormat={screenshotFormat}
                screenshotQuality={screenshotQuality}                                             
            />
        );
    }
}

WebcamDashUiComponents.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * CSS class of video element
     */
    className: PropTypes.string,

    /**
     * enable/disable audio
     */
    audio: PropTypes.bool,

    /**
     * height of video element
     */
    height: PropTypes.number,

    /**
     * width of video element
     */
    width: PropTypes.number,

    /**
     * width of screenshot
     */
    screenshotWidth: PropTypes.number,

    /**
     * format of screenshot
     */
    screenshotFormat: PropTypes.string,

    /**
     * quality of screenshot(0 to 1)
     */
    screenshotQuality: PropTypes.number,

    /**
     * update interval of screenshot in milliseconds
     */
    screenshotInterval: PropTypes.number,

    /**
     * getScreenshot() returns a base64 encoded string of the current webcam
     * image. screenshot is the prop updated at fixed interval from calling
     * getScreenshot(). It is currently capped at 25 fps.
     */
    screenshot: PropTypes.string,
};

WebcamDashUiComponents.defaultProps = {
    id:null,
    audio: true,
    className: '',
    height: 480,
    width: 640,
    screenshotFormat: "image/webp",
    screenshotQuality: 0.92,
};