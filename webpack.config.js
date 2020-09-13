const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: {
        main: "./src/main.ts",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name]-bundle.js",
        library: "generate",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.ejs$/,
                loader: "ejs-loader",
                options: {
                    variable: "data",
                    interpolate: "\\{\\{(.+?)\\}\\}",
                    evaluate: "\\[\\[(.+?)\\]\\]",
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "./html" }, { from: "./css" }],
        }),
        new webpack.ProvidePlugin({
            _: "underscore",
        }),
    ],
};
