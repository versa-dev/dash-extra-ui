import React, {Component} from 'react';
import Board from 'react-trello';
// import data  from './data.json';
import PropTypes from 'prop-types';


export default class TrelloComponent extends Component {
    constructor(props) {
        super(props);
    }

    // handleDragStart(cardId, laneId) Callback function triggered when card drag is started
    // handleDragEnd(cardId, sourceLaneId, targetLaneId, position, cardDetails)  Callback function triggered when card drag ends, return false if you want to cancel drop: 
    // handleLaneDragStart(laneId) Callback function triggered when lane drag is started: 
    // handleLaneDragEnd(removedIndex, addedIndex, payload) Callback function triggered when lane drag ends: 
    // onCardClick(cardId, metadata, laneId) Called when a card is clicked: 
    // onCardAdd(card, laneId) Called when a new card is added: 
    // onConfirmCardDelete(callback) Called before delete a card, please call the callback() if confirm to delete a card: 
    // onCardDelete(cardId, laneId) Called when a card is deleted:  
    // onCardMoveAcrossLanes(fromLaneId, toLaneId, cardId, index) Called when a card is moved across lanes 
    // onLaneAdd(params)  Called when a new lane is added: 
    // onLaneDelete(laneId)  Called when a lane is deleted 
	// onLaneUpdate(laneId, data) Called when a lane attributes are updated
	// onLaneClick(laneId) Called when a lane is clicked 

    render() {
        return (
            <div>
                <h1>this is trello</h1>
                <Board id = { this.props.id } data = { this.props.value } draggable = { this.props.draggable } editable = { this.props.editable }
                laneDraggable = { this.props.laneDraggable } cardDraggable = { this.props.cardDraggable } collapsibleLanes = { this.props.collapsibleLanes }  
                canAddLanes = { this.props.canAddLanes } hideCardDeleteIcon = { this.props.hideCardDeleteIcon } editLaneTitle = { this.props.editLaneTitle } 
                onDataChange = {(newData) => 
                    this.props.setProps({
                        event : "onDataChange",
                        changedData : newData,
                    })
                }
                handleDragStart = {(cardId, landId) =>
                    this.props.setProps({
                        event : "handleDragStart",
                        cardId : cardId,
                        landId : landId,
                    })
                }
                handleDragEnd = {(cardId, sourceLaneId, targetLaneId, position, cardDetails) =>
                    this.props.setProps({
                        event : "handleDragEnd",
                        cardId :cardId,
                        sourceLaneId : sourceLaneId,
                        targetLaneId : targetLaneId,
                        position : position,
                        cardDetails : cardDetails,
                    })
                }
                onCardClick = {(cardId, metadata, laneId) => 
                    this.props.setProps({
                        event : "onCardClick",
                        metaData : metadata
                    })
                } 
                onCardAdd = {(card, laneId) => 
                    this.props.setProps({
                        event : "onCardAdd",
                        card : card,
                        laneId : laneId
                    })
                }

                // onConfirmCardDelete = {(callback) => 
                onCardDelete = {(cardId, laneId) => 
                    this.props.setProps({
                        event : "onCardDelete",
                        cardId : cardId,
                        laneId : laneId,
                    })
                } 
                // onCardMoveAcrossLanes(fromLaneId, toLaneId, cardId, index)
                onLaneAdd = {(params) =>
                    this.props.setProps({
                        event : "onLaneAdd",
                        landParams : params
                    })
                }
                onLaneDelete = {(laneId) => 
                    this.props.setProps({
                        event : "onLaneDelete",
                        laneId : laneId
                    })
                } 
                onLaneUpdate = {(laneId, data) =>
                    this.props.setProps({
                        event : "onLaneUpdate",
                        laneId : laneId,
                        data : data
                    })
                }
                onLaneClick = {(laneId) => 
                    this.props.setProps({
                        event : "onLaneClick",
                        laneId : laneId
                    })
                }
                />
            </div>
        );
    }
}

TrelloComponent.defaultProps = {
    id : null,
    value : {},
    draggable : false,
    laneDraggable : true,
    cardDraggable :	 true,
    collapsibleLanes : true,
    editable :  true,
    canAddLanes	: true,
    hideCardDeleteIcon : true,
    editLaneTitle :	 true,
    changedData : null,
    cardId : null,
    landId : null,
    event : null,
    sourceLaneId : null,
    targetLaneId : null,
    position : null,
    cardDetails : null,
    landParams : null,
    metaData : null,
    card : null,
    setProps: () => {},
};

TrelloComponent.propTypes = {
    id: PropTypes.string,
    value : PropTypes.object,
    draggable : PropTypes.bool,
    laneDraggable : PropTypes.bool,
    cardDraggable :	 PropTypes.bool,
    collapsibleLanes : PropTypes.bool,
    editable :  PropTypes.bool,
    canAddLanes	: PropTypes.bool,
    hideCardDeleteIcon : PropTypes.bool,
    editLaneTitle :	 PropTypes.bool,
    setProps : PropTypes.func,
    changedData : PropTypes.object,
    cardId : PropTypes.string,
    landId : PropTypes.string,
    event : PropTypes.string,
    sourceLaneId : PropTypes.string,
    targetLaneId : PropTypes.string,
    position : PropTypes.number,
    cardDetails : PropTypes.object,
    landParams : PropTypes.object,
    metaData : PropTypes.object,
    card : PropTypes.object,
};
