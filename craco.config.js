const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @use 'src/styles/global/index' as *;
        `,
      },
    },
  },
}
