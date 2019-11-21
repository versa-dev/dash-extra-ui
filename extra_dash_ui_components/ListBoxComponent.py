# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ListBoxComponent(Component):
    """A ListBoxComponent component.
Wrapper component for the listbox.Adds custom template and styling

Keyword arguments:
- id (string; optional): Id: Unique identifier of the element.
- value (boolean | number | string | dict | list; optional): Selected value to display.
- options (list; optional): An array of objects to display as the available options.
- optionLabel (string; optional): Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.
- style (dict; optional): Inline style of the element.
- listStyle (dict; optional): Inline style of inner list element.
- className (string; optional): Style class of the element.
- dataKey (string; optional): A property to uniquely match the value in options for better performance.
- multiple (boolean; default False): When specified, allows selecting multiple values.
- metaKeySelection (boolean; optional): Defines how multiple items can be selected,
when true metaKey needs to be pressed to select or
unselect an item and when set to false selection of each item can be toggled individually.
On touch enabled devices, metaKeySelection is turned off automatically.
- filter (boolean; default False): When specified, displays a filter input at header.
- tabIndex (string; optional): Index of the element in tabbing order.
- tooltip (string; optional): Content of the tooltip.
- tooltipOptions (dict; optional): Configuration of the tooltip, refer to the tooltip documentation for more information.
- disabled (boolean; default False): When specified, disables the component.
- listContainerStyle (dict; optional): Style class of the container."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, options=Component.UNDEFINED, optionLabel=Component.UNDEFINED, itemTemplate=Component.UNDEFINED, style=Component.UNDEFINED, listStyle=Component.UNDEFINED, className=Component.UNDEFINED, dataKey=Component.UNDEFINED, multiple=Component.UNDEFINED, metaKeySelection=Component.UNDEFINED, filter=Component.UNDEFINED, tabIndex=Component.UNDEFINED, tooltip=Component.UNDEFINED, tooltipOptions=Component.UNDEFINED, onChange=Component.UNDEFINED, disabled=Component.UNDEFINED, listContainerStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'options', 'optionLabel', 'style', 'listStyle', 'className', 'dataKey', 'multiple', 'metaKeySelection', 'filter', 'tabIndex', 'tooltip', 'tooltipOptions', 'disabled', 'listContainerStyle']
        self._type = 'ListBoxComponent'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'options', 'optionLabel', 'style', 'listStyle', 'className', 'dataKey', 'multiple', 'metaKeySelection', 'filter', 'tabIndex', 'tooltip', 'tooltipOptions', 'disabled', 'listContainerStyle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ListBoxComponent, self).__init__(**args)
