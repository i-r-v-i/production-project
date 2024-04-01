import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    // config.resolve?.modules?.push(paths.src);
    config.resolve?.modules?.push(path.relative(__dirname, '../../src'), 'node_modules');
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules
            ? config.module.rules.map((rule: any | '...') => {
                if (rule !== '...' && rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
                    return { ...rule, exclude: /|.svg$/i };
                }
                return rule;
            }) : [];
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
    }));
    return config;
};
