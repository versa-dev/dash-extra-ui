import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import extra_dash_ui_components as ex


app = dash.Dash(__name__)

app.layout = html.Div(children=[
    html.H4('Coming soon'),
    html.Div(id='output0'),

]
)

if __name__ == '__main__':
    app.run_server(debug=True)
