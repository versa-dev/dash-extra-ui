# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class InputText(Component):
    """An InputText component.
InputText Bar.
displays on top of the search box component if filter is set to true

Keyword arguments:
- keyfilter (boolean | number | string | dict | list; optional): Filter value
- validateOnly (boolean; default False): Boolean
- tooltip (string; optional): Tooltip text
- tooltipOptions (dict; optional): Tooltip options. An object"""
    @_explicitize_args
    def __init__(self, onInput=Component.UNDEFINED, onKeyPress=Component.UNDEFINED, keyfilter=Component.UNDEFINED, validateOnly=Component.UNDEFINED, tooltip=Component.UNDEFINED, tooltipOptions=Component.UNDEFINED, **kwargs):
        self._prop_names = ['keyfilter', 'validateOnly', 'tooltip', 'tooltipOptions']
        self._type = 'InputText'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['keyfilter', 'validateOnly', 'tooltip', 'tooltipOptions']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(InputText, self).__init__(**args)
