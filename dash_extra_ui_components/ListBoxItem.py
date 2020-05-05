# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ListBoxItem(Component):
    """A ListBoxItem component.
Component to render individual items in a list box

Keyword arguments:
- option (boolean | number | string | dict | list; optional): Listbox option
- label (string; optional): Label to display
- selected (boolean; default False): Boolean. If the option has been selected or not
- tabIndex (string; optional): Index of the option"""
    @_explicitize_args
    def __init__(self, option=Component.UNDEFINED, label=Component.UNDEFINED, selected=Component.UNDEFINED, tabIndex=Component.UNDEFINED, onClick=Component.UNDEFINED, onTouchEnd=Component.UNDEFINED, template=Component.UNDEFINED, **kwargs):
        self._prop_names = ['option', 'label', 'selected', 'tabIndex']
        self._type = 'ListBoxItem'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['option', 'label', 'selected', 'tabIndex']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ListBoxItem, self).__init__(**args)
