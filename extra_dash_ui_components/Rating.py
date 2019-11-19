# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Rating(Component):
    """A Rating component.
Rating component
Displays rating

Keyword arguments:
- id (string; optional): Unique identifier of the element.
- value (number; optional): Value of the rating.
- disabled (boolean; default False): When present, it specifies that the element should be disabled.
- readonly (boolean; default False): When present, changing the value is not possible.
- stars (number; default 5): Number of stars.
- cancel (boolean; default True): When specified a cancel icon is displayed to allow removing the value.
- style (dict; optional): Inline style of the component.
- className (string; optional): ClassName of the component.
- tooltip (string; optional): Content of the tooltip.
- tooltipOptions (dict; optional): Configuration of the tooltip, refer to the tooltip documentation for more information."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, disabled=Component.UNDEFINED, readonly=Component.UNDEFINED, stars=Component.UNDEFINED, cancel=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, tooltip=Component.UNDEFINED, tooltipOptions=Component.UNDEFINED, onChange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'disabled', 'readonly', 'stars', 'cancel', 'style', 'className', 'tooltip', 'tooltipOptions']
        self._type = 'Rating'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'disabled', 'readonly', 'stars', 'cancel', 'style', 'className', 'tooltip', 'tooltipOptions']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Rating, self).__init__(**args)
