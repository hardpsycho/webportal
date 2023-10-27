import path from 'path'

import { ResolveOptions } from 'webpack'

export function resolveBuilder(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            path.resolve(__dirname, '../../..', 'src'),
            path.resolve(__dirname, '../../..'),
            'node_modules'
        ],
        alias: {
            '@config': [path.resolve(__dirname, '../../..', 'config/')],
            '@public': [path.resolve(__dirname, '../../..', 'public/')],
            '@app': [path.resolve(__dirname, '../../..', 'src/app/')],
            '@shared': [path.resolve(__dirname, '../../..', 'src/shared/')],
            '@entities': [path.resolve(__dirname, '../../..', 'src/entities/')],
            '@features': [path.resolve(__dirname, '../../..', 'src/features/')],
            '@pages': [path.resolve(__dirname, '../../..', 'src/pages/')],
            '@widgets': [path.resolve(__dirname, '../../..', 'src/widgets/')],
            '@layout': [path.resolve(__dirname, '../../..', 'src/layout/')]
        },
        preferAbsolute: true
    }
}
