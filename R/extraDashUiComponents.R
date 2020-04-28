# AUTO GENERATED FILE - DO NOT EDIT

extraDashUiComponents <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ExtraDashUiComponents',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'label', 'value'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
