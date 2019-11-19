# AUTO GENERATED FILE - DO NOT EDIT

rating <- function(id=NULL, value=NULL, disabled=NULL, readonly=NULL, stars=NULL, cancel=NULL, style=NULL, className=NULL, tooltip=NULL, tooltipOptions=NULL, onChange=NULL) {
    
    props <- list(id=id, value=value, disabled=disabled, readonly=readonly, stars=stars, cancel=cancel, style=style, className=className, tooltip=tooltip, tooltipOptions=tooltipOptions, onChange=onChange)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Rating',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'value', 'disabled', 'readonly', 'stars', 'cancel', 'style', 'className', 'tooltip', 'tooltipOptions', 'onChange'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
