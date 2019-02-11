/* @flow */

import { ZalgoPromise } from 'zalgo-promise/src';
import { send } from 'post-robot/src';

import { generateOrderID } from '../../tests/common';

window.paypal.Buttons({

    createOrder() : ZalgoPromise<string> {
        return ZalgoPromise.resolve(generateOrderID());
    },

<<<<<<< HEAD
    onAuthorize() {
        window.paypal.postRobot.send(window.top.frames[0], 'onAuthorize');
    },

    onShippingChange() {
        window.paypal.postRobot.send(window.top.frames[0], 'onShippingChange');
    }
=======
    onApprove() {
        send(window.top.frames[0], 'onApprove');
    },
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

    onShippingChange() {
        send(window.top.frames[0], 'onShippingChange');
    }

}).render(document.body).then(button => {
    button.window.document.querySelector('button').click();
});
