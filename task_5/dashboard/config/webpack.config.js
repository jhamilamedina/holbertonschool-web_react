const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  mode: 'development', // Modo de desarrollo
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Carpeta desde la que servir archivos
    compress: true, // Habilita la compresión gzip
    port: 9000, // Puerto del servidor
    hot: true, // Habilita hot reloading
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regla para archivos CSS (opcional)
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};