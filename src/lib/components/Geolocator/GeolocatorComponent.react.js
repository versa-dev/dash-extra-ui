import React, {Component} from "react";
import { geolocated, geoPropTypes } from "react-geolocated";
import PropTypes from 'prop-types';

class GeolocatorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {value: props.value};
    }

    render() {
        const {
            isGeolocationAvailable,
            isGeolocationEnabled,
            coords,
        } = this.props;

        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{this.props.coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{this.props.coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}

// // Using Object.assign
// GeolocatorComponent.propTypes = Object.assign({}, GeolocatorComponent.propTypes, geoPropTypes);

// GeolocatorComponent.defaultProps={
//
// }

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GeolocatorComponent);
