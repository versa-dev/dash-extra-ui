# AUTO GENERATED FILE - DO NOT EDIT

menuBar <- function(id=NULL, model=NULL, style=NULL, className=NULL) {
    
    props <- list(id=id, model=model, style=style, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MenuBar',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'model', 'style', 'className'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
