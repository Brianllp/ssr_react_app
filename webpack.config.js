const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    // 対象にする拡張子の指定
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    // https://madogiwa0124.hatenablog.com/entry/2021/02/13/120741
    alias: {
      querystring: "querystring-es3",
      zlib: "browserify-zlib/lib",
      path: "path-browserify",
      stream: "stream-browserify",
      http: "stream-http",
      crypto: "crypto-browserify",
    },
  },
  target: 'node',
  entry: {
    // エントリーポイントの指定
    index: './server/index.js',
  },
  output: {
    // アウトプット先のディレクトリを指定(assets)
    path: path.resolve(__dirname, 'assets'),
    // アウトプットするファイルの名前を指定(名前は変更しない)
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
      },
      {
        // 拡張子が.tsか.tsxだった場合に適用するルール
        test: /\.ts(x?)$/,
        // node_modulesディレクトリは除外
        exclude: /node_modules/,
        use: [
          {
            // babelの設定
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                [
                  '@babel/preset-react',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: 'style.css'
      }
    )
  ],
  ignoreWarnings: [{
    module: /node_modules\/express\/lib\/view\.js/,
    message: /the request of a dependency is an expression/,
  }],
};
