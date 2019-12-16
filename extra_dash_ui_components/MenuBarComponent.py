# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MenuBarComponent(Component):
    """A MenuBarComponent component.
MenuBarComponent

Keyword arguments:
- id (string; optional): Unique identifier of the element.
- model (list; optional): An array of menuitems.
- style (dict; optional): Inline style of the component.
- inputPlaceholder (string; default 'Search'): Input placeholder
- btnicon (string; default 'pi pi-power-off'): Button Icon
- btnlabel (string; default 'Logout'): Button label
- className (string; optional): Style class of the component.
- menubarItem (dict; optional): Current Menu object
- submenubarItem (dict; optional): Currently selected item
- inputTextBox (boolean; default True): Show or hide input text box
- button (boolean; default True): Show or hide button
- searchQuery (string; optional)
- menubarInput (string; optional)
- btnClick (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, model=Component.UNDEFINED, style=Component.UNDEFINED, inputPlaceholder=Component.UNDEFINED, btnicon=Component.UNDEFINED, btnlabel=Component.UNDEFINED, className=Component.UNDEFINED, menubarItem=Component.UNDEFINED, submenubarItem=Component.UNDEFINED, inputTextBox=Component.UNDEFINED, button=Component.UNDEFINED, searchQuery=Component.UNDEFINED, menubarInput=Component.UNDEFINED, btnClick=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'model', 'style', 'inputPlaceholder', 'btnicon', 'btnlabel', 'className', 'menubarItem', 'submenubarItem', 'inputTextBox', 'button', 'searchQuery', 'menubarInput', 'btnClick']
        self._type = 'MenuBarComponent'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'model', 'style', 'inputPlaceholder', 'btnicon', 'btnlabel', 'className', 'menubarItem', 'submenubarItem', 'inputTextBox', 'button', 'searchQuery', 'menubarInput', 'btnClick']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MenuBarComponent, self).__init__(**args)
