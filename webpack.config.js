const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const path=require('path');
const theme=require('./theme');

const APP_NAME='深圳广播电视大学教务管理系统';
// const APP_NAME='SIMPLEX';


// 生产环境
var isProd = process.env.NODE_ENV === 'production';

function resolve(projectPath){
    return path.resolve(__dirname, projectPath);
}

var plugins=[
    new webpack.optimize.CommonsChunkPlugin({name:'vendor'}),
    new webpack.optimize.CommonsChunkPlugin({name:'app', children:true, async:true, minChunks:2}),
    //new ExtractTextPlugin({
    //    filename: isProd ? '[name].[hash:8].css' : '[name].css'
    //}),
    new HtmlWebpackPlugin({
        title:'登录 - '+APP_NAME,
        minify: {
            caseSensitive: false,             //是否大小写敏感
            collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
            collapseWhitespace: true         //是否去除空格
        },
        chunks:['login', 'vendor'],
        favicon:'./src/img/favicon.png',
        template:'./src/login.html',
        filename:'./login.html' //结合output.path
    }),
    new HtmlWebpackPlugin({
        title:APP_NAME,
        minify: {
            caseSensitive: false,             //是否大小写敏感
            collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
            collapseWhitespace: true         //是否去除空格
        },
        chunks:['app', 'vendor'],
        favicon:'./src/img/favicon.png',
        template:'./src/index.html',
        filename:'./index.html' //结合output.path
    }),
    new HtmlWebpackPlugin({
        title:APP_NAME,
        minify: {
            caseSensitive: false,             //是否大小写敏感
            collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
            collapseWhitespace: true         //是否去除空格
        },
        chunks:['news-viewer', 'vendor'],
        favicon:'./src/img/favicon.png',
        template:'./src/news-viewer.html',
        filename:'./news-viewer.html' //结合output.path
    }),
    new HappyPack({
        id: 'babel',
        loaders: ['babel-loader']
    }),
    new HappyPack({
        id: 'less',
        loaders: ['style-loader', 'css-loader?minimize', {
            loader:'less-loader',
            options:{
                javascriptEnabled:true,
                modifyVars:theme
            }
        }]
    }),
    new HappyPack({
        id: 'css',
        loaders: ['style-loader', 'css-loader?minimize']
    }),
    new CopyWebpackPlugin([
        {from:resolve('src/vendor'), ignore:['fonts/*']},
        {from:'src/*.html', to:'[name].html'}
    ]),
    new webpack.ProvidePlugin({
        React:'react',
        Img:'components/Img',
        'APP_LOGO':'img/favicon.png',
    }),
    new webpack.DefinePlugin({
        'APP_NAME': JSON.stringify(APP_NAME),
        'APP_EDITION': JSON.stringify('default')
    }),
    new webpack.HotModuleReplacementPlugin()
];
if(isProd){
    plugins.push(new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    //合并块
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = {
    entry: {
        login: './src/js/login',
        app: './src/js/index',
        'news-viewer': './src/js/news-viewer',
        vendor:[
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'redux-thunk',
            'nprogress',
            'moment'
        ]
    },
    output: {
        //publicPath:isProd ? './' : '/', //给require.ensure用；webpack-dev-server的网站名
        path: resolve('dist'), //js的发布路径
        filename: isProd ? '[name].[hash:8].js' : '[name].js',
        chunkFilename:isProd ? '[name].chunk.[hash:8].js' : '[name].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.less'],
        alias:{
            react:resolve('node_modules/react'),
            'react-dom':resolve('node_modules/react-dom'),
            img:resolve('src/img'),
            less:resolve('src/less'),
            appStore:resolve('src/js/store.js'),
            actions:resolve('src/js/actions'),
            components:resolve('src/js/components'),
            pages:resolve('src/js/pages'),
            utils:resolve('src/js/utils'),
            config:resolve('src/js/config')
        }
    },
    module: {
        loaders: [
            {test: /\.(otf|eot|svg|ttf|woff|woff2)\??.*$/, use:'url-loader?limit=100000&name=[hash:8].[ext]'},
            {test: /\.css$/, use:'happypack/loader?id=css'},
            //{test: /\.scss$/, use: ExtractTextPlugin.extract({
            //    fallback: 'style-loader',
            //    use: ['css-loader', 'sass-loader']
            //}), include:resolve('src/sass')},
            {test: /\.less$/, use: 'happypack/loader?id=less', include:[resolve('src/less'), resolve('node_modules/antd')]},
            {test: /\.js$/, use: 'happypack/loader?id=babel', include:resolve('src/js')},
            {test: /\.(png|jpe?g|gif)$/,use: 'url-loader?limit=8192&name=[hash:8].[ext]' , include:resolve('src/img')}
        ]
    },
    plugins: plugins,
    devServer:{
        host:'0.0.0.0',
        port:3062,
        //publicPath: '/',
        //contentBase: path.join(__dirname, "public"), //静态资源
        //代理
        proxy:{
            // "/mallapi/": {
            //     target: "http://192.168.1.109:9090/",
            //     pathRewrite: {"^/mallapi/" : ""}
            // },
            "/mallapi/": {
                target: "http://120.78.156.54:9090/",
                pathRewrite: {"^/mallapi/" : ""}
            },
            "/api/": {
                target: "http://120.78.156.54:8080/nuoj-admin/",
                // target: "http://119.23.205.81:8080/nuoj-admin/",
                pathRewrite: {"^/api/" : ""}
            }
        },
        hot: true,
        historyApiFallback: true
    }
};
