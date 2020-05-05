# AUTO GENERATED FILE - DO NOT EDIT

''PageLinks <- function(id=NULL, value=NULL, page=NULL, onClick=NULL) {
    
    props <- list(id=id, value=value, page=page, onClick=onClick)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PageLinks',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'value', 'page', 'onClick'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
