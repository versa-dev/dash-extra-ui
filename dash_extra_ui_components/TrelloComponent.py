# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TrelloComponent(Component):
    """A TrelloComponent component.


Keyword arguments:
- id (string; optional)
- value (dict; optional)
- draggable (boolean; default False)
- laneDraggable (boolean; default True)
- cardDraggable (boolean; default True)
- collapsibleLanes (boolean; default True)
- editable (boolean; default True)
- canAddLanes (boolean; default True)
- hideCardDeleteIcon (boolean; default True)
- editLaneTitle (boolean; default True)
- changedData (dict; optional)
- cardId (string; optional)
- landId (string; optional)
- event (string; optional)
- sourceLaneId (string; optional)
- targetLaneId (string; optional)
- position (number; optional)
- cardDetails (dict; optional)
- landParams (dict; optional)
- metaData (dict; optional)
- card (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, draggable=Component.UNDEFINED, laneDraggable=Component.UNDEFINED, cardDraggable=Component.UNDEFINED, collapsibleLanes=Component.UNDEFINED, editable=Component.UNDEFINED, canAddLanes=Component.UNDEFINED, hideCardDeleteIcon=Component.UNDEFINED, editLaneTitle=Component.UNDEFINED, changedData=Component.UNDEFINED, cardId=Component.UNDEFINED, landId=Component.UNDEFINED, event=Component.UNDEFINED, sourceLaneId=Component.UNDEFINED, targetLaneId=Component.UNDEFINED, position=Component.UNDEFINED, cardDetails=Component.UNDEFINED, landParams=Component.UNDEFINED, metaData=Component.UNDEFINED, card=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'draggable', 'laneDraggable', 'cardDraggable', 'collapsibleLanes', 'editable', 'canAddLanes', 'hideCardDeleteIcon', 'editLaneTitle', 'changedData', 'cardId', 'landId', 'event', 'sourceLaneId', 'targetLaneId', 'position', 'cardDetails', 'landParams', 'metaData', 'card']
        self._type = 'TrelloComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'draggable', 'laneDraggable', 'cardDraggable', 'collapsibleLanes', 'editable', 'canAddLanes', 'hideCardDeleteIcon', 'editLaneTitle', 'changedData', 'cardId', 'landId', 'event', 'sourceLaneId', 'targetLaneId', 'position', 'cardDetails', 'landParams', 'metaData', 'card']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TrelloComponent, self).__init__(**args)
