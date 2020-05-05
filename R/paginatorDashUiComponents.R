# AUTO GENERATED FILE - DO NOT EDIT

paginatorDashUiComponents <- function(id=NULL, totalRecords=NULL, rows=NULL, first=NULL, pageLinkSize=NULL, rowsPerPageOptions=NULL, style=NULL, className=NULL, template=NULL, onPageChange=NULL, leftContent=NULL, rightContent=NULL, currentPageReportTemplate=NULL, alwaysShow=NULL) {
    
    props <- list(id=id, totalRecords=totalRecords, rows=rows, first=first, pageLinkSize=pageLinkSize, rowsPerPageOptions=rowsPerPageOptions, style=style, className=className, template=template, onPageChange=onPageChange, leftContent=leftContent, rightContent=rightContent, currentPageReportTemplate=currentPageReportTemplate, alwaysShow=alwaysShow)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PaginatorDashUiComponents',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'totalRecords', 'rows', 'first', 'pageLinkSize', 'rowsPerPageOptions', 'style', 'className', 'template', 'onPageChange', 'leftContent', 'rightContent', 'currentPageReportTemplate', 'alwaysShow'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
