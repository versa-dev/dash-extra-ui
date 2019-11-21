# AUTO GENERATED FILE - DO NOT EDIT

uITreeNode <- function(node=NULL, index=NULL, last=NULL, parent=NULL, path=NULL, disabled=NULL, selectionMode=NULL, selectionKeys=NULL, contextMenuSelectionKey=NULL, metaKeySelection=NULL, expandedKeys=NULL, propagateSelectionUp=NULL, propagateSelectionDown=NULL, dragdropScope=NULL, ariaLabel=NULL, ariaLabelledBy=NULL, nodeTemplate=NULL, isNodeLeaf=NULL, onSelect=NULL, onUnselect=NULL, onExpand=NULL, onCollapse=NULL, onToggle=NULL, onSelectionChange=NULL, onContextMenuSelectionChange=NULL, onPropagateUp=NULL, onDragStart=NULL, onDragEnd=NULL, onDrop=NULL, onDropPoint=NULL, onContextMenu=NULL) {
    
    props <- list(node=node, index=index, last=last, parent=parent, path=path, disabled=disabled, selectionMode=selectionMode, selectionKeys=selectionKeys, contextMenuSelectionKey=contextMenuSelectionKey, metaKeySelection=metaKeySelection, expandedKeys=expandedKeys, propagateSelectionUp=propagateSelectionUp, propagateSelectionDown=propagateSelectionDown, dragdropScope=dragdropScope, ariaLabel=ariaLabel, ariaLabelledBy=ariaLabelledBy, nodeTemplate=nodeTemplate, isNodeLeaf=isNodeLeaf, onSelect=onSelect, onUnselect=onUnselect, onExpand=onExpand, onCollapse=onCollapse, onToggle=onToggle, onSelectionChange=onSelectionChange, onContextMenuSelectionChange=onContextMenuSelectionChange, onPropagateUp=onPropagateUp, onDragStart=onDragStart, onDragEnd=onDragEnd, onDrop=onDrop, onDropPoint=onDropPoint, onContextMenu=onContextMenu)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'UITreeNode',
        namespace = 'extra_dash_ui_components',
        propNames = c('node', 'index', 'last', 'parent', 'path', 'disabled', 'selectionMode', 'selectionKeys', 'contextMenuSelectionKey', 'metaKeySelection', 'expandedKeys', 'propagateSelectionUp', 'propagateSelectionDown', 'dragdropScope', 'ariaLabel', 'ariaLabelledBy', 'nodeTemplate', 'isNodeLeaf', 'onSelect', 'onUnselect', 'onExpand', 'onCollapse', 'onToggle', 'onSelectionChange', 'onContextMenuSelectionChange', 'onPropagateUp', 'onDragStart', 'onDragEnd', 'onDrop', 'onDropPoint', 'onContextMenu'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
