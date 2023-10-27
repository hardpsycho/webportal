import { Configuration } from 'webpack'
import { webpackConfigBuilder } from './config/webpack/webpackConfigBuilder'
import { ConfigOptions, WebpackArgs } from './config/webpack/types'
import path from 'path'

export default function (args: WebpackArgs) {
    const configOptions: ConfigOptions = {
        pathToEntry: path.resolve('src', 'index.tsx'),
        pathToOutputFolder: path.resolve('build'),
        pathToIndexHtml: path.resolve('public', 'index.html'),
        mode: args.mode || 'development',
        port: Number(args.port) || 3000,
        isDev: args.mode ? args.mode === 'development' : true
    }

    const config: Configuration = webpackConfigBuilder(configOptions)
    return config
}
