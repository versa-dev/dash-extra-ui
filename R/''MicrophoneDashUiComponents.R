# AUTO GENERATED FILE - DO NOT EDIT

''MicrophoneDashUiComponents <- function(id=NULL, backgroundColor=NULL, strokeColor=NULL, className=NULL, audioBitsPerSecond=NULL, mimeType=NULL, height=NULL, record=NULL, onStop=NULL, onData=NULL, realData=NULL, recordedBlob=NULL, visualSetting=NULL, width=NULL) {
    
    props <- list(id=id, backgroundColor=backgroundColor, strokeColor=strokeColor, className=className, audioBitsPerSecond=audioBitsPerSecond, mimeType=mimeType, height=height, record=record, onStop=onStop, onData=onData, realData=realData, recordedBlob=recordedBlob, visualSetting=visualSetting, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MicrophoneDashUiComponents',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'backgroundColor', 'strokeColor', 'className', 'audioBitsPerSecond', 'mimeType', 'height', 'record', 'onStop', 'onData', 'realData', 'recordedBlob', 'visualSetting', 'width'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
