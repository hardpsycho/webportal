import { ConfigOptions } from "../types";

export function devServerBuilder(configOptions: ConfigOptions) {
    return {
        port: configOptions.port
    }
}