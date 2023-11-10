import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import { ConfigOptions } from '../types'

export function pluginBuilder(configOptions: ConfigOptions): WebpackPluginInstance[] {
    const plugins = [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({ template: configOptions.pathToIndexHtml }),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            WP_DEV: JSON.stringify(configOptions.isDev)
        }),
        new CopyPlugin({
            patterns: [{ from: 'public/locales', to: './locales' }]
        })
    ]

    if (configOptions.isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins
}
