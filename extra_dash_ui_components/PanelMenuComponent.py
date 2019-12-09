# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PanelMenuComponent(Component):
    """A PanelMenuComponent component.
PanelMenuComponent

Keyword arguments:
- id (string; optional): Unique identifier of the element.
- model (list; optional): An array of menuitems.
- style (dict; default {width: '300px'}): Inline style of the component.
- className (string; optional): Style class of the component.
- menuitem (dict; optional): Current menuitem
- submenu (dict; optional): Selected submenu item"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, model=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, menuitem=Component.UNDEFINED, submenu=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'model', 'style', 'className', 'menuitem', 'submenu']
        self._type = 'PanelMenuComponent'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'model', 'style', 'className', 'menuitem', 'submenu']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PanelMenuComponent, self).__init__(**args)
