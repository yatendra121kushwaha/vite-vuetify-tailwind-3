module.exports = {
  prefix: 'tw-',
  darkMode: 'class',
  separator: ':',
  corePlugins: {
    preflight: true
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
