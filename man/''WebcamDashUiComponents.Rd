% Auto-generated: do not edit by hand
\name{''WebcamDashUiComponents}

\alias{''WebcamDashUiComponents}

\title{WebcamDashUiComponents component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
''WebcamDashUiComponents(id=NULL, className=NULL, audio=NULL, height=NULL, width=NULL,
screenshotWidth=NULL, screenshotHeight=NULL, screenshotFormat=NULL,
screenshotQuality=NULL, screenshotInterval=NULL, screenshot=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks}

\item{className}{Character. CSS class of video element}

\item{audio}{Logical. enable/disable audio}

\item{height}{Numeric. height of video element}

\item{width}{Numeric. width of video element}

\item{screenshotWidth}{Numeric. width of screenshot}

\item{screenshotHeight}{Numeric. width of screenshot}

\item{screenshotFormat}{Character. format of screenshot}

\item{screenshotQuality}{Numeric. quality of screenshot(0 to 1)}

\item{screenshotInterval}{Numeric. update interval of screenshot in milliseconds}

\item{screenshot}{Character. getScreenshot() returns a base64 encoded string of the current webcam
image. screenshot is the prop updated at fixed interval from calling
getScreenshot(). It is currently capped at 25 fps.}
}
