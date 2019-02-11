/* @flow */

import { ZalgoPromise } from 'zalgo-promise/src';
import { CONTEXT } from 'zoid/src';

import { runOnClick } from '../../tests/common';

const { action, type, onRender, onInit } = window.xprops.test;

<<<<<<< HEAD
let { action, type, onRender, onInit } = window.xprops.test;

let actions = {
=======
const actions = {
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
    close() {
        window.close();
    }
};

const hash = window.location.hash ? `&hash=${ window.location.hash.slice(1) }` : '';

if (action === 'checkout') {

    window.xprops.payment().then(orderID => {

        return ZalgoPromise.try(() => {

            if (window.xprops.init) {
                return window.xprops.init({
                    orderID,
                    cancelUrl: `#cancel?token=${ orderID }${ hash }`
                });
            }

        }).then(() => {

            if (window.xprops.onAuth) {
                return window.xprops.onAuth('xxxyyy');
            }

        }).then(() => {

            window.xprops.onAuthorize({
                orderID,
                intent:     'commit',
                payerID:    'YYYYYYYYYYYYY',
                cancelUrl:  `#cancel?token=${ orderID }${ hash }`,
                returnUrl:  `#return?token=${ orderID }&PayerID=YYYYYYYYYYYYY${ hash }`,
                currentUrl: window.location.href
            });
        });
    });

} else if (action === 'shippingChange') {
<<<<<<< HEAD

    let callbackActions = {
        reject:  () => { /* pass */ },
        type,
        payment: {
            patch: (data) => {
                const shippingOptions = data.filter(op => {
                    return op.path.match(/\/(transactions)\/(\d)\/(item_list)\/(shipping_options)/);
                });

                if (shippingOptions.length) {
                    throw new Error('Expecting shipping_options to be stripped from payment patch');
                }
            }
        }
    };

    if (type === 'noReject') {
        delete callbackActions.reject;
    }

    window.xprops.payment().then(paymentToken => {
        const shippingChangePayload = {
            paymentID:    paymentToken,
            city:         'XXXXX',
            state:        'YY',
            postal_code:  '11111',
            country_code: 'YY'
        };

        return window.xprops.supplement.getPaymentOptions(paymentToken)
            .then(options => {

                if (!options || !options.transactions) {
                    return shippingChangePayload;
                }

                const shippingOptions = options.transactions.map(t => {
                    if (t.item_list && t.item_list.shipping_options) {
                        return t.item_list.shipping_options;
                    }
                    return t;
                });

                return {
                    ...shippingChangePayload,
                    shipping_options: shippingOptions.length === 1 ? shippingOptions[0] : shippingOptions
                };
            })
            .then(payload => {
                window.xprops.onShippingChange(payload, callbackActions);
            });
    });

} else if (action === 'cancel') {

    window.xprops.payment().then(paymentToken => {
=======
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

    const callbackActions = {
        reject:  () => { /* pass */ },
        resolve: () => ZalgoPromise.resolve(),
        order:   { patch: () => ZalgoPromise.resolve() }
    };


    if (type === 'noReject') {
        delete callbackActions.reject;
    }

    window.xprops.payment().then(orderID => {

        return window.xprops.onShippingChange({
            orderID,
            shipping_address: {
                city:         'XXXXX',
                state:        'YY',
                postal_code:  '11111',
                country_code: 'YY'
            }
        }, callbackActions);

    });

} else if (action === 'cancel') {

    window.xprops.payment().then(orderID => {

        window.xprops.onCancel({
            orderID,
            cancelUrl: `#cancel?token=${ orderID }${ hash }`
        });
    });

} else if (action === 'popout') {
    runOnClick(() => {
        return window.paypal.Checkout({
            payment:     window.xprops.payment,
            onAuthorize: window.xprops.onAuthorize,
            onCancel:    window.xprops.onCancel,
            onError:     window.xprops.onError
        }).renderTo(window.parent.parent, 'body', CONTEXT.POPUP);
    });

} else if (action === 'error') {

    window.xprops.payment().then(() => {
        window.xprops.onError(new Error('something went wrong'));
    });

} else if (action === 'init') {
    
    window.xprops.payment().then(() => {
        if (onInit) {
            return onInit(actions);
        }
    });
}

if (onRender) {
    onRender(actions);
}
