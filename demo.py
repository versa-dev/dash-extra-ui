import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import dash_extra_ui_components as ex
from sample_data.org_data import sample1, sample2
from sample_data.list_component import cities, cars
from sample_data.carousel import cars_carousel

import json

app = dash.Dash(__name__)
carData = []

with open('car-large.json') as f:
    carData = json.load(f)

app.layout = html.Div(children=[
    html.H4('Datascroller inline Preview'),
    ex.DataScrollerDashUiComponents(
            id='datascroller',
            value=carData['data'],
            rows=10,
            inline=True,
            scrollHeight="300px",
            header="Scroll Down to Load More"
        ),
    html.Div(id='datascroller-output'),
    html.H4('Carousel Preview'),
    ex.CarouselComponent(
        id='carousel',
        value=cars_carousel,
        numVisible=4,
        numScroll=1,
        className="custom-carousel",
        header='customHeader',
        autoplayInterval=3000
    ),
    html.Div(id='carousal-output'),
    html.H4('Rating Preview'),
    ex.RatingComponent(
        id='rating',
        stars=5, #required default 5
        value=1, #optional, number. default null
        readonly=False, #optional default False
        cancel=True, # optional. Whether or not to display cancel icon. default false
    ),
    html.Div(id='rating-output'),
    html.H4('Listbox Preview'),
    html.Div([
        ex.ListBoxComponent(
            id='list',
            filter=True, #optional default False
            options=cities, #required
            style={'width': '100%'}, #optional
            listStyle={'maxHeight': '100px'}, #optional
            listContainerStyle={'maxHeight': '300px'}, #optional
            multiple=True, #optional default False
            disabled=False, #optional default False
        ),
    ],id='list-box'),
    html.Div(id='list-output'),
    html.Div(className='margin-div', style={"margin-bottom": "30px"})
    
])

@app.callback(Output('datascroller-output', 'children'), [Input('datascroller', 'rows')])
def tree_output(exKey):
    return 'scroller rows : {}'.format(exKey)

@app.callback(Output('carousal-output', 'children'), [Input('carousel', 'clicked')])
def carousalOutput(exKey):
    return 'selecteds button : {}'.format(exKey)

@app.callback(Output('rating-output', 'children'), [Input('rating', 'value')])
def ratingOutput(exKey):
    return 'ratign value : {}'.format(exKey)

@app.callback(Output('list-output', 'children'), [Input('list', 'value')])
def ListOutput(exKey):
    return 'List value : {}'.format(exKey)

if __name__ == '__main__':
    app.run_server(debug=True)