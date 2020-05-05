# AUTO GENERATED FILE - DO NOT EDIT

lastPageLink <- function(id=NULL, disabled=NULL, onClick=NULL) {
    
    props <- list(id=id, disabled=disabled, onClick=onClick)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LastPageLink',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'disabled', 'onClick'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
