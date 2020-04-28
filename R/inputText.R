# AUTO GENERATED FILE - DO NOT EDIT

inputText <- function(onInput=NULL, onKeyPress=NULL, keyfilter=NULL, validateOnly=NULL, tooltip=NULL, tooltipOptions=NULL) {
    
    props <- list(onInput=onInput, onKeyPress=onKeyPress, keyfilter=keyfilter, validateOnly=validateOnly, tooltip=tooltip, tooltipOptions=tooltipOptions)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'InputText',
        namespace = 'dash_extra_ui_components',
        propNames = c('onInput', 'onKeyPress', 'keyfilter', 'validateOnly', 'tooltip', 'tooltipOptions'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
