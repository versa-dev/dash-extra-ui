# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CaptchaDashUiComponents(Component):
    """A CaptchaDashUiComponents component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- sitekey (string; optional): The Sitekey is google recaptcha sitekey
- theme (string; default "light")
- captchaType (string; default "image")
- size (string; default "normal")
- index (number; default 0)
- language (string; default "en")
- responsetext (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, sitekey=Component.UNDEFINED, theme=Component.UNDEFINED, captchaType=Component.UNDEFINED, size=Component.UNDEFINED, index=Component.UNDEFINED, language=Component.UNDEFINED, onResponse=Component.UNDEFINED, onExpire=Component.UNDEFINED, responsetext=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'sitekey', 'theme', 'captchaType', 'size', 'index', 'language', 'responsetext']
        self._type = 'CaptchaDashUiComponents'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'sitekey', 'theme', 'captchaType', 'size', 'index', 'language', 'responsetext']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CaptchaDashUiComponents, self).__init__(**args)
