/* @flow */

import './tests';
import { setSDKScriptUrl } from './tests/common';

window.mockDomain = 'mock://www.merchant-site.com';

<<<<<<< HEAD
window.paypal.setup({
    env: 'test'
});

const MAX_OVERALL_MEMORY = 1400;
const MAX_TEST_MEMORY = 80;
=======
const MEM_PER_TEST = 2;
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

const memoryReported = (window.performance && window.performance.memory &&
                      window.performance.memory.usedJSHeapSize);

function getMemory() : number {
    return window.performance.memory.usedJSHeapSize / Math.pow(2, 20);
}

let maxMem = getMemory() * 2;
let originalUserAgent;

beforeEach(() => {
    if (memoryReported) {
        maxMem += MEM_PER_TEST;
    }

    // eslint-disable-next-line unicorn/prefer-add-event-listener
    window.onerror = () => {
        // pass
    };

    window.__CACHE_START_TIME__ = Date.now();
    originalUserAgent = window.navigator.userAgent;

    setSDKScriptUrl();

    delete window.__test__;
});

afterEach(() => {
    window.localStorage.clear();
    delete window.__paypal_storage__;
    delete window.__paypal_global__;

    window.location.hash = '';

    Object.defineProperty(window.navigator, 'userAgent', {
        value:        originalUserAgent,
        configurable: true
    });

    delete window.navigator.mockUserAgent;
    delete window.document.documentMode;

    return window.paypal.destroyAll();
});

after(() => {
    if (memoryReported) {
        if (window.gc) {
            window.gc();
        }

        const mem = getMemory();

        if (mem > maxMem) {
            // throw new Error(`Overall memory exceeded ${ parseInt(maxMem, 10) }mb - ${ mem.toFixed(2) }mb used`);
        }
    }
});
