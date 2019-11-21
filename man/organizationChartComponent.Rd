% Auto-generated: do not edit by hand
\name{organizationChartComponent}

\alias{organizationChartComponent}

\title{OrganizationChartComponent component}

\description{
OrganizationChartComponent is a component to nicely display a data tree. It takes a property, `value`, which is the actual data object creates a hierachy tree which is then rendered. Other inputs are `selectionMode`, `selection`, `className` and `style` which are optional. Defaults will be applied unless provided by the user.
}

\usage{
organizationChartComponent(id=NULL, value=NULL, selectionMode=NULL, selection=NULL, className=NULL,
style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{value}{List of named lists. An array of nested TreeNodes. A valid treenode should contain at least a `label` property.
Please check on sample data at /sample_data/org_data}

\item{selectionMode}{A value equal to: 'single', 'multiple'. Defines the selection mode, valid values "single" or "multiple".}

\item{selection}{Named list | list of named lists. A single treenode instance or an array to refer to the selections.}

\item{className}{Character. Style class of the component.}

\item{style}{Named list. Inline style of the component.}
}
