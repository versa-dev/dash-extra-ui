# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Geolocator(Component):
    """A Geolocator component.


Keyword arguments:
- positionOptions (dict; default {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
})
- watchPosition (boolean; default True)
- userDecisionTimeout (number; optional)
- suppressLocationOnMount (boolean; default False)
- geolocationProvider (dict; default navigator.geolocation)
- isOptimisticGeolocationEnabled (boolean; default True)
- errorMsg (dict; default {
  isGeolocationAvailable: "Your browser does not support Geolocation",
  isGeolocationEnabled: "Geolocation is not enabled"
})"""
    @_explicitize_args
    def __init__(self, positionOptions=Component.UNDEFINED, watchPosition=Component.UNDEFINED, userDecisionTimeout=Component.UNDEFINED, suppressLocationOnMount=Component.UNDEFINED, geolocationProvider=Component.UNDEFINED, isOptimisticGeolocationEnabled=Component.UNDEFINED, onSuccess=Component.UNDEFINED, onError=Component.UNDEFINED, errorMsg=Component.UNDEFINED, **kwargs):
        self._prop_names = ['positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'geolocationProvider', 'isOptimisticGeolocationEnabled', 'errorMsg']
        self._type = 'Geolocator'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'geolocationProvider', 'isOptimisticGeolocationEnabled', 'errorMsg']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Geolocator, self).__init__(**args)
