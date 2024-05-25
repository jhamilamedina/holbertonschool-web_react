const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'), // Ajusta la ruta del punto de entrada
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, '../dist') // Ajusta la ruta de salida
  },
  mode: 'development', // Modo de desarrollo
  devServer: {
    static: path.resolve(__dirname, '../dist'), // Ajusta la ruta de la carpeta desde la que servir archivos
    compress: true, // Habilita la compresión gzip
    port: 9000, // Puerto del servidor
    hot: true // Habilita hot reloading
  },
  module: {
    rules: [
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
  devtool: 'inline-source-map' // Soporte para inline source map
};