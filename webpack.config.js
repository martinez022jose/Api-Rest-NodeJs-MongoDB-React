const path = require('path');
const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');
const minicssextractplugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true', 
    entry: {
        app: ['./src/app/index.js',"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true","@babel/polyfill"]
    },
    output:{
        path: path.join(__dirname, '/src/public'),
        //path: path.join(__dirname, '/src/public'),
        filename: 'js/app.bandle.js'
    },
    devServer:{
        port:  3000
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                //loader: 'babel-loader',
                use: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.css$/,
                use: [
                    minicssextractplugin.loader,
                    'css-loader'
                ]
        }]
    },
    plugins:[
        new htmlwebpackplugin({
            template: './src/public/index.html'
        }),

        new minicssextractplugin({
            filename:'css/app.bundle.css'
        })

        //new webpack.HotModuleReplacementPlugin()
    ]
}