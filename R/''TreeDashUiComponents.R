# AUTO GENERATED FILE - DO NOT EDIT

''TreeDashUiComponents <- function(id=NULL, value=NULL, disabled=NULL, selectionMode=NULL, selectionKeys=NULL, onSelectionChange=NULL, contextMenuSelectionKey=NULL, onContextMenuSelectionChange=NULL, expandedKeys=NULL, style=NULL, className=NULL, contentStyle=NULL, contentClassName=NULL, metaKeySelection=NULL, propagateSelectionUp=NULL, propagateSelectionDown=NULL, loading=NULL, loadingIcon=NULL, dragdropScope=NULL, filter=NULL, filterBy=NULL, filterMode=NULL, filterPlaceholder=NULL, nodeTemplate=NULL, onSelect=NULL, onUnselect=NULL, onExpand=NULL, onCollapse=NULL, onToggle=NULL, onDragDrop=NULL, onContextMenu=NULL) {
    
    props <- list(id=id, value=value, disabled=disabled, selectionMode=selectionMode, selectionKeys=selectionKeys, onSelectionChange=onSelectionChange, contextMenuSelectionKey=contextMenuSelectionKey, onContextMenuSelectionChange=onContextMenuSelectionChange, expandedKeys=expandedKeys, style=style, className=className, contentStyle=contentStyle, contentClassName=contentClassName, metaKeySelection=metaKeySelection, propagateSelectionUp=propagateSelectionUp, propagateSelectionDown=propagateSelectionDown, loading=loading, loadingIcon=loadingIcon, dragdropScope=dragdropScope, filter=filter, filterBy=filterBy, filterMode=filterMode, filterPlaceholder=filterPlaceholder, nodeTemplate=nodeTemplate, onSelect=onSelect, onUnselect=onUnselect, onExpand=onExpand, onCollapse=onCollapse, onToggle=onToggle, onDragDrop=onDragDrop, onContextMenu=onContextMenu)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TreeDashUiComponents',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'value', 'disabled', 'selectionMode', 'selectionKeys', 'onSelectionChange', 'contextMenuSelectionKey', 'onContextMenuSelectionChange', 'expandedKeys', 'style', 'className', 'contentStyle', 'contentClassName', 'metaKeySelection', 'propagateSelectionUp', 'propagateSelectionDown', 'loading', 'loadingIcon', 'dragdropScope', 'filter', 'filterBy', 'filterMode', 'filterPlaceholder', 'nodeTemplate', 'onSelect', 'onUnselect', 'onExpand', 'onCollapse', 'onToggle', 'onDragDrop', 'onContextMenu'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
