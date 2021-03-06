/* @flow */

import { max, perc } from 'belter/src';
import { LOGO_CLASS } from '@paypal/sdk-logos/src';

import { BUTTON_SHAPE, BUTTON_LAYOUT, BUTTON_NUMBER, BUTTON_LABEL, CLASS } from '../../../constants';
import { BUTTON_SIZE_STYLE, BUTTON_RELATIVE_STYLE } from '../../config';

const DUAL_BUTTON_MIN_RATIO = 2.8;

export function buttonResponsiveStyle({ height, cardNumber = 4 } : { height? : ?number, cardNumber? : number }) : string {

    return Object.keys(BUTTON_SIZE_STYLE).map(size => {

        const style = BUTTON_SIZE_STYLE[size];
        const buttonHeight = height || style.defaultHeight;
        const minDualWidth = Math.round(buttonHeight * DUAL_BUTTON_MIN_RATIO * 2);

        return `

            @media only screen and (min-width: ${ style.minWidth }px) {

                .${ CLASS.CONTAINER } {
                    min-width: ${ style.minWidth }px;
                    max-width: ${ style.maxWidth }px;
                    font-size: ${ max(perc(buttonHeight, 32), 10) }px;
                }

                .${ CLASS.BUTTON }:not(.${ LOGO_CLASS.CARD }) {
                    height: ${ buttonHeight }px;
                    min-height: ${ height || style.minHeight }px;
                    max-height: ${ height || style.maxHeight }px;
                }

                .${ LOGO_CLASS.LOGO } {
                    height: ${ perc(buttonHeight, 35) + 5 }px;
                    max-height: ${ perc(buttonHeight, 60) }px;
                    min-height: ${ perc(buttonHeight, 40) }px;
                }
                
                .${ LOGO_CLASS.LOGO }.${ LOGO_CLASS.LOGO }-${ BUTTON_LABEL.EPS },
                .${ LOGO_CLASS.LOGO }.${ LOGO_CLASS.LOGO }-${ BUTTON_LABEL.MYBANK } {
                    height: ${ perc(buttonHeight, 50) + 5 }px;
                    max-height: ${ perc(buttonHeight, 70) }px;
                    min-height: ${ perc(buttonHeight, 40) }px;
                }

                .${ CLASS.BUTTON }.${ CLASS.SHAPE }-${ BUTTON_SHAPE.PILL }:not(${ CLASS.LABEL }-${ LOGO_CLASS.CARD }) {
                    border-radius: ${ Math.ceil(buttonHeight / 2) }px;
                }

                .${ CLASS.BUTTON }.${ CLASS.SHAPE }-${ BUTTON_SHAPE.RECT } {
                    border-radius: 4px;
                }

                .${ CLASS.BUTTON }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.VERTICAL } {
                    margin-bottom: ${ perc(buttonHeight, BUTTON_RELATIVE_STYLE.VERTICAL_MARGIN) }px;
                }

                .${ CLASS.BUTTON }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.VERTICAL }:last-of-type {
                    margin-bottom: 0;
                }
                
                .${ CLASS.TAGLINE } {
                    display: ${ style.allowTagline ? 'block' : 'none' };
                    height: ${ perc(buttonHeight, BUTTON_RELATIVE_STYLE.TAGLINE) }px;
                    line-height: ${ perc(buttonHeight, BUTTON_RELATIVE_STYLE.TAGLINE) }px;
                }

<<<<<<< HEAD:src/button/template/componentStyle/responsive.js
                .${ CLASS.FUNDINGICONS } {
                    display: ${ style.allowFunding ? 'block' : 'none' };
                    height: ${ perc(buttonHeight, BUTTON_RELATIVE_STYLE.FUNDINGICONS) }px;
                }

                .${ CLASS.CARD } {
=======
                .${ LOGO_CLASS.CARD } {
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0:src/buttons/template/componentStyle/responsive.js
                    display: inline-block;
                }

                .${ CLASS.BUTTON } .${ LOGO_CLASS.CARD } {
                    width: ${ (90 / cardNumber).toFixed(2) }%;
                    max-width: ${ perc(buttonHeight, 160) }px;
                    margin-top: 0;
                    margin-left: ${ (5 / cardNumber).toFixed(2) }%;
                    margin-right: ${ (5 / cardNumber).toFixed(2) }%;
                }

                .${ CLASS.BUTTON } .${ LOGO_CLASS.CARD } img {
                    width: 100%;
                }
            }

            @media only screen and (min-width: ${ style.minWidth }px) and (max-width: ${ minDualWidth }px) {

                .${ CLASS.BUTTON }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.HORIZONTAL }.${ CLASS.NUMBER }-${ BUTTON_NUMBER.MULTIPLE }.${ CLASS.NUMBER }-0 {
                    width: 100%;
                    margin-right: 0;
                }

                .${ CLASS.BUTTON }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.HORIZONTAL }.${ CLASS.NUMBER }-${ BUTTON_NUMBER.MULTIPLE }.${ CLASS.NUMBER }-1 {
                    display: none;
                }

                .${ CLASS.CONTAINER }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.HORIZONTAL }.${ CLASS.NUMBER }-${ BUTTON_NUMBER.MULTIPLE } .${ CLASS.TAGLINE } {
                    display: none;
                }
            }

            @media only screen and (min-width: ${ max(style.minWidth, minDualWidth) }px) {

                .${ CLASS.BUTTON }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.HORIZONTAL }.${ CLASS.NUMBER }-${ BUTTON_NUMBER.MULTIPLE }.${ CLASS.NUMBER }-0 {
                    display: inline-block;
                    width: calc(50% - 2px);
                    margin-right: 4px;
                }

                .${ CLASS.BUTTON }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.HORIZONTAL }.${ CLASS.NUMBER }-${ BUTTON_NUMBER.MULTIPLE }.${ CLASS.NUMBER }-1 {
                    display: inline-block;
                    width: calc(50% - 2px);
                }

                .${ CLASS.CONTAINER }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.HORIZONTAL }.${ CLASS.NUMBER }-${ BUTTON_NUMBER.MULTIPLE } .${ CLASS.TAGLINE } {
                    display: block;
                }
            }
        `;

    }).join('\n');
}
