const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Yhe following line is to avoid the error when vue files are one word (Home or Escena)
  lintOnSave: false
})
