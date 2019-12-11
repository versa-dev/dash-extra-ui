# AUTO GENERATED FILE - DO NOT EDIT

menuBarComponent <- function(id=NULL, model=NULL, style=NULL, inputPlaceholder=NULL, btnicon=NULL, btnlabel=NULL, className=NULL, menubarItem=NULL, submenubarItem=NULL) {
    
    props <- list(id=id, model=model, style=style, inputPlaceholder=inputPlaceholder, btnicon=btnicon, btnlabel=btnlabel, className=className, menubarItem=menubarItem, submenubarItem=submenubarItem)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MenuBarComponent',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'model', 'style', 'inputPlaceholder', 'btnicon', 'btnlabel', 'className', 'menubarItem', 'submenubarItem'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
