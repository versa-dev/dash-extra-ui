% Auto-generated: do not edit by hand
\name{''ListBox}

\alias{''ListBox}

\title{ListBox component}

\description{
ListBox component
}

\usage{
''ListBox(id=NULL, value=NULL, options=NULL, optionLabel=NULL, itemTemplate=NULL,
style=NULL, listStyle=NULL, className=NULL, dataKey=NULL, multiple=NULL,
metaKeySelection=NULL, filter=NULL, tabIndex=NULL, tooltip=NULL,
tooltipOptions=NULL, onChange=NULL, disabled=NULL, listContainerStyle=NULL)
}

\arguments{
\item{id}{Character. Id: Unique identifier of the element.}

\item{value}{Logical | numeric | character | named list | unnamed list. Selected value to display.}

\item{options}{Unnamed list. An array of objects to display as the available options.}

\item{optionLabel}{Character. Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.}

\item{itemTemplate}{Function that gets the option and returns the content for it.}

\item{style}{Named list. Inline style of the element.}

\item{listStyle}{Named list. Inline style of inner list element.}

\item{className}{Character. Style class of the element.}

\item{dataKey}{Character. A property to uniquely match the value in options for better performance.}

\item{multiple}{Logical. When specified, allows selecting multiple values.}

\item{metaKeySelection}{Logical. Defines how multiple items can be selected,
when true metaKey needs to be pressed to select or
unselect an item and when set to false selection of each item can be toggled individually.
On touch enabled devices, metaKeySelection is turned off automatically.}

\item{filter}{Logical. When specified, displays a filter input at header.}

\item{tabIndex}{Character. Index of the element in tabbing order.}

\item{tooltip}{Character. Content of the tooltip.}

\item{tooltipOptions}{Named list. Configuration of the tooltip, refer to the tooltip documentation for more information.}

\item{onChange}{Callback to invoke when value of listbox changes.}

\item{disabled}{Logical. When specified, disables the component.}

\item{listContainerStyle}{Named list. Style class of the container.}
}
