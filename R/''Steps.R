# AUTO GENERATED FILE - DO NOT EDIT

''Steps <- function(id=NULL, model=NULL, activeIndex=NULL, readOnly=NULL, style=NULL, className=NULL, onSelect=NULL) {
    
    props <- list(id=id, model=model, activeIndex=activeIndex, readOnly=readOnly, style=style, className=className, onSelect=onSelect)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Steps',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'model', 'activeIndex', 'readOnly', 'style', 'className', 'onSelect'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
