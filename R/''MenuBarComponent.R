# AUTO GENERATED FILE - DO NOT EDIT

''MenuBarComponent <- function(id=NULL, model=NULL, style=NULL, inputPlaceholder=NULL, btnicon=NULL, btnlabel=NULL, className=NULL, menubarItem=NULL, submenubarItem=NULL, inputTextBox=NULL, button=NULL, searchQuery=NULL, menubarInput=NULL, btnClick=NULL) {
    
    props <- list(id=id, model=model, style=style, inputPlaceholder=inputPlaceholder, btnicon=btnicon, btnlabel=btnlabel, className=className, menubarItem=menubarItem, submenubarItem=submenubarItem, inputTextBox=inputTextBox, button=button, searchQuery=searchQuery, menubarInput=menubarInput, btnClick=btnClick)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MenuBarComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'model', 'style', 'inputPlaceholder', 'btnicon', 'btnlabel', 'className', 'menubarItem', 'submenubarItem', 'inputTextBox', 'button', 'searchQuery', 'menubarInput', 'btnClick'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
