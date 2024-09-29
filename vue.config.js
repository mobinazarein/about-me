const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // Options for vuetify-loader
      // You can add specific configurations here if needed
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/about-me/'
    : '/'
});
