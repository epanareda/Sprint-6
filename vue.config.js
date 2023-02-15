const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // The following line is to avoid the error when vue files are one word (Home or Escena)
  lintOnSave: false,
  // The following line allows to open the project locally via the index.html without using any server (creating the project with "npm run build")
  publicPath: "",
})
