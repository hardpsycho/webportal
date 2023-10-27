import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ProgressPlugin, WebpackPluginInstance } from 'webpack'

import { ConfigOptions } from '../types'

export function pluginBuilder(configOptions: ConfigOptions): WebpackPluginInstance[] {
    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({ template: configOptions.pathToIndexHtml }),
        new MiniCssExtractPlugin()
    ]
}
