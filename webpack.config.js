const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: './src/app/main.ts',
    },
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ],
        }),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
