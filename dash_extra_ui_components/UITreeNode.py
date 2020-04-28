# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class UITreeNode(Component):
    """An UITreeNode component.


Keyword arguments:
- node (dict; optional)
- index (number; optional)
- last (boolean; optional)
- parent (dict; optional)
- path (string; optional)
- disabled (boolean; default False)
- selectionMode (string; optional)
- selectionKeys (boolean | number | string | dict | list; optional)
- contextMenuSelectionKey (boolean | number | string | dict | list; optional)
- metaKeySelection (boolean; default True)
- expandedKeys (dict; optional)
- propagateSelectionUp (boolean; default True)
- propagateSelectionDown (boolean; default True)
- dragdropScope (string; optional)
- ariaLabel (string; optional)
- ariaLabelledBy (string; optional)"""
    @_explicitize_args
    def __init__(self, node=Component.UNDEFINED, index=Component.UNDEFINED, last=Component.UNDEFINED, parent=Component.UNDEFINED, path=Component.UNDEFINED, disabled=Component.UNDEFINED, selectionMode=Component.UNDEFINED, selectionKeys=Component.UNDEFINED, contextMenuSelectionKey=Component.UNDEFINED, metaKeySelection=Component.UNDEFINED, expandedKeys=Component.UNDEFINED, propagateSelectionUp=Component.UNDEFINED, propagateSelectionDown=Component.UNDEFINED, dragdropScope=Component.UNDEFINED, ariaLabel=Component.UNDEFINED, ariaLabelledBy=Component.UNDEFINED, nodeTemplate=Component.UNDEFINED, isNodeLeaf=Component.UNDEFINED, onSelect=Component.UNDEFINED, onUnselect=Component.UNDEFINED, onExpand=Component.UNDEFINED, onCollapse=Component.UNDEFINED, onToggle=Component.UNDEFINED, onSelectionChange=Component.UNDEFINED, onContextMenuSelectionChange=Component.UNDEFINED, onPropagateUp=Component.UNDEFINED, onDragStart=Component.UNDEFINED, onDragEnd=Component.UNDEFINED, onDrop=Component.UNDEFINED, onDropPoint=Component.UNDEFINED, onContextMenu=Component.UNDEFINED, **kwargs):
        self._prop_names = ['node', 'index', 'last', 'parent', 'path', 'disabled', 'selectionMode', 'selectionKeys', 'contextMenuSelectionKey', 'metaKeySelection', 'expandedKeys', 'propagateSelectionUp', 'propagateSelectionDown', 'dragdropScope', 'ariaLabel', 'ariaLabelledBy']
        self._type = 'UITreeNode'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['node', 'index', 'last', 'parent', 'path', 'disabled', 'selectionMode', 'selectionKeys', 'contextMenuSelectionKey', 'metaKeySelection', 'expandedKeys', 'propagateSelectionUp', 'propagateSelectionDown', 'dragdropScope', 'ariaLabel', 'ariaLabelledBy']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(UITreeNode, self).__init__(**args)
