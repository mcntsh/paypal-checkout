/* eslint import/no-commonjs: off, flowtype/require-valid-file-annotation: off, flowtype/require-return-type: off */

<<<<<<< HEAD
let postRobotGlobals = require('post-robot/globals');
let zoidGlobals = require('zoid/globals');
=======
const postRobotGlobals = require('post-robot/globals');
const zoidGlobals = require('zoid/globals');
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0

module.exports = {
    
    __ZOID__: {
        ...zoidGlobals.__ZOID__,
        __DEFAULT_CONTAINER__: false,
        __DEFAULT_PRERENDER__: false,
        __FRAMEWORK_SUPPORT__: true
    },
    
    __POST_ROBOT__: {
        ...postRobotGlobals.__POST_ROBOT__,
        __IE_POPUP_SUPPORT__: false
    },

<<<<<<< HEAD
function getNextMajorVersion() {
    return getNextVersion().split('.')[0];
}

function getNextMinorVersion() {
    return getNextVersion();
}

module.exports = Object.assign({}, postRobotGlobals, zoidGlobals, {
=======
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
    __PAYPAL_CHECKOUT__: {
        __REMEMBERED_FUNDING__: []
    }
};
