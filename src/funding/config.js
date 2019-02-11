/* @flow */

import { FUNDING } from '@paypal/sdk-constants/src';
import { inlineMemoize } from 'belter/src';

import { type FundingSourceConfig } from './common';
import { getPayPalConfig } from './paypal';
import { getVenmoConfig } from './venmo';
import { getCreditConfig } from './credit';
import { getCardConfig } from './card';
import { getIdealConfig } from './ideal';
import { getSepaConfig } from './sepa';
import { getBancontactConfig } from './bancontact';
import { getGiropayConfig } from './giropay';
import { getSofortConfig } from './sofort';
import { getEpsConfig } from './eps';
import { getMybankConfig } from './mybank';
import { getP24Config } from './p24';
import { getZimplerConfig } from './zimpler';
import { getWechatpayConfig } from './wechatpay';

export const FUNDING_PRIORITY = [
    FUNDING.PAYPAL,
    FUNDING.VENMO,
    FUNDING.CREDIT,
    FUNDING.CARD,
    FUNDING.IDEAL,
    FUNDING.SEPA,
    FUNDING.BANCONTACT,
    FUNDING.GIROPAY,
    FUNDING.EPS,
    FUNDING.SOFORT,
    FUNDING.MYBANK,
    FUNDING.P24,
<<<<<<< HEAD
    FUNDING.ZIMPLER
    
];

export const FUNDING_ORDER = [
    FUNDING.PAYPAL,
    FUNDING.VENMO,
    FUNDING.CREDIT,
    FUNDING.IDEAL,
    FUNDING.ELV,
    FUNDING.BANCONTACT,
    FUNDING.GIROPAY,
    FUNDING.EPS,
    FUNDING.SOFORT,
    FUNDING.MYBANK,
    FUNDING.P24,
    FUNDING.ZIMPLER,
    FUNDING.CARD
];

export const FUNDING_CONFIG = {

    [ DEFAULT ]: {
        enabled: true,

        allowOptIn:    true,
        allowOptOut:   true,
        allowRemember: true,

        allowHorizontal: true,
        allowVertical:   true,

        requireCommitAsTrue: false
    },

    [ FUNDING.PAYPAL ]: {
        default: true,

        allowOptIn:  false,
        allowOptOut: false,

        allowHorizontal: true,
        allowVertical:   true
    },

    [ FUNDING.CARD ]: {
        // $FlowFixMe
        default: (typeof __paypal_checkout__ === 'undefined' ? true : __paypal_checkout__.serverConfig.paypalMerchantConfiguration.creditCard.isPayPalBranded),

        allowHorizontal: false,
        allowVertical:   true
    },

    [ FUNDING.VENMO ]: {
        allowOptOut:      false,
        allowedCountries: [
            COUNTRY.US
        ],

        allowHorizontal: true,
        allowVertical:   true
    },

    [ FUNDING.CREDIT ]: {
        allowedCountries: [
            COUNTRY.US,
            COUNTRY.GB,
            COUNTRY.DE
        ],
        defaultVerticalCountries: [
            COUNTRY.US
        ],
        platforms: [
            PLATFORM.MOBILE
        ],

        allowHorizontal: true,
        allowVertical:   true,
        allowRemember:   false
    },

    [ FUNDING.IDEAL ]: {
        allowedCountries: [
            COUNTRY.NL
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    },

    [ FUNDING.ELV ]: {
        allowedCountries: [
            COUNTRY.DE,
            COUNTRY.AT
        ],
        defaultVerticalCountries: [
            COUNTRY.DE,
            COUNTRY.AT
        ],

        allowHorizontal: false,
        allowVertical:   true
    },

    [ FUNDING.BANCONTACT ]: {
        allowedCountries: [
            COUNTRY.BE
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    },

    [ FUNDING.GIROPAY ]: {
        allowedCountries: [
            COUNTRY.DE
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    },

    [ FUNDING.SOFORT ]: {
        allowedCountries: [
            COUNTRY.DE,
            COUNTRY.AT,
            COUNTRY.BE,
            COUNTRY.ES,
            COUNTRY.IT,
            COUNTRY.NL
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    },

    [ FUNDING.EPS ]: {
        allowedCountries: [
            COUNTRY.AT
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    },

    [ FUNDING.MYBANK ]: {
        allowedCountries: [
            COUNTRY.IT
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    },
    [ FUNDING.P24 ]: {
        allowedCountries: [
            COUNTRY.PL
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    },
    [ FUNDING.ZIMPLER ]: {
        allowedCountries: [
            COUNTRY.FI
        ],

        allowHorizontal: false,
        allowVertical:   true,

        requireCommitAsTrue: true
    }
};

export const CARD_CONFIG = {

    [ DEFAULT ]: {
        priority: [
            CARD.VISA,
            CARD.MASTERCARD,
            CARD.AMEX
        ]
    },

    [ COUNTRY.GB ]: {
        priority: [
            CARD.VISA,
            CARD.MASTERCARD,
            CARD.AMEX,
            CARD.DISCOVER,
            CARD.MAESTRO
        ]
    },

    [ COUNTRY.US ]: {
        priority: [
            CARD.VISA,
            CARD.MASTERCARD,
            CARD.AMEX,
            CARD.DISCOVER
        ]
    },

    [ COUNTRY.BR ]: {
        priority: [
            CARD.VISA,
            CARD.MASTERCARD,
            CARD.AMEX,
            CARD.HIPER,
            CARD.ELO
        ]
    },

    [ COUNTRY.JP ]: {
        priority: [
            CARD.VISA,
            CARD.MASTERCARD,
            CARD.AMEX,
            CARD.JCB
        ]
    },

    [ COUNTRY.CN ]: {
        priority: [
            CARD.VISA,
            CARD.MASTERCARD,
            CARD.AMEX,
            CARD.CUP
        ]
    }
};

function getConfig<T : mixed>(conf : Object, category : string, key : string, def : ?T) : T {
    let categoryConfig = conf[category];

    if (categoryConfig && categoryConfig.hasOwnProperty(key)) {
        return categoryConfig[key];
    }

    if (conf[DEFAULT] && conf[DEFAULT].hasOwnProperty(key)) {
        return conf[DEFAULT][key];
    }

    if (arguments.length >= 4) {
        // $FlowFixMe
        return def;
    }

    throw new Error(`No value found for ${ category }:${ key }`);
}

export function getFundingConfig<T : mixed>(source : string, key : string, def : ?T) : T {
    return getConfig(FUNDING_CONFIG, source, key, def);
}

export function getCardConfig<T : mixed>(source : string, key : string, def : ?T) : T {
    return getConfig(CARD_CONFIG, source, key, def);
=======
    FUNDING.ZIMPLER,
    FUNDING.WECHATPAY,
    FUNDING.CARD
];

export function getFundingConfig() : { [$Values<typeof FUNDING>] : ?FundingSourceConfig } {
    return inlineMemoize(getFundingConfig, () => {
        return {
            [ FUNDING.PAYPAL ]:     (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.paypal.eligible) ? getPayPalConfig() : null,
            [ FUNDING.VENMO ]:      (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.venmo.eligible) ? getVenmoConfig() : null,
            [ FUNDING.CREDIT ]:     (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.credit.eligible) ? getCreditConfig() : null,
            [ FUNDING.CARD ]:       (!__TREE_SHAKE__ || (__paypal_checkout__.serverConfig.fundingEligibility.card.eligible && __paypal_checkout__.serverConfig.fundingEligibility.card.branded)) ? getCardConfig() : null,
            [ FUNDING.IDEAL ]:      (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.ideal.eligible) ? getIdealConfig() : null,
            [ FUNDING.SEPA ]:       (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.sepa.eligible) ? getSepaConfig() : null,
            [ FUNDING.BANCONTACT ]: (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.bancontact.eligible) ? getBancontactConfig() : null,
            [ FUNDING.GIROPAY ]:    (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.giropay.eligible) ? getGiropayConfig() : null,
            [ FUNDING.SOFORT ]:     (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.sofort.eligible) ? getSofortConfig() : null,
            [ FUNDING.EPS ]:        (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.eps.eligible) ? getEpsConfig() : null,
            [ FUNDING.MYBANK ]:     (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.mybank.eligible) ? getMybankConfig() : null,
            [ FUNDING.P24 ]:        (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.p24.eligible) ? getP24Config() : null,
            [ FUNDING.ZIMPLER ]:    (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.zimpler.eligible) ? getZimplerConfig() : null,
            [ FUNDING.WECHATPAY ]:  (!__TREE_SHAKE__ || __paypal_checkout__.serverConfig.fundingEligibility.wechatpay.eligible) ? getWechatpayConfig() : null
        };
    });
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
}
