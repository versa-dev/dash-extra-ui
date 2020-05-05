# AUTO GENERATED FILE - DO NOT EDIT

carouselComponent <- function(id=NULL, value=NULL, page=NULL, header=NULL, footer=NULL, style=NULL, className=NULL, circular=NULL, autoplayInterval=NULL, numVisible=NULL, numScroll=NULL, responsiveOptions=NULL, orientation=NULL, verticalViewPortHeight=NULL, contentClassName=NULL, containerClassName=NULL, dotsContainerClassName=NULL, clicked=NULL) {
    
    props <- list(id=id, value=value, page=page, header=header, footer=footer, style=style, className=className, circular=circular, autoplayInterval=autoplayInterval, numVisible=numVisible, numScroll=numScroll, responsiveOptions=responsiveOptions, orientation=orientation, verticalViewPortHeight=verticalViewPortHeight, contentClassName=contentClassName, containerClassName=containerClassName, dotsContainerClassName=dotsContainerClassName, clicked=clicked)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CarouselComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'value', 'page', 'header', 'footer', 'style', 'className', 'circular', 'autoplayInterval', 'numVisible', 'numScroll', 'responsiveOptions', 'orientation', 'verticalViewPortHeight', 'contentClassName', 'containerClassName', 'dotsContainerClassName', 'clicked'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
