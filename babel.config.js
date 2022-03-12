module.exports = {
  // babel的预设是反着执行的，先解析ts，后面再解析高级语法
  presets: ['@babel/preset-env', '@babel/preset-typescript'],

  // 因为webpack里的vue-loader没有解析ts，所以增加这个
  // 配合vue-loader使用解析ts
  overrides: [
    {
      test: /\.vue$/,
      plugins: ['@babel/transform-typescript']
    }
  ]
}
