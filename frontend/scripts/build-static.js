'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

const appDirectory = path.resolve(__dirname, '..');
const buildDirectory = path.join(appDirectory, 'build');
const publicDirectory = path.join(appDirectory, 'public');
const publicUrl = process.env.PUBLIC_URL || '';

dotenv.config({ path: path.join(appDirectory, '.env') });

function copyPublicDirectory(source, destination) {
  fs.mkdirSync(destination, { recursive: true });

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (entry.name === 'index.html') {
      continue;
    }

    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyPublicDirectory(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}

function getClientEnvironment() {
  return Object.keys(process.env)
    .filter(key => key === 'PUBLIC_URL' || key.startsWith('REACT_APP_'))
    .reduce(
      (env, key) => {
        env[`process.env.${key}`] = JSON.stringify(process.env[key]);
        return env;
      },
      {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
      }
    );
}

fs.rmSync(buildDirectory, { recursive: true, force: true });
copyPublicDirectory(publicDirectory, buildDirectory);

const htmlTemplate = fs
  .readFileSync(path.join(publicDirectory, 'index.html'), 'utf8')
  .replace(/%PUBLIC_URL%/g, publicUrl);

const compiler = webpack({
  mode: 'production',
  bail: true,
  entry: path.join(appDirectory, 'src', 'index.js'),
  output: {
    path: buildDirectory,
    filename: 'static/js/[name].[contenthash:8].js',
    assetModuleFilename: 'static/media/[name].[hash:8][ext]',
    publicPath: `${publicUrl}/`.replace(/\/{2,}/g, '/'),
    clean: false,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(appDirectory, 'src'),
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, require.resolve('css-loader')],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg|pdf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: htmlTemplate,
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin(getClientEnvironment()),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
  performance: false,
});

compiler.run((error, stats) => {
  compiler.close(closeError => {
    if (error || closeError) {
      console.error(error || closeError);
      process.exit(1);
    }

    const info = stats.toJson({ all: false, errors: true, warnings: true });

    if (stats.hasErrors()) {
      console.error(info.errors.map(item => item.message).join('\n\n'));
      process.exit(1);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings.map(item => item.message).join('\n\n'));
    }

    console.log('Static build created in build/.');
  });
});
