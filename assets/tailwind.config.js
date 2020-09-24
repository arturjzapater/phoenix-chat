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
    extend: {
      height: {
        'v-75': '75vh',
      },
    },
  },
}
