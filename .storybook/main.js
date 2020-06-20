module.exports = {
  stories: ['../src/components/**/*.stories.(j|t)sx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.((j|t)s|(j|t)sx)$/,
      loader: require.resolve('babel-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
