const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtendedDefinePlugin = require('extended-define-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: './',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader', 'stylelint-custom-processor-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        'sass-loader',
      ],
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      }],
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }, {
      test: /\.(png|jpg|gif)$/,
      loaders: ['file-loader', 'image-webpack-loader'],
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
    }, {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true,
          },
        },
      ],
    },
    ],
  },
  plugins: [

    // Include all scripts to html as diferent script tags.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    new ExtractTextPlugin('styles.css'),

    new ExtendedDefinePlugin({
      __ROOT_URL__: 'https://localhost:3000',
    }),

  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
