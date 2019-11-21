% Auto-generated: do not edit by hand
\name{carousel}

\alias{carousel}

\title{Carousel component}

\description{
The main carousel component
}

\usage{
carousel(id=NULL, value=NULL, page=NULL, header=NULL, footer=NULL, style=NULL,
className=NULL, itemTemplate=NULL, circular=NULL, autoplayInterval=NULL,
numVisible=NULL, numScroll=NULL, responsiveOptions=NULL, orientation=NULL,
verticalViewPortHeight=NULL, contentClassName=NULL, containerClassName=NULL,
dotsContainerClassName=NULL, onPageChange=NULL)
}

\arguments{
\item{id}{Character. Unique identifier of the element.}

\item{value}{Logical | numeric | character | named list | unnamed list. An array of objects to display.}

\item{page}{Numeric. Index of the first item.}

\item{header}{Logical | numeric | character | named list | unnamed list. Label of header.}

\item{footer}{Logical | numeric | character | named list | unnamed list. Label of footer.}

\item{style}{Named list. Inline style of the component.}

\item{className}{Character. Style class of the component.}

\item{itemTemplate}{Logical | numeric | character | named list | unnamed list. Function that gets an item in the value and returns the content for it.}

\item{circular}{Logical. Defines if scrolling would be infinite.}

\item{autoplayInterval}{Numeric. Time in milliseconds to scroll items automatically.}

\item{numVisible}{Numeric. Number of items per page.}

\item{numScroll}{Numeric. Number of items to scroll.}

\item{responsiveOptions}{Unnamed list. An array of options for responsive design.}

\item{orientation}{Character. Specifies the layout of the component, valid values are "horizontal" and "vertical".}

\item{verticalViewPortHeight}{Character. Height of the viewport in vertical layout.}

\item{contentClassName}{Character. Style class of main content.}

\item{containerClassName}{Character. Style class of the viewport container.}

\item{dotsContainerClassName}{Character. Style class of the paginator items.}

\item{onPageChange}{Callback to invoke after scroll.}
}
