module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './js/**/*.jsx',
    './css/**/*.css',
  ],
  theme: {
    height: {
      'v-80': '80vh',
    },
  },
}
