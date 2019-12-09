# AUTO GENERATED FILE - DO NOT EDIT

panelMenuComponent <- function(id=NULL, model=NULL, style=NULL, className=NULL, menuitem=NULL, submenu=NULL) {
    
    props <- list(id=id, model=model, style=style, className=className, menuitem=menuitem, submenu=submenu)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PanelMenuComponent',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'model', 'style', 'className', 'menuitem', 'submenu'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
