# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DataScrollerDashUiComponents(Component):
    """A DataScrollerDashUiComponents component.


Keyword arguments:
- id (string; optional)
- value (list; optional)
- rows (number; default 0)
- inline (boolean; default False)
- scrollHeight (boolean | number | string | dict | list; optional)
- loader (boolean | number | string | dict | list; optional)
- buffer (number; default 0.9)
- style (dict; optional)
- className (string; optional)
- header (boolean | number | string | dict | list; optional)
- footer (boolean | number | string | dict | list; optional)
- lazy (boolean; default False)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, rows=Component.UNDEFINED, inline=Component.UNDEFINED, scrollHeight=Component.UNDEFINED, loader=Component.UNDEFINED, buffer=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, onLazyLoad=Component.UNDEFINED, itemTemplate=Component.UNDEFINED, header=Component.UNDEFINED, footer=Component.UNDEFINED, lazy=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'rows', 'inline', 'scrollHeight', 'loader', 'buffer', 'style', 'className', 'header', 'footer', 'lazy']
        self._type = 'DataScrollerDashUiComponents'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'rows', 'inline', 'scrollHeight', 'loader', 'buffer', 'style', 'className', 'header', 'footer', 'lazy']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DataScrollerDashUiComponents, self).__init__(**args)
