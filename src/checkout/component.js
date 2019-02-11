/* @flow */
/* eslint max-lines: 0 */

import { getPayPalDomainRegex, getLogger, getLocale, getEnv, getClientID, getCommit, getSDKMeta } from '@paypal/sdk-client/src';
import { FUNDING } from '@paypal/sdk-constants/src';
import { ZalgoPromise } from 'zalgo-promise/src';
<<<<<<< HEAD
import { info, track, warn, flush as flushLogs, immediateFlush } from 'beaver-logger/client';
import { create, CONSTANTS, PopupOpenError } from 'zoid/src';
import { type Component } from 'zoid/src/component/component';
import type { CrossDomainWindowType } from 'cross-domain-utils/src';

import { isDevice, request, getQueryParam, redirect as redir, patchMethod,
    setLogLevel, getSessionID, getBrowserLocale, supportsPopups, memoize,
    getDomainSetting, getScriptVersion, getButtonSessionID, isPayPalDomain,
    isEligible, getCurrentScriptUrl } from '../lib';
import { config } from '../config';
import { ENV, FPTI, PAYMENT_TYPE, CHECKOUT_OVERLAY_COLOR, ATTRIBUTE } from '../constants';
import { onLegacyPaymentAuthorize } from '../compat';
import { determineParameterFromToken, determineUrl } from '../integrations';
=======
import { create, CONTEXT, type ZoidComponent } from 'zoid/src';
import { isDevice, memoize, isIEIntranet, noop, once, supportsPopups, inlineMemoize } from 'belter/src';

import { getSessionID, getButtonSessionID } from '../lib';
import { getFundingConfig } from '../funding';
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

import { containerTemplate, componentTemplate } from './template';
import type { CheckoutPropsType } from './props';

export function getCheckoutComponent() : ZoidComponent<CheckoutPropsType> {
    return inlineMemoize(getCheckoutComponent, () => {
        const component = create({

<<<<<<< HEAD
    if (!window.$Api) {
        return;
    }

    if (window.$Api.addHeader) {
        return window.$Api.addHeader(name, value);
    }
}

type CheckoutPropsType = {
    payment? : () => ZalgoPromise<string>,
    onAuthorize : ({ returnUrl : string }, { redirect : (?CrossDomainWindowType, ?string) => ZalgoPromise<void> }) => ?ZalgoPromise<void>,
    onShippingChange? : (address : {}) => ?ZalgoPromise<void>,
    onCancel? : ({ cancelUrl : string }, { redirect : (?CrossDomainWindowType, ?string) => ZalgoPromise<void> }) => ?ZalgoPromise<void>,
    fallback? : (string) => ?ZalgoPromise<void>,
    fundingSource? : string,
    logLevel? : string,
    env? : string,
    stage? : string,
    stageUrl? : string,
    supplement? : {
        getPaymentOptions : Function,
        addPaymentDetails : Function
    }
};

export let Checkout : Component<CheckoutPropsType> = create({

    tag:  'paypal-checkout',
    name: 'ppcheckout',

    scrolling: true,

    buildUrl(props) : ZalgoPromise<string> {
        let env = props.env || config.env;

        if (!props.payment) {
            throw new Error(`Can not build url without payment prop`);
        }

        return props.payment().then(token => {
            if (!token) {
                throw new Error(`Expected payment id or token to be passed, got ${ token }`);
            }

            return determineUrl(env, props.fundingSource, token);
        });
    },

    get unsafeRenderTo() : boolean {
        return config.env === ENV.LOCAL;
    },

    get domain() : Object {
        return {
            ...config.paypalDomains,
            [ ENV.LOCAL ]: /^http:\/\/localhost.paypal.com:\d+$/
        };
    },

    get bridgeUrl() : Object {
        return config.metaFrameUrls;
    },

    get bridgeDomain() : Object {
        return config.paypalDomains;
    },

    contexts: {
        iframe: (!supportsPopups()),
        popup:  true
    },

    get version() : string {
        return getScriptVersion();
    },

    validate() {
        if (!isEligible()) {
            warn('checkout_render_ineligible');
        }
    },

    prerenderTemplate: componentTemplate,
    containerTemplate,

    props: {

        sessionID: {
            type:     'string',
            required: false,
            def() : string {
                return getSessionID();
            },
            queryParam: true
        },

        buttonSessionID: {
            type:     'string',
            required: false,
            def() : ?string {
                return getButtonSessionID();
            },
            queryParam: true
        },

        env: {
            type:       'string',
            required:   false,
            queryParam: true,

            def() : string {
                return config.env;
            },

            validate(env) {
                if (!config.paypalUrls[env]) {
                    throw new Error(`Invalid env: ${ env }`);
                }
            }
        },

        meta: {
            type:     'object',
            required: false,
            def() : Object {
                let meta = window.xprops && window.xprops.meta;
                return meta || {};
            }
        },

        stage: {
            type:       'string',
            required:   false,
            queryParam: true,

            def(props) : ?string {
                let env = props.env || config.env;

                if (env === ENV.STAGE || env === ENV.LOCAL) {
                    return config.stage;
=======
            tag:  'paypal-checkout',
        
            attributes: {
                iframe: {
                    scrolling: 'yes'
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
                }
            },
        
            defaultContext: supportsPopups() ? CONTEXT.POPUP : CONTEXT.IFRAME,
        
            url({ props }) : string {
                const { fundingSource } = props;
                const fundingConfig = getFundingConfig()[fundingSource];
        
                if (!fundingConfig) {
                    throw new Error(`Can not find funding config for ${ fundingSource }`);
                }
        
                return fundingConfig.url();
            },
        
            domain: getPayPalDomainRegex(),
        
            logger: getLogger(),
        
            validate() {
                if (isIEIntranet()) {
                    throw new Error(`Can not render button in IE intranet mode`);
                }
            },
<<<<<<< HEAD
            alias: 'billingAgreement'
        },

        style: {
            type:          'object',
            required:      false,
            allowDelegate: true,
            def() : Object {
                return {};
            },
            validate(style) {
                if (style.overlayColor && style.overlayColor !== CHECKOUT_OVERLAY_COLOR.BLACK && style.overlayColor !== CHECKOUT_OVERLAY_COLOR.WHITE) {
                    throw new Error(`Invalid background color: ${ style.overlayColor }`);
                }
            }
        },

        commit: {
            type:     'boolean',
            required: false
        },

        experience: {
            type:     'object',
            required: false,
            def() : Object {
                return {};
            }
        },

        fundingSource: {
            type:       'string',
            required:   false,
            queryParam: true
        },

        fundingOffered: {
            type:       'object',
            required:   false,
            queryParam: true,
            def() : Object {
                let elements = Array.prototype.slice.call(document.querySelectorAll(`[${ ATTRIBUTE.FUNDING_SOURCE }]`));

                let fundingSources = elements.map(el => {
                    return el.getAttribute(ATTRIBUTE.FUNDING_SOURCE);
                });

                // $FlowFixMe
                return fundingSources;
            },
            queryValue: (val) => {
                return val.join(',');
            }
        },

        onAuthorize: {
            type:     'function',
            required: true,
            once:     true,
            
            decorate(original) : Function | void {
                if (original) {
                    return function decorateOnAuthorize(data, actions = {}) : ZalgoPromise<void> {

                        if (data && !data.intent) {
                            warn(`checkout_authorize_no_intent`, { paymentID: data.paymentID, token: data.paymentToken });
                        }

                        let close = () => {
=======
        
            prerenderTemplate: componentTemplate,
            containerTemplate,
        
            props: {
        
                clientID: {
                    type:       'string',
                    value:      () => getClientID(),
                    queryParam: true
                },
        
                sessionID: {
                    type: 'string',
                    // $FlowFixMe
                    value() : string {
                        return getSessionID();
                    },
                    queryParam: true
                },
        
                buttonSessionID: {
                    type:     'string',
                    required: false,
                    default() : ?string {
                        return getButtonSessionID();
                    },
                    queryParam: true
                },
                
                env: {
                    type:       'string',
                    queryParam: true,
                    // $FlowFixMe
                    value:      () => getEnv()
                },
        
                sdkMeta: {
                    type:       'string',
                    queryParam: true,
                    // $FlowFixMe
                    value:      () => getSDKMeta()
                },
        
                nonce: {
                    type:     'string',
                    required: false
                },
        
                meta: {
                    type:    'object',
                    default:  () => {
                        const meta = window.xprops && window.xprops.meta;
                        return meta || {};
                    }
                },
        
                locale: {
                    type:          'object',
                    queryParam:    'locale.x',
                    allowDelegate: true,
                    queryValue({ value }) : string {
                        const { lang, country } = value;
                        return `${ lang }_${ country }`;
                    },
                    // $FlowFixMe
                    value: () => getLocale()
                },
                
                // $FlowFixMe
                createOrder: {
                    type:       'function',
                    queryParam: 'token',
                    alias:      'payment',
                    queryValue: ({ value }) => {
                        return ZalgoPromise.try(value);
                    },
                    decorate: ({ value: payment }) => {
                        return memoize(() => {
                            return ZalgoPromise.try(payment)
                                .then(orderID => {
        
                                    if (!orderID) {
                                        throw new Error(`No order id passed`);
                                    }
        
                                    return orderID;
                                });
                        });
                    }
                },
        
                xcomponent: {
                    type:       'string',
                    queryParam: true,
                    // $FlowFixMe
                    value() : string {
                        return '1';
                    }
                },
        
                version: {
                    type:       'string',
                    queryParam: true,
                    // $FlowFixMe
                    value() : string {
                        return '5';
                    }
                },
        
                commit: {
                    type:       'boolean',
                    queryParam: true,
                    default:        getCommit
                },
        
                // $FlowFixMe
                fundingSource: {
                    type:       'string',
                    queryParam: true,
                    default() : $Values<typeof FUNDING> {
                        return FUNDING.PAYPAL;
                    }
                },
        
                // $FlowFixMe
                onApprove: {
                    type:     'function',
                    alias:    'onAuthorize',
        
                    decorate: ({ value, state, close, onError }) => {
                        return function decorateOnApprove(data, actions) : ZalgoPromise<void> {
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
                            return ZalgoPromise.try(() => {
                                state.approved = true;
        
                                // $FlowFixMe
                                return value(data, actions);
                            }).catch(err => {
                                return onError(err);
                            }).finally(() => {
                                return close();
                            });
                        };
<<<<<<< HEAD

                        let redirect = (win, url) => {
                            return ZalgoPromise.all([
                                redir(win || window.top, url || data.returnUrl),
                                close()
                            ]);
                        };

                        return ZalgoPromise.try(() => {

                            try {
                                let isButton = window.location.href.indexOf('/webapps/hermes/button') !== -1;
                                let isGuest  = this.window.location.href.indexOf('/webapps/xoonboarding') !== -1;

                                if (isButton && isGuest) {
                                    return request({
                                        win:    this.window,
                                        method: 'get',
                                        url:    '/webapps/xoonboarding/api/auth'
                                    }).then(result => {
                                        if (result && result.data && result.data.access_token) {
                                            addHeader('x-paypal-internal-euat', result.data.access_token);
                                        }
                                    }).catch(() => {
                                        // pass
                                    });
=======
                    }
                },
        
                onShippingChange: {
                    type:     'function',
                    required: false
                },
        
                onAuth: {
                    type:       'function',
                    required:   false,
                    sameDomain: true
                },
        
                accessToken: {
                    type:     'string',
                    required: false
                },
        
                onCancel: {
                    type:     'function',
                    required: false,
        
                    decorate: ({ value, close, onError }) => {
                        return once((data, actions = {}) : ZalgoPromise<void> => {
                            return ZalgoPromise.try(() => {
                                // $FlowFixMe
                                return value(data, actions);
                            }).catch(err => {
                                return onError(err);
                            }).finally(() => {
                                close();
                            });
                        });
                    },
        
                    // $FlowFixMe
                    default: () => noop
                },
        
                onClose: {
                    type:          'function',
                    required:      false,
                    allowDelegate: true,
        
                    decorate: ({ value, props, state }) => {
                        return once((reason, ...args) : ZalgoPromise<void> => {
                            return ZalgoPromise.try(() => {
                                return ZalgoPromise.all((state.onCloseHandlers || []).map(handler => handler()));
        
                            }).then(() => {
                                if (!state.approved) {
                                    // $FlowFixMe
                                    return ZalgoPromise.try(() => props.onCancel())
                                        .then(() => value(...args));
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
                                }
        
                                return value(...args);
                            });
                        });
<<<<<<< HEAD
                    };
                }
            }
        },

        onShippingChange: {
            type:     'function',
            required: false
        },

        onAuth: {
            type:       'function',
            required:   false,
            sameDomain: true,
            childDecorate(original : Function) : ?Function {
                if (original) {
                    return function wrapOnAuth(data : string | Object) : Object {
                        if (typeof data === 'string') {
                            data = { accessToken: data };
                        }
                        return original(data);
                    };
                }
            }
        },

        accessToken: {
            type:     'function',
            required: false
        },

        onCancel: {
            type:     'function',
            required: false,
            once:     true,
            noop:     true,

            decorate(original) : Function {
                return function decorateOnCancel(data, actions = {}) : ZalgoPromise<void> {

                    let close = () => {
                        return ZalgoPromise.try(() => {
                            if (actions.close) {
                                return actions.close();
                            }
                        }).then(() => {
                            return this.closeComponent();
=======
                    },
        
                    default: () => noop
                },
        
                addOnClose: {
                    type:          'function',
                    allowDelegate: true,
                    value:         ({ state }) => {
                        return (handler) => {
                            state.onCloseHandlers = state.onCloseHandlers || [];
                            state.onCloseHandlers.push(handler);
                        };
                    }
                },
        
                onDisplay: {
                    type:          'function',
                    required:      false,
                    allowDelegate: true,
        
                    decorate: ({ value, state }) => {
                        return once(function decorateOnDisplay() : ZalgoPromise<void> {
                            return ZalgoPromise.try(() => {
                                return ZalgoPromise.all((state.onDisplayHandlers || []).map(handler => handler()));
        
                            }).then(() => {
                                return value.apply(this, arguments);
                            });
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
                        });
                    },
        
                    default: () => noop
                },
        
                addOnDisplay: {
                    type:          'function',
                    allowDelegate: true,
                    value:         ({ state }) => {
                        return (handler) => {
                            state.onDisplayHandlers = state.onDisplayHandlers || [];
                            state.onDisplayHandlers.push(handler);
                        };
                    }
                },
        
                test: {
                    type: 'object',
                    default() : Object {
                        return window.__test__ || { action: 'checkout' };
                    }
<<<<<<< HEAD

                    return onLegacyPaymentAuthorize(this.props.onAuthorize);
                };
            }
        },

        logLevel: {
            type:     'string',
            required: false,
            get value() : string {
                return config.logLevel;
            }
        },

        supplement: {
            type:     'object',
            required: false,
            get value() : Object {
                // $FlowFixMe
                let value : Object = window.xprops && window.xprops.supplement;
                return value;
            }
        },

        test: {
            type:     'object',
            required: false,
            def() : Object {
                return window.__test__ || { action: 'checkout' };
            }
        },

        sdkMeta: {
            type:        'string',
            queryParam:  true,
            sendToChild: false,
            def:         () => {
                return btoa(JSON.stringify({
                    url: getCurrentScriptUrl()
                }));
            }
        }
    },

    get dimensions() : { width : string, height : string } {

        if (isDevice()) {
            return {
                width:  '100%',
                height: '535px'
            };
        }

        return {
            width:  '450px',
            height: '535px'
        };
    }
});

if (Checkout.isChild() && Checkout.xchild && Checkout.xprops) {

    if (Checkout.xprops && Checkout.xprops.logLevel) {
        setLogLevel(Checkout.xprops.logLevel);
    }

    Checkout.xchild.onProps(xprops => {
        patchMethod(xprops, 'onAuthorize', ({ callOriginal, args: [ data ] }) => {
            if (data && !data.intent) {
                warn(`hermes_authorize_no_intent`, { paymentID: data.paymentID, token: data.paymentToken });

                try {
                    let intent = window.injector.get('$CheckoutCartModel').instance(data.paymentToken).payment_action;
                    warn(`hermes_intent`, { paymentID: data.paymentID, token: data.paymentToken, intent });
                } catch (err) {
                    // pass
=======
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
                }
            },
        
            dimensions: isDevice()
                ? { width:  '100%', height: '535px' }
                : { width:  '450px', height: '535px' }
        });
<<<<<<< HEAD
=======
        
        if (component.isChild()) {
            window.xchild = {
                props: component.xprops,
                show:  noop,
                hide:  noop
            };
        }
    
        return component;
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
    });
}
