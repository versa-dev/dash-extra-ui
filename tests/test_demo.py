from dash.testing.application_runners import import_app


# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_demo_component(dash_duo):
    # Start a dash app contained as the variable `app` in `usage.py`
    app = import_app('demo')
    
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal('#list-output', "List value : ['RM']", 60)
