module.exports = { //exportamas hacia afuera codigo js
    entry: './app.js', // ruta al entry point del codigo de nuestro proyecto, definde punto de entrada 
    output: {  //propidad que permite definir  la ruta donde se colocaran los bundles o paquetes generados, definde punto de salida
      path: __dirname + '/dist', // path donde webpack dejarǻ los archivos.//directorio del disco donde esta situacdo nuestro modulo
      filename: 'bundle.js', // archivo del bundle generado con ese nombre
    },
    module: {//aclara a webpack como debe procesar los loaders que queremos usar en nuestro proyecto
      rules: [
               {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader', // son transformaciones que se aplican en el codigo fuente tambien se da el caso cuando se hace uso de  plugins
             options: {
               presets: ['@babel/preset-react', '@babel/preset-env']
             }
           }
         },
         {
          // css modules
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: 
                {
                  modules: {
                    localIdentName: "[local]___[hash:base64:5]"
                  }
                }
            }
          ]
        },{
          // global
          test: /\.gcss$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
  