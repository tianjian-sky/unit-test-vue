// Karma configuration
// Generated on Wed Oct 03 2018 19:51:00 GMT+0800 (CST)
var path = require('path')
var rootPath = path.resolve(__dirname, './')
let VueLoaderPlugin = require('vue-loader/lib/plugin')

var normalConfig = {
    resolve: {
        extensions: ['.js', '.json', '.less', '.ejs'],
        alias: {
            '@': path.resolve(rootPath),
            '@bootstrap': path.resolve(rootPath, './node_modules/bootstrap/dist'),
        }
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
              loader: 'babel-loader'
          }
      },
      {
          test: /\.vue$/,
          use: ['vue-loader']
      },
      {
          test: /\.ejs$/,
          use: 'ejs-loader'
      },
      {
          test: /\.css$/,
          use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader']
      },
      {
          test: /\.less$/,
          use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader', 'less-loader']
      },
      {
          test: /\.(png|jpg|gif)$/,
          use: 'url-loader?limit=500000'
      },
      {
          test: /\.(ttf|svg|eot|woff|woff2)$/,
          use: ['file-loader']
      }
      ]
  },
  plugins: [new VueLoaderPlugin()]
}

var coverageConfig = {
    resolve: {
        extensions: ['.js', '.json', '.less', '.ejs'],
        alias: {
            '@': path.resolve(rootPath),
            '@bootstrap': path.resolve(rootPath, './node_modules/bootstrap/dist'),
        }
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: 
            {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            },
            enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 
          {
              loader: 'babel-loader',
              options: {
                plugins: ['istanbul']
            }
          }
      },
      {
          test: /\.vue$/,
          use: ['vue-loader']
      },
      {
          test: /\.ejs$/,
          use: 'ejs-loader'
      },
      {
          test: /\.css$/,
          use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader']
      },
      {
          test: /\.less$/,
          use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader', 'less-loader']
      },
      {
          test: /\.(png|jpg|gif)$/,
          use: 'url-loader?limit=500000'
      },
      {
          test: /\.(ttf|svg|eot|woff|woff2)$/,
          use: ['file-loader']
      }
      ]
  },
  plugins: [new VueLoaderPlugin()]
}


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // 'src/**/*.js',
      'spec/specs/**/*.spec.js'
    ],

    webpack:  normalConfig,
    preprocessors: {
      // add webpack as preprocessor
      'spec/specs/**/*.spec.js': [ 'webpack' ]
    },
 
    // list of files / patterns to exclude
    exclude: [
    ],

    reporters: ['progress'], // , 'coverage-istanbul'

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    // coverageIstanbulReporter: {
    //     reports: ['html', 'text-summary'],
    //     dir: 'coverage/',
    //     fixWebpackSourcePaths: true,
    //     skipFilesWithNoCoverage: true,
    //     'report-config': {
    //       html: {
    //         subdir: 'html'
    //       }
    //     }
    //   }
    client: {
        jasmine: {
            random: false
        }
    }
  })
}
