/* @flow */
<<<<<<< HEAD
/* @jsx jsxDom */
/* eslint max-lines: 0 */

import { btoa } from 'Base64';
import { ZalgoPromise } from 'zalgo-promise/src';

import { fundingLogos } from '../../resources';
import { BUTTON_LOGO_COLOR, CHECKOUT_OVERLAY_COLOR } from '../../constants';
import { isIos } from '../../lib';

import componentContentJSON from './containerContent.json';
import { getContainerStyle } from './containerStyle';
import { getSandboxStyle } from './sandboxStyle';

let componentContent = JSON.parse(componentContentJSON);

const LOGO_COLOR = {
    [ CHECKOUT_OVERLAY_COLOR.BLACK ]: BUTTON_LOGO_COLOR.WHITE,
    [ CHECKOUT_OVERLAY_COLOR.WHITE ]: BUTTON_LOGO_COLOR.BLACK
};

export {
    getContainerStyle,
    getSandboxStyle
};

export type ContainerTemplateOptions = {
    id : string,
    props : Object,
    CLASS : Object,
    ANIMATION : Object,
    CONTEXT : Object,
    EVENT : Object,
    dimensions : {
        width : number,
        height : number
    },
    actions : Object,
    tag : string,
    context : string,
    outlet : HTMLElement,
    on : Function,
    jsxDom : Function
};

// eslint-disable-next-line no-unused-vars
export function containerTemplate({ id, props, CLASS, ANIMATION, CONTEXT, EVENT, on, tag, context, actions, outlet, jsxDom } : ContainerTemplateOptions) : HTMLElement {

    let [ lang, country ] = props.locale.split('_');

    let content = componentContent[country][lang];

    function close(event) {
        event.preventDefault();
        event.stopPropagation();
        actions.close();
=======
/** @jsx node */
/* eslint max-lines: off, react/jsx-max-depth: off */

import { isIos, animate, noop, destroyElement } from 'belter/src';
import { EVENT, type RenderOptionsType } from 'zoid/src';
import { node, dom } from 'jsx-pragmatic/src';
import { LOGO_COLOR, PPLogo, PayPalLogo } from '@paypal/sdk-logos/src';

import type { CheckoutPropsType } from '../props';

import { containerContent } from './containerContent';
import { getContainerStyle, getSandboxStyle, CLASS } from './containerStyle';

export function containerTemplate({ uid, tag, props, context, close, focus, doc, event, frame, prerenderFrame } : RenderOptionsType<CheckoutPropsType>) : HTMLElement {

    const { locale } = props;
    const { lang } = locale;

    function closeCheckout(e) {
        e.preventDefault();
        e.stopPropagation();
        close();
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
    }

    function focusCheckout(e) {
        e.preventDefault();
        e.stopPropagation();

        if (isIos()) {
            // eslint-disable-next-line no-alert
            window.alert('Please switch tabs to reactivate the PayPal window');
        } else {
<<<<<<< HEAD
            ZalgoPromise.try(actions.focus).catch(actions.close);
=======
            focus();
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
        }
    }

    const { style = {} } = props;

    const content = containerContent[lang];

    const setupAnimations = (name) => {
        return (el) => {
            event.on(EVENT.DISPLAY, () => animate(el, `show-${ name }`, noop));
            event.on(EVENT.CLOSE, () => animate(el, `hide-${ name }`, noop));
        };
    };

    let outlet;

    if (frame && prerenderFrame) {
        frame.classList.add(CLASS.COMPONENT_FRAME);
        prerenderFrame.classList.add(CLASS.PRERENDER_FRAME);
        
        prerenderFrame.classList.add(CLASS.VISIBLE);
        frame.classList.add(CLASS.INVISIBLE);
    
        event.on(EVENT.RENDERED, () => {
            prerenderFrame.classList.remove(CLASS.VISIBLE);
            prerenderFrame.classList.add(CLASS.INVISIBLE);
    
            frame.classList.remove(CLASS.INVISIBLE);
            frame.classList.add(CLASS.VISIBLE);
    
            setTimeout(() => {
                destroyElement(prerenderFrame);
            }, 1);
        });

        outlet = (
            <div class={ CLASS.OUTLET } onRender={ setupAnimations('component') }>
                <node el={ frame } />
                <node el={ prerenderFrame } />
            </div>
        );
    }

    return (
        <div id={ uid } onRender={ setupAnimations('container') } class="paypal-checkout-sandbox">
            <style>{ getSandboxStyle({ uid }) }</style>

            <iframe title="PayPal Checkout Overlay" name={ `__paypal_checkout_sandbox_${ uid }__` } scrolling="no" class="paypal-checkout-sandbox-iframe">
                <html>
                    <body>
                        <div id={ uid } onClick={ focusCheckout } class={ `${ tag }-context-${ context } paypal-checkout-overlay` }>
                            <a href='#' class="paypal-checkout-close" onClick={ closeCheckout } aria-label="close" role="button" />
                            <div class="paypal-checkout-modal">
                                <div class="paypal-checkout-logo">
                                    <PPLogo logoColor={ LOGO_COLOR.WHITE } />
                                    <PayPalLogo logoColor={ LOGO_COLOR.WHITE } />
                                </div>
                                <div class="paypal-checkout-message">
                                    {content.windowMessage}
                                </div>
                                <div class="paypal-checkout-continue">
                                    <a onClick={ focus } href='#'>{content.continueMessage}</a>
                                </div>
                                <div class="paypal-checkout-loader">
                                    <div class="paypal-spinner" />
                                </div>
                            </div>

                            <div class="paypal-checkout-iframe-container">
                                { outlet }
                            </div>

                            <style>{ getContainerStyle({ uid, tag }) }</style>
                        </div>
                    </body>
                </html>
            </iframe>
        </div>
    ).render(dom({ doc }));
}
