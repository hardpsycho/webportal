import { ModuleOptions, RuleSetRule } from "webpack";

export function moduleBuilder(): ModuleOptions {
    const tsLoaderRule: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return {
        rules: [
            tsLoaderRule
        ],
    }
}