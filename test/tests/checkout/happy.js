/* @flow */
/* eslint max-lines: 0 */

import { ZalgoPromise } from 'zalgo-promise/src';
import { wrapPromise } from 'belter/src';

import { generateOrderID, runOnClick,
    createTestContainer, destroyTestContainer,
    getElementRecursive, onWindowOpen, WEBVIEW_USER_AGENT } from '../common';

describe(`paypal checkout component happy path`, () => {

<<<<<<< HEAD
    describe(`paypal checkout component happy path on ${ flow }`, () => {

        beforeEach(() => {
            createTestContainer();
            window.paypal.Checkout.contexts.iframe = (flow === 'iframe');
        });

        afterEach(() => {
            destroyTestContainer();
            window.location.hash = '';
            window.paypal.Checkout.contexts.iframe = false;
        });

        it('should render checkout, then complete the payment', (done) => {

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    payment() : string | ZalgoPromise<string> {
                        return generateECToken();
                    },

                    onAuthorize() : void {
                        return done();
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                });
            });

            testButton.click();
        });
        
        it('should render checkout, then cancel the payment', (done) => {

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    test: { action: 'cancel' },

                    payment() : string | ZalgoPromise<string> {
                        return generateECToken();
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onAuthorize to not be called'));
                    },

                    onCancel() : void {
                        return done();
                    }

                });
            });

            testButton.click();
        });

        it('should render checkout then redirect on authorize', () => {

            let token = generateECToken();

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                window.paypal.Checkout.render({

                    payment() : string | ZalgoPromise<string> {
                        return token;
                    },

                    onAuthorize(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window);
                    },

                    onCancel(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window);
                    }

                });
            });

            testButton.click();

            return onHashChange().then(urlHash => {
                assert.equal(urlHash, `#return?token=${ token }&PayerID=YYYYYYYYYYYYY`);
            }).toPromise();
        });

        it('should render checkout then redirect on authorize and await the promise', (done) => {

            let token = generateECToken();

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    payment() : string | ZalgoPromise<string> {
                        return token;
                    },

                    onAuthorize(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window).then(() => {
                            return done();
                        }).catch(done);
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }
                });
            });

            testButton.click();
        });

        it('should render checkout then redirect on authorize with a custom url', () => {

            let token = generateECToken();

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                window.paypal.Checkout.render({

                    payment() : string | ZalgoPromise<string> {
                        return token;
                    },

                    onAuthorize(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window, '#successUrl');
                    },

                    onCancel(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window, '#cancelUrl');
                    }

                });
            });

            testButton.click();

            return onHashChange().then(urlHash => {
                assert.equal(urlHash, `#successUrl`);
            }).toPromise();
        });

        it('should render checkout then redirect on cancel', () => {

            let token = generateECToken();

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                window.paypal.Checkout.render({

                    test: { action: 'cancel' },

                    payment() : string | ZalgoPromise<string> {
                        return token;
                    },

                    onAuthorize(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window);
                    },

                    onCancel(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window);
                    }

                });
            });

            testButton.click();

            return onHashChange().then(urlHash => {
                assert.equal(urlHash, `#cancel?token=${ token }`);
            }).toPromise();
        });

        it('should render checkout then redirect on cancel and await the promise', (done) => {

            let token = generateECToken();

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    test: { action: 'cancel' },

                    payment() : string | ZalgoPromise<string> {
                        return token;
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onAuthorize to not be called'));
                    },

                    onCancel(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window).then(() => {
                            return done();
                        }).catch(done);
                    }
                });
            });

            testButton.click();
        });

        it('should render checkout then redirect on cancel with a custom url', () => {

            let token = generateECToken();

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                window.paypal.Checkout.render({

                    test: { action: 'cancel' },

                    payment() : string | ZalgoPromise<string> {
                        return token;
                    },

                    onAuthorize(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window, '#successUrl');
                    },

                    onCancel(data, actions) : ZalgoPromise<void> {
                        return actions.redirect(window, '#cancelUrl');
                    }

                });
            });

            testButton.click();

            return onHashChange().then(urlHash => {
                assert.equal(urlHash, `#cancelUrl`);
            }).toPromise();
        });

        it('should render checkout, call the REST api to create a payment, then complete the payment', (done) => {

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    client: {
                        test: MERCHANT_CLIENT_ID
                    },

                    payment() : ZalgoPromise<string> {

                        let env    = this.props.env;
                        let client = this.props.client;

                        return window.paypal.rest.payment.create(env, client, {
                            transactions: [
                                {
                                    amount: { total: '1.00', currency: 'USD' }
                                }
                            ]
                        });
                    },

                    onAuthorize() : void {
                        return done();
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }
                });
            });

            testButton.click();
        });

        it('should render checkout, call the REST api to create a payment with an experience profile, then complete the payment', (done) => {

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    client: {
                        test: MERCHANT_CLIENT_ID
                    },

                    payment() : string | ZalgoPromise<string> {

                        let env    = this.props.env;
                        let client = this.props.client;

                        return window.paypal.rest.payment.create(env, client, {
                            transactions: [
                                {
                                    amount: { total: '1.00', currency: 'USD' }
                                }
                            ]
                        }, {

                            foo: 'bar'
                        });
                    },

                    onAuthorize() : void {
                        return done();
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }
                });
            });

            testButton.click();
        });

        it('should render checkout, call the billing api to create an agreement, then complete the payment', (done) => {

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    client: {
                        test: MERCHANT_CLIENT_ID
                    },

                    payment() : string | ZalgoPromise<string> {

                        let env    = this.props.env;
                        let client = this.props.client;

                        return window.paypal.rest.billingAgreement.create(env, client, {
                            plan: {
                                type: 'MERCHANT_INITIATED_BILLING'
                            }
                        });
                    },

                    onAuthorize() : void {
                        return done();
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }
                });
            });

            testButton.click();
        });

        it('should render checkout, with a promise token passed, then complete the payment', (done) => {

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    payment() : string | ZalgoPromise<string> {
                        return new ZalgoPromise(resolve => {
                            return resolve(generateECToken());
                        });
                    },

                    onAuthorize() : void {
                        return done();
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }
                });
            });

            testButton.click();
        });

        it('should render checkout with a checkout token on the correct url, then complete the payment', (done) => {

            let checkoutToken = generateECToken();

            let testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {
                return window.paypal.Checkout.render({

                    payment() : string | ZalgoPromise<string> {
                        return checkoutToken;
                    },
=======
    beforeEach(() => {
        createTestContainer();
    });
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

    afterEach(() => {
        destroyTestContainer();
    });

    it('should render checkout, then complete the payment', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                return window.paypal.Checkout({
                    createOrder: expect('createOrder', generateOrderID),
                    onApprove:   expect('onApprove'),
                    onCancel:    error('onCancel')
                }).render('body');
            });
        });
    });

    it('should render checkout, then cancel the payment', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                return window.paypal.Checkout({
                    test:        { action: 'cancel' },
                    createOrder: expect('createOrder', generateOrderID),
                    onApprove:   error('onApprove'),
                    onCancel:    expect('onCancel')
                }).render('body');
            });
        });
    });

    it('should render checkout, with a promise token passed, then complete the payment', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                return window.paypal.Checkout({
                    createOrder: expect('createOrder', () => ZalgoPromise.try(generateOrderID)),
                    onApprove:   expect('onApprove'),
                    onCancel:    error('onCancel')
                }).render('body');
            });
        });
    });

    it('should render checkout with a checkout token on the correct url, then complete the payment', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                const orderID = generateOrderID();

                return window.paypal.Checkout({
                    createOrder: expect('createOrder', () => orderID),
                    onApprove:   expect('onApprove', (data) => {
                        if (data.currentUrl.indexOf(`token=${ orderID }`) === -1) {
                            throw new Error(`Expected to find order id in url, got ${ data.currentUrl }`);
                        }

                        if (data.currentUrl.indexOf(`checkouturl=true`) === -1) {
                            throw new Error(`Expected url to contain checkouturl, got ${ data.currentUrl }`);
                        }
                    }),
                    onCancel: error('onCancel')
                }).render('body');
            });
        });
    });

    it('should render checkout, and click the close button to close the window', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                return window.paypal.Checkout({
                    test:        { action: 'init' },
                    createOrder: expect('createOrder', generateOrderID),
                    onApprove:   error('onApprove'),
                    onCancel:    expect('onCancel')
                }).render('body').then(() => {

                    // eslint-disable-next-line max-nested-callbacks
                    setTimeout(() => {
                        getElementRecursive('.paypal-checkout-close').click();
                    }, 100);
                });
            });
        });
    });

    it('should render checkout, and click the focus button to focus the popup', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                let childWindow;
                onWindowOpen().then(expect('windowOpen', win => {
                    childWindow = win;
                }));

                return window.paypal.Checkout({
                    test:        { action: 'init' },
                    createOrder: expect('createOrder', generateOrderID),
                    onApprove:   error('onApprove'),
                    onCancel:    error('onCancel')
                }).render('body').then(() => {

                    childWindow.focus = expect('windowFocus');

                    // eslint-disable-next-line max-nested-callbacks
                    setTimeout(() => {
                        getElementRecursive('.paypal-checkout-overlay').click();
                    }, 100);
                });
            });
        });
    });

    it('should render checkout, then cancel the payment by closing the window', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                return window.paypal.Checkout({
                    test: {
                        action: 'init',
                        onInit(actions) {
                            actions.close();
                        }
                    },
                    createOrder: expect('createOrder', generateOrderID),
                    onApprove:   error('onApprove'),
                    onCancel:    expect('onCancel')
                }).render('body');
            });
        }, { timeout: 5000 });
    });

    it('should render checkout to an iframe, popout, then complete the payment', () => {
        return wrapPromise(({ expect, error }) => {
            return runOnClick(() => {
                let createOrderCalls = 0;
                window.navigator.mockUserAgent = WEBVIEW_USER_AGENT;

                return window.paypal.Checkout({
                    test:        { action: 'popout' },
                    createOrder: expect('createOrder', () => {
                        createOrderCalls += 1;
                        return generateOrderID();
                    }),
                    onApprove: expect('onApprove', () => {
                        if (createOrderCalls !== 1) {
                            throw new Error(`Expected payment to be called one time, got ${ createOrderCalls } calls`);
                        }
                    }),
                    onCancel: error('onCancel')
                }).render('body', 'iframe');
            });
        }, { timeout: 8000 });
    });
});
