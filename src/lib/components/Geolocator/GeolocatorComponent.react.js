import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Geolocator from './Geolocator';

class GeolocatorComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id}>
        <Geolocator
          positionOptions = {this.props.positionOptions}
          watchPosition = {this.props.watchPosition}
          userDecisionTimeout = {this.props.userDecisionTimeout}
          suppressLocationOnMount = {this.props.suppressLocationOnMount}          
          isOptimisticGeolocationEnabled = {this.props.isOptimisticGeolocationEnabled}
          geolocationProvider = {navigator.geolocation}          
          onSuccess = {this.props.onSuccess}
          onError = {this.props.onError}
          errorMsg = {this.props.errorMsg}
          getPosition = {(position) =>{
              let coords = {
                accuracy : position.accuracy,
                altitude: position.altitude,
                altitudeAccuracy : position.altitudeAccuracy,
                heading : position.heading,
                latitude : position.latitude,
                longitude : position.longitude,
                speed : position.speed,
              }
              this.props.setProps({
                coords : coords
              })
              debugger
            }
          }
        />
      </div>
    )
  }
}

GeolocatorComponent.defaultProps = {
  setProps : () => {}, 
  id: null,
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  },
  watchPosition: true,
  userDecisionTimeout: null,
  suppressLocationOnMount: false,
  isOptimisticGeolocationEnabled: true,
  errorMsg: {
    isGeolocationAvailable: "Your browser does not support Geolocation",
    isGeolocationEnabled: "Geolocation is not enabled"
  },
  onSuccess: function(success){ console.log(success) },
  onError: function(error){ console.log(error)},
  coords: null,
};

GeolocatorComponent.propTypes = {
  setProps : PropTypes.func,
  id: PropTypes.string,
  positionOptions: PropTypes.object,
  watchPosition: PropTypes.bool,
  userDecisionTimeout: PropTypes.number,
  suppressLocationOnMount: PropTypes.bool,
  isOptimisticGeolocationEnabled: PropTypes.bool,  
  errorMsg: PropTypes.object,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  coords: PropTypes.object,
  setProps: PropTypes.func,
};

export default GeolocatorComponent;