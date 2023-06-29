const path = require("path")
const htmlwebpackplugin = require("html-webpack-plugin")


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template: path.join(__dirname, "public", "index.htmI")
            }
        )
    ] 
}