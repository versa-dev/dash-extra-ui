# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OrganizationChart(Component):
    """An OrganizationChart component.
Organization Chart

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (boolean | number | string | dict | list; optional): An array of nested TreeNodes
- style (dict; optional): Inline style of the element.
- className (string; optional): Css classes
- selectionMode (string; optional): Defines the selection mode, valid values "single" and "multiple".
- selection (boolean | number | string | dict | list; optional): A single treenode instance or an array to refer to the selections.
- nodeTemplate (boolean | number | string | dict | list; optional): Template function that gets a node as a parameter and returns a content."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, selectionMode=Component.UNDEFINED, selection=Component.UNDEFINED, nodeTemplate=Component.UNDEFINED, onSelectionChange=Component.UNDEFINED, onNodeSelect=Component.UNDEFINED, onNodeUnselect=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'style', 'className', 'selectionMode', 'selection', 'nodeTemplate']
        self._type = 'OrganizationChart'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'style', 'className', 'selectionMode', 'selection', 'nodeTemplate']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(OrganizationChart, self).__init__(**args)
