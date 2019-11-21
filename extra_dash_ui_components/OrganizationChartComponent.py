# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OrganizationChartComponent(Component):
    """An OrganizationChartComponent component.
OrganizationChartComponent is a component to nicely display a data tree.
It takes a property, `value`, which is the actual data object
creates a hierachy tree which is then rendered.
Other inputs are `selectionMode`, `selection`, `className` and `style`
which are optional. Defaults will be applied unless provided by the user.

Keyword arguments:
- id (string; default `${Math.random()}`): The ID used to identify this component in Dash callbacks.
- value (list of dicts; optional): An array of nested TreeNodes. A valid treenode should contain at least a `label` property.
Please check on sample data at /sample_data/org_data
- selectionMode (a value equal to: 'single', 'multiple'; optional): Defines the selection mode, valid values "single" or "multiple".
- selection (dict | list of dicts; optional): A single treenode instance or an array to refer to the selections.
- className (string; optional): Style class of the component.
- style (dict; optional): Inline style of the component."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, selectionMode=Component.UNDEFINED, selection=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'selectionMode', 'selection', 'className', 'style']
        self._type = 'OrganizationChartComponent'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'selectionMode', 'selection', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(OrganizationChartComponent, self).__init__(**args)
