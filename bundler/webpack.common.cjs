const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const pages = [
    'home',
    'about',
    'donate',
    'inventory',
    'staff',
    'volunteer',
    'events',
]

module.exports = {
    entry: './src/index.js',
    target: 'web',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        clean: true,
        publicPath: '/',
        library: 'App'
    },        
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../static')
            }]
        }),
        new MiniCSSExtractPlugin(),
        //HTML template for each page
        ...pages.map(page => new HtmlWebpackPlugin({
            template: `./src/Pages/${page}/${page}.html`,
            filename: `${page}.html`,
            chunks: [`${page}`]
        }))
    ],
    module: {
        rules: [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            // CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                include: /\.module\.css$/
            },
            // Images
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/images/'
                    }
                }]
            },
            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts/'
                    }
                }]
            },
        ]
    }
}