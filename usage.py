import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import dash_extra_ui_components as ex
from sample_data.org_data import sample1, sample2
from sample_data.list_component import cities, cars
from sample_data.carousel import cars_carousel

import json

app = dash.Dash(__name__)
data = [
    {
        "key": "0",
        "label": "Documents",
        "data": "Documents Folder",
                "icon": "pi pi-fw pi-inbox",
                "children": [{
                    "key": "0-0",
                    "label": "Work",
                    "data": "Work Folder",
                    "icon": "pi pi-fw pi-cog",
                    "children": [
                        {"key": "0-0-0", "label": "Expenses.doc",
                            "icon": "pi pi-fw pi-file", "data": "Expenses Document"},
                        {"key": "0-0-1", "label": "Resume.doc",
                            "icon": "pi pi-fw pi-file", "data": "Resume Document"}
                    ]
                },
                    {
                    "key": "0-1",
                    "label": "Home",
                    "data": "Home Folder",
                    "icon": "pi pi-fw pi-home",
                    "children": [{"key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month"}]
                }]
    },
    {
        "key": "1",
        "label": "Events",
        "data": "Events Folder",
                "icon": "pi pi-fw pi-calendar",
                "children": [
                    {"key": "1-0", "label": "Meeting",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting"},
                    {"key": "1-1", "label": "Product Launch",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch"},
                    {"key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review"}]
    },
    {
        "key": "2",
        "label": "Movies",
        "data": "Movies Folder",
                "icon": "pi pi-fw pi-star",
                "children": [{
                    "key": "2-0",
                    "icon": "pi pi-fw pi-star",
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie"}, {"key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie"}]
                },
                    {
                    "key": "2-1",
                    "label": "Robert De Niro",
                    "icon": "pi pi-fw pi-star",
                    "data": "De Niro Movies",
                    "children": [{"key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie"}, {"key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie"}]
                }]
    }
]

items = [
    {'label': 'Categories'},
    {'label': 'Sports'},
    {'label': 'Football'},
    {'label': 'Countries'},
    {'label': 'Spain'},
    {'label': 'F.C. Barcelona'},
    {'label': 'Squad'},
    {'label': 'Lionel Messi', 'url': 'https://en.wikipedia.org/wiki/Lionel_Messi'}
]
home = {'icon': 'tumb tumb-home',
        'url': 'https://github.com/nfrik/ex.git', 'label': 'Home'}

first = 0
rows = 10
first2 = 0
rows2 = 10
carData = []


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

TrelloData = {
    "lanes": [
        {
        "id": "PLANNED",
        "title": "Planned Tasks",
        "style": {
            "width": 280
        },
        "cards": [
            {
            "id": "Milk",
            "title": "Buy milk",
            "label": "15 mins",
            "description": "2 Gallons of milk at the Deli store"
            },
            {
            "id": "Plan2",
            "title": "Dispose Garbage",
            "label": "10 mins",
            "description": "Sort out recyclable and waste as needed"
            },
            {
            "id": "Plan3",
            "title": "Write Blog",
            "label": "30 mins",
            "description": "Can AI make memes?"
            },
            {
            "id": "Plan4",
            "title": "Pay Rent",
            "label": "5 mins",
            "description": "Transfer to bank account"
            }
        ]
        },
        {
        "id": "WIP",
        "title": "Work In Progress",
        "style": {
            "width": 280
        },
        "cards": [
            {
            "id": "Wip1",
            "title": "Clean House",
            "label": "30 mins",
            "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
            }
        ]
        },
        {
        "id": "BLOCKED",
        "title": "Blocked",
        "style": {
            "width": 280
        },
        "cards": []
        },
    ]
}

data = [
    {
        "key": "0",
        "label": "Documents",
        "data": "Documents Folder",
                "icon": "pi pi-fw pi-inbox",
                "children": [{
                    "key": "0-0",
                    "label": "Work",
                    "data": "Work Folder",
                    "icon": "pi pi-fw pi-cog",
                    "children": [
                        {"key": "0-0-0", "label": "Expenses.doc",
                            "icon": "pi pi-fw pi-file", "data": "Expenses Document"},
                        {"key": "0-0-1", "label": "Resume.doc",
                            "icon": "pi pi-fw pi-file", "data": "Resume Document"}
                    ]
                },
                    {
                    "key": "0-1",
                    "label": "Home",
                    "data": "Home Folder",
                    "icon": "pi pi-fw pi-home",
                    "children": [{"key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month"}]
                }]
    },
    {
        "key": "1",
        "label": "Events",
        "data": "Events Folder",
                "icon": "pi pi-fw pi-calendar",
                "children": [
                    {"key": "1-0", "label": "Meeting",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting"},
                    {"key": "1-1", "label": "Product Launch",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch"},
                    {"key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review"}]
    },
    {
        "key": "2",
        "label": "Movies",
        "data": "Movies Folder",
                "icon": "pi pi-fw pi-star",
                "children": [{
                    "key": "2-0",
                    "icon": "pi pi-fw pi-star",
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie"}, {"key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie"}]
                },
                    {
                    "key": "2-1",
                    "label": "Robert De Niro",
                    "icon": "pi pi-fw pi-star",
                    "data": "De Niro Movies",
                    "children": [{"key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie"}, {"key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie"}]
                }]
    }
]

items = [
    {'label': 'Categories'},
    {'label': 'Sports'},
    {'label': 'Football'},
    {'label': 'Countries'},
    {'label': 'Spain'},
    {'label': 'F.C. Barcelona'},
    {'label': 'Squad'},
    {'label': 'Lionel Messi', 'url': 'https://en.wikipedia.org/wiki/Lionel_Messi'}
]
home = {'icon': 'tumb tumb-home',
        'url': 'https://github.com/nfrik/extra_dash_ui_components.git', 'label': 'Home'}

first = 0
rows = 10
first2 = 0
rows2 = 10
carData = []

with open('car-large.json') as f:
    carData = json.load(f)

loadButton = html.Button(
    id='load-button',
    value='Load'
)

app.layout = html.Div(children=[
    ex.GeolocatorComponent(
        id='geolocator',
    ),
    ex.CaptchaDashUiComponents(
        id='captcha',
        sitekey="6LelnsIUAAAAAN9KlJBir69dCnzeaapRdUQdiS0G",
        # onResponse =
        responsetext="initialize"
    ),
    html.H4("tree preview"),
    ex.TreeDashUiComponents(
        id='tree',
        value=data
    ),

    html.H4('breadcrumbs Preview'),
    ex.BreadcrumbsDashUiComponents(
        id='breadcrumbs',
        model=items,
        home=home
    ),
    html.H4('Paginator Default Preview'),

    html.Div(id='output'),
    html.Div(id='tree-output'),
    html.Div(id='tree-output-select'),
    html.H4('Datascroller inline Preview'),
    html.Div([
        ex.DataScrollerDashUiComponents(
            value=carData['data'],
            rows=10,
            inline=True,
            scrollHeight="500px",
            header="Scroll Down to Load More"
        )
    ], className='content-section implementation'),
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
    html.Div(id='output2'),
    html.Div(id='output5'),
    html.H4('Paginator Default Preview'),
     ex.PaginatorDashUiComponents(
         id='paginator-default',
         first=first,
         rows=rows,
         totalRecords=120,
         rowsPerPageOptions=[10, 20, 30],
     ),
     html.H4('Paginator Custom Template Preview'),
     ex.PaginatorDashUiComponents(
         id='paginator-default1',
         first=first,
         rows=rows,
         totalRecords=120,
         rowsPerPageOptions=[10, 20, 30],
         template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
     ),
    
    html.Div(id='output1'),
    html.H4('Datascroller inline Preview  -------------------------------'),
    html.Div([
        ex.DataScrollerDashUiComponents(
            value=carData['data'],
            rows=10,
            inline=True,
            scrollHeight="500px",
            header="Scroll Down to Load More"
        )
    ], className='content-section implementation'),
    ex.TrelloComponent(
        id ="Trello1",
        value=TrelloData,
        draggable=True,
        laneDraggable=True,
        cardDraggable=True,
        collapsibleLanes=True,
        editable=True,
        canAddLanes=True,
        hideCardDeleteIcon=True,
        editLaneTitle=True,
    ),
    html.Div(id='out'),
    html.H4('PDF Viewer Preview'),
    ex.PDFViewerComponent(
            url='https://arxiv.org/pdf/quant-ph/0410100.pdf',
            navbarOnTop=True
        )
])

# @app.callback(Output('output', 'children'), [Input('paginator-default', 'first'),
#                                                 Input('paginator-default', 'rows')])
# def page_change(first, rows):
#     return "asdf"

@app.callback(Output('out','children'), [Input('Trello1','event'), 
                                         Input('Trello1','cardId'),
                                         Input('Trello1','landId'),
                                         Input('Trello1', 'changedData')])
def chageData(event, cardId, landId,changedData):
    print(event, cardId, landId,changedData)
    return '{}'.format(event)

@app.callback(Output('output', 'children'), [Input('tree', 'id'),
                                             Input(
                                                 'paginator-default', 'first'),
                                             Input('paginator-default', 'rows'), ])
def display_output(text, first, rows):
    # check value
    return 'First value is: {}, Rows value is {}'.format(first, rows)

# @app.callback(Output('output0', 'children'), [Input('input3', 'value')])
# def display_output0(selection):
#     return 'You have selected {}'.format(selection)


# @app.callback(Output('output1', 'children'), [Input('input4', 'value')])
# def display_output1(selection):
#     return 'Rating: {}'.format(selection)

@app.callback(Output('output5', 'children'), [Input('input5', 'clicked')])
def display_output5(selection):
    icon = f"Clicked on: {selection['action'] if selection else 'None'} icon"
    item = f"  of {selection['item'] if selection else 'None'} item"
    return icon + item

@app.callback(Output('output1', 'children'), [Input('paginator-default1', 'first'),
                                              Input('paginator-default1', 'rows'), 
                                              ])
def display_output1(first, rows):
    # check value
    return 'First value is: {}, Rows value is {}'.format(first, rows)


@app.callback(Output('tree-output', 'children'), [Input('tree', 'expandedKeys')])
def tree_output(exKey):
    return 'Tree expandedKeys: {}'.format(exKey)

# @app.callback(Output('Trello_Trello', 'children'),[Input('Trello1', 'onCardClick')])
# def onCardClick(onCardClick):
#     print("-----------", onCardClick)
    

@app.callback(Output('tree-output-select', 'children'), [Input('tree', 'selectionKeys')])
def tree_output1(selectionKeys):
    return 'Tree selectionKeys: {}'.format(selectionKeys)


if __name__ == '__main__':
    app.run_server(debug=True)
