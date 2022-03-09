const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../packages/v-ui/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'v-ui'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  externals: {
    vue: {
      // 忽略代码里引用的vue
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
