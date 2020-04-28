# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MenubarSub(Component):
    """A MenubarSub component.


Keyword arguments:
- model (boolean | number | string | dict | list; optional)
- root (boolean; default False)
- className (string; optional)
- popup (boolean; default False)
- parentActive (boolean; default False)"""
    @_explicitize_args
    def __init__(self, model=Component.UNDEFINED, root=Component.UNDEFINED, className=Component.UNDEFINED, popup=Component.UNDEFINED, onLeafClick=Component.UNDEFINED, onKeyDown=Component.UNDEFINED, parentActive=Component.UNDEFINED, **kwargs):
        self._prop_names = ['model', 'root', 'className', 'popup', 'parentActive']
        self._type = 'MenubarSub'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['model', 'root', 'className', 'popup', 'parentActive']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MenubarSub, self).__init__(**args)
