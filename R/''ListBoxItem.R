# AUTO GENERATED FILE - DO NOT EDIT

''ListBoxItem <- function(option=NULL, label=NULL, selected=NULL, tabIndex=NULL, onClick=NULL, onTouchEnd=NULL, template=NULL) {
    
    props <- list(option=option, label=label, selected=selected, tabIndex=tabIndex, onClick=onClick, onTouchEnd=onTouchEnd, template=template)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ListBoxItem',
        namespace = 'dash_extra_ui_components',
        propNames = c('option', 'label', 'selected', 'tabIndex', 'onClick', 'onTouchEnd', 'template'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
