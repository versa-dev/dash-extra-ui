# AUTO GENERATED FILE - DO NOT EDIT

''PDFViewerComponent <- function(url=NULL, date64=NULL) {
    
    props <- list(url=url, date64=date64)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PDFViewerComponent',
        namespace = 'extra_dash_ui_components',
        propNames = c('url', 'date64'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
