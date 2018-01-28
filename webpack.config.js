const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  //  watch: true,
    //在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；
    devtool: 'cheap-module-eval-source-map', 
    entry: {
        main: './js/index.js'
    },
    output: {
        path: __dirname + '/build',
        /*
        webpack计算chunkhash时，以main.js文件为编译入口，
        整个chunk的内容会将main.scss的内容也计算在内。
        */
        filename: 'js/[name].[hash:8].js'
    },
    resolve: {
        alias: {
            
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory=true'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: [
                  {
                      loader: 'style-loader',
                  },
                  {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 1,
                      }
                  },
                  {
                      loader: 'postcss-loader'
                  }
              ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
            test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name].[sha512:hash:base64:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)((-|\?)?.*)?$/,
                exclude: /img/,
                loader: 'url-loader',
                options: {
                    name: 'font/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: require('autoprefixer')
            }
        }),
        new webpack.BannerPlugin("author by ldq-first"),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"
           // inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new CleanWebpackPlugin(['build']),
         //这个plugin是用于引入dll里生成的json的。
        new webpack.DllReferencePlugin({
           context: __dirname,
           manifest: require('./js/lib/manifest.json')
        })
    ],
    devServer: {
       // contentBase: "./public",  //本地服务器所加载的页面所在的目录
       // colors: true, //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        hot: true,
        inline: true, //实时刷新
        port: 5050
    }
} 