/* @flow */
/* eslint import/no-nodejs-modules: off, import/no-default-export: off */

import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';

import { testGlobals } from './test/globals';
import globals from './globals';

const MODULE_NAME = 'paypal';

export const WEBPACK_CONFIG_TEST = getWebpackConfig({
    entry:         './test/paypal.js',
    libraryTarget: 'window',

    test:   true,
    debug:  true,
    minify: true,

    vars: {
        ...globals,
<<<<<<< HEAD
        ...vars,

        // $FlowFixMe
        __PAYPAL_CHECKOUT__: {
            ...globals.__PAYPAL_CHECKOUT__,
            ...vars.__PAYPAL_CHECKOUT__
        },
        
        __FILE_NAME__: filename
    };
    
    if (minify) {
        vars.__MIN__ = true;
    } else {
        vars.__MIN__ = false;
    }

    if (test) {
        vars.__TEST__ = true;
    } else {
        vars.__TEST__ = false;
    }

    vars.__DEBUG__ = false;

    const plugins = [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: (chunkname ? 2 : 1)
        }),
        new webpack.DefinePlugin(jsonifyPrimitives(vars)),
        new webpack.NamedModulesPlugin(),
        new UglifyJSPlugin({
            test:          /\.js$/,
            uglifyOptions: {
                warnings: false,
                compress: {
                    sequences: minify
                },
                output: {
                    beautify: !minify
                },
                mangle: minify
            },
            parallel:  true,
            sourceMap: true,
            cache:     true
        }),
        new CircularDependencyPlugin({
            failOnError: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ];

    if (!test) {
        plugins.push(new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        }));
    }

    /*

    if (chunkname) {
        plugins.push(new WebpackPromiseShimPlugin({
            module: 'zalgo-promise/src',
            key:    'ZalgoPromise'
        }));
    }

    */

    let config : Object = {
        module: {
            rules: [
                {
                    test:   /sinon\.js$/,
                    loader: 'imports?define=>false,require=>false'
                },
                {
                    test:    /\.jsx?$/,
                    exclude: /(sinon|chai)/,
                    loader:  'babel-loader',
                    options: babelConfig
                },
                {
                    test:   /\.(html?|css|json|svg)$/,
                    loader: 'raw-loader'
                }
            ]
        },
        bail:    true,
        resolve: {
            extensions: [ '.js', '.jsx' ]
        },
        plugins,
        node: {
            console:      false,
            global:       false,
            process:      false,
            __filename:   false,
            __dirname:    false,
            Buffer:       false,
            setImmediate: false
        }
    };

    if (src) {
        config.entry = path.resolve(src);
    }

    if (filename) {
        config.output = {
            path:           path.resolve('./dist'),
            filename,
            libraryTarget:  target,
            umdNamedDefine: true,
            library:        modulename,
            chunkFilename:  chunkname,
            pathinfo:       false,
            jsonpFunction:  '__paypal_checkout_jsonp__',
            publicPath:     'https://www.paypalobjects.com/api/'
        };
    }

    if (test) {
        config.devtool = 'inline-source-map';
    }

    return config;
}

export let BASE = getWebpackConfig({
    src:       './src/load.js',
    filename:  `${ FILE_NAME }.js`
});

export let MAJOR = getWebpackConfig({
    src:      './src/load.js',
    filename: `${ FILE_NAME }.v${ globals.__PAYPAL_CHECKOUT__.__MAJOR_VERSION__ }.js`,
    vars:     {
        __POST_ROBOT__: {
            ...globals.__POST_ROBOT__,
            __IE_POPUP_SUPPORT__: true
=======
        ...testGlobals,
        __paypal_checkout__: {
            ...testGlobals.__paypal_checkout__,
            serverConfig: {
                fundingEligibility: () => 'window.__TEST_FUNDING_ELIGIBILITY__'
            }
>>>>>>> 1e19587bbe0af79aef5d15f4d5aba17962e93aa0
        },
        __PAYPAL_CHECKOUT__: {
            __REMEMBERED_FUNDING__: () => 'window.__TEST_REMEMBERED_FUNDING__'
        },
        __CLIENT_ID__:   'abcxyz123',
        __MERCHANT_ID__: 'abc'
    }
});

export const WEBPACK_CONFIG_BUTTON_RENDER = getWebpackConfig({
    entry:         './src/buttons/template/componentTemplate',
    filename:      'button.js',
    modulename:    MODULE_NAME,
    web:           false,
    libraryTarget: 'commonjs2',
    vars:          {
        ...globals,
        __paypal_checkout__: {}
    }
});

export default [ WEBPACK_CONFIG_BUTTON_RENDER ];
