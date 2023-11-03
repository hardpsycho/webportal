import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack'

import { ConfigOptions } from '../types'

export function pluginBuilder(configOptions: ConfigOptions): WebpackPluginInstance[] {
    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({ template: configOptions.pathToIndexHtml }),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            WP_DEV: configOptions.isDev
        })
    ]
}
