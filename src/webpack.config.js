import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CSSSplitWebpackPlugin from 'css-split-webpack-plugin';

module.exports = function(webpackConfig, env) {
    webpackConfig.plugins.push(new ExtractTextPlugin('index.css'));
    webpackConfig.plugins.push(new CSSSplitWebpackPlugin({ size: 3000 }));
    if (env === 'production') {
        return webpackConfig;
    }
}