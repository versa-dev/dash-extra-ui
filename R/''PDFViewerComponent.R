# AUTO GENERATED FILE - DO NOT EDIT

''PDFViewerComponent <- function(url=NULL, base64=NULL, page=NULL, scale=NULL, scaleStep=NULL, maxScale=NULL, minScale=NULL, css=NULL, navbarOnTop=NULL, hideZoom=NULL, hideRotation=NULL, protectContent=NULL) {
    
    props <- list(url=url, base64=base64, page=page, scale=scale, scaleStep=scaleStep, maxScale=maxScale, minScale=minScale, css=css, navbarOnTop=navbarOnTop, hideZoom=hideZoom, hideRotation=hideRotation, protectContent=protectContent)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PDFViewerComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('url', 'base64', 'page', 'scale', 'scaleStep', 'maxScale', 'minScale', 'css', 'navbarOnTop', 'hideZoom', 'hideRotation', 'protectContent'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
