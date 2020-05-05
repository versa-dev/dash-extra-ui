# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PaginatorDashUiComponents(Component):
    """A PaginatorDashUiComponents component.


Keyword arguments:
- id (string; optional)
- totalRecords (number; default 0)
- rows (number; default 0)
- first (number; default 0)
- pageLinkSize (number; default 5)
- rowsPerPageOptions (list; optional)
- style (dict; optional)
- className (string; optional)
- template (string; default 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink')
- leftContent (boolean | number | string | dict | list; optional)
- rightContent (boolean | number | string | dict | list; optional)
- currentPageReportTemplate (boolean | number | string | dict | list; default '({currentPage} of {totalPages})')
- alwaysShow (boolean; default True)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, totalRecords=Component.UNDEFINED, rows=Component.UNDEFINED, first=Component.UNDEFINED, pageLinkSize=Component.UNDEFINED, rowsPerPageOptions=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, template=Component.UNDEFINED, onPageChange=Component.UNDEFINED, leftContent=Component.UNDEFINED, rightContent=Component.UNDEFINED, currentPageReportTemplate=Component.UNDEFINED, alwaysShow=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'totalRecords', 'rows', 'first', 'pageLinkSize', 'rowsPerPageOptions', 'style', 'className', 'template', 'leftContent', 'rightContent', 'currentPageReportTemplate', 'alwaysShow']
        self._type = 'PaginatorDashUiComponents'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'totalRecords', 'rows', 'first', 'pageLinkSize', 'rowsPerPageOptions', 'style', 'className', 'template', 'leftContent', 'rightContent', 'currentPageReportTemplate', 'alwaysShow']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PaginatorDashUiComponents, self).__init__(**args)
