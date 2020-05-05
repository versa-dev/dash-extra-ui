# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MicrophoneDashUiComponents(Component):
    """A MicrophoneDashUiComponents component.


Keyword arguments:
- id (string; optional)
- backgroundColor (string; default '#FF4081')
- strokeColor (string; default '#000000')
- className (string; default 'sound-wave')
- audioBitsPerSecond (number; default 128000)
- mimeType (string; default "audio/wav")
- height (number; default 100)
- record (boolean; default False)
- realData (string; optional)
- recordedBlob (dict; optional)
- visualSetting (string; default 'sinewave')
- width (number; default 640)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, backgroundColor=Component.UNDEFINED, strokeColor=Component.UNDEFINED, className=Component.UNDEFINED, audioBitsPerSecond=Component.UNDEFINED, mimeType=Component.UNDEFINED, height=Component.UNDEFINED, record=Component.UNDEFINED, realData=Component.UNDEFINED, recordedBlob=Component.UNDEFINED, visualSetting=Component.UNDEFINED, width=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'backgroundColor', 'strokeColor', 'className', 'audioBitsPerSecond', 'mimeType', 'height', 'record', 'realData', 'recordedBlob', 'visualSetting', 'width']
        self._type = 'MicrophoneDashUiComponents'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'backgroundColor', 'strokeColor', 'className', 'audioBitsPerSecond', 'mimeType', 'height', 'record', 'realData', 'recordedBlob', 'visualSetting', 'width']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MicrophoneDashUiComponents, self).__init__(**args)
