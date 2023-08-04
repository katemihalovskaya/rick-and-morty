const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index'),
    mode: 'development',
    module: {
        rules: [
            {
                test: [/\.css$/i],
                use: ['style-loader', 'css-loader']
            },
            {
                test: [/\.ts$/i],
                use: ['ts-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'assets/[name].[ext]',
                    },
                  },
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto',
              }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({'patterns': [
            { from:'./src/assets', to:'assets' }
        ]}),
        new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' })
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');
    
    return merge(baseConfig, envConfig);
};
