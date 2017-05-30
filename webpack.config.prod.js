const path = require('path');
const webpack = require('webpack');
  
  module.exports = {
    entry: [ path.resolve(__dirname, 'app/app.js')],
    output: { 
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'app'),
        },
        { test: /.css$/, loader: "style-loader!css-loader" },    
        { test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/, loader: "url" },
      ]
    },
    plugins: [
      //new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      }),
    ]
  };