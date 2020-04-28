# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GeolocatorComponent(Component):
    """A GeolocatorComponent component.


Keyword arguments:
- id (string; optional)
- positionOptions (dict; default {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
})
- watchPosition (boolean; default True)
- userDecisionTimeout (number; optional)
- suppressLocationOnMount (boolean; default False)
- isOptimisticGeolocationEnabled (boolean; default True)
- errorMsg (dict; default {
  isGeolocationAvailable: "Your browser does not support Geolocation",
  isGeolocationEnabled: "Geolocation is not enabled"
})
- coords (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, positionOptions=Component.UNDEFINED, watchPosition=Component.UNDEFINED, userDecisionTimeout=Component.UNDEFINED, suppressLocationOnMount=Component.UNDEFINED, isOptimisticGeolocationEnabled=Component.UNDEFINED, errorMsg=Component.UNDEFINED, onSuccess=Component.UNDEFINED, onError=Component.UNDEFINED, coords=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'isOptimisticGeolocationEnabled', 'errorMsg', 'coords']
        self._type = 'GeolocatorComponent'
        self._namespace = 'dash_extra_ui_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'positionOptions', 'watchPosition', 'userDecisionTimeout', 'suppressLocationOnMount', 'isOptimisticGeolocationEnabled', 'errorMsg', 'coords']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GeolocatorComponent, self).__init__(**args)
