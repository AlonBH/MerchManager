const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: '3.6.4',
    },
  ],
  ['@babel/preset-react'],
];

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        components: './components',
      },
    },
  ],
];

module.exports = { presets, plugins };
