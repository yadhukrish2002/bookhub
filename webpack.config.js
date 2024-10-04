const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set to 'production' for optimized builds
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // Use Babel to transpile JavaScript
        }
      },
      // Add rules for other file types as needed (e.g., CSS, images)
    ]
  },
  resolve: {
    fallback: {
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "zlib": require.resolve("browserify-zlib"),
      "assert": require.resolve("assert/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Template for the HTML output file
    })
  ],
  devServer: {
    port: 3000, // Port for the development server
    static: './public' // Directory for static assets
  }
};