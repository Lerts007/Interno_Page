const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/style/scss/_color.scss" as *;
          @use "@/assets/style/scss/_fonts.scss" as *;
          
        `,
      },
    },
  },
});
