const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  const plugins = [
      new MiniCssExtractPlugin({
        filename: './css/[name].[hash].css',
        chunkFilename: '[id].[chunckhash].css',
      }),
  ];

  if (env.NODE.ENV === 'production') {
    plugins.push(

      // El primer parámetro indica que carpeta deseamos
      // borrar y el segundo desde donde inicia la búsqueda
      new CleanWebpackPlugin(['dist'], { root: __dirname })
    );
  }

  return {

    entry: {
      'home': path.resolve(__dirname, 'src/entries/home.js'),
      'redux': path.resolve(__dirname, 'src/entries/redux.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist') + '/',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
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
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
            use:
            {
              loader: 'url-loader',
              options: {
                //limite de peso de archivo
                limit: 10000,
                fallback: 'file-loader',
                name: 'images/[name].[hash].[ext]',
              },
            },
          },
        ],
      },
    plugins,
  };
};
