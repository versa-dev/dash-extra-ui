# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PageLinks(Component):
    """A PageLinks component.


Keyword arguments:
- id (string; optional)
- value (list; optional)
- page (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, page=Component.UNDEFINED, onClick=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'page']
        self._type = 'PageLinks'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'page']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PageLinks, self).__init__(**args)
