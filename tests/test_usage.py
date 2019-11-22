from dash.testing.application_runners import import_app


# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_component(dash_duo):
    # Start a dash app contained as the variable `app` in `usage.py`
    app = import_app('usage')
    
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal('#output', 'Captcha Status initialize', 10)

    dash_duo.start_server(app)
    # dash_duo.find_element('#output').children = "Please Reload"
    
    dash_duo.wait_for_text_to_equal('#output', 'Captcha Status Pass', 60)
