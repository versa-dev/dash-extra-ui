# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LastPageLink(Component):
    """A LastPageLink component.


Keyword arguments:
- id (string; optional)
- disabled (boolean; default False)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, disabled=Component.UNDEFINED, onClick=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'disabled']
        self._type = 'LastPageLink'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'disabled']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LastPageLink, self).__init__(**args)
