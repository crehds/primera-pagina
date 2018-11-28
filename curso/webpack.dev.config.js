const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'home': path.resolve(__dirname, 'src/entries/home.js'),
    'redux': path.resolve(__dirname, 'src/entries/redux.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    port: 9000,
    useLocalIp: true,
    host: '192.168.0.104',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          },
        },
      },
    ],
  },
};
