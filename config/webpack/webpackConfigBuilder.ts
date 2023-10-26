import { Configuration } from "webpack";
import { pluginBuilder } from './builders/pluginBuilder';
import { moduleBuilder } from './builders/moduleBuilder';
import { resolveBuilder } from './builders/resolveBuilder';
import { outputBuilder } from './builders/outputBuilder';
import { ConfigOptions } from './types';
import { devServerBuilder } from './builders/devServerBuilder';
import 'webpack-dev-server'

export function webpackConfigBuilder(configOptions: ConfigOptions): Configuration {
    return {
        mode: configOptions.mode,
        entry: configOptions.pathToEntry,
        output: outputBuilder(configOptions),
        plugins: pluginBuilder(configOptions),
        module: moduleBuilder(),
        resolve: resolveBuilder(),
        devServer: devServerBuilder(configOptions)
    }
}