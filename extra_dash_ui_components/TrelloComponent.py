# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TrelloComponent(Component):
    """A TrelloComponent component.
Component to render a button element

Keyword arguments:
- draggable (boolean; default False)
- laneDraggable (boolean; default True)
- cardDraggable (boolean; default True)
- collapsibleLanes (boolean; default True)
- editable (boolean; default True)
- canAddLanes (boolean; default True)
- hideCardDeleteIcon (boolean; default True)
- editLaneTitle (boolean; default True)"""
    @_explicitize_args
    def __init__(self, draggable=Component.UNDEFINED, laneDraggable=Component.UNDEFINED, cardDraggable=Component.UNDEFINED, collapsibleLanes=Component.UNDEFINED, editable=Component.UNDEFINED, canAddLanes=Component.UNDEFINED, hideCardDeleteIcon=Component.UNDEFINED, editLaneTitle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['draggable', 'laneDraggable', 'cardDraggable', 'collapsibleLanes', 'editable', 'canAddLanes', 'hideCardDeleteIcon', 'editLaneTitle']
        self._type = 'TrelloComponent'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['draggable', 'laneDraggable', 'cardDraggable', 'collapsibleLanes', 'editable', 'canAddLanes', 'hideCardDeleteIcon', 'editLaneTitle']
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
