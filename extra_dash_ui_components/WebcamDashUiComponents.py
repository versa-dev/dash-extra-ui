# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class WebcamDashUiComponents(Component):
    """A WebcamDashUiComponents component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; default ''): CSS class of video element
- audio (boolean; default True): enable/disable audio
- height (number; default 480): height of video element
- width (number; default 640): width of video element
- screenshotWidth (number; optional): width of screenshot
- screenshotFormat (string; default "image/webp"): format of screenshot
- screenshotQuality (number; default 0.92): quality of screenshot(0 to 1)
- screenshotInterval (number; optional): update interval of screenshot in milliseconds
- screenshot (string; optional): getScreenshot() returns a base64 encoded string of the current webcam
image. screenshot is the prop updated at fixed interval from calling
getScreenshot(). It is currently capped at 25 fps."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, audio=Component.UNDEFINED, height=Component.UNDEFINED, width=Component.UNDEFINED, screenshotWidth=Component.UNDEFINED, screenshotFormat=Component.UNDEFINED, screenshotQuality=Component.UNDEFINED, screenshotInterval=Component.UNDEFINED, screenshot=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'audio', 'height', 'width', 'screenshotWidth', 'screenshotFormat', 'screenshotQuality', 'screenshotInterval', 'screenshot']
        self._type = 'WebcamDashUiComponents'
        self._namespace = 'extra_dash_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'audio', 'height', 'width', 'screenshotWidth', 'screenshotFormat', 'screenshotQuality', 'screenshotInterval', 'screenshot']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(WebcamDashUiComponents, self).__init__(**args)
