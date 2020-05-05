# AUTO GENERATED FILE - DO NOT EDIT

''DataScrollerDashUiComponents <- function(id=NULL, value=NULL, rows=NULL, inline=NULL, scrollHeight=NULL, loader=NULL, buffer=NULL, style=NULL, className=NULL, onLazyLoad=NULL, itemTemplate=NULL, header=NULL, footer=NULL, lazy=NULL) {
    
    props <- list(id=id, value=value, rows=rows, inline=inline, scrollHeight=scrollHeight, loader=loader, buffer=buffer, style=style, className=className, onLazyLoad=onLazyLoad, itemTemplate=itemTemplate, header=header, footer=footer, lazy=lazy)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DataScrollerDashUiComponents',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'value', 'rows', 'inline', 'scrollHeight', 'loader', 'buffer', 'style', 'className', 'onLazyLoad', 'itemTemplate', 'header', 'footer', 'lazy'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
