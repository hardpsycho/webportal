import { ModuleOptions } from "webpack";

export function moduleBuilder(): ModuleOptions {
    return {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }
}