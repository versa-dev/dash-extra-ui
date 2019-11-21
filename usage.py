import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import extra_dash_ui_components as ex
from sample_data.org_data import sample1, sample2
from sample_data.list_component import cities, cars
from sample_data.carousel import cars_carousel

app = dash.Dash(__name__)

responsiveOptions = [
    {
        'breakpoint': '1024px',
        'numVisible': 3,
        'numScroll': 3,
    },
    {
        'breakpoint': '768px',
        'numVisible': 2,
        'numScroll': 2,
    },
    {
        'breakpoint': '560px',
        'numVisible': 1,
        'numScroll': 1,
    },
]


app.layout = html.Div(children=[
    # ex.OrganizationChartComponent(
    #     id='input2', # a unique identifier
    #     value=sample2, # required
    #     selectionMode='single', # 'single' or 'multiple' optional
    #     # selection={} # object {} or array []
    #     # className='' # string - css class
    #     # style={} # inline style object

    # ),
    # ex.ListBoxComponent(
    #     id='input3',
    #     # value=[], #optional default null
    #     filter=True, #optional default False
    #     options=cities, #required
    #     style={'width': '15em'}, #optional
    #     listStyle={'maxHeight': '100px'}, #optional
    #     listContainerStyle={'maxHeight': '300px'}, #optional
    #     multiple=True, #optional default False
    #     disabled=False, #optional default False
    #     # tooltip='test', #optional
    #     # tooltipOptions= {}, #optional
    #     # className='', # css style

    # ),
    # ex.RatingComponent(
    #     id='input4',
    #     stars=5, #required default 5
    #     value=1, #optional, number. default null
    #     # disabled=True, #optional default False
    #     readonly=False, #optional default False
    #     cancel=True, # optional. Whether or not to display cancel icon. default false
    #     # style={}, #optional Inline style
    #     # tooltip='test', #optional
    #     # tooltipOptions= {}, #optional
    #     # className='', # css style

    # ),
    ex.CarouselComponent(
        id='input5',
        value=cars_carousel,
        numVisible=4,
        numScroll=1,
        className="custom-carousel",
        header='customHeader',
        # page={this.state.page},
        # setProps={this.setProps},
        # circular=True,
        autoplayInterval=3000
    ),
    html.Div(id='output0'),
    html.Div(id='output1'),
])


# @app.callback(Output('output0', 'children'), [Input('input3', 'value')])
# def display_output0(selection):
#     return 'You have selected {}'.format(selection)


# @app.callback(Output('output1', 'children'), [Input('input4', 'value')])
# def display_output1(selection):
#     return 'Rating: {}'.format(selection)

@app.callback(Output('output1', 'children'), [Input('input5', 'clicked')])
def display_output1(selection):
    icon = f"Clicked on: {selection['action'] if selection else 'None'} icon"
    item = f"  of {selection['item'] if selection else 'None'} item"
    return icon + item


if __name__ == '__main__':
    app.run_server(debug=True)
