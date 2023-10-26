const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
    },
}
