# AUTO GENERATED FILE - DO NOT EDIT

''Button <- function(label=NULL, icon=NULL, iconPos=NULL, tooltip=NULL, tooltipOptions=NULL) {
    
    props <- list(label=label, icon=icon, iconPos=iconPos, tooltip=tooltip, tooltipOptions=tooltipOptions)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Button',
        namespace = 'extra_dash_ui_components',
        propNames = c('label', 'icon', 'iconPos', 'tooltip', 'tooltipOptions'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
