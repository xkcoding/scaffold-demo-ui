const path = require("path");

const resolve = dir => path.join(__dirname, dir);

let baseUrl = "./";
module.exports = {
  publicPath: baseUrl,
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    //忽略的打包文件
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
      "element-ui": "ELEMENT"
    });
    const entry = config.entry("app");
    entry.add("babel-polyfill").end();
    entry.add("classlist-polyfill").end();
    entry.add("@/mock").end();
    config.resolve.alias.set("src", resolve("@"));
  }
};
