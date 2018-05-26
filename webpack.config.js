const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        // loader: "file-loader?name=/public/images/[name].[ext]"
        use: 'file-loader'
      }
      // {
      //   test: /\.(png|jp(e*)g|svg)$/,  
      //   use: [{
      //       loader: 'url-loader',
      //       options: { 
      //           limit: 8000, // Convert images < 8kb to base64 strings
      //           name: 'images/[hash]-[name].[ext]'
      //       } 
      //   }]
      // }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin(
      {filename: 'style.[chunkhash].css', disable: false, allChunks: true}
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};