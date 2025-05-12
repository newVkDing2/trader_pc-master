const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path')
let optimization = {};
let css = {};
let plugins = [];
if (process.env.NODE_ENV === "production") {
  optimization.minimize = true;
  optimization.minimizer = [
    new TerserPlugin({
      parallel: true,
      sourceMap: true,
      terserOptions: {
        warnings: false,
        compress: {
          drop_console: true, // 注释console
          drop_debugger: true, // 注释debugger
          pure_funcs: ["console.log"],
        },
      },
    }),
  ];
  css.extract = {
    ignoreOrder: true,
  };
  plugins = [
    new CompressionWebpackPlugin({
      // 正在匹配需要压缩的文件后缀
      test: /.(js|css|svg|woff|ttf|json|html)$/,
      // 大于10kb的会压缩
      threshold: 10240,
      // 其余配置查看compression-webpack-plugin
    }),
  ];
}

module.exports = {
  //路径前缀
  publicPath: "./",
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: "pc_dist",
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
      "element-ui": "ELEMENT",
    });
    const entry = config.entry("app");
    entry.add("babel-polyfill").end();
    entry.add("classlist-polyfill").end();
  },
  css,
  configureWebpack: {
    optimization,
    plugins: [...plugins],
  },
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 1888,
    proxy: {
      "/api": {
        //本地服务接口地址
        // target: 'http://192.168.50.125:9851',
        // target: 'http://127.0.0.1',
        //target: "https://www.baiyiex.com/api",
        target: "https://webapi.moex.com.pl/api", //开发服
        //target: "https://webapi.moex.lol/api", //正式服
        // target: "https://test.baiyiex.com/api",
        //远程演示服务地址,可用于直接启动项目
        //target: 'https://saber.bladex.vip/api',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
    disableHostCheck: true,
  },
};
