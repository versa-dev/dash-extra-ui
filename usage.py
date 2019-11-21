import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import extra_dash_ui_components as ex
from sample_data.org_data import sample1, sample2
from sample_data.list_component import cities, cars

app = dash.Dash(__name__)


app.layout = html.Div(children=[
    # ex.OrganizationChartComponent(
    #     id='input2', # a unique identifier
    #     value=sample2, # required
    #     selectionMode='single', # 'single' or 'multiple' optional
    #     # selection={} # object {} or array []
    #     # className='' # string - css class
    #     # style={} # inline style object

    # ),
    ex.ListBoxComponent(
        id='input3',
        # value=[], #optional default null
        filter=True, #optional default False
        options=cities, #required
        style={'width': '15em'}, #optional
        listStyle={'maxHeight': '100px'}, #optional
        listContainerStyle={'maxHeight': '300px'}, #optional
        multiple=True, #optional default False
        disabled=False, #optional default False
        # tooltip='test', #optional
        # tooltipOptions= {}, #optional
        # className='', # css style

    ),
    html.Div(id='output0'),
    # html.Div(id='output1'),
])


@app.callback(Output('output0', 'children'), [Input('input3', 'value')])
def display_output0(selection):
    return 'You have selected {}'.format(selection)


# @app.callback(Output('output1', 'children'), [Input('input2', 'selectionMode')])
# def display_output1(selection):
#     return 'Selection mode: {}'.format(selection)


if __name__ == '__main__':
    app.run_server(debug=True)
