# AUTO GENERATED FILE - DO NOT EDIT

menubarSub <- function(model=NULL, root=NULL, className=NULL, popup=NULL, onLeafClick=NULL, onKeyDown=NULL, parentActive=NULL) {
    
    props <- list(model=model, root=root, className=className, popup=popup, onLeafClick=onLeafClick, onKeyDown=onKeyDown, parentActive=parentActive)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MenubarSub',
        namespace = 'dash_extra_ui_components',
        propNames = c('model', 'root', 'className', 'popup', 'onLeafClick', 'onKeyDown', 'parentActive'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
