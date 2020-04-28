# AUTO GENERATED FILE - DO NOT EDIT

button <- function(label=NULL, icon=NULL, iconPos=NULL, tooltip=NULL, tooltipOptions=NULL) {
    
    props <- list(label=label, icon=icon, iconPos=iconPos, tooltip=tooltip, tooltipOptions=tooltipOptions)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Button',
        namespace = 'dash_extra_ui_components',
        propNames = c('label', 'icon', 'iconPos', 'tooltip', 'tooltipOptions'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
