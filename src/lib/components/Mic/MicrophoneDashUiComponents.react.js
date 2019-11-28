import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ReactMic} from 'react-mic';

import "./Microphone.css";

export default class MicrophoneDashUiComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
        };
        this.onData = this.onData.bind(this);
        this.onStop = this.onStop.bind(this);
    }

    startRecording = () => {
        this.setState({
            record: true,
        });
    };

    stopRecording = () => {
        this.setState({
            record: false,
        });
    };

    onData(recordedBlob) {
        // console.log('chunk of real-time data is: ', recordedBlob);
        this.props.setProps({
            realData: "size :" + recordedBlob.size + " type: " + recordedBlob.type
        })
    }

    onStop(recordedBlob) {
        // console.log('recordedBlob is: ', recordedBlob);
        this.props.setProps({
            realData: "Please check audio",
            recordedBlob
        })
    }

    render() {
        return (
            <div>
                <ReactMic
                    record={this.state.record}
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
                <div className = "react-mic-btns">
                    <button onClick={this.startRecording} type="button" disabled={this.state.record}>
                        Start
                    </button>
                    <button onClick={this.stopRecording} type="button" disabled={!this.state.record}>
                        Stop
                    </button>
                </div>
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
    onStop          : PropTypes.func,
    onData          : PropTypes.func,
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


