import type { Configuration as DevServerConfigutation } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigutation {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // чтобы роутинг работал через главную страницу и не вылезала ошибка
        hot: true,
        client: {
            overlay: false,
        },
    };
}
