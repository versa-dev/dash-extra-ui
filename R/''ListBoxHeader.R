# AUTO GENERATED FILE - DO NOT EDIT

''ListBoxHeader <- function(filter=NULL, disabled=NULL, onFilter=NULL) {
    
    props <- list(filter=filter, disabled=disabled, onFilter=onFilter)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ListBoxHeader',
        namespace = 'extra_dash_ui_components',
        propNames = c('filter', 'disabled', 'onFilter'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
