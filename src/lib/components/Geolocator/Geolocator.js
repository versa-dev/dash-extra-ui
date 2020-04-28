import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Geolocator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude : 0,
        longitude: 0      
      },
      isGeolocationAvailable: Boolean(this.props.geolocationProvider),
      isGeolocationEnabled: this.props.isOptimisticGeolocationEnabled,
      positionError: null,
      userDecisionTimeoutId: null,
      watchId: null,
    }
  }

  componentDidMount = () => {
    if (!this.props.suppressLocationOnMount) {
      if (this.props.watchPosition)
        this.watchCurrentLocation();    
      else
        this.getCurrentLocation();
        
      if (this.props.userDecisionTimeout) {      
        let userDecisionTimeoutId = setTimeout(() => {
            this.onPositionError("DecisionTimeout")
        }, this.props.userDecisionTimeout);      
        this.setState({
          userDecisionTimeoutId: userDecisionTimeoutId
        });
      }
    }
  }  

  componentWillUnmount = () => {
    this.cancelUserDecisionTimeout();
    if (this.props.watchPosition) {
      this.props.geolocationProvider.clearWatch(this.state.watchId);
    }
  }

  getCurrentLocation = () => {
    if (
      !this.props.geolocationProvider || 
      !this.props.geolocationProvider.getCurrentPosition ||
      !this.props.geolocationProvider.watchPosition
    ) {
      throw new Error("The provided geolocation provider is invalid");
    } else {
      let watchId = this.props.geolocationProvider.getCurrentPosition(
        (position) => {
          this.onPositionSuccess(position);
        },
        (positionError) => {  
          this.onPositionError(positionError);
        },
        {
          ...this.props.positionOptions
        },  
      );
      this.setState({watchId: watchId})
    }    
  }

  watchCurrentLocation = () => {
    if (this.props.watchPosition) {
      if (this.props.geolocationProvider) {
        this.props.geolocationProvider.watchPosition(
          (pos) => {
            var crd = pos.coords;
            if (this.state.coords.latitude === crd.latitude && this.state.coords.longitude === crd.longitude) {
              console.log('Congratulations, you reached the position');
              navigator.geolocation.clearWatch(this.state.watchId);
            } else {
              this.onPositionSuccess(crd);
            }          
          },
          (err) => {
            console.warn('ERROR(' + err.code + '): ' + err.message);
            this.onPositionError(err);
          },
          {
            ...this.props.positionOptions
          }          
        )
      }
    }
  }

  onPositionSuccess = position => {
    this.cancelUserDecisionTimeout();

    this.setState({
      coords: position,
      isGeolocationEnabled: true,
      positionError: null,
    })
    this.props.getPosition(position)
    this.props.onSuccess(position)
  }

  onPositionError = positionError => {
    this.cancelUserDecisionTimeout();
    this.setState({
      coords: null,
      isGeolocationEnabled: false,
      positionError,
    });
    this.props.onError(positionError);
  }

  cancelUserDecisionTimeout = () => {
    if (this.state.userDecisionTimeoutId) {
      clearTimeout(this.state.userDecisionTimeoutId);
    }
  };

  render() {

    return !this.state.isGeolocationAvailable ? (
      <div>        
      </div>
    ) : !this.state.isGeolocationEnabled ? (
      <div>        
      </div>
    ) : this.state.coords ? (
      <div></div>
    ) : (
      <div></div>
    );
  }
}

Geolocator.propTypes = {
  positionOptions:PropTypes.object,
  watchPosition: PropTypes.bool,
  userDecisionTimeout: PropTypes.number,
  suppressLocationOnMount: PropTypes.bool,
  geolocationProvider: PropTypes.object,
  isOptimisticGeolocationEnabled: PropTypes.bool, 
  onSuccess: PropTypes.func,
  onError: PropTypes.func, 
  errorMsg: PropTypes.object,
}

Geolocator.defaultProps = {
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  },
  watchPosition: true,
  userDecisionTimeout: null,
  suppressLocationOnMount: false,
  geolocationProvider: navigator.geolocation,
  isOptimisticGeolocationEnabled: true,
  onSuccess: function(success) {console.log(success)},
  onError: function(error) {console.log(error)},
  errorMsg: {
    isGeolocationAvailable: "Your browser does not support Geolocation",
    isGeolocationEnabled: "Geolocation is not enabled"
  }
}

export default Geolocator;
