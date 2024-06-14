const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, '../dist') // Carpeta de salida
  },
  mode: 'development', // Modo de desarrollo
  devServer: {
    static: path.join(__dirname, '../dist'), // Carpeta desde la que servir archivos
    compress: true, // Habilita la compresión gzip
    port: 3000, // Puerto del servidor
    hot: true // Habilita hot reloading
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/, // Regla para archivos CSS
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Regla para archivos de imagen
        use: [
          {
            loader: 'file-loader', // Carga los archivos
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader', // Optimiza las imágenes
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../dist/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map' // Soporte para inline source map
};