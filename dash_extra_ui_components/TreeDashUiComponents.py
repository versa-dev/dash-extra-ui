# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TreeDashUiComponents(Component):
    """A TreeDashUiComponents component.


Keyword arguments:
- id (string; optional)
- value (boolean | number | string | dict | list; optional)
- disabled (boolean; default False)
- selectionMode (string; optional)
- selectionKeys (boolean | number | string | dict | list; optional)
- contextMenuSelectionKey (boolean | number | string | dict | list; optional)
- expandedKeys (dict; optional)
- style (dict; optional)
- className (string; optional)
- contentStyle (dict; optional)
- contentClassName (string; optional)
- metaKeySelection (boolean; default True)
- propagateSelectionUp (boolean; default True)
- propagateSelectionDown (boolean; default True)
- loading (boolean; default False)
- loadingIcon (string; default 'pi pi-spinner')
- dragdropScope (string; optional)
- filter (boolean; default False)
- filterBy (boolean | number | string | dict | list; default 'label')
- filterMode (string; default 'lenient')
- filterPlaceholder (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, disabled=Component.UNDEFINED, selectionMode=Component.UNDEFINED, selectionKeys=Component.UNDEFINED, onSelectionChange=Component.UNDEFINED, contextMenuSelectionKey=Component.UNDEFINED, onContextMenuSelectionChange=Component.UNDEFINED, expandedKeys=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, contentStyle=Component.UNDEFINED, contentClassName=Component.UNDEFINED, metaKeySelection=Component.UNDEFINED, propagateSelectionUp=Component.UNDEFINED, propagateSelectionDown=Component.UNDEFINED, loading=Component.UNDEFINED, loadingIcon=Component.UNDEFINED, dragdropScope=Component.UNDEFINED, filter=Component.UNDEFINED, filterBy=Component.UNDEFINED, filterMode=Component.UNDEFINED, filterPlaceholder=Component.UNDEFINED, nodeTemplate=Component.UNDEFINED, onSelect=Component.UNDEFINED, onUnselect=Component.UNDEFINED, onExpand=Component.UNDEFINED, onCollapse=Component.UNDEFINED, onToggle=Component.UNDEFINED, onDragDrop=Component.UNDEFINED, onContextMenu=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'disabled', 'selectionMode', 'selectionKeys', 'contextMenuSelectionKey', 'expandedKeys', 'style', 'className', 'contentStyle', 'contentClassName', 'metaKeySelection', 'propagateSelectionUp', 'propagateSelectionDown', 'loading', 'loadingIcon', 'dragdropScope', 'filter', 'filterBy', 'filterMode', 'filterPlaceholder']
        self._type = 'TreeDashUiComponents'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'disabled', 'selectionMode', 'selectionKeys', 'contextMenuSelectionKey', 'expandedKeys', 'style', 'className', 'contentStyle', 'contentClassName', 'metaKeySelection', 'propagateSelectionUp', 'propagateSelectionDown', 'loading', 'loadingIcon', 'dragdropScope', 'filter', 'filterBy', 'filterMode', 'filterPlaceholder']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TreeDashUiComponents, self).__init__(**args)
