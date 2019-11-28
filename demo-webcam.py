import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import extra_dash_ui_components as ex

app = dash.Dash(__name__)

app.layout = html.Div(children=[
    html.H4("WebCam Preview1"),
    ex.WebcamDashUiComponents(
        id="web-cam",
        audio=False,
        screenshotFormat="image/jpeg",
        width=500,
        height=300,
        screenshotInterval=500
    ),
    html.Div(id='webcam-output'),
    html.H4("Callback value is base64 image"),
    html.Img(
        id="receive-img",
        src="",
        width=500,
        height=300
    ),
    html.H4("Microphone Preview"),
    ex.MicrophoneDashUiComponents(
        id='microphone',
        className='sound-wave',
        strokeColor='#000',
        backgroundColor='#FF4081'
    ),
    html.Div(id='audio-output'),
    html.Audio(
        id='audio',
        controls=True
    )
])

@app.callback(Output('receive-img', 'src'), [Input('web-cam', 'screenshot')])
def WebcamOutput(value):
    if value == None:
        return ""
    return value

@app.callback(Output('audio-output', 'children'), [Input('microphone', 'realData')])
def AudioOutput(value):
    return 'chunk of real-time data is: {}'.format(value)

@app.callback(Output('audio', 'src'), [Input('microphone', 'recordedBlob')])
def AudioSrcOutput(value):
    if value == None :
        return ''
    return value['blobURL']

if __name__ == '__main__':
    app.run_server(debug=True)