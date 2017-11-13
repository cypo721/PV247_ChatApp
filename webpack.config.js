const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: [['env', {
            targets: {
                    browsers: ['last 2 versions', 'not ie <= 11']
                }
        }]]
    }
};

const javascriptLoaders = [babelLoader];

module.exports = {
        entry: './src/app.jsx',
        output: {
            path: __dirname + '/build',
                filename: 'app.js'
        },
    module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: 'style!css'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: javascriptLoaders
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: javascriptLoaders
            }
                ]
        }
};