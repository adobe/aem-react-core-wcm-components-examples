
'use strict';


const path = require('path');
const webpack = require('webpack');

const paths = require('./paths');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const aliases = require("./aliases");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = paths.publicPath;
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.

const isServer =  process.env.server &&  process.env.server === 'true';
const tsConfigFile = isServer ? "../tsconfig.server.json" : "../tsconfig.json";



// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;


// This is the development configuration.
// It is focused on developer experience and fast rebuilds.
// The production configuration is different and lives in a separate file.
module.exports = {
    mode: 'development',
    bail: true,
    devtool: 'inline-source-map',

    entry: [
        paths.appIndexJs,
    ],
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[hash:8].js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: info =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },


    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: 'bootstrap',
        },
    },
    resolve: {

        extensions: ['.ts', '.tsx', '.js'],

        // This allows you to set a fallback for where Webpack should look for modules.
        // We placed these paths second because we want `node_modules` to "win"
        // if there are any conflicts. This matches Node resolution mechanism.
        // https://github.com/facebook/create-react-app/issues/253
        modules: ['node_modules'],
        alias: aliases,
    },

    module: {
        strictExportPresence: true,
        rules: [
            // Disable require.ensure as it's not a standard language feature.
            { parser: { requireEnsure: false } },

            // First, run the linter.
            // It's important to do this before Babel processes the JS.
            {
                test: /\.(js|mjs|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: require.resolve('react-dev-utils/eslintFormatter'),
                            eslintPath: require.resolve('eslint'),

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.appSrc,
            },
            {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|dist)/,
                loader:  require.resolve('ts-loader'),
                enforce: 'pre',
            },
            {
                test: /\.(ts|tsx|js|mjs|jsx)$/,
                include: paths.appSrc,
                enforce: 'post',
                loader: require.resolve('babel-loader'),
                options: {
                    customize: require.resolve(
                        'babel-preset-react-app/webpack-overrides'
                    ),

                    presets: [
                        require.resolve("@babel/preset-typescript")
                    ],
                    plugins: [
                        ['@babel/plugin-proposal-class-properties'],
                        ['@babel/plugin-proposal-object-rest-spread'],
                        [
                            require.resolve('babel-plugin-named-asset-import'),
                            {
                                loaderMap: {
                                    svg: {
                                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                                    },
                                },
                            }
                        ],
                        ['universal-import'],
                    ],

                    cacheDirectory: true,
                    cacheCompression: false,
                },
            },
            {
                // "oneOf" will traverse all following loaders until one will
                // match the requirements. When no loader matches it will fall
                // back to the "file" loader at the end of the loader list.
                oneOf: [
                    // inline SVG assets


                    // Process any JS outside of the app with Babel.
                    // Unlike the application JS, we only compile the standard ES features.
                    {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            configFile: false,
                            compact: false,
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app/dependencies'),
                                    { helpers: true },
                                ],
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            sourceMaps: false,
                        },
                    },
                    {

                        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },

        ],
    },
    plugins: [
        new StatsWriterPlugin({
            stats: { publicPath: true, chunkGroups: true },
            fields: ['assetsByChunkName', 'assets', 'hash', 'publicPath', 'namedChunkGroups']
        }),

        new ModuleNotFoundPlugin(paths.appPath),

        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new WebpackAssetsManifest({
            entrypoints:true,
            output: "asset-manifest.json"
        }),
    ].filter(Boolean),

    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    // Turn off performance processing because we utilize
    // our own hints via the FileSizeReporter
    performance: false,
};