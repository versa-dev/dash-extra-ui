# AUTO GENERATED FILE - DO NOT EDIT

listBoxComponent <- function(id=NULL, value=NULL, options=NULL, optionLabel=NULL, itemTemplate=NULL, style=NULL, listStyle=NULL, className=NULL, dataKey=NULL, multiple=NULL, metaKeySelection=NULL, filter=NULL, tabIndex=NULL, tooltip=NULL, tooltipOptions=NULL, onChange=NULL, disabled=NULL, listContainerStyle=NULL) {
    
    props <- list(id=id, value=value, options=options, optionLabel=optionLabel, itemTemplate=itemTemplate, style=style, listStyle=listStyle, className=className, dataKey=dataKey, multiple=multiple, metaKeySelection=metaKeySelection, filter=filter, tabIndex=tabIndex, tooltip=tooltip, tooltipOptions=tooltipOptions, onChange=onChange, disabled=disabled, listContainerStyle=listContainerStyle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ListBoxComponent',
        namespace = 'extra_dash_ui_components',
        propNames = c('id', 'value', 'options', 'optionLabel', 'itemTemplate', 'style', 'listStyle', 'className', 'dataKey', 'multiple', 'metaKeySelection', 'filter', 'tabIndex', 'tooltip', 'tooltipOptions', 'onChange', 'disabled', 'listContainerStyle'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
