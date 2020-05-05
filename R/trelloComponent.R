# AUTO GENERATED FILE - DO NOT EDIT

trelloComponent <- function(id=NULL, value=NULL, draggable=NULL, laneDraggable=NULL, cardDraggable=NULL, collapsibleLanes=NULL, editable=NULL, canAddLanes=NULL, hideCardDeleteIcon=NULL, editLaneTitle=NULL, changedData=NULL, cardId=NULL, landId=NULL, event=NULL, sourceLaneId=NULL, targetLaneId=NULL, position=NULL, cardDetails=NULL, landParams=NULL, metaData=NULL, card=NULL) {
    
    props <- list(id=id, value=value, draggable=draggable, laneDraggable=laneDraggable, cardDraggable=cardDraggable, collapsibleLanes=collapsibleLanes, editable=editable, canAddLanes=canAddLanes, hideCardDeleteIcon=hideCardDeleteIcon, editLaneTitle=editLaneTitle, changedData=changedData, cardId=cardId, landId=landId, event=event, sourceLaneId=sourceLaneId, targetLaneId=targetLaneId, position=position, cardDetails=cardDetails, landParams=landParams, metaData=metaData, card=card)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TrelloComponent',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'value', 'draggable', 'laneDraggable', 'cardDraggable', 'collapsibleLanes', 'editable', 'canAddLanes', 'hideCardDeleteIcon', 'editLaneTitle', 'changedData', 'cardId', 'landId', 'event', 'sourceLaneId', 'targetLaneId', 'position', 'cardDetails', 'landParams', 'metaData', 'card'),
        package = 'dashExtraUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
