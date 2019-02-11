/* @flow */

<<<<<<< HEAD:src/checkout/template/containerStyle/base.js
import { CHECKOUT_OVERLAY_COLOR } from '../../../constants';
=======
import { CONTEXT } from 'zoid/src';

export const CLASS = {
    OUTLET:          'outlet',
    VISIBLE:         'visible',
    INVISIBLE:       'invisible',
    COMPONENT_FRAME: 'component-frame',
    PRERENDER_FRAME: 'prerender-frame'
};

export function getSandboxStyle({ uid } : { uid : string }) : string {
    return `
        #${ uid }.paypal-checkout-sandbox {
            display: block;
            position: fixed;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            width: 100vw;
            height: 100vh;
            max-width: 100%;
            max-height: 100%;
            min-width: 100%;
            min-height: 100%;

            z-index: 2147483647;

            animation-duration: 0.3s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards !important;
            opacity: 0;
        }

        #${ uid }.paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        @keyframes show-container {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes hide-container {
            from {
                opacity: 1;
            }

            50% {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }
    `;
}
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0:src/checkout/template/containerStyle.js

export function getContainerStyle({ uid, tag } : { uid : string, tag : string }) : string {
    return `
        #${ uid } {
            position: absolute;
            z-index: 2147483647;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            transform: translate3d(0, 0, 0);

            background-color: black;
<<<<<<< HEAD:src/checkout/template/containerStyle/base.js
            background-color: rgba(0, 0, 0, 0.75);

            background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
            background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
            background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
=======
            background-color: rgba(0, 0, 0, 0.8);
            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0:src/checkout/template/containerStyle.js

            color: #fff;
        }

<<<<<<< HEAD:src/checkout/template/containerStyle/base.js
        #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.WHITE } {
            background-color: white;
            background-color: rgba(255, 255, 255, 0.4);

            background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);
            background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);
            background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);
            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);

            color: #333;
        }

        #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.BLACK } a {
=======
        #${ uid } a {
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0:src/checkout/template/containerStyle.js
            color: #fff;
        }

        #${ uid } .paypal-checkout-close:before,
        #${ uid } .paypal-checkout-close:after {
            background-color: #fff;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.POPUP } {
            cursor: pointer;
        }

        #${ uid } a {
            text-decoration: none;
        }

        #${ uid } .paypal-checkout-modal {
            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;
            font-size: 14px;
            text-align: center;

            box-sizing: border-box;
            max-width: 350px;
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translateX(-50%) translateY(-50%);
            cursor: pointer;
            text-align: center;
        }

        #${ uid }.${ tag }-loading .paypal-checkout-message, #${ uid }.${ tag }-loading .paypal-checkout-continue {
            display: none;
        }

        .paypal-checkout-loader {
            display: none;
        }

        #${ uid }.${ tag }-loading .paypal-checkout-loader {
            display: block;
        }

        #${ uid } .paypal-checkout-modal .paypal-checkout-logo {
            cursor: pointer;
            margin-bottom: 30px;
            display: inline-block;
        }

        #${ uid } .paypal-checkout-modal .paypal-checkout-logo img {
            height: 36px;
        }

        #${ uid } .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {
            margin-right: 10px;
        }

        #${ uid } .paypal-checkout-modal .paypal-checkout-message {
            font-size: 15px;
            line-height: 1.5;
            padding: 10px 0;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-message, #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-continue {
            display: none;
        }

        #${ uid } .paypal-checkout-modal .paypal-checkout-continue {
            font-size: 15px;
            line-height: 1.35;
            padding: 10px 0;
            font-weight: bold;
        }

<<<<<<< HEAD:src/checkout/template/containerStyle/base.js
        #${ id } .paypal-checkout-modal .paypal-checkout-continue a {
            border-bottom: 1px solid currentColor;
=======
        #${ uid } .paypal-checkout-modal .paypal-checkout-continue a {
            border-bottom: 1px solid white;
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0:src/checkout/template/containerStyle.js
        }

        #${ uid } .paypal-checkout-close {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 16px;
            height: 16px;
            opacity: 0.6;
        }

        #${ uid }.${ tag }-loading .paypal-checkout-close {
            display: none;
        }

        #${ uid } .paypal-checkout-close:hover {
            opacity: 1;
        }

        #${ uid } .paypal-checkout-close:before, .paypal-checkout-close:after {
            position: absolute;
            left: 8px;
            content: ' ';
            height: 16px;
            width: 2px;
        }

        #${ uid } .paypal-checkout-close:before {
            transform: rotate(45deg);
        }

        #${ uid } .paypal-checkout-close:after {
            transform: rotate(-45deg);
        }

        #${ uid } .paypal-checkout-iframe-container {
            display: none;
        }

<<<<<<< HEAD:src/checkout/template/containerStyle/base.js
        #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container,
        #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container > .${ CLASS.OUTLET },
        #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container > .${ CLASS.OUTLET } > iframe {
            max-height: calc(95vh - 60px);
=======
        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container,
        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container > .${ CLASS.OUTLET },
        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container > .${ CLASS.OUTLET } > iframe {
            max-height: 95vh;
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0:src/checkout/template/containerStyle.js
            max-width: 95vw;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container {

            display: block;

            position: absolute;

            top: 50%;
            left: 50%;

            min-width: 450px;

            transform: translate(-50%, -50%);
            transform: translate3d(-50%, -50%, 0);

            border-radius: 10px;
            overflow: hidden;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } {

            position: relative;

            transition: all 0.3s ease;
            animation-duration: 0.3s;
            animation-fill-mode: forwards !important;

            min-width: 450px;
            max-width: 450px;
            width: 450px;
            height: 535px;

            background-color: white;

            overflow: auto;

            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe {
            position: absolute;
            top: 0;
            left: 0;
            transition: opacity .4s ease-in-out;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.COMPONENT_FRAME } {
            z-index: 100;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.PRERENDER_FRAME } {
            z-index: 200;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.VISIBLE } {
            opacity: 1;
            z-index: 200;
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.INVISIBLE } {
            opacity: 0;
            z-index: 100;
        }

        @media screen and (-ms-high-contrast: active) {
            #${ id } .paypal-checkout-close {
                opacity: 1;
            }

            #${ id } .paypal-checkout-close:before , .paypal-checkout-close:after {
                background-color: currentColor;
            }
        }

        @media screen and (max-width: 470px) {

            #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .paypal-checkout-iframe-container,
            #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } {
                min-width: 100%;
                min-width: calc(100% - 20px);

                max-width: 100%;
                max-width: calc(100% - 20px);
            }
        }

        #${ uid }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } iframe {
            width: 1px;
            min-width: 100%;
            height: 100%;
        }

        @keyframes show-component {
            from {
                opacity: 0;
                transform: scale3d(.3, .3, .3);
            }

            to {
                opacity: 1;
                transform: scale3d(1, 1, 1);
            }
        }

        @keyframes hide-component {
            from {
                opacity: 1;
                transform: scale3d(1, 1, 1);
            }

            to {
                opacity: 0;
                transform: scale3d(.3, .3, .3);
            }
        }

        .paypal-spinner {
            height: 30px;
            width: 30px;
            display: inline-block;
            box-sizing: content-box;
            opacity: 1;
            filter: alpha(opacity=100);
            animation: rotation .7s infinite linear;
            border-left: 8px solid rgba(0, 0, 0, .2);
            border-right: 8px solid rgba(0, 0, 0, .2);
            border-bottom: 8px solid rgba(0, 0, 0, .2);
            border-top: 8px solid #fff;
            border-radius: 100%
        }

        @keyframes rotation {
            from {
                transform: rotate(0deg)
            }
            to {
                transform: rotate(359deg)
            }
        }
    `;
}
