% Auto-generated: do not edit by hand
\name{organizationChart}

\alias{organizationChart}

\title{OrganizationChart component}

\description{
Organization Chart
}

\usage{
organizationChart(id=NULL, value=NULL, style=NULL, className=NULL, selectionMode=NULL,
selection=NULL, nodeTemplate=NULL, onSelectionChange=NULL, onNodeSelect=NULL,
onNodeUnselect=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{value}{Logical | numeric | character | named list | unnamed list. An array of nested TreeNodes}

\item{style}{Named list. Inline style of the element.}

\item{className}{Character. Css classes}

\item{selectionMode}{Character. Defines the selection mode, valid values "single" and "multiple".}

\item{selection}{Logical | numeric | character | named list | unnamed list. A single treenode instance or an array to refer to the selections.}

\item{nodeTemplate}{Logical | numeric | character | named list | unnamed list. Template function that gets a node as a parameter and returns a content.}

\item{onSelectionChange}{Callback to invoke when node selection changes.}

\item{onNodeSelect}{Callback to invoke when a node is unselected.}

\item{onNodeUnselect}{Callback to invoke when a node is selected.}
}
