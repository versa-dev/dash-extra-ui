# AUTO GENERATED FILE - DO NOT EDIT

organizationChart <- function(id=NULL, value=NULL, style=NULL, className=NULL, selectionMode=NULL, selection=NULL, nodeTemplate=NULL, onSelectionChange=NULL, onNodeSelect=NULL, onNodeUnselect=NULL) {
    
    props <- list(id=id, value=value, style=style, className=className, selectionMode=selectionMode, selection=selection, nodeTemplate=nodeTemplate, onSelectionChange=onSelectionChange, onNodeSelect=onNodeSelect, onNodeUnselect=onNodeUnselect)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'OrganizationChart',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'value', 'style', 'className', 'selectionMode', 'selection', 'nodeTemplate', 'onSelectionChange', 'onNodeSelect', 'onNodeUnselect'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
