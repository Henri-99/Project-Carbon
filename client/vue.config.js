const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    productionSourceMap: false,
    outputDir: path.resolve(__dirname, "../public")
}
