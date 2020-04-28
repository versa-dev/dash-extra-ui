# AUTO GENERATED FILE - DO NOT EDIT

''Carousel <- function(id=NULL, value=NULL, page=NULL, header=NULL, footer=NULL, style=NULL, className=NULL, itemTemplate=NULL, circular=NULL, autoplayInterval=NULL, numVisible=NULL, numScroll=NULL, responsiveOptions=NULL, orientation=NULL, verticalViewPortHeight=NULL, contentClassName=NULL, containerClassName=NULL, dotsContainerClassName=NULL, onPageChange=NULL) {
    
    props <- list(id=id, value=value, page=page, header=header, footer=footer, style=style, className=className, itemTemplate=itemTemplate, circular=circular, autoplayInterval=autoplayInterval, numVisible=numVisible, numScroll=numScroll, responsiveOptions=responsiveOptions, orientation=orientation, verticalViewPortHeight=verticalViewPortHeight, contentClassName=contentClassName, containerClassName=containerClassName, dotsContainerClassName=dotsContainerClassName, onPageChange=onPageChange)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Carousel',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'value', 'page', 'header', 'footer', 'style', 'className', 'itemTemplate', 'circular', 'autoplayInterval', 'numVisible', 'numScroll', 'responsiveOptions', 'orientation', 'verticalViewPortHeight', 'contentClassName', 'containerClassName', 'dotsContainerClassName', 'onPageChange'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
