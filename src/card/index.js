/* @flow */
/* @jsx jsxDom */
/* eslint max-lines: 0 */

import { ZalgoPromise } from 'zalgo-promise/src';
import { create  } from 'zoid/src';
import { type Component } from 'zoid/src/component/component';
import type { CrossDomainWindowType } from 'cross-domain-utils/src';

import { config } from '../config';
import { getButtonSessionID, getBrowserLocale, getSessionID } from '../lib';

type CardOptions = {
    client : {
        [string] : (string | ZalgoPromise<string>)
    },
    env? : string,
    locale? : string,
    logLevel : string,
    awaitPopupBridge : Function,
    onAuthorize : ({ returnUrl : string }, { redirect : (?CrossDomainWindowType, ?string) => ZalgoPromise<void> }) => ?ZalgoPromise<void>,
    onCancel? : ({ cancelUrl : string }, { redirect : (?CrossDomainWindowType, ?string) => ZalgoPromise<void> }) => ?ZalgoPromise<void>,
    onEvent? : ({ type : string, payload : Object }) => void,
    meta : Object,
    commit : boolean,
    token : string
};

export const Card : Component<CardOptions> = create({
    tag:  'card-fields',
    name: 'ppcard',

    buildUrl(props) : string {
        let env = props.env || config.env;
        return config.inlinedCardFieldUrls[env];
    },

    contexts: {
        iframe: true,
        popup:  false
    },

    props: {
        sessionID: {
            type:     'string',
            required: false,
            def() : string {
                return getSessionID();
            },
            queryParam: true
        },


        token: {
            type:       'string',
            required:   true,
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

        commit: {
            type:       'boolean',
            required:   false,
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

        locale: {
            type:          'string',
            required:      false,
            queryParam:    'locale.x',
            allowDelegate: true,

            def() : string {
                let { lang, country } = getBrowserLocale();
                return `${ lang }_${ country }`;
            }
        },

        initialFormValues: {
            type:     'object',
            required: false
        },


        onAuthorize: {
            type:     'function',
            required: true,
            once:     true
        },

        onAuth: {
            type:       'function',
            required:   false,
            sameDomain: true
        },

        onEvent: {
            type:       'function',
            required:   false,
            sameDomain: true
        },

        getState: {
            type:       'function',
            required:   false,
            sameDomain: true
        },

        dispatch: {
            type:       'object',
            required:   false,
            sameDomain: true
        },

        onCancel: {
            type:     'function',
            required: false,
            once:     true,
            noop:     true
        }
    }
});
