import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ReactMic} from '@cleandersonlobo/react-mic';

import "./Microphone.css";

export default class MicrophoneDashUiComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
        };
        this.record = false;
        this.onData = this.onData.bind(this);
        this.onStop = this.onStop.bind(this);
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
	
	let read = new FileReader();
	read.readAsDataURL(recordedBlob.blob);
	read.onloadend = () => {
	    this.props.setProps({
	      realData: read.result,
	      recordedBlob
	    })

	}
	
    }

    shouldComponentUpdate(nextProps)
    {
        return nextProps.record != this.record
    }

    render() {

        this.record = this.props.record
        
        console.log("record", this.record)
        return (
            <div>
                <ReactMic
                    record={this.record}
                    className={this.props.className}
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor={this.props.strokeColor}
                    backgroundColor={this.props.backgroundColor}
                    mimeType={this.props.mimeType}
                    audioBitsPerSecond={this.props.audioBitsPerSecond}
                    width={this.props.width}
                    height={this.props.height}
                />
            </div>
        );
    }
}

MicrophoneDashUiComponents.propTypes = {
    id              : PropTypes.string,
    backgroundColor : PropTypes.string,
    strokeColor     : PropTypes.string,
    className       : PropTypes.string,
    audioBitsPerSecond: PropTypes.number,
    mimeType        : PropTypes.string,
    height          : PropTypes.number,
    record          : PropTypes.bool,
    realData           : PropTypes.string,
    recordedBlob    : PropTypes.object,
    visualSetting   : PropTypes.string,
    width           :PropTypes.number
};
  
MicrophoneDashUiComponents.defaultProps = {
    id                : null,
    backgroundColor   : '#FF4081',
    strokeColor       : '#000000',
    className         : 'sound-wave',
    audioBitsPerSecond: 128000,
    mimeType          : "audio/webm;codecs=opus",
    record            : false,
    width             : 640,
    height            : 100,
    visualSetting     : 'sinewave'
}


