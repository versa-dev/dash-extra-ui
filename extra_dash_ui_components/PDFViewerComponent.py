# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PDFViewerComponent(Component):
    """A PDFViewerComponent component.
PDF Viewer component with controls
Page navigation
Zoom
Rotation

Keyword arguments:
- url (string; default undefined): The url of the PDF document
- date64 (string; default undefined): PDF file encoded in base64"""
    @_explicitize_args
    def __init__(self, url=Component.UNDEFINED, date64=Component.UNDEFINED, **kwargs):
        self._prop_names = ['url', 'date64']
        self._type = 'PDFViewerComponent'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['url', 'date64']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PDFViewerComponent, self).__init__(**args)
