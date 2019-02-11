/* @flow */

<<<<<<< HEAD
import type { Enum } from '../types';

type BUTTON_STYLE_OPTIONS_ENUM =
    Enum<'label' | 'size' | 'shape' | 'color' | 'layout' |
    'fundingicons' | 'maxbuttons' | 'branding' | 'tagline' | 'height' | 'installmentperiod'>;

export const BUTTON_STYLE_OPTIONS : BUTTON_STYLE_OPTIONS_ENUM = {
    LABEL:              'label',
    SIZE:               'size',
    SHAPE:              'shape',
    COLOR:              'color',
    LAYOUT:             'layout',
    MAXBUTTONS:         'maxbuttons',
    FUNDINGICONS:       'fundingicons',
    BRANDING:           'branding',
    TAGLINE:            'tagline',
    HEIGHT:             'height',
    INSTALLMENTPERIOD:  'installmentperiod'
};

type BUTTON_LABEL_ENUM =
    Enum<'paypal' | 'checkout' | 'pay' | 'credit' |
    'card' | 'buynow' | 'installment' | 'venmo' | 'ideal' | 'elv' | 'bancontact' | 'giropay' | 'sofort' | 'eps' | 'mybank' | 'p24' | 'zimpler'>;

export const BUTTON_LABEL : BUTTON_LABEL_ENUM = {
    PAYPAL:      'paypal',
    CHECKOUT:    'checkout',
    PAY:         'pay',
    CREDIT:      'credit',
    CARD:        'card',
    BUYNOW:      'buynow',
    INSTALLMENT: 'installment',
    VENMO:       'venmo',
    IDEAL:       'ideal',
    ELV:         'elv',
    BANCONTACT:  'bancontact',
    GIROPAY:     'giropay',
    SOFORT:      'sofort',
    EPS:         'eps',
    MYBANK:      'mybank',
    P24:         'p24',
    ZIMPLER:     'zimpler'
};

type BUTTON_COLOR_ENUM =
    Enum<'gold' | 'blue' | 'silver' | 'black' | 'darkblue' | 'transparent' | 'white'>;

export const BUTTON_COLOR : BUTTON_COLOR_ENUM = {
    GOLD:        'gold',
    BLUE:        'blue',
    SILVER:      'silver',
    BLACK:       'black',
    DARKBLUE:    'darkblue',
    WHITE:       'white',
    TRANSPARENT: 'transparent'
};

type BUTTON_LOGO_COLOR_ENUM =
    Enum<'blue' | 'white' | 'black' | 'any'>;

export const BUTTON_LOGO_COLOR : BUTTON_LOGO_COLOR_ENUM = {
    BLUE:  'blue',
    WHITE: 'white',
    BLACK: 'black',
    ANY:   'any'
};

type BUTTON_SIZE_ENUM =
    Enum<'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'responsive'>;

export const BUTTON_SIZE : BUTTON_SIZE_ENUM = {
    TINY:       'tiny',
    SMALL:      'small',
    MEDIUM:     'medium',
    LARGE:      'large',
    HUGE:       'huge',
    RESPONSIVE: 'responsive'
};

type BUTTON_TAGLINE_COLOR_ENUM =
    Enum<'black' | 'blue'>;

export const BUTTON_TAGLINE_COLOR : BUTTON_TAGLINE_COLOR_ENUM = {
    BLACK: 'black',
    BLUE:  'blue'
};

type BUTTON_SHAPE_ENUM =
    Enum<'pill' | 'rect'>;

export const BUTTON_SHAPE : BUTTON_SHAPE_ENUM = {
    PILL: 'pill',
    RECT: 'rect'
};

type BUTTON_BRANDING_ENUM =
    Enum<'branded' | 'unbranded'>;

export const BUTTON_BRANDING : BUTTON_BRANDING_ENUM = {
    BRANDED:   'branded',
    UNBRANDED: 'unbranded'
};

type BUTTON_LAYOUT_ENUM =
    Enum<'horizontal' | 'vertical'>;

export const BUTTON_LAYOUT : BUTTON_LAYOUT_ENUM = {
    HORIZONTAL: 'horizontal',
    VERTICAL:   'vertical'
};

type BUTTON_NUMBER_ENUM =
    Enum<'single' | 'multiple'>;

export const BUTTON_NUMBER : BUTTON_NUMBER_ENUM = {
    SINGLE:   'single',
    MULTIPLE: 'multiple'
};

type BUTTON_LOGO_ENUM =
    Enum<'pp' | 'paypal' | 'venmo' | 'credit' | 'ideal' | 'elv' | 'bancontact' | 'giropay' | 'sofort' | 'eps' | 'mybank' | 'p24' | 'zimpler'>;

export const BUTTON_LOGO : BUTTON_LOGO_ENUM = {
    PP:         'pp',
    PAYPAL:     'paypal',
    VENMO:      'venmo',
    CREDIT:     'credit',
    IDEAL:      'ideal',
    ELV:        'elv',
    BANCONTACT: 'bancontact',
    GIROPAY:    'giropay',
    SOFORT:     'sofort',
    EPS:        'eps',
    MYBANK:     'mybank',
    P24:        'p24',
    ZIMPLER:    'zimpler'
=======
export const BUTTON_LABEL = {
    PAYPAL:      ('paypal' : 'paypal'),
    CHECKOUT:    ('checkout' : 'checkout'),
    PAY:         ('pay' : 'pay'),
    CREDIT:      ('credit' : 'credit'),
    CARD:        ('card' : 'card'),
    INSTALLMENT: ('installment' : 'installment'),
    VENMO:       ('venmo' : 'venmo'),
    IDEAL:       ('ideal' : 'ideal'),
    SEPA:        ('sepa' : 'sepa'),
    BANCONTACT:  ('bancontact' : 'bancontact'),
    GIROPAY:     ('giropay' : 'giropay'),
    SOFORT:      ('sofort' : 'sofort'),
    EPS:         ('eps' : 'eps'),
    MYBANK:      ('mybank' : 'mybank'),
    P24:         ('p24' : 'p24'),
    ZIMPLER:     ('zimpler' : 'zimpler'),
    WECHATPAY:   ('wechatpay' : 'wechatpay')
};

export const BUTTON_COLOR = {
    GOLD:        ('gold' : 'gold'),
    BLUE:        ('blue' : 'blue'),
    SILVER:      ('silver' : 'silver'),
    DARKBLUE:    ('darkblue' : 'darkblue'),
    TRANSPARENT: ('transparent' : 'transparent')
};

export const BUTTON_SIZE = {
    TINY:       ('tiny' : 'tiny'),
    SMALL:      ('small' : 'small'),
    MEDIUM:     ('medium' : 'medium'),
    LARGE:      ('large' : 'large'),
    HUGE:       ('huge' : 'huge'),
    RESPONSIVE: ('responsive' : 'responsive')
};

export const BUTTON_TAGLINE_COLOR = {
    BLACK: ('black' : 'black'),
    BLUE:  ('blue' : 'blue')
};

export const BUTTON_SHAPE = {
    PILL: ('pill' : 'pill'),
    RECT: ('rect' : 'rect')
};

export const BUTTON_LAYOUT = {
    HORIZONTAL: ('horizontal' : 'horizontal'),
    VERTICAL:   ('vertical' : 'vertical')
};

export const BUTTON_NUMBER = {
    SINGLE:   ('single' : 'single'),
    MULTIPLE: ('multiple' : 'multiple')
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
};
