# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MenuBar(Component):
    """A MenuBar component.
MenuBar

Keyword arguments:
- id (string; optional): Unique identifier of the element.
- model (list; optional): An array of menuitems.
- style (dict; optional): Inline style of the component.
- className (string; optional): Style class of the component."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, model=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'model', 'style', 'className']
        self._type = 'MenuBar'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'model', 'style', 'className']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MenuBar, self).__init__(**args)
