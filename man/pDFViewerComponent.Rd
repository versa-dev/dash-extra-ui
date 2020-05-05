% Auto-generated: do not edit by hand
\name{pDFViewerComponent}

\alias{pDFViewerComponent}

\title{PDFViewerComponent component}

\description{
PDF Viewer component with controls Page navigation Zoom Rotation
}

\usage{
pDFViewerComponent(url=NULL, base64=NULL, page=NULL, scale=NULL, scaleStep=NULL, maxScale=NULL,
minScale=NULL, css=NULL, navbarOnTop=NULL, hideZoom=NULL, hideRotation=NULL,
protectContent=NULL)
}

\arguments{
\item{url}{Character. The url of the PDF document}

\item{base64}{Character. PDF file encoded in base64}

\item{page}{Numeric. The page that will be shown first on document load}

\item{scale}{Numeric. Scale factor relative to the component parent element}

\item{scaleStep}{Numeric. Scale factor to be increased or decreased on Zoom-in or zoom-out}

\item{maxScale}{Numeric. Maximun scale factor for zoom-in}

\item{minScale}{Numeric. Minimum scale factor for zoom-in}

\item{css}{Character. CSS classes that will be setted for the component wrapper}

\item{navbarOnTop}{Logical. By default navbar is displayed on bottom, but can be placed on top by passing this prop}

\item{hideZoom}{Logical. By default zoom buttons are displayed, but can be hidden by passing this prop}

\item{hideRotation}{Logical. By default rotation buttons are displayed, but can be hidden by passing this prop}

\item{protectContent}{Logical. By default Right Click and Context Menu are enabled, but can be disabled by passing this prop}
}
