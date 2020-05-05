# AUTO GENERATED FILE - DO NOT EDIT

geolocatorComponent <- function(id=NULL, positionOptions=NULL, watchPosition=NULL, userDecisionTimeout=NULL, suppressLocationOnMount=NULL, isOptimisticGeolocationEnabled=NULL, errorMsg=NULL, onSuccess=NULL, onError=NULL, coords=NULL) {
    
    props <- list(id=id, positionOptions=positionOptions, watchPosition=watchPosition, userDecisionTimeout=userDecisionTimeout, suppressLocationOnMount=suppressLocationOnMount, isOptimisticGeolocationEnabled=isOptimisticGeolocationEnabled, errorMsg=errorMsg, onSuccess=onSuccess, onError=onError, coords=coords)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GeolocatorComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'isOptimisticGeolocationEnabled', 'errorMsg', 'onSuccess', 'onError', 'coords'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
