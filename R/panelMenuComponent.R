# AUTO GENERATED FILE - DO NOT EDIT

panelMenuComponent <- function(id=NULL, model=NULL, style=NULL, className=NULL, panelmenuItem=NULL, panelsubmenu=NULL) {
    
    props <- list(id=id, model=model, style=style, className=className, panelmenuItem=panelmenuItem, panelsubmenu=panelsubmenu)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PanelMenuComponent',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'model', 'style', 'className', 'panelmenuItem', 'panelsubmenu'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
