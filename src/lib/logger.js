/* @flow */

import { getLogger } from '@paypal/sdk-client/src';
import { getQueryParam } from 'belter/src';
import { FPTI_KEY } from '@paypal/sdk-constants/src';

import { FPTI_CONTEXT_TYPE } from '../constants';

<<<<<<< HEAD
import { getSessionID, getButtonSessionID } from './session';
import { proxyMethod } from './proxy';
import { once, isPayPalDomain } from './util';
import { getQueryParam } from './dom';
=======
import { getButtonSessionID } from './session';
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

function getRefererDomain() : string {
    return (window.xchild && window.xchild.getParentDomain)
        ? window.xchild.getParentDomain()
        : window.location.host;
}

function getOrderID() : ?string {
    if (window.root && window.root.token) {
        return window.root.token;
    }

<<<<<<< HEAD
    if (isPayPalDomain()) {
        let queryToken = getQueryParam('token');
=======
    const queryToken = getQueryParam('token');
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

        if (queryToken) {
            return queryToken;
        }
    }
}

export function setupLogger() {
    getLogger().addTrackingBuilder(() => {
        const orderID = getOrderID();
        const buttonSessionID = getButtonSessionID();

        let contextType;
        let contextID;

        if (orderID) {
            contextType = FPTI_CONTEXT_TYPE.ORDER_ID;
            contextID = orderID;
        } else if (buttonSessionID) {
            contextType = FPTI_CONTEXT_TYPE.BUTTON_SESSION_ID;
            contextID = buttonSessionID;
        }

        return {
            [FPTI_KEY.CONTEXT_TYPE]:       contextType,
            [FPTI_KEY.CONTEXT_ID]:         contextID,
            [FPTI_KEY.BUTTON_SESSION_UID]: buttonSessionID,
            [FPTI_KEY.TOKEN]:              orderID,
            [FPTI_KEY.REFERER]:            getRefererDomain()
        };
    });
}
