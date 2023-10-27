import { ResolveOptions } from 'webpack'

export function resolveBuilder(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}
