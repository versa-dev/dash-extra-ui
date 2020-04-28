# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.
Component to render a button element

Keyword arguments:
- label (string; optional): Text of the button.
- icon (string; optional): Name of the icon.
- iconPos (string; default 'left'): Position of the icon, valid values are "left" and "right".
- tooltip (string; optional): Content of the tooltip.
- tooltipOptions (dict; optional): Configuration of the tooltip, refer to the tooltip documentation for more information."""
    @_explicitize_args
    def __init__(self, label=Component.UNDEFINED, icon=Component.UNDEFINED, iconPos=Component.UNDEFINED, tooltip=Component.UNDEFINED, tooltipOptions=Component.UNDEFINED, **kwargs):
        self._prop_names = ['label', 'icon', 'iconPos', 'tooltip', 'tooltipOptions']
        self._type = 'Button'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['label', 'icon', 'iconPos', 'tooltip', 'tooltipOptions']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Button, self).__init__(**args)
