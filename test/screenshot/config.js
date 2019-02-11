/* @flow */

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_SHAPE, BUTTON_LAYOUT } from '../../src/constants';

const RESPONSIVE_WIDTHS = [ 144, 222, 465, 670 ];

type ButtonConfig = {|
    filename? : string,
    userAgent? : string,
    container? : {
        width : number
    },
    button : {
        locale? : string,
        style? : {
            color? : string,
            size? : string,
            shape? : string,
            label? : string,
            period? : number
        }
    }
|};

export const buttonConfigs : Array<ButtonConfig> = [];

buttonConfigs.push({
    button: {}
});

for (const label of [ BUTTON_LABEL.PAYPAL ]) {

    for (const width of RESPONSIVE_WIDTHS) {
        buttonConfigs.push({
            container: {
                width
            },
            button: {
                style: {
                    label
                }
            }
        });
    }

    for (const color of [ BUTTON_COLOR.GOLD, BUTTON_COLOR.BLUE, BUTTON_COLOR.SILVER ]) {
        buttonConfigs.push({
            button: {
                style: {
                    label,
                    color
                }
            }
        });
    }

    for (const shape of [ BUTTON_SHAPE.RECT, BUTTON_SHAPE.PILL ]) {
        buttonConfigs.push({
            button: {
                style: {
                    label,
                    shape
                }
            }
        });

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    shape,
                    height: 45
                }
            }
        });
    }

    for (const layout of [ BUTTON_LAYOUT.VERTICAL, BUTTON_LAYOUT.HORIZONTAL ]) {
        buttonConfigs.push({
<<<<<<< HEAD
            userAgent: 'iphone6',
            container: {
                width: 340
            },
=======
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
            button: {
                style: {
                    label,
                    layout
                }
            }
        });
    }

    buttonConfigs.push({
        button: {
            style: {
                label,
                layout:  'horizontal',
                tagline: false
            }
        }
    });

    buttonConfigs.push({
<<<<<<< HEAD
        userAgent: 'iphone6',
        button:    {
=======
        container: {
            width: 340
        },
        button: {
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
            style: {
                label,
                height: 44
            }
        }
    });

    buttonConfigs.push({
<<<<<<< HEAD
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.VENMO, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.VENMO, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'pt_BR',
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'de_DE',
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.ELV, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'de_DE',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.ELV, FUNDING.GIROPAY, FUNDING.SOFORT ]
            }
        }
    });


    buttonConfigs.push({
        button: {
            locale: 'nl_NL',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.IDEAL, FUNDING.SOFORT, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_BE',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.BANCONTACT, FUNDING.SOFORT ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_AT',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.EPS, FUNDING.SOFORT ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_AT',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed:    [ FUNDING.EPS, FUNDING.SOFORT ],
                disallowed: [ FUNDING.ELV ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_GB',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_IT',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.SOFORT, FUNDING.MYBANK ]
=======
        container: {
            width: 550
        },
        button: {
            style: {
                label,
                height: 55
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_PL',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.P24 ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_FI',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.ZIMPLER ]
            }
        }
    });

    // buttonConfigs.push({
    //     button: {
    //         locale: 'zh_CN',
    //         commit: true,
    //         style:  {
    //             layout:     'vertical'
    //         }
    //     }
    // });
}
