# AUTO GENERATED FILE - DO NOT EDIT

geolocator <- function(positionOptions=NULL, watchPosition=NULL, userDecisionTimeout=NULL, suppressLocationOnMount=NULL, geolocationProvider=NULL, isOptimisticGeolocationEnabled=NULL, onSuccess=NULL, onError=NULL, errorMsg=NULL) {
    
    props <- list(positionOptions=positionOptions, watchPosition=watchPosition, userDecisionTimeout=userDecisionTimeout, suppressLocationOnMount=suppressLocationOnMount, geolocationProvider=geolocationProvider, isOptimisticGeolocationEnabled=isOptimisticGeolocationEnabled, onSuccess=onSuccess, onError=onError, errorMsg=errorMsg)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Geolocator',
        namespace = 'dash_extra_ui_components',
        propNames = c('positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'geolocationProvider', 'isOptimisticGeolocationEnabled', 'onSuccess', 'onError', 'errorMsg'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
