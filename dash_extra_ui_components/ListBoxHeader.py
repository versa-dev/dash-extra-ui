# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ListBoxHeader(Component):
    """A ListBoxHeader component.
Header component of the listbox

Keyword arguments:
- filter (string; optional): When specified, displays a filter input at header.
- disabled (boolean; default False): When specified, disables the component."""
    @_explicitize_args
    def __init__(self, filter=Component.UNDEFINED, disabled=Component.UNDEFINED, onFilter=Component.UNDEFINED, **kwargs):
        self._prop_names = ['filter', 'disabled']
        self._type = 'ListBoxHeader'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['filter', 'disabled']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ListBoxHeader, self).__init__(**args)
