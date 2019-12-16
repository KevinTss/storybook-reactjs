module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    '@babel/plugin-syntax-dynamic-import',
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    test: {
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['babel-plugin-styled-components', { displayName: true }],
        '@babel/plugin-syntax-dynamic-import',
      ],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
}
