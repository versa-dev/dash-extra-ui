# AUTO GENERATED FILE - DO NOT EDIT

''WebcamDashUiComponents <- function(id=NULL, className=NULL, audio=NULL, height=NULL, width=NULL, screenshotWidth=NULL, screenshotHeight=NULL, screenshotFormat=NULL, screenshotQuality=NULL, screenshotInterval=NULL, screenshot=NULL) {
    
    props <- list(id=id, className=className, audio=audio, height=height, width=width, screenshotWidth=screenshotWidth, screenshotHeight=screenshotHeight, screenshotFormat=screenshotFormat, screenshotQuality=screenshotQuality, screenshotInterval=screenshotInterval, screenshot=screenshot)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'WebcamDashUiComponents',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'className', 'audio', 'height', 'width', 'screenshotWidth', 'screenshotHeight', 'screenshotFormat', 'screenshotQuality', 'screenshotInterval', 'screenshot'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
