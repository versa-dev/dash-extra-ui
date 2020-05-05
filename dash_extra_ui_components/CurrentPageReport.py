# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CurrentPageReport(Component):
    """A CurrentPageReport component.


Keyword arguments:
- id (string; optional)
- pageCount (number; optional)
- page (number; optional)
- template (string; default '({currentPage} of {totalPages})')"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, pageCount=Component.UNDEFINED, page=Component.UNDEFINED, template=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'pageCount', 'page', 'template']
        self._type = 'CurrentPageReport'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'pageCount', 'page', 'template']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CurrentPageReport, self).__init__(**args)
