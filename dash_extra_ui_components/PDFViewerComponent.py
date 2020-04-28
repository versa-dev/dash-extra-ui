# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PDFViewerComponent(Component):
    """A PDFViewerComponent component.
PDF Viewer component with controls
Page navigation
Zoom
Rotation

Keyword arguments:
- url (string; default ''): The url of the PDF document
- base64 (string; default ''): PDF file encoded in base64
- page (number; default 1): The page that will be shown first on document load
- scale (number; default 1): Scale factor relative to the component parent element
- scaleStep (number; default .5): Scale factor to be increased or decreased on Zoom-in or zoom-out
- maxScale (number; default 3): Maximun scale factor for zoom-in
- minScale (number; default .5): Minimum scale factor for zoom-in
- css (string; default ''): CSS classes that will be setted for the component wrapper
- navbarOnTop (boolean; default False): By default navbar is displayed on bottom, but can be placed on top by passing this prop
- hideZoom (boolean; default False): By default zoom buttons are displayed, but can be hidden by passing this prop
- hideRotation (boolean; default False): By default rotation buttons are displayed, but can be hidden by passing this prop
- protectContent (boolean; default False): By default Right Click and Context Menu are enabled, but can be disabled by passing this prop"""
    @_explicitize_args
    def __init__(self, url=Component.UNDEFINED, base64=Component.UNDEFINED, page=Component.UNDEFINED, scale=Component.UNDEFINED, scaleStep=Component.UNDEFINED, maxScale=Component.UNDEFINED, minScale=Component.UNDEFINED, css=Component.UNDEFINED, navbarOnTop=Component.UNDEFINED, hideZoom=Component.UNDEFINED, hideRotation=Component.UNDEFINED, protectContent=Component.UNDEFINED, **kwargs):
        self._prop_names = ['url', 'base64', 'page', 'scale', 'scaleStep', 'maxScale', 'minScale', 'css', 'navbarOnTop', 'hideZoom', 'hideRotation', 'protectContent']
        self._type = 'PDFViewerComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['url', 'base64', 'page', 'scale', 'scaleStep', 'maxScale', 'minScale', 'css', 'navbarOnTop', 'hideZoom', 'hideRotation', 'protectContent']
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
