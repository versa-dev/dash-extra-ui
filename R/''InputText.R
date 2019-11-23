# AUTO GENERATED FILE - DO NOT EDIT

''InputText <- function(onInput=NULL, onKeyPress=NULL, keyfilter=NULL, validateOnly=NULL, tooltip=NULL, tooltipOptions=NULL) {
    
    props <- list(onInput=onInput, onKeyPress=onKeyPress, keyfilter=keyfilter, validateOnly=validateOnly, tooltip=tooltip, tooltipOptions=tooltipOptions)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'InputText',
        namespace = 'extra_dash_ui_components',
        propNames = c('onInput', 'onKeyPress', 'keyfilter', 'validateOnly', 'tooltip', 'tooltipOptions'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
