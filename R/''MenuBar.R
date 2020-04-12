# AUTO GENERATED FILE - DO NOT EDIT

''MenuBar <- function(id=NULL, model=NULL, style=NULL, className=NULL) {
    
    props <- list(id=id, model=model, style=style, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MenuBar',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'model', 'style', 'className'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
