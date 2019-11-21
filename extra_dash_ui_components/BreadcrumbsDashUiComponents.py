# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BreadcrumbsDashUiComponents(Component):
    """A BreadcrumbsDashUiComponents component.


Keyword arguments:
- id (string; optional)
- model (list; optional)
- home (boolean | number | string | dict | list; optional)
- style (dict; optional)
- className (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, model=Component.UNDEFINED, home=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'model', 'home', 'style', 'className']
        self._type = 'BreadcrumbsDashUiComponents'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'model', 'home', 'style', 'className']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BreadcrumbsDashUiComponents, self).__init__(**args)
