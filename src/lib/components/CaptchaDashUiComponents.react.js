import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CaptchaDashUiComponents extends Component {
    constructor() {
        super();
        
    }

    init() {
        this._instance = (window).grecaptcha.render(this.targetEL, {
            'sitekey': this.props.sitekey,
            'theme': this.props.theme,
            'type': this.props.captchaType,
            'size': this.props.size,
            'tabindex': this.props.index,
            'hl': this.props.language,
            'callback': (response) => {this.recaptchaCallback(response)},
            'expired-callback': () => {this.recaptchaExpiredCallback()}
        });
    }

    reset() {
        if(this._instance === null)
            return;
        
        (window).grecaptcha.reset(this._instance);
    }

    getResponse() {
        if (this._instance === null)
            return null;
        
        return (window).grecaptcha.getResponse(this._instance);
    }
    
    recaptchaCallback(response) {
        console.log(response);
        if(this.props.onResponse) {
            this.props.onResponse({
                response: response
            });
        }

        if(this.props.setProps)
        {
            this.props.setProps({
                responsetext: "Pass"
            })
        }
    }

    recaptchaExpiredCallback() {
        if(this.props.onExpire) {
            this.props.onExpire();
        }

        if(this.props.setProps)
        {
            this.props.setProps({
                responsetext: "Expired"
            })
        }
    }
    
    addRecaptchaScript() {
        this.recaptchaScript = null;
        if (!(window).grecaptcha) {
            var head = document.head || document.getElementsByTagName('head')[0];
            this.recaptchaScript = document.createElement('script');
            this.recaptchaScript.src = "https://www.google.com/recaptcha/api.js?render=explicit";
            this.recaptchaScript.async = true;
            this.recaptchaScript.defer = true;
            head.appendChild(this.recaptchaScript);
        }
    }

    componentDidMount() {
        this.addRecaptchaScript();

        if ((window).grecaptcha) {
            this.init(); 
        }
        else {
            setTimeout(() => {
                if (!(window).grecaptcha) {
                    console.warn("Recaptcha is not loaded");
                    return;
                }
                this.init();
            },500);
        }
    }

    componentWillUnmount() {
        if(this.recaptchaScript) {
            this.recaptchaScript.parentNode.removeChild(this.recaptchaScript);
        }
    }


    render() {
        const {id} = this.props;
        return (
            <div id={id} ref={(el) => this.targetEL = el}></div>
        );
    }
}

CaptchaDashUiComponents.defaultProps = {
    id: null,
    sitekey: null, // "6LelnsIUAAAAAN9KlJBir69dCnzeaapRdUQdiS0G",
    theme: "light",
    captchaType: "image",
    size: "normal",
    index: 0,
    language: "en",
    onResponse: null,
    onExpire: null,
    responsetext: null
};

CaptchaDashUiComponents.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The Sitekey is google recaptcha sitekey
     */
    sitekey: PropTypes.string,
    theme: PropTypes.string,
    captchaType: PropTypes.string,
    size: PropTypes.string,
    index: PropTypes.number,
    language: PropTypes.string,
    onResponse: PropTypes.func,
    onExpire: PropTypes.func,
    responsetext: PropTypes.string,
    setProps: PropTypes.func
};
