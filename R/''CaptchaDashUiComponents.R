# AUTO GENERATED FILE - DO NOT EDIT

''CaptchaDashUiComponents <- function(id=NULL, sitekey=NULL, theme=NULL, captchaType=NULL, size=NULL, index=NULL, language=NULL, onResponse=NULL, onExpire=NULL, responsetext=NULL) {
    
    props <- list(id=id, sitekey=sitekey, theme=theme, captchaType=captchaType, size=size, index=index, language=language, onResponse=onResponse, onExpire=onExpire, responsetext=responsetext)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CaptchaDashUiComponents',
        namespace = 'dash_extra_ui_components',
        propNames = c('id', 'sitekey', 'theme', 'captchaType', 'size', 'index', 'language', 'onResponse', 'onExpire', 'responsetext'),
        package = 'extraDashUiComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
