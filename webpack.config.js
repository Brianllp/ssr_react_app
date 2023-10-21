const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    // 対象にする拡張子の指定
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  entry: {
    // エントリーポイントの指定
    index: './frontend/src/index.tsx',
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
        // 拡張子が.tsか.tsxだった場合に適用するルール
        test: /\.ts(x?)$/,
        // node_modulesディレクトリ(Yarnでインストールしたパッケージが入ってる)は除外
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
        filename: 'style.scss'
      }
    )
  ],
};
